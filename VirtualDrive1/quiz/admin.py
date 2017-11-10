from django import forms
from django.contrib import admin

from .models import Quiz, Category, SubCategory, Progress

# Register your models here.


class QuizAdminForm(forms.ModelForm):

    class Meta:
        model = Quiz
        exclude = []

    def __init__(self, *args, **kwargs):
        super(QuizAdminForm, self).__init__(*args, **kwargs)
        if self.instance.pk:
            self.fields['questions'].initial =\
                self.instance.question_set.all().select_subclasses()

    def save(self, commit=True):
        quiz = super(QuizAdminForm, self).save(commit=False)
        quiz.save()
        quiz.question_set = self.cleaned_data['questions']
        self.save_m2m()
        return quiz


class QuizAdmin(admin.ModelAdmin):
    form = QuizAdminForm

    list_display = ('title', 'category', )
    list_filter = ('category',)
    search_fields = ('description', 'category', )


class CategoryAdmin(admin.ModelAdmin):
    search_fields = ('category', )


class SubCategoryAdmin(admin.ModelAdmin):
    search_fields = ('sub_category', )
    list_display = ('sub_category', 'category',)
    list_filter = ('category',)


class ProgressAdmin(admin.ModelAdmin):

    search_fields = ('user', 'score', )


admin.site.register(Quiz, QuizAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(SubCategory, SubCategoryAdmin)
admin.site.register(Progress, ProgressAdmin)
