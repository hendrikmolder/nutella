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

# Include the API functions
from endpoints import weather_json2csv, file_downloader, union

# Start the server
if __name__ == '__main__':
    run( host = host, port = port)

def clear_downloads():
    dir =  os.path.abspath(os.path.join(os.path.dirname(__file__), 'downloads'))
    print "[Shutdown] Clearing downloads from %s." % (dir)
    files = os.listdir(dir)
    for file in files:
        os.remove(os.path.join(dir,file))
    print "[Shutdown] Downloaded files deleted."

atexit.register(clear_downloads)