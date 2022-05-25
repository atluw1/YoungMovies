from rest_framework import serializers
from django.contrib.auth import get_user_model

from .comment import CommentSerializer
from ..models import Review

User = get_user_model()

class ReviewSerializer(serializers.ModelSerializer):
    
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    comments = CommentSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)
    like_users = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Review
        fields = ('pk', 'user', 'title', 'content', 'comments', 'like_users', 'created_at')


class ReviewListSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    # comment_count = serializers.IntegerField()
    comment_count = serializers.IntegerField()
    like_count = serializers.IntegerField()

    class Meta:
        model = Review
        fields = ('pk', 'user', 'title', 'like_count', 'comment_count', 'created_at')
