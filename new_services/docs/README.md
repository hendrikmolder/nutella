# New Web Services

This folder, namely the `services` subfolder includes the REST services that are used by Taverna workflows. Please find more information about them below.

_Services created by Hendrik Molder. Where indicated, parts of Hapsoro's code is re-used._

## Services

**For more detailed docuemntation please see [REST API documentation](api-doc.md).**

### Wrangling services

1. [**Weather JSON to CSV**](api-doc.md#convert-weather-json-to-csv)
2. [**Union two CSV files**](api-doc.md#union-two-files)

### File upload/download services

Downloads a file to the webserver - this file can be used for processing later. Returns the file name, which can be passed to other scripts (such as weather json to csv) as they will always look for the file in the `downloads` directory.\
**NB!** When you shut down the server, _all_ files in `downloads` directory are deleted!

1. [**Raw file upload**](api-doc.md#upload-a-file-to-the-server-using-the-file-itself)
2. [**File upload via file URL**](api-doc.md#upload-a-file-to-the-server-using-file-url)
3. [**File download**](api-doc.md#get-the-file-from-the-server)

## Running
To start the web server, first ensure you have Python installed. Then navigate into the `new_service` directory in your terminal and follow these steps.

1. Install all required packages by running `pip install -r service/requirements.txt`.
2. Start the webserver by running `python service/main.py`.

## Structure
```
.
├── docs            (Documentation in Markdown)
├── downloads       (Downloads directory for the web server)
├── notebooks       (Jupyter Notebooks used for development)
├── service         (The REST services as Python scripts)
└── test_data       (Data used for testing)
```
