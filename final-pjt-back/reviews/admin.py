from django.contrib import admin
from .models import Review, Comment

# Register your models here.

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'content','created_at','updated_at','user')

class CommentAdmin(admin.ModelAdmin):
    list_display = ('pk', 'content', 'review', 'user', 'created_at', 'updated_at')


admin.site.register(Review, ReviewAdmin)
admin.site.register(Comment, CommentAdmin)