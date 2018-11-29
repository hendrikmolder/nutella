import requests
import os
from datetime import datetime

def write_to_file(data, filename, format, path):
    ## must find way to store filepath
    filename = "%s%s%s" % (filename, '.', format)
    path = os.path.abspath(path)
    filepath = "%s%s%s" % (path, '/', filename)

    #check if directory exists
    #if not, then create directory
    if not os.path.exists(path):
        os.makedirs(path)

    #write file using context to automatically close file when done
    with open(filepath, "w") as text_file:
        text_file.write(data)

    return True


def filename_timestamp(filename):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = "%s_%s" % (filename, timestamp)

    return filename
