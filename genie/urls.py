from django.urls import path
from . import views

app_name = 'genie'

urlpatterns = [
    path('', views.login_view, name='login'),        # Show login page at root '/'
    path('signup/', views.signup_view, name='signup'),
    path('home/', views.home, name='home'),          # Home page after login
]
