# New Web Services

This folder, namely the `services` subfolder includes the REST services that are used by Taverna workflows. Please find more information about them below.

_Services created by Hendrik Molder. Where indicated, parts of Hapsoro's code is re-used._

## Services

1. **Weather JSON to CSV**\
    Transforms the weather observations nested JSON file into a CSV file. Returns the _full_ URL of the CSV file, which can be used or downloaded from the server.

    **Usage**
    `/services/weather_json_to_csv/<filename>`\
    where <filename> is the name (i.e. _weather_obs-1.json_) of the file which was previously imported to the server via file importer (see below).

2. **File importer**\
    Downloads a file to the webserver - this file can be used for processing later. Returns the file name, which can be passed to other scripts (such as weather json to csv) as they will always look for the file in the `downloads` directory.

    **Usage**
    `/files/import`\
    with the following parameters passed as x-form-urlencoded values:\
    `file_url = http://example.com/weather.json`

    **NB!** When you shut down the server, _all_ files in `downloads` directory are deleted!

## Running
To start the web server, first ensure you have Python installed. Then navigate into the `new_service` directory in your terminal and follow these steps.

1. Install all required packages by running `pip install -r service/requirements.txt`.
2. Start the webserver by running `python service/main.py`.
