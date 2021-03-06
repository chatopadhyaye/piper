"""piper URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from piper import views
from books.views import search, contact

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^hello/$', views.hello),
    url(r'^time/$', views.current_datetime, name = "date"),
    url(r'^time/plus/(\d{1,2})/$', views.hours_ahead),
    url(r'^pikachu/$', views.display_meta),
    url(r'^search/$', search), 
    url(r'^contact/$', contact), 
    url(r'^public/$', views.public, name = "public"),
    url(r'^about/$', views.about, name = "about"),
    url(r'^edit/$', views.edit, name = "edit"),
    url(r'^privacy/$', views.privacy, name = "privacy"),
    url(r'^shared/$', views.shared, name = "shared"),
    url(r'^photos/$', views.photos, name = "photos"),
    url(r'^videos/$', views.videos, name = "videos"),
    url(r'^album/$', views.album, name = "album"),

]



