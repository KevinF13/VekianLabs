# vekianlabs_website/vekianlabs_backend/urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/servicios/', include('servicios.urls')), # Incluye las URLs de la app servicios
    path('api/proyectos/', include('proyectos.urls')), # Incluye las URLs de la app proyectos
    path('api/citas/', include('citas.urls')),         # Incluye las URLs de la app citas
    path('api/contacto/', include('contacto.urls')),   # Incluye las URLs de la app contacto
]

# Configuración para servir archivos media (subidos por los usuarios) durante el desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)