from django.template.loader import get_template
from django.template import Context
from django.http import Http404, HttpResponse
from django.shortcuts import render
import datetime

def hello(request):
	return HttpResponse ("Hello World")

def current_datetime(request): 
    now = datetime.datetime.now() 
    t = get_template('current_datetime.html') 
    html = t.render({'current_date': now}) 
    return HttpResponse(html) 

def hours_ahead(request, offset):
	try:
		offset = int(offset)
	except ValueError:
		raise Http404()
	dt = datetime.datetime.now() + datetime.timedelta(hours=offset)
	t = get_template('hours_ahead.html')
	html = t.render({'hour_offset': offset, 'next_time': dt})
	return HttpResponse(html)

def display_meta(request):
    values = list(request.META.items())
    values.sort()
    html = []
    for k, v in values:
      html.append('<tr><td>%s</td><td>%s</td></tr>' % (k, v))
    return HttpResponse('<table>%s</table>' % '\n'.join(html))

def public(request):
    return render(request, 'public.html',)

def about(request):
    return render(request, 'about.html',)

