from bottle import post, get, put, request, route, template, static_file, response
from common import file_io, random_filename_generator
import httplib
import os
from requests import Request, Session

@route('/files/<filename>')
def server_static(filename):
    path = os.path.abspath('../python-downloader-files')
    return static_file(filename, root = path)

@put('/files/')
def download_from_url():
    url = str(request.forms.get('url'))
    params_name = str(request.forms.get('params_name'))
    params_value = str(request.forms.get('params_value'))
    headers = request.forms.get('headers')
    method = request.forms.get('method') if request.forms.get('method') is not None else 'GET'

    # conn = httplib.HTTPConnection(url)
    # conn.request(method, params)
    # response = conn.getresponse()
    # data = response.read()

    s = Session()
    if(params_name != ''):
        params_name = params_name.split(';')
        params_value = params_value.split(';')
        params = dict(zip(params_name, params_value))
        req = Request(method, url, data = params)
    else:
        req = Request(method, url)
    
    prepared = req.prepare()
    response = s.send(prepared)
    data = response.content
    filename = file_io.write_to_file(data)

    return template('{{content}}',
        content = filename ) # paramsp
