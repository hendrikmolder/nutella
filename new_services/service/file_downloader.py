from bottle import get, put, request, route, static_file
import requests
import os

# Helper function to check if a file is downloadable
def is_downloadable(content_type):
    if 'text' in content_type.lower():
        return False
    if 'html' in content_type.lower():
        return False
    print('is downloadable')
    return True

def get_filename(cd):
    if not cd:
        return None
    fname = re.findall('filename=(.+)', cd)
    if len(fname) == 0:
        return None
    return fname[0]

# Source: Hapsoro
@route('/files/<filename>')
def get_static_file(filename):
    path = os.path.abspath('../downloads')
    return static_file(filename, root = path)

@put('/files/import')
def download_from_url():
    # print('Form data: ' + request.forms.getuniode())
    url = request.forms.get("file_url")
    print('[File Downloader] URL to download: ' + url)

    h = requests.head(url, allow_redirects=True)
    header = h.headers
    content_type = header.get('content-type')

    if is_downloadable(content_type):
        r = requests.get(url, allow_redirects=True)
        filename = url.rsplit('/', 1)[1]
        if filename is None:
            filename = get_filename(r.headers.get('content-disposition'))
        file_path = os.path.abspath('../downloads') + '/' + filename
        print('[File Downloader] Saving file to: ' + file_path)
        open(file_path, 'wb').write(r.content)

        print('Returning: ' + filename)
        return filename

    return None