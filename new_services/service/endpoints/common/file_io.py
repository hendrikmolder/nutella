# Original: Hapsoro
# Modified by Hendrik Molder 2019

import StringIO
import pandas as pd
import requests
import os
import random_filename_generator
from bottle import request

downloads_path = os.path.join(os.path.dirname(__file__), '..', '..', 'downloads')

def write_to_file(data):
    filename = "%s%s" % (random_filename_generator.generate(), '.csv')
    path = "%s%s%s" % (os.path.abspath('../python-downloader-files'), '/', filename)

    with open(path, 'w') as f:
        f.write(data)

    return filename

def read_from_url(url):
    print('Reading from URL: ' + url)
    # print('Response: ' + requests.get(url).text)
    # return requests.get(url).text

    # Check if the file is already downloaded
    if request.get_header('host') in url:
        filename = url.rsplit('/', 1)[1]
        return pd.read_csv(os.path.join(downloads_path, filename))

    return pd.read_csv(url)

def write_to_csv(df):
    filename = random_filename_generator.generate(12) + '.csv'
    file_path = os.path.join(downloads_path, filename)

    df.to_csv(file_path, index=False)
    return filename
