# REST API Documentation

In this example, `localhost:8881` is used as the host. If you have configured the web server to start on a different port,
please don't forget to keep that in mind when reading this document.

## Convert weather JSON to CSV

Converts the weather JSON file into a tabular format (CSV) and returns the URL of the converted file.

**HTTP Request**\
`PUT http://localhost:8881/services/weather_json_to_csv/<filename>`

**URL Parameters**

|Param|Description|
|---|---|
|filename| _Name_ of the JSON file|
