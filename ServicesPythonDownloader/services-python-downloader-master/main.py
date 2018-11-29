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
port = 8888

#import all folders
#should find a more efficient way when files are many
from api import file_requests


#app = application = bottle.default_app()
if __name__ == '__main__':
    run( host = host, port = port)


def delete_files():
    dir = os.path.abspath('../python-downloader-files/')
    print "attempting to delete files from temp folder: %s" % (dir)
    files = os.listdir(dir)
    for file in files:
        os.remove(os.path.join(dir,file))
    print "temp files deleted"

atexit.register(delete_files)
