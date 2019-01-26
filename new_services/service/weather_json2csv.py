#%% weather wrangler
import json
import pandas as pd
from pandas import DataFrame
from pandas.io.json import json_normalize #package for flattening json in pandas df
from bottle import route, template, get, post, request, static_file
import os

# COPY META COLUMNS TO PERIOD RESULTS DATAFRAME
# a: 1-row DataFrame containing Period and meta columns
# b: results DataFrame
def copy_meta_to_period(a, b):
    headers = list(a)
    for i in range(1,len(headers)):
        b[str(headers[i])] = a.iloc[0][i]
    return b

def handle_lists(x, i):
    a = DataFrame(x.iloc[i].to_dict())
    b = json_normalize(data=a['Period'], record_path=['Rep'], meta=['type', 'value'])
    return a, b

def handle_objects(x, i):
    a = DataFrame(x.iloc[i])
    b = json_normalize(data=a.T['Period'], record_path=['Rep'], meta=['type', 'value'])
    return a, b

@post('/services/weather_json_to_csv/<filename>')
def weather_json2csv(filename):
    # Look for file in the "downloads" directory
    file_path = os.path.abspath('../downloads') + '/' + filename

    with open(file_path) as f:
        d = json.load(f)

    data_by_location = json_normalize(data=d['SiteRep']['DV'],
                                      record_path=['Location'],
                                      meta=['dataDate', 'type'])

    result = DataFrame()
    # Loop over all rows of location
    for i in range (0, len(data_by_location)):

        if (isinstance(data_by_location.iloc[i]['Period'], list)): # Handle lists
            [a, b] = handle_lists(data_by_location, i)
        else:                                              # Handle objects
            [a, b] = handle_objects(data_by_location, i)

        if (len(result) == 0):
            result = copy_meta_to_period(a, b)
        else:
            result = result.append(copy_meta_to_period(a, b), ignore_index=True)

    # Construct the full url for the converted file
    host = request.get_header('host')
    new_filename = filename.replace('.json', '.csv', 1)
    new_file_path = os.path.abspath('../downloads') + '/' + new_filename
    host = request.get_header('host')
    new_file_url = 'http://{}/files/'.format(host) + new_filename
    result.to_csv(new_file_path, index=False)

    return template('{{content}}',
        content = new_file_url)
