import StringIO
import pandas as pd
import requests
import os
from common import random_filename_generator

def write_to_file(data):
    filename = "%s%s" % (random_filename_generator.generate(), '.csv')
    path = "%s%s%s" % (os.path.abspath('../python-downloader-files'), '/', filename)

    with open(path, 'w') as f:
        f.write(data)

    return filename
