# REST API Documentation

In this example, `localhost:8881` is used as the host. If you have configured the web server to start on a different port,
please don't forget to keep that in mind when reading this document.

---

## Wrangling Services

### Convert weather JSON to CSV

Converts the weather JSON file into a tabular format (CSV) and returns the URL of the converted file.

**HTTP Request**\
`GET http://localhost:8881/services/weather_json_to_csv/<filename>`

**Returns**\
CSV file url

**URL Parameters**

|Param|Description|
|---|---|
|filename| _Name_ of the JSON file|

**Example**
```bash
curl -X GET
  http://localhost:8881/services/weather_json_to_csv/weather_obs-1.json
```

---

### Union two files

Performs union operation on two CSV files. _Please use the file upload endpoints below to upload the files to the server before using this endpoint._

**HTTP Request**\
`POST http://localhost:8881/services/union`

**Returns**\
New file URL

**URL Parameters**

|Param|Description|
|---|---|
|file1| _Name_ of the first CSV file|
|file2| _Name_ of the second CSV file|

**Example**
```bash
curl -X POST \
  http://localhost:8881/services/union \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -F file1=traffic_a.csv \
  -F file2=traffic_b.csv \
```

---

## File upload/download

Services for uploading files to the server and downloading files are needed to perform operations on these files and later export the files to other services. Please find the documentation for these upload/download endpoints below.

### Upload a file to the server using the file itself

Uploads (or 'imports', if you will) a file to the server, that can be used for processing. The file contents are sent via the request body.

**HTTP Request**\
`PUT http://localhost:8881/files/import/raw/<filename>`

**Returns**\
The <filename>

**URL Parameters**

|Param|Description|
|---|---|
|filename|name for the file used to save the file to the server|
_File attached as raw body. No other parameters._

**Example**
```bash
curl -X PUT \
  http://localhost:8881/files/import/raw/test.json
```

---

### Upload a file to the server using file URL

Uploads (or 'imports', if you will) a file to the server, that can be used for processing.

**HTTP Request**\
`PUT http://localhost:8881/files/import`

**Returns**\
The filename

**URL Parameters**

|Param|Description|
|---|---|
|file_url|URL of the file to be imported (starting with http:// or https://)|

**Example**
```bash
curl -X PUT \
  http://localhost:8881/files/import \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -F file_url=http://localhost:8888/files/weather_obs-1.json
```

---

### Get the file from the server

Downloads the file.

**HTTP Request**\
`GET http://localhost:8881/files/<filename>`

**Returns**\
The file

**URL Parameters**

|Param|Description|
|---|---|
|filename|Name of the file to be fetched from the server|

**Example**
```bash
curl -X GET \
  http://localhost:8881/files/weather.csv
```
