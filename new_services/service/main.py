import bottle
from bottle import run, get, post, request
import atexit, os

'''
configuration parameters
========================
set host to localhost (or 127.0.0.1) to run it on local machine
set port number
'''
host = '127.0.0.1'
port = 8881
downloads_dir =  os.path.join(os.path.abspath(os.path.dirname(__file__)), 'downloads')

# Include the API functions
from endpoints import weather_json2csv, file_downloader, union

# Start the server
if __name__ == '__main__':
    run( host = host, port = port)

# Source: https://www.tutorialspoint.com/How-to-ignore-hidden-files-using-os-listdir-in-Python
def file_is_hidden(p):
    if os.name== 'nt':
        attribute = win32api.GetFileAttributes(p)
        return attribute & (win32con.FILE_ATTRIBUTE_HIDDEN | win32con.FILE_ATTRIBUTE_SYSTEM)
    else:
        return p.startswith('.') #linux-osx

def clear_downloads():
    print "[Shutdown] Clearing downloads from %s." % (downloads_dir)
    files = [file for file in os.listdir(downloads_dir) if not file_is_hidden(file)]
    for file in files:
        os.remove(os.path.join(downloads_dir, file))
    print "[Shutdown] Downloaded files deleted."

atexit.register(clear_downloads)