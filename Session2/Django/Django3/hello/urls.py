from django.urls import path
from . import views

# views represents views.py and index is the function

urlpatterns = [
    
    path("", views.index, name="index"),
     path("<str:name>", views.greet, name = "greet"),

    path("Errol", views.Errol, name = "Errol"),
    path("David", views.David, name = "Davis")
   
]

