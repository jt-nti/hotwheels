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

function dateInLastWeek() {
		var end = new Date();
    var start = new Date(end.getTime() - (60*60*24*7*1000));
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
}

/**
 * Setup the demo
 * @param {org.example.vehicle.lifecycle.SetupDemo} setupDemo - the SetupDemo transaction
 * @transaction
 */
function setupDemo(setupDemo) {
    console.log('setupDemo');

    var factory = getFactory();
    var NS_M = 'org.example.vehicle.manufacturer';
    var NS = 'org.example.vehicle.lifecycle';
    var NS_D = 'org.example.vda';
  	var NS_I = 'org.example.insurance';
  
  	var insurance_firms = ['prince'];
  
    var names = ['dan', 'simon', 'jake', 'anastasia', 'matthew', 'mark', 'fenglian', 'sam', 'james', 'nick', 'caroline', 'rachel', 'john', 'rob', 'tom', 'paul', 'ed', 'dave', 'anthony', 'toby', 'ant', 'matt', 'anna', 'andy', 'joe', 'georg'];
    var vehicles = {
        "Arium": {
            "Nova": [
                {
                    "vin": "156478954",
                    "colour": "white",
                    "vehicleStatus": "ACTIVE",
                  	"policy_id": "12ff83db-3d5d-35c1-14e1-0c656b3d280a",
                  	"usage_id": "529d3b96-c168-540f-d71e-3db6f398537e",
                  	"usage_events": [
                      {
                          "eventID": "6a553050-9ad2-f7a8-707e-6bcf5485fd49",
                          "eventType": "OVERHEATED",
                          "acceleration": 1.22,
                          "air_temperature": 18.03,
                          "engine_temperature": 232.78,
                          "light_level": 100.12,
                          "pitch": -1.26,
                          "roll": 2.27,
                          "timestamp": dateInLastWeek()
                  	  },
                      {
                          "eventID": "6a553050-9ad2-f7a8-707e-6bcf5485fd49",
                          "eventType": "OIL_FREEZING",
                          "acceleration": 1.00,
                          "air_temperature": -5.23,
                          "engine_temperature": -2.36,
                          "light_level": 0.00,
                          "pitch": 0.62,
                          "roll": 0.10,
                          "timestamp": "2017-01-27T03:42:36.002Z"
                  	  }
                    ]
                },
                {
                  "vin": "981216623",
                  "colour": "purple",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "0b087c0e-2ff0-24ff-3167ec65b5bc",
                  "usage_id": "7934c319-aa6c-b5eb-c9be1a3610cf",
                  "usage_events": [
                    {
                      "eventID": "0af8f76e-4b36-d3fb-ff96a2e2a0fd",
                      "eventType": "OVERHEATED",
                      "acceleration": 1.03,
                      "air_temperature": 23.71,
                      "engine_temperature": 102.18,
                      "light_level": 1.06,
                      "pitch": 0.72,
                      "roll": 2.77,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                },
                {
                  "vin": "611514767",
                  "colour": "black",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "9e5f4f3f-1e8a-69a4-06e2d5ada643",
                  "usage_id": "0c316630-1a43-90a3-5929e841fa50",
                  "usage_events": [
                    {
                      "eventID": "3da8d946-d767-1906-4150e8a7fe49",
                      "eventType": "OVERHEATED",
                      "acceleration": 1.43,
                      "air_temperature": 16.03,
                      "engine_temperature": 120.08,
                      "light_level": 25.34,
                      "pitch": -1.87,
                      "roll": -0.31,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                },
                {
                  "vin": "404169445",
                  "colour": "olive",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "7c187486-112b-6dca-1893891be3ad",
                  "usage_id": "a69c9ce0-24e2-864c-7804dc0d9008",
                  "usage_events": [
                    {
                      "eventID": "1e450165-e6a8-6cf7-d5e47db6de7a",
                      "eventType": "OVERHEATED",
                      "acceleration": 0.92,
                      "air_temperature": 15.82,
                      "engine_temperature": 179.42,
                      "light_level": 10.36,
                      "pitch": 0.17,
                      "roll": -3.38,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                },
                {
                  "vin": "639320642",
                  "colour": "cyan",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "87e3c065-3ffe-4436-4061fbb1a53c",
                  "usage_id": "d7f60273-1d67-43b1-964e4b71cec9",
                  "usage_events": [
                    {
                      "eventID": "6929f592-b278-7649-0875cbd82bc3",
                      "eventType": "OVERHEATED",
                      "acceleration": 1.03,
                      "air_temperature": 16.42,
                      "engine_temperature": 133.96,
                      "light_level": 62.56,
                      "pitch": -0.2,
                      "roll": -0.92,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                }
            ],
            "Nebula": [
                {
                    "vin": "652345894",
                    "colour": "blue",
                    "vehicleStatus": "ACTIVE",
                 	"policy_id": "4550f34f-e14c-aaf3-4011-c41339fdf24d",
                  	"usage_id": "5670c17d-7d7d-14fc-d122-4af973d84512",
                  	"usage_events": [
                      {
                          "eventID": "bdd62684-be96-e0c9-c059-c493e7d38532",
                          "eventType": "CRASHED",
                          "acceleration": 6.17,
                          "air_temperature": 22.13,
                          "engine_temperature": 27.8,
                          "light_level": 501.79,
                          "pitch": -1.06,
                          "roll": 1.07,
                          "timestamp": "2017-08-31T15:21:23.002Z"
                  	  },
                      {
                          "eventID": "8b59d814-1986-e040-1415-5c07fea367c8",
                          "eventType": "OVERHEATED",
                          "acceleration": 1.21,
                          "air_temperature": 19.34,
                          "engine_temperature": 157.64,
                          "light_level": 404.72,
                          "pitch": 0.56,
                          "roll": 10.33,
                          "timestamp": dateInLastWeek()
                  	  }]
                },
                {
                  "vin": "317275241",
                  "colour": "pink",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "7bb5e604-61cc-6107-0fa30ee72588",
                  "usage_id": "c4dea853-125e-ad50-50967724add9",
                  "usage_events": [
                    {
                      "eventID": "16b91457-13a3-7222-bbcde60f89fd",
                      "eventType": "OVERHEATED",
                      "acceleration": 1.43,
                      "air_temperature": 10.3,
                      "engine_temperature": 246.95,
                      "light_level": 88.77,
                      "pitch": -0.73,
                      "roll": -3.25,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                },
                {
                  "vin": "184729204",
                  "colour": "orange",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "49469a14-9bdb-ede7-a34257e90f33",
                  "usage_id": "d4bdd5b5-67aa-b3ad-7a47c18d49dd",
                  "usage_events": [
                    {
                      "eventID": "b51d5df9-7832-5840-5038bde65f60",
                      "eventType": "OVERHEATED",
                      "acceleration": 0.51,
                      "air_temperature": 22.59,
                      "engine_temperature": 102.15,
                      "light_level": 14.74,
                      "pitch": 1.17,
                      "roll": -3.33,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                },
                {
                  "vin": "862212517",
                  "colour": "cyan",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "d67a3dcb-cfa1-5abe-673ed5f27a4c",
                  "usage_id": "ba2d8436-690d-f620-fda5073a8140",
                  "usage_events": [
                    {
                      "eventID": "9942eafd-fc86-31a7-05c93332a65c",
                      "eventType": "OVERHEATED",
                      "acceleration": 0.66,
                      "air_temperature": 16.65,
                      "engine_temperature": 205.82,
                      "light_level": 40.51,
                      "pitch": 0.95,
                      "roll": 2.11,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                },
                {
                  "vin": "775544431",
                  "colour": "white",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "d47ad906-f090-d048-d804ca592107",
                  "usage_id": "ced0ae40-9e2b-2d05-937a273f488c",
                  "usage_events": [
                    {
                      "eventID": "cb140483-3c3c-4dbc-2be7499b0d89",
                      "eventType": "OVERHEATED",
                      "acceleration": 0.61,
                      "air_temperature": 11.64,
                      "engine_temperature": 186.11,
                      "light_level": 94.05,
                      "pitch": 3.25,
                      "roll": 1.77,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                }
            ],
          	"Thanos": [
                {
                    "vin": "312748894",
                    "colour": "black",
                    "vehicleStatus": "ACTIVE",
                 	  "policy_id": "226de8ed-5925-e9d8-dc13-d46c7f1e5bd2",
                  	"usage_id": "6d32e6c3-2a21-ce25-cae3-cc70c7eaa677",
                  	"usage_events": [
                      {
                          "eventID": "f2cf0b43-c61b-3861-dd54-d330fdbb5a5e",
                          "eventType": "OVERHEATED",
                          "acceleration": 1.45,
                          "air_temperature": 10.64,
                          "engine_temperature": 127.64,
                          "light_level": 306.22,
                          "pitch": 0.02,
                          "roll": 0.18,
                          "timestamp": dateInLastWeek()
                  	  }]
                },
             	{
                    "vin": "989144221",
                    "colour": "indigo",
                  	"vehicleStatus": "ACTIVE",
                    "policy_id": "1b23f25f-4eb4-191c-3ff6bc281600",
                    "usage_id": "92497f03-92a3-a99a-edf4cb687158",
                    "usage_events": [
                      {
                        "eventID": "870a2806-767c-e2da-70347bab820b",
                        "eventType": "OVERHEATED",
                        "acceleration": 1.3,
                        "air_temperature": 23.97,
                        "engine_temperature": 142.49,
                        "light_level": 88.9,
                        "pitch": -2.08,
                        "roll": -0.15,
                        "timestamp": dateInLastWeek()
                      }
                    ]
                },
                {
                  "vin": "376331466",
                  "colour": "blue",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "cee6367e-d33e-4940-a11615548d26",
                  "usage_id": "65ea488c-43be-adfc-e2975115f86a",
                  "usage_events": [
                    {
                      "eventID": "28d42301-25e8-b3cd-bd9b7982bf84",
                      "eventType": "OVERHEATED",
                      "acceleration": 1.37,
                      "air_temperature": 19.14,
                      "engine_temperature": 239.44,
                      "light_level": 37.04,
                      "pitch": -2.55,
                      "roll": -1.94,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                },
              	{
                  "vin": "867473247",
                  "colour": "aqua",
                  "vehicleStatus": "ACTIVE",
                  "policy_id": "04ccd1c0-551e-f696-cb4fe1c65e1e",
                  "usage_id": "95e35fa5-0678-9172-8e331158cd68",
                  "usage_events": [
                    {
                      "eventID": "b87dea3c-2bc8-ef17-b288d0e5bee3",
                      "eventType": "OVERHEATED",
                      "acceleration": 1.01,
                      "air_temperature": 10.22,
                      "engine_temperature": 174.59,
                      "light_level": 80.72,
                      "pitch": -1.15,
                      "roll": -2.31,
                      "timestamp": dateInLastWeek()
                    }
                  ]
                },
              {
                "vin": "657249368",
                "colour": "orange",
                "vehicleStatus": "ACTIVE",
                "policy_id": "10d2f5e4-6a91-3f44-7e58e56007ed",
                "usage_id": "c36e3840-67ff-05b9-691569ae61ae",
                "usage_events": [
                  {
                    "eventID": "457e93b0-5dda-70fd-b580bf262cbe",
                    "eventType": "OVERHEATED",
                    "acceleration": 1.18,
                    "air_temperature": 21.34,
                    "engine_temperature": 174.37,
                    "light_level": 32.57,
                    "pitch": -3.6,
                    "roll": 3.48,
                    "timestamp": dateInLastWeek()
                  }
                ]
              }
            ]
        }, 
        "Morde": {
            "Putt": [
                {
                    "vin": "6437956437", 
                    "colour": "black",
                    "vehicleStatus": "ACTIVE",
                    "suspiciousMessage": "Mileage anomaly",
                 	"policy_id": "52e0b341-1fbb-bfcb-afbf-9087ca574ea5",
                  	"usage_id": "2550ad85-5c91-aac0-33fb-484257a2b3e8",
                  	"usage_events": []
                },
                {
                    "vin": "857642213", 
                    "colour": "red",
                    "vehicleStatus": "ACTIVE",
                 	"policy_id": "5b303fe5-c15e-68ab-320f-329a4bb31f52",
                  	"usage_id": "af176e86-49e5-be97-564b-c8b8cb6ab80a",
                  	"usage_events": []
                },
                {
                    "vin": "542376495", 
                    "colour": "silver",
                    "vehicleStatus": "ACTIVE",
                 	"policy_id": "73600b13-0233-160a-ab37-29f22078bf65",
                  	"usage_id": "c1f186a8-413e-0a4f-55eb-cf3a0bf90e21",
                  	"usage_events": []
                }
            ],
            "Pluto": [
                {
                    "vin": "976431649", 
                    "colour": "white",
                    "vehicleStatus": "ACTIVE",
                 	"policy_id": "af42f2b8-77cd-de0f-eada-d4eb823cc28d",
                  	"usage_id": "acb83a58-363f-4baf-8ec3-2a9d6caeff4a",
                  	"usage_events": []
                },
                {
                    "vin": "564215468", 
                    "colour": "green",
                    "vehicleStatus": "ACTIVE", 
                    "suspiciousMessage": "Insurance write-off but still active",
                 	"policy_id": "b825c69a-6dc1-bdd2-d7a9-11f6edea8cd5",
                  	"usage_id": "b9f847b0-96cf-0ad1-ad30-42123bc0fa97",
                  	"usage_events": []
                },
                {
                    "vin": "784512464", 
                    "colour": "grey",
                    "vehicleStatus": "ACTIVE",
                 	"policy_id": "c369729c-ed07-98b3-f2a1-1743dc67b128",
                  	"usage_id": "bf3adfb1-b6ed-b58b-ac8b-bbfb78c47bc3",
                  	"usage_events": []
                }
            ]
        },
        "Ridge": {
            "Cannon": [
                {
                    "vin": "457645764",
                    "colour": "red",
                    "vehicleStatus": "ACTIVE",
                 	"policy_id": "e2943537-6be5-28bd-f708-d69a61621633",
                  	"usage_id": "2fd6f52b-f39a-c6f2-61ca-bd12321137a0",
                  	"usage_events": []
                },
                {
                    "vin": "312457645",
                    "colour": "white",
                    "vehicleStatus": "ACTIVE", 
                    "suspiciousMessage": "Suspicious ownership sequence",
                 	"policy_id": "f7ea289f-45a4-70a9-a048-b749d404e636",
                  	"usage_id": "1d756bdf-1a2b-df14-7237-f8d116bb3b0e",
                  	"usage_events": []
                },
                {
                    "vin": "65235647",
                    "colour": "silver",
                    "vehicleStatus": "ACTIVE", 
                    "suspiciousMessage": "Untaxed vehicle",
                 	"policy_id": "d492df1a-8c55-6aa0-8156-cef44449f01a",
                  	"usage_id": "392b202b-7e19-ef7d-8979-52003a0f2bcf",
                  	"usage_events": []
                }
            ], 
            "Rancher": [
                {
                    "vin": "85654575",
                    "colour": "blue",
                    "vehicleStatus": "ACTIVE",
                 	"policy_id": "b0bd689c-e4d8-b46e-ec77-3f77088a26f1",
                  	"usage_id": "ea3b7184-54f0-f9f4-ef2e-c0f766e9c357",
                  	"usage_events": []
                }, 
                {
                    "vin": "326548754",
                    "colour": "white",
                    "vehicleStatus": "ACTIVE", 
                    "suspiciousMessage": "Uninsured vehicle",
                 	"policy_id": "7ab688a4-5613-93c2-2563-b6241765adaa",
                  	"usage_id": "1405c815-2d58-5574-91f6-b741d85e125c",
                  	"usage_events": []
                }
            ]
        }
    };
    
    var manufacturers = [];
    var privateOwners = [];
  	var insurers = [];

    for (var name in vehicles) {
        var manufacturer = factory.newResource(NS_M, 'Manufacturer', name);
        manufacturers.push(manufacturer);
    }
  
  	for(var i=0; i<insurance_firms.length; i++) {
       var name = insurance_firms[i];
       var insurer = factory.newResource(NS_I, 'Insurer', name);
       insurers.push(insurer);
   }

   for(var i=0; i<names.length; i++) {
       var name = names[i];
       var privateOwner = factory.newResource(NS, 'PrivateOwner', name);
       privateOwners.push(privateOwner);
   }

    var regulator = factory.newResource(NS, 'Regulator', 'regulator');


    var privateOwnerRegistry;
    var vehicleRegistry;

    return getParticipantRegistry(NS + '.Regulator')
        .then(function(regulatorRegistry) {
            return regulatorRegistry.add(regulator);
        })
  		.then(function() {
            return getParticipantRegistry(NS_I + '.Insurer');
        })
        .then(function(insurerRegistry) {
            return insurerRegistry.addAll(insurers);
        })
        .then(function() {
            return getParticipantRegistry(NS_M + '.Manufacturer');
        })
        .then(function(manufacturerRegistry) {
            return manufacturerRegistry.addAll(manufacturers);
        })
        .then(function() {
            return getParticipantRegistry(NS + '.PrivateOwner');
        })
        .then(function(privateOwnerRegistry) {
            return privateOwnerRegistry.addAll(privateOwners);
        })
        .then(function() {
            return getAssetRegistry(NS_D + '.Vehicle');
        })
        .then(function(vehicleRegistry) {
            var vs = [];
            var carCount = 0;
            for (var mName in vehicles) {
                var manufacturer = vehicles[mName];
                for (var mModel in manufacturer) {
                    var model = manufacturer[mModel];
                    for(var i=0; i<model.length; i++) {
                        var vehicleTemplate = model[i];
                        var vehicle = factory.newResource(NS_D, 'Vehicle', vehicleTemplate.vin);
                        vehicle.owner = factory.newRelationship(NS, 'PrivateOwner', names[carCount]);
                        vehicle.vehicleStatus = vehicleTemplate.vehicleStatus;
                        vehicle.vehicleDetails = factory.newConcept(NS_D, 'VehicleDetails');
                        vehicle.vehicleDetails.make = mName; 
                        vehicle.vehicleDetails.modelType = mModel; 
                        vehicle.vehicleDetails.colour = vehicleTemplate.colour; 
                        vehicle.vehicleDetails.vin = vehicleTemplate.vin;

                        if (vehicleTemplate.suspiciousMessage) {
                            vehicle.suspiciousMessage = vehicleTemplate.suspiciousMessage;
                        }

                        if (!vehicle.logEntries) {
                            vehicle.logEntries = [];
                        }

                        var logEntry = factory.newConcept(NS_D, 'VehicleTransferLogEntry');
                        logEntry.vehicle = factory.newRelationship(NS_D, 'Vehicle', vehicleTemplate.vin);
                        logEntry.buyer = factory.newRelationship(NS, 'PrivateOwner', names[carCount]);
                        logEntry.timestamp = setupDemo.timestamp

                        vehicle.logEntries.push(logEntry);

                        vs.push(vehicle);
                        carCount++;
                    }
                }
            }
            return vehicleRegistry.addAll(vs);
        })
  		.then(function() {
            return getAssetRegistry(NS_I + '.Policy');
        })
        .then(function(insurerRegistry) {
      		var policies = [];
     		var car_count = 0;
            for (var mName in vehicles) {
                var manufacturer = vehicles[mName];
                for (var mModel in manufacturer) {
                    var model = manufacturer[mModel];
                    for(var i=0; i<model.length; i++) {
                      var vehicleTemplate = model[i];
                      var policy = factory.newResource(NS_I, 'Policy', vehicleTemplate.policy_id);
                      policy.vehicleDetails = factory.newRelationship(NS_D, 'Vehicle', vehicleTemplate.vin);
                      policy.holder = factory.newRelationship(NS, 'PrivateOwner', names[car_count]);
                      policy.insurer = factory.newRelationship(NS_I, 'Insurer', 'prince');
                      policy.policyType = 'Fully Comprehensive';
                      car_count++;
                      policies.push(policy);
                    }
                }
            }
      		// CREATE A POLICY WITH PRINCE FOR EACH CAR
      		return insurerRegistry.addAll(policies);
        })
  		.then(function(){
      		return getAssetRegistry(NS_D + '.UsageRecord')
    	})
        .then(function (usageRegistry) {
      		var usageRecords = [];
     		var car_count = 0;
            for (var mName in vehicles) {
                var manufacturer = vehicles[mName];
                for (var mModel in manufacturer) {
                    var model = manufacturer[mModel];
                    for(var i=0; i<model.length; i++) {
                      var vehicleTemplate = model[i];
                      var usageRecord = factory.newResource(NS_D, 'UsageRecord', vehicleTemplate.usage_id);
                      usageRecord.vehicleDetails = factory.newRelationship(NS_D, 'Vehicle', vehicleTemplate.vin);
                      usageRecord.usageEvents = [];
                      for(var j = 0; j < vehicleTemplate.usage_events.length; j++)
                      {
                       	var usageEvent =  factory.newConcept(NS_D, 'UsageEvent');
                        for(key in vehicleTemplate.usage_events[j])
                        {
                         usageEvent[key] = vehicleTemplate.usage_events[j][key]
                        }
                        usageEvent.timestamp = new Date(usageEvent.timestamp)
                        usageRecord.usageEvents.push(usageEvent);
                      }
                      usageRecords.push(usageRecord);
                    }
                }
            }
            return usageRegistry.addAll(usageRecords);
        })
}