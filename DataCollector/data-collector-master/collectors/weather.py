import requests
from common import file_io

METOFFICE_KEY = 'bac1fe10-ffa1-4b59-a3c3-0f70b3470d20'
WEATHER_PATH = 'weather'

def weather_observations(abs_path):

    url = 'http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json/all'

    params = {
        'res': 'hourly',
        'key': METOFFICE_KEY
    }

    r = requests.get(url, params = params)

    #for file io
    context_name = 'weather_observations'
    format = 'json'

    filename = file_io.filename_timestamp(context_name)
    result = file_io.write_to_file(r.content, filename, format, "%s%s%s" % (abs_path, '/', WEATHER_PATH))

    print result
