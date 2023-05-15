from django.shortcuts import render

# Create your views here.
def index_view(request):
    context = {
            "greeting": "deface me"
            }
    return render(request, "home.html", context)
