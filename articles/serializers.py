from rest_framework import serializers

from .models import Article

class ArticleSerializer(serializers.ModelSerializer):

    is_owner = serializers.SerializerMethodField('get_owner_status')
    owner = serializers.ReadOnlyField(source='user.username')

    def get_owner_status(self, obj):
        return obj.author == self.context['request'].user

    author = serializers.StringRelatedField()

    class Meta:
        model = Article

        fields = '__all__'
