
//nav bar funcionality specifically for dropdowns and for responsiveness aid per given reso screen sizes

(function(doc) {
    var mode = false;
    doc.getElementById("navbar-toggle").addEventListener("click", function(event){
        event.preventDefault;
        var elementNavbar = doc.getElementById("navbar-nav");
        if (mode === false) {
             elementNavbar.classList.add("open"); mode = true;    
        } else {
             elementNavbar.classList.remove("open"); mode = false;
        }
    });
    var elementDropdown = doc.querySelectorAll("[id='dropdown']");
    for(var i = 0; i < elementDropdown.length; i++) {
        elementDropdown[i].setAttribute("data-id", i);
        elementDropdown[i].addEventListener("mouseover", function(){
            this.querySelector("[id='dropdown-menu']").classList.add("open");
        });
        elementDropdown[i].addEventListener("mouseout", function(){
            this.querySelector("[id='dropdown-menu']").classList.remove("open");
        });
    }
})(document);






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



//logins and signup forms for  nld users
function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
  }

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    

//sign form and button functionality

function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }


//contact us card slider with the addresses and tel,email contacts

var easeOutBounce = function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
}

function Animate(elem, propName, duration, start, end)  {
    var start_time = new Date().getTime();
    var interval = setInterval(function() {
      var current_time = new Date().getTime(),
        remaining = Math.max(0, start_time + duration - current_time),
        temp = remaining / duration || 0,
        percent = 1 - temp;

      if (start_time + duration < current_time) clearInterval(interval);

      var pos = easeOutBounce(null, duration * percent, 0, 1, duration),
        current = (end - start) * pos + start;

      elem.style[propName] = current + 'px';
    }, 1);
  }

var elem = document.getElementById('contactform');
var opened = false; 

document.getElementById('contact-button').onclick = function() {
  if (opened) {
    Animate(elem, 'left', 800, 0, -405);    
    opened = false;
  } else {
    Animate(elem, 'left', 800, -405, 0);
    opened = true;  
  }  
}




// for a search -bar functionality
$('.js-clearSearchBox').css('opacity', '0');

$('.js-searchBox-input').keyup(function() {
  if ($(this).val() !='' ) {
    $('.js-clearSearchBox').css('opacity', '1');
  } else {
    $('.js-clearSearchBox').css('opacity', '0');
  };
  
  $(window).bind('keydown', function(e)  {
    if(e.keyCode === 27) {
      $('.js-searchBox-input').val('');
    };
  });
});
// click the button 
$('.js-clearSearchBox').click(function() {
  $('.js-searchBox-input').val('');
  $('.js-searchBox-input').focus();
  $('.js-clearSearchBox').css('opacity', '0');
});










//to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
} 
