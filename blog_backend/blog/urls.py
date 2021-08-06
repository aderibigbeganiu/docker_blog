from django.db import router
from rest_framework import urlpatterns
from .views import PostViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("posts", PostViewSet, "posts")

urlpatterns = router.urls
