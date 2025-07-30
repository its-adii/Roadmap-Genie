from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages

def home(request):
    return render(request, 'index.html', {
        'username': request.user.username,
        'full_name': request.user.get_full_name(),
    })

def signup_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username already taken.')
            return redirect('genie:signup')

        user = User.objects.create_user(username=username, email=email, password=password)
        login(request, user)
        return redirect('genie:home')

    return render(request, 'signup.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('genie:home')
        else:
            messages.error(request, 'Invalid credentials.')
            return redirect('genie:login')

    return render(request, 'login.html')


from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, 'index.html')

def signup_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username already taken.')
            return redirect('genie:signup')

        user = User.objects.create_user(username=username, email=email, password=password)
        login(request, user)
        return redirect('genie:home')

    return render(request, 'signup.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('genie:home')
        else:
            messages.error(request, 'Invalid credentials.')
            return redirect('genie:login')

    return render(request, 'login.html')

@login_required
def profile_view(request):
    return render(request, 'profile.html')
