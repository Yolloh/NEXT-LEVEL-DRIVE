 
//quiz app(work in progess) and answers tracking ,as well as the functionality of choosing the answer form various choices through radio buttons  
var allQuestions = [
  { /* empty! */ },
  {question: "It is illegal for any person to operate a motor vehicle with any measurable BAC, if the person is under age", choices: [17, 18,19,20], correctAnswer: 0}, 
  {question: "Which of the following statements is false?", choices: ["At intersections, look both ways even if other traffic has a red light or a stop sign; look to the left first, since cars coming from the left are closer to you.", " Avoid driving alongside other vehicles on multilane streets; another driver may crowd your lane or change lanes without looking and crash into you.", " To avoid distracting other drivers while driving alongside, remain in their blind spot.", " none of the above"], correctAnswer:3}, 
  {question: "Any child under the age of __________ weighing less than 60 pounds must be secured in a federally approved child passenger restraint system and ride in the back seat of a vehicle", choices: ["Four", "Five", "Six", "Seven"], correctAnswer: 3}, 
  {question: "If you wear only a lap belt when driving, your chances of living through an accident are __________ as good as someone who doesn't wear a lap belt.", choices: ["Half", " Twice", " Four times", "Six times"], correctAnswer: 3} 
];

var next = document.getElementById("next");
var choices = allQuestions.choices;
var counter = 1;
var score;
var correctAnswers = 0;
var incorrectAnswers = 0;

$(document).ready(function() { 
  $("#question-text").append(allQuestions[1].question);
  for (var i=0; i<allQuestions[1].choices.length; i++) {
      $("#choices").append('<li class="answer"><input type="radio" name="quiz-answer" value="' + i + '"><span>' + allQuestions[1].choices[i] + '</span></input></li>');
    }
  
});

next.onclick = function() {
  var value = $("input[type='radio']:checked").val(); 
  var emptyQuestion = []; 
  counter++; 
  emptyQuestion = allQuestions[counter]; 
  
  if (counter > allQuestions.length - 1) {
    $("#question-text").empty(); 
    $("#choices").empty(); 
    $("#button-container").empty(); 
    $("#question-text").append("Final score"); 
    
      if (value == allQuestions[counter - 1].correctAnswer) { 
        correctAnswers++;
      }
      else {
        incorrectAnswers++;
      }
    
      score = Math.round((correctAnswers / (correctAnswers + incorrectAnswers)) * 100);
      $("#score").append(score + '%').hide().fadeIn("slow");
  } 
  
  else { 
    
    $("#question-text").empty(); 
    $("#choices").empty();

    $("#question-text").append(emptyQuestion.question).hide().fadeIn('slow'); 
    for (var i=0; i<emptyQuestion.choices.length; i++) { 
        $("#choices").append('<li class="answer"><input type="radio" name="quiz-answer" value="' + i + '"><span>' + emptyQuestion.choices[i] + '</span></input></li>').hide().fadeIn('slow');
      }

    if (value == allQuestions[counter - 1].correctAnswer) {
      correctAnswers++;
    }
    else {
      incorrectAnswers++;
    }
             
  } 
  
};


//background canvas clock with the local time and date set to current dates and time using (now)strings per each variable created 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#23353F';

ctx.lineWidth = 10;
ctx.lineCap = 'round';

function degToRad(degree) {
  var factor = Math.PI / 180;
  return degree * factor;
}

var negativDeg = 1;

function renderTime() {

  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds + (milliseconds / 1000);

  // Background
  ctx.fillRect(0, 0, 500, 500);
  ctx.clearRect(0, 0, 500, 500);
  // Hours
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRad(270), degToRad((hours * 30) - 90));
  ctx.stroke();

  // Minutes
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes * 6) - 90));
  ctx.stroke();

  // Seconds
  ctx.beginPath();
  ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds * 6) % 360 - 90));
  ctx.stroke();

  document.getElementsByClassName("date")[0].innerHTML = today;
  document.getElementsByClassName("time")[0].innerHTML = time;

}

setInterval(renderTime, 100);


