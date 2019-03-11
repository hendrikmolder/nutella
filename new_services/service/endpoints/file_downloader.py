from bottle import get, put, request, route, static_file, FileUpload
import requests
import os

downloads_path = os.path.join(os.path.dirname(__file__), '..', 'downloads')

# Helper function to check if a file is downloadable
def is_downloadable(content_type):
    if 'html' in content_type.lower():
        print('Content_type: html')
        return False
    print('is downloadable')
    return True

def get_filename(cd):
    if not cd:
        return None
    fname = request.findall('filename=(.+)', cd)
    if len(fname) == 0:
        return None
    return fname[0]

# Source: Hapsoro
@route('/files/<filename>')
def get_static_file(filename):
    return static_file(filename, root = downloads_path)

@put('/files/import/raw/<newfile>')
def download_from_path(newfile):
    text = request.body
    filename = newfile
    file_path = os.path.join(downloads_path, filename)

    with open(file_path,'wb') as file:
        for line in text.readlines():
            file.write(line)
            # print(line)

    return filename

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
        file_path = os.path.join(downloads_path, filename)
        print('[File Downloader] Saving file to: ' + file_path)
        open(file_path, 'wb').write(r.content)

        print('Returning: ' + filename)
        return filename

    return None