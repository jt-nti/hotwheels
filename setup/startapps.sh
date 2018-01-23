#!/bin/bash

# Get the current directory.
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Errr, should already be installed in demoenv but that wasn't working?!
npm install -g node-red
npm install -g node-red-contrib-scx-ibmiotapp@0.0.47
npm install -g cordova
npm install -g composer-rest-server@latest

# Start rest server
composer-rest-server -c admin@iot-vehicle-lifecycle-network -p 3000 -n never

# Start node red
node-red ${DIR}/node-red-flows.json > ./node-red.log 2>&1 &

# Start the VDA application
cd ${DIR}/../packages/vehicle-lifecycle-vda
npm install
bower install
npm start > ./vehicle-lifecycle-vda.log 2>&1 &

# Start the manufacturing application
cd ${DIR}/../packages/vehicle-lifecycle-manufacturing
npm install
bower install
npm start > ./vehicle-lifecycle-manufacturing.log 2>&1 &

# Start the car-builder application
cd ${DIR}/../packages/vehicle-lifecycle-car-builder
npm install
npm run build
npm start > ./vehicle-lifecycle-car-builder.log 2>&1 &

# Start the insurance view
cd ${DIR}/../packages/prince-insurance
npm install
npm run build
ng serve --host 0.0.0.0 --port 4200 > ./prince-insurance.log 2>&1 &
