# vekianlabs_website/servicios/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServicioViewSet

router = DefaultRouter()
router.register(r'', ServicioViewSet) # La URL base será 'api/servicios/'

urlpatterns = [
    path('', include(router.urls)),
]