from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import NewPost
from .serializers import NewPostSerializer


# Create your views here.
@api_view(["GET"])
def index(request):
    return Response({"Welcome CraftHub Api!"})


@api_view(["GET"])
def GetAllPosts(request):
    get_posts = NewPost.objects.all()
    serializer = NewPostSerializer(get_posts, many=True)
    return Response(serializer.data)


@api_view(["GET", "POST"])
def CreatePost(request):
    data = request.data
    serializer = NewPostSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"Success": "The post was successfully created!"}, status=201)
    else:
        return Response(serializer.errors, status=400)


@api_view(["DELETE"])
def DeletePost(request):
    post_id = request.data.get("post_id")
    try:
        post = NewPost.objects.get(id=post_id)
        post.delete()
        return Response({"Success": "The post was successfully deleted"}, status=200)
    except NewPost.DoesNotExist:
        return Response({"Error": "The post does not exist"}, status=404)


@api_view(["PUT"])
def UpdatePost(request):
    post_id = request.data.get("post_id")
    get_new_title = request.data.get("new_title")
    get_new_postContent = request.data.get("new_content")
    get_new_published = request.data.get("new_publish")
    try:
        post = NewPost.objects.get(id=post_id)

        if get_new_title:
            post.title = get_new_title
        if get_new_postContent:
            post.postContent = get_new_postContent
        if get_new_published:
            post.published = get_new_published

        post.save()
        return Response({"Success": "Post successfully updated"}, status=201)
    except NewPost.DoesNotExist:
        return Response({"Error": "The post does not exist"}, status=404)


@api_view(["GET"])
def GetPostById(request):
    post_id = request.data.get("post_id")
    try:
        post = NewPost.objects.get(id=post_id)
        serializer = NewPostSerializer(post)
        return Response(serializer.data)
    except NewPost.DoesNotExist:
        return Response({"Error": "The post does not exist"}, status=404)
