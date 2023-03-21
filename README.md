# Esd Project - Hike Watch
The public repository of this project can be found on Github [here](https://github.com/aareijola/esd-project).

## Description
This software application is a hiking assistant smart watch application for the LilyGo TTGO ES32-based smartwatch. The application will record and store steps of a hiking session while the smartwatch is in the hiker’s wrist and furthermore it calculates the distance and burned calories of the session. The application shows the steps and the travelled distance on the screen of the smartwatch during the session. The data of the hiking session can be transferred into the RPi Hub and be visualized via web UI. The purpose of the application is to help track the activity of the user. 

This repository contains two directories:
* Watch_TTGo_fw -- The Platformio project for the smartwatch itself
* RPi -- Python files for the Hub including a bluetooth receiver and Flask webserver

## Installation
Installation and use instructions for the RPi hub software can be found [here](RPi/readme.md).

Instructions for the Watch_TTGo_fw Platformio project are found [here](Watch_TTGo_fw/readme.md).


## Authors and acknowledgment
Authors: [Aaro Reijola](https://github.com/aareijola), [Tuomo Rönty](https://github.com/TuomoRonty)