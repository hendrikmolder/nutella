import pandas as pd
import os
from bottle import post, template, request

# Set the downloads path
downloads_path = os.path.join(os.path.dirname(__file__), '..','downloads')

@post('/services/union')
def union():
    # Get file names
    file1_name = request.forms.get("file1").strip()
    file2_name = request.forms.get("file2").strip()

    # Read files from downloads directory
    file1 = pd.read_csv(os.path.join(downloads_path, file1_name))
    file2 = pd.read_csv(os.path.join(downloads_path, file2_name))

    # Concatenate two files
    file12 = pd.concat([file1, file2])

    # Generate filename and path
    # Remove the .csv from file1_name
    file12_name = file1_name.replace('.csv', '_', 1)  + file2_name
    file12_path = os.path.join(downloads_path, file12_name)
    file12.to_csv(file12_path, index=False)

    host = request.get_header('host')
    file12_url = 'http://{}/files/'.format(host) + file12_name

    return template('{{content}}',
        content = file12_url)