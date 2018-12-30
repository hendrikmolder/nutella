#%% weather wrangler
from bottle import route, template, get, post, request
import pandas as pd
from pandas import DataFrame as df
import requests

@post('/services/weather_json_to_csv/')
def weather_json2csv():


    df = pd.read_json('weather_obs-1.json')
    # df.head()
    # print(data)

    df.to_csv('weather.csv', index=False)



    ## How to get params from URL
    # file_url = str(request.forms.get('url')).strip()
    # Read content from file url
    # data = file_io.read_from_url(file_url)
    # data = pd.read_json(file_url)


    return None

weather_json2csv()