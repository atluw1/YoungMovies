from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class MyPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ('pk', 'username', , 'nickname', )
        fields = '__all__'
        
