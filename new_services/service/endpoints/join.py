# Original: Hapsoro
# Modified by Hendrik Molder 2019

from bottle import post, get, request, template
from common import file_io, random_filename_generator
from datetime import datetime
import math
import pandas as pd
import numpy as np


#default params
DEFAULT_SPACE_THRESHOLD = 10
DEFAULT_TIME_THRESHOLD = 10800000
DEFAULT_DATE_FORMAT = '%Y-%m-%d %H:%M:%S'
RAD = math.pi/180
EARTH_DIA = 6378.145 # in kms
KM_TO_MILES = 0.621371192
EARTH_DIST_COL_NAME = 'earth_distance'
TIME_DIST_COL_NAME = 'time_distance'

### calculate_earth_distance
def calculate_earth_distance(lat1, lon1, lat2, lon2):
    a1 = np.radians(lat1)
    a2 = np.radians(lon1)
    b1 = np.radians(lat2)
    b2 = np.radians(lon2)
    dlon = b2 - a2
    dlat = b1 - a1
    a = (dlat.apply(np.sin)/2)**2 + (np.cos(a1) * np.cos(b1) * dlon.apply(np.sin)/2)**2
    c = 2 * np.arctan2(np.sqrt(a), np.sqrt(1-a))

    distance = EARTH_DIA * KM_TO_MILES * c # convert km to miles
    print("Calculated distance: {}".format(str(distance)))

    return distance


### calculate_time_distance
def calculate_time_distance(dt1, dt2,
    dt1_time_format = DEFAULT_DATE_FORMAT, dt2_time_format = DEFAULT_DATE_FORMAT):

    dt_delta = np.absolute(pd.to_datetime(dt2, format=dt2_time_format) - pd.to_datetime(dt1, format=dt1_time_format))

    return dt_delta



### nearest_space_time_distance
def nearest_space_time_distance(lat, lon, dt, data2, lat_col_name,
    lon_col_name, date_col_name,
    space_threshold = DEFAULT_SPACE_THRESHOLD, time_threshold = DEFAULT_TIME_THRESHOLD,
    dt_date_format = DEFAULT_DATE_FORMAT, date_date_format = DEFAULT_DATE_FORMAT):

    num_rows = data2.size

    data2_temp = data2.copy()

    data2_temp = data2_temp.assign(
        earth_distance = calculate_earth_distance(lat, lon, data2_temp[lat_col_name], data2_temp[lon_col_name]),
        time_distance = calculate_time_distance(dt, data2_temp[date_col_name], dt_date_format, date_date_format)
        )
    data2_temp = data2_temp.sort_values([EARTH_DIST_COL_NAME, TIME_DIST_COL_NAME], ascending = True)
    print("data2_temp: " + str(data2_temp.iloc[0][TIME_DIST_COL_NAME]))
    if (data2_temp.iloc[0][EARTH_DIST_COL_NAME] > space_threshold or
        (int(data2_temp.iloc[0][TIME_DIST_COL_NAME]/np.timedelta64(1, 's'))) > time_threshold):
        return NaN

    return data2_temp.iloc[0]

## function to join by spatial location (lat, lon)
@post('/services/join/space')
def join_space():

    #get parameters
    x_url = str(request.forms.get('x')).strip()
    y_url = str(request.forms.get('y')).strip()

    x_lat = request.forms.get('x_lat')
    x_lon = request.forms.get('x_lon')

    y_lat = request.forms.get('y_lat')
    y_lon = request.forms.get('y_lon')

    space_threshold = request.forms.get('threshold') if request.forms.get('threshold') is not None else DEFAULT_SPACE_THRESHOLD

    x = file_io.read_from_url(x_url)
    y = file_io.read_from_url(y_url)

    num_rows = len(x.index)

    # buffer for result
    match_column_names = list(y.columns.values)
    match_column_names.append(EARTH_DIST_COL_NAME)
    result = pd.DataFrame(columns = match_column_names)

    for i in range(0, num_rows):
        lat = x.loc[i][x_lat]
        lon = x.loc[i][x_lon]

        # if i % 100 == 0:
        #     print("Processing row %s of %s") % i, num_rows

        y_temp = y.copy()
        y_temp = y_temp.assign(
            earth_distance = calculate_earth_distance(lat, lon, y_temp[y_lat], y_temp[y_lon])
        )

        y_temp = y_temp.sort_values([EARTH_DIST_COL_NAME], ascending = True)

        if (y_temp.iloc[0][EARTH_DIST_COL_NAME] > space_threshold):
            result.loc[i] = NaN
        else:
            result.loc[i] = y_temp.iloc[0]

    result = pd.concat([x,result], axis = 1)
    filename = file_io.write_to_csv(result)

    return template('{{content}}',
        content = filename)


'''
params:
string data1 url
int space_threshold in miles
'''
@post('/services/join/space_time')
def join_space_time():

    ##get parameters
    ## simplified parameter names
    url_1 = str(request.forms.get('x')).strip()
    url_2 = str(request.forms.get('y')).strip()

    x_lat = request.forms.get('x_lat')
    x_lon = request.forms.get('x_lon')
    x_date = request.forms.get('x_date')

    y_lat = request.forms.get('y_lat')
    y_lon = request.forms.get('y_lon')
    y_date = request.forms.get('y_date')

    space_threshold = request.forms.get('space_threshold') if request.forms.get('space_threshold') is not None else DEFAULT_SPACE_THRESHOLD
    time_threshold = request.forms.get('time_threshold') if request.forms.get('time_threshold') is not None else DEFAULT_TIME_THRESHOLD
    x_date_format = request.forms.get('x_date_format') if request.forms.get('x_date_format') is not None else DEFAULT_DATE_FORMAT
    y_date_format = request.forms.get('y_date_format') if request.forms.get('y_date_format') is not None else DEFAULT_DATE_FORMAT

    print("All Params have been fetched.")
    # read data from URL
    x = file_io.read_from_url(url_1)
    print(url_1 + " has been read.")
    y = file_io.read_from_url(url_2)
    print(url_2 + " has been read.")
    num_rows = len(x.index)
    print("Files are read in.")

    # buffer
    match_column_names = list(y.columns.values)
    match_column_names.append(EARTH_DIST_COL_NAME)
    match_column_names.append(TIME_DIST_COL_NAME)
    result = pd.DataFrame(columns = match_column_names)

    print("Starting the loop. {} total rows".format(str(num_rows)))
    for i in range(0, num_rows):
        lat = x.loc[i][x_lat]
        lon = x.loc[i][x_lon]
        dt = x.loc[i][x_date]

        # if i % 100 == 0:
        print("Processing {} of {}".format(str(i), str(num_rows)))

        result.loc[i] = nearest_space_time_distance(lat, lon, dt,
            y, y_lat, y_lon, y_date,
            space_threshold, time_threshold,
            x_date_format, y_date_format)

    result = pd.concat([x, result], axis = 1)
    filename = file_io.write_to_csv(result)

    return template('{{content}}',
        content = filename)
