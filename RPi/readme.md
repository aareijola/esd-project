# Readme
This directory contains the code for the hike watch hub.
## Installation
On linux:
1. Create the virtual environment using the command: `python3 -m venv venv`
2. Activate the venv: `source venv/bin/activate`
3. Install dependencies: `pip install -r requirements.txt`

Windows:
1. Create the virtual environment: `py -m venv venv`
2. Activate venv: `venv\Scripts\activate.bat`
3. pip install depencies: `pip install -r requirements.txt`

Dependencies for the project should be installed in the virtual environment. After working, you can disable the venv with `deactivate`.

## Running the code
The application consists of two python scripts: wserver.py and receiver.py. Running the application is as simple as running both of these scripts simulaneously.

Necessary steps:
1. Activate the virtual environment: `source venv/bin/activate` (linux) or `venv/Scripts/activate.bat` (windows)
2. Run the bluetooth receiver: `python receiver.py`
3. Open another terminal and run the webserver: `python wserver.py` for debug mode, or `flask --application wserver run`

Upon running the webserver, flask will inform you of the IP-address and port used to host the server. Ctrl-click this in the terminal or enter it into your browser of choice (in format http://ip-address:port) to access the website. 

You are now ready to track your hikinh activity!