# REST API Documentation

In this example, `localhost:8881` is used as the host. If you have configured the web server to start on a different port,
please don't forget to keep that in mind when reading this document.

---

### Convert weather JSON to CSV

Converts the weather JSON file into a tabular format (CSV) and returns the URL of the converted file.

**HTTP Request**\
`GET http://localhost:8881/services/weather_json_to_csv/<filename>`

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

### Upload a file to the server

Uploads (or 'imports', if you will) a file to the server, that can be used for processing.

**HTTP Request**\
`PUT http://localhost:8881/files/import`

**URL Parameters**

|Param|Description|
|---|---|
|file_url|URL of the file to be imported (starting with http:// or https://)|

**Example**
```bash
curl -X PUT 
  http://localhost:8881/files/import 
  -H 'Content-Type: application/x-www-form-urlencoded' 
  -F file_url=http://localhost:8888/files/weather_obs-1.json
```

---

### Get the file from the server

Downloads the file.

**HTTP Request**\
`GET http://localhost:8881/files/<filename>`

**URL Parameters**

|Param|Description|
|---|---|
|filename|Name of the file to be fetched from the server|

**Example**
```bash
curl -X GET 
  http://localhost:8881/files/weather.csv 
```
