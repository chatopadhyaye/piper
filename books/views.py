from django.shortcuts import render
from django.http import HttpResponse
from books.models import Book 
from books.forms import ContactForm 
from django.http import HttpResponseRedirect 
from django.core.mail import send_mail 


# Create your views here.


def search(request): 
    err = [] 
    if 'q' in request.GET: 
        q = request.GET['q'] 
        if not q:
            err.append('Enter a search term')
        elif len(q) > 20:
            err.append('Please enter at most 20 characters')
        else: 
            books = Book.objects.filter(title__icontains=q) 
            return render(request, 'search_results.html', {'books': books, 'query': q}) 
    return render(request, 'search_form.html', {'error': err})



def contact(request): 
    if request.method == 'POST': 
        form = ContactForm(request.POST) 
        if form.is_valid(): 
            cd = form.cleaned_data 
            send_mail( 
                cd['subject'], 
                cd['message'], 
                cd.get('email', 'noreply@example.com'), 
                ['siteowner@example.com'], 
            ) 
            return HttpResponseRedirect('/contact/thanks/') 
    else: 
        form = ContactForm(initial={'subject': 'Fuck you, You cunt'}) 
    return render(request, 'contact_form.html', {'form': form}) 



