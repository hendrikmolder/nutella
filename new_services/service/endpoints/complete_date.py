# Original: Hapsoro
# Modified by Hendrik Molder 2019

'''
this is a multiline comment
'''
#basic bottle web API needs
from bottle import route, template
#for handling requests
from bottle import get, post, request
import pandas as pd
#To help reading csv from URL
import StringIO
import requests
import datetime
from common import file_io

@post('/services/complete_date/')
def complete_date():
    # params
    timestamp_column_name = 'Complete Timestamp'

    #Get all params: urlData, content_type, column_name, begin_date
    url = str(request.forms.get('url')).strip()
    #content_type = request.forms.get('content_type')
    column_name = request.forms.get('column_name')
    #set current_date as begin_date
    begin_date = request.forms.get('begin_date')
    current_date = datetime.datetime.strptime(begin_date, '%Y-%m-%d')
    current_hour = 0

    print('Col name: ' + column_name)
    #get and read content from URL
    # data = file_io.read_from_url(url)
    data = pd.read_csv(url)
    print('Successfully read in CSV from ' + url)
    date_data = data[column_name].copy()
    date_data = date_data.rename(timestamp_column_name)
    num_rows = date_data.size
    print('Num rows: ' + str(num_rows))
    midnight = 23
    for i in range(0,num_rows):
        # print('Looping through: ' + str(i))
        current_time = data[column_name][i]
        if i > 0:
            previous_time = data[column_name][i - 1]
            if current_time < previous_time:
                current_hour += 1
            if current_hour > midnight:
                current_date += datetime.timedelta(days = 1)
                current_hour = 0
        date_data[i] = "%s %s:%s" % (datetime.datetime.strftime(current_date, '%Y-%m-%d'), current_hour, date_data[i])

    print('Loop finished')
    #concatenate data
    data = pd.concat([data, date_data], axis=1)
    data.write
    filename = file_io.write_to_csv(data)

    return template('{{content}}',
        content = filename)
