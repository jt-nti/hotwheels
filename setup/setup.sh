#!/bin/bash

# Get the current directory.
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

composer archive create  --sourceType dir --sourceName ${DIR}/../packages/iot-vehicle-lifecycle-network -a ./iot-vehicle-lifecycle-network.bna

composer network deploy -c PeerAdmin@hlfv1 -a ./iot-vehicle-lifecycle-network.bna -A admin -S adminpw

composer card import -f ./admin@iot-vehicle-lifecycle-network.card

composer network ping -c admin@iot-vehicle-lifecycle-network

composer transaction submit -c admin@iot-vehicle-lifecycle-network -d '{"$class": "org.example.vehicle.lifecycle.SetupDemo"}'

composer network list -c admin@iot-vehicle-lifecycle-network

# Also make sure the prereqs for the apps are installed in case
# they've gone awol!
npm ls -g bower || npm install -g bower
npm ls -g cordova || npm install -g cordova
npm ls -g node-red || npm install -g node-red
npm ls -g node-red-contrib-scx-ibmiotapp@0.0.47 || npm install -g node-red-contrib-scx-ibmiotapp@0.0.47
npm ls -g node-red-contrib-composer@0.0.10 >/dev/null 2>&1 || npm install -g node-red-contrib-composer@0.0.10
npm ls -g composer-rest-server@latest >/dev/null 2>&1 || npm install -g composer-rest-server@latest
