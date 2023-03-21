# Readme - Watch_TTGo_fw
This directory contains the code for the Hiking Watch application for the LilyGo TTGo smartwatch. It contains a Platformio project that is intended to be used with Microsoft Visual Studio Code (vscode) that is equipped with the platformio IDE extension. The C/C++ extension for vscode should also be installed and enabled. 

When working, it is recommended to open the Watch_TTGo_FW-directory on vscode instead of the whole repository. 

## Structure
The most important parts of this directory are the src-directory containing the source code and the platformio.ini configuration file.  

The platformio.ini file contains project configuration info that is used by the platformio IDE vscode extension. It is essential to make sure this configuration file stays up to date during development since it specifies the selected board, platform, dependencies and more. It is not recommended to manually edit any other configuration files in the directory since they are automatically generated based on this file. 

The src-folder contains four files: 

* Config.h - A header file that is used to define constants as well as included headers and modules 

* Main.cpp - The c++ file containing the source code for the program that is uploaded to the smart watch 

* Utils.h - a header file defining utility functions for interacting with the file system created on the watch using the LittleFS library 

* Utils.cpp - the c++ file implementing the functions defined in utils.h 

In arduino projects, the entry point to a program is the setup() function, which in this project is located in the main.cpp file. After setup() is executed once, the program continues its execution into the function loop(), which is repeatedly called until the execution is stopped by the user. 

In the code in main.cpp, the functionality of the watch is implemented as a state machine in a `switch-case` statement. Adding or editing functionality is as simple as editing the `switch-case` statement and adding the necessary state transitions. 

## Installation

Using the project requires installing the Platformio IDE extension for vscode. This is done by following these steps:
1. Install Microsoft Visual Studio Code for your chosen operating system.
2. Select "Extensions" from the toolbar on the left-hand side of the window.
3. Type "PlatformIO IDE" in the search bar.
4. Select PlatformIO IDE by Platformio, and select install.
5. Restart VScode after installing the extension.

## Building and deploying the code
Open vscode in the `esd-project/Watch_TTGo_fw` folder:
```
cd Watch_TTGo_fw
code .
```
If the platformio extension for vscode has been installed properly, the provided `platformio.ini` file should be automatically detected and used to configure the project, including installing the dependencies of the project. Note that this may take a couple of minutes and should be given enough time to finish before attempting to modify code or run tasks. If the configuration task is running, an indicator will be shown in the blue bottom bar in vscode. 

After the configuration is complete, the code is ready to be built and deployed to the watch. The necessary steps are as follows:

1. Select the platformio extension from the vscode toolbar on the left-hand side of the window.
2. Under the selected project (ttgo-t-watch), select “Build” to build the project into an elf-file that is ready to be deployed to the watch. 
3. Upload the build to the watch using “Upload”. “Monitor” can be used to open the serial monitor to track communication between the computer and the watch. “Upload and Monitor” combines these two tasks.

## Troubleshooting
Platformio is a very large extension for vscode and it can have conflicts with other extensions. In general, it is recommended to only activate extensions that are relevant for the project that is currently under work. During the development of this project, it was noted that the Java language extension pack can cause problems with platformio build tasks, rendering the build and upload buttons unusable. This was fixed by disabling the Java language extension pack and reloading the vscode application. 

On Linux systems, it is possible that platformio fails uploading the code to the target device, because it has no write accesss to that device. This can be fixed by giving read/write access to all users. The command to do this in the terminal is `sudo chmod a+rw /dev/<device name>`, where `<device name>` is the name of the target device in the `/dev/` directory.  