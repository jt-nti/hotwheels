#!/bin/bash

# Get the current directory.
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

composer archive create  --sourceType dir --sourceName ${DIR}/../packages/iot-vehicle-lifecycle-network -a ./iot-vehicle-lifecycle-network.bna

composer network deploy -c PeerAdmin@hlfv1 -a ./iot-vehicle-lifecycle-network.bna -A admin -S adminpw

composer card import -f ./admin@iot-vehicle-lifecycle-network.card

composer network ping -c admin@iot-vehicle-lifecycle-network

composer transaction submit -c admin@iot-vehicle-lifecycle-network -d '{"$class": "org.example.vehicle.lifecycle.SetupDemo"}'

composer network list -c admin@iot-vehicle-lifecycle-network
