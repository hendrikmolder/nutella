import bottle
from bottle import run, get, post, request

'''
configuration parameters
========================
set host to localhost (or 127.0.0.1) to run it on local machine
set port number
'''
host = '127.0.0.1'
port = 8080

#import all folders
#should find a more efficient way when files are many
import join
import complete_date


#app = application = bottle.default_app()
if __name__ == '__main__':
    run( host = host, port = port)

