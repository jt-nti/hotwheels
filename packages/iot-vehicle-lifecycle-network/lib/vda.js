/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Transfer a vehicle to another private owner
 * @param {org.example.vda.PrivateVehicleTransfer} privateVehicleTransfer - the PrivateVehicleTransfer transaction
 * @transaction
 */
function privateVehicleTransfer(privateVehicleTransfer) {
    console.log('privateVehicleTransfer');

    var currentParticipant = getCurrentParticipant();


    var NS_M = 'org.example.vehicle.manufacturer';
    var NS = 'org.example.vehicle.lifecycle';
    var NS_D = 'org.example.vda';
    var factory = getFactory();

    var seller = privateVehicleTransfer.seller;
    var buyer = privateVehicleTransfer.buyer;
    var vehicle = privateVehicleTransfer.vehicle;

    //change vehicle owner
    vehicle.owner = buyer;

    //PrivateVehicleTransaction for log
    var vehicleTransferLogEntry = factory.newConcept(NS_D, 'VehicleTransferLogEntry');
    vehicleTransferLogEntry.vehicle = factory.newRelationship(NS_D, 'Vehicle', vehicle.getIdentifier());
    vehicleTransferLogEntry.seller = factory.newRelationship(NS, 'PrivateOwner', seller.getIdentifier());
    vehicleTransferLogEntry.buyer = factory.newRelationship(NS, 'PrivateOwner', buyer.getIdentifier());
    vehicleTransferLogEntry.timestamp = privateVehicleTransfer.timestamp;
    if (!vehicle.logEntries) {
        vehicle.logEntries = [];
    }

    vehicle.logEntries.push(vehicleTransferLogEntry);

    return getAssetRegistry(vehicle.getFullyQualifiedType())
        .then(function(ar) {
            return ar.update(vehicle);
        });
}

/**
 * Scrap a vehicle
 * @param {org.example.vda.ScrapVehicle} scrapVehicle - the ScrapVehicle transaction
 * @transaction
 */
function scrapVehicle(scrapVehicle) {
    console.log('scrapVehicle');

    var NS_D = 'org.example.vda';
    var assetRegistry;

    return getAssetRegistry(NS_D + '.Vehicle')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(scrapVehicle.vehicle.getIdentifier());
        })
        .then(function(vehicle){
            vehicle.vehicleStatus = 'SCRAPPED';
            return assetRegistry.update(vehicle);
        });
}

/**
 * Scrap a vehicle
 * @param {org.example.vda.ScrapAllVehiclesByColour} scrapAllVehicles - the ScrapAllVehicles transaction
 * @transaction
 */
function scrapAllVehiclesByColour(scrapAllVehicles) {
    console.log('scrapVehicle');

    var NS_D = 'org.example.vda';
    var assetRegistry;

    // create the query
    return getAssetRegistry(NS_D + '.Vehicle')
        .then(function (ar){
            assetRegistry = ar;
            return queryNative('Q2');
        })
        .then(function (resultArray) {
            console.log('TP function received query result: ', JSON.stringify(resultArray));
            if (resultArray.length < 1 ) {
                throw new Error('No vehicles found with ' + scrapAllVehicles.colour, resultArray.length);
            }

            var factory = getFactory();
            var promises =[];
            var serializer = getSerializer();
            for (var x = 0; x < resultArray.length; x++) {
                var currentResult = resultArray[x];
                var vehicle = serializer.fromJSON(currentResult.Record);

                vehicle.vehicleStatus = 'SCRAPPED';
                var scrapVehicleEvent = factory.newEvent(NS_D, 'ScrapVehicleEvent');
                scrapVehicleEvent.vehicle = vehicle;
                emit(scrapVehicleEvent);
                promises.push(assetRegistry.update(vehicle));

            }
            return Promise.all(promises);
        });
}

/**
 * Place an order for a vehicle
 * @param {org.example.vda.CreateUsageRecord} createUsageRecord - the CreateUsageRecord transaction
 * @transaction
 */

function createUsageRecord(createUsageRecord) {
    console.log('createUsageRecord');

    var factory = getFactory();
  	var NS_V = 'org.example.vda';
  
  	var vehicle;

    var usageRecord = factory.newResource(NS_V, 'UsageRecord', createUsageRecord.usageID);
    usageRecord.vehicleDetails = factory.newRelationship(NS_V, 'Vehicle', createUsageRecord.vin);
    usageRecord.usageEvents = [];

    // save the order
    return getAssetRegistry(usageRecord.getFullyQualifiedType())
        .then(function (registry) {
            return registry.add(usageRecord);
        })
        .then(function(){
    		var createUsageRecordEvent = factory.newEvent(NS_V, 'CreateUsageRecordEvent');
      		createUsageRecordEvent.usageID = usageRecord.usageID;
      		createUsageRecordEvent.vin = createUsageRecord.vin;
      		console.log(createUsageRecordEvent)
    		emit(createUsageRecordEvent);
    	});
}

/**
 * Place an order for a vehicle
 * @param {org.example.vda.AddUsageEvent} createUsageRecord - the CreateUsageRecord transaction
 * @transaction
 */

function addUsageEvent(addUsageEvent) {
    console.log('addUsageEvent');

    var factory = getFactory();
  	var NS_V = 'org.example.vda';
    var assetRegistry;
  
    return getAssetRegistry(NS_V + '.UsageRecord')
        .then(function (ar){
            assetRegistry = ar;
            return query('Q2', { vehicleDetails: 'resource:org.example.vda.Vehicle#'+addUsageEvent.vin }); // SELECT ALL USAGE RECORDS FOR THAT VEHICLE
        })
        .then(function (resultArray) {
            if (resultArray.length < 1 ) {
                throw new Error('No usage records found with vin ' + addUsageEvent.vin, resultArray.length);
            }

            var factory = getFactory();
            var promises =[];
            for (var x = 0; x < resultArray.length; x++) {
                var usageRecordID = resultArray[x]['$identifier'];
              
              	promises.push(assetRegistry.get(usageRecordID)
                  .then(function(usageRecord){
                    usageRecord.usageEvents.push(addUsageEvent.usageEvent);
                    var addUsageEventEvent = factory.newEvent(NS_V, 'AddUsageEventEvent');
                    addUsageEventEvent.vin = addUsageEvent.vin;
                    addUsageEventEvent.usageEvent = usageRecord.usageEvents[usageRecord.usageEvents.length -1];
                    emit(addUsageEventEvent);
                  	promises.push(assetRegistry.update(usageRecord));
                  }));
            }
            return Promise.all(promises);
        });
}


