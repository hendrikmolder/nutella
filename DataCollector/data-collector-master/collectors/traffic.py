import requests
from common import file_io


TFGM_KEY = '0b23e896bd8f45d7a42d946b8f8d6494'
TRAFFIC_PATH = 'traffic'

def incidents(abs_path):

    url = 'https://api.tfgm.com/odata/Incidents'

    params = {
        'expand': 'true'
    }

    headers = {
        'Ocp-Apim-Subscription-Key' : TFGM_KEY
    }

    r = requests.get(url, params = params, headers = headers)

    #for file io
    context_name = 'incidents'
    format = 'json'
    filename = file_io.filename_timestamp(context_name)
    result = file_io.write_to_file(r.content, filename, format, "%s%s%s" % (abs_path, '/', TRAFFIC_PATH))

    print result
