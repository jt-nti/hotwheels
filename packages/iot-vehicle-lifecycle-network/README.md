# Vehicle Lifecycle Network

> This network tracks the Lifecycle of Vehicles from manufacture to being scrapped involving private owners, manufacturers and scrap merchants. A regulator is able to provide oversight throughout this whole process.

This business network defines:

**Participants**
`AuctionHouse` `Company` `Manufacturer` `PrivateOwner` `Regulator` `Insurer` `ScrapMerchant`

**Assets**
`Order` `Vehicle` `Policy` `UsageRecord`

**Transactions**
`PlaceOrder` `UpdateOrderStatus` `ApplicationForVehicleRegistrationCertificate` `PrivateVehicleTransfer` `CreatePolicy` `CreateUsageRecord` `AddUsageEvent` `ScrapVehicle` `UpdateSuspicious` `ScrapAllVehiclesByColour` `SetupDemo`

**Events**
`PlaceOrderEvent` `UpdateOrderStatusEvent` `CreatePolicyEvent` `AddUsageEventEvent` `ScrapVehicleEvent`

A `PrivateOwner` participant would submit a `PlaceOrder` transaction, through a Manufacturer's application. A `Manufacturer` would submit an `UpdateOrderStatus` transaction which would be the Vehicle being manufactured. They would apply for a registration certificate by submitting an `ApplicationForVehicleRegistrationCertificate` transaction. After the vehicle has been manufactured they would submit a `PrivateVehicleTransfer` transaction. A `Regulator` would be able perform oversight over this whole process and submit an `UpdateSuspicious` transaction to view any suspicious vehicles that may be out of compliance with regulations. An `Insurer` would create a `Policy` relating to a `Vehicle` and `PrivateOwner` using a `CreatePolicy` transaction. A `Vehicle` would, via IoT, submit usage events such as CRASHED, OVERHEATED etc to its `UsageRecord` using `AddUsageEvent`, an `Insurer` would be able monitor these in their application to use for claims against policies and a `Manufacturer` would be able to monitor these to be aware of defects in their Vehicles. A `ScrapMerchant` would be able to submit a `ScrapVehicle` or a `ScrapAllVehiclesByColour` transaction to complete the lifecycle of a vehicle.

To test this Business Network Definition in the **Test** tab:

Submit a `SetupDemo` transaction:

```
{
  "$class": "org.example.vehicle.lifecycle.SetupDemo"
}
```

This transaction populates the Participant Registries with three `Manufacturer` participants, twenty-three `PrivateOwner` participants, one `Insurer` participant and a `Regulator` participant. The `Vehicle` Asset Registry will have twenty two `Vehicle` assets each with their own `UsageRecord` and `Policy`.

Submit a `PlaceOrder` transaction:

```
{
  "$class": "org.example.vehicle.manufacturer.PlaceOrder",
  "orderId": "1234",
  "vehicleDetails": {
    "$class": "org.example.vda.VehicleDetails",
    "make": "Arium",
    "modelType": "Gamora",
    "colour": "Sunburst Orange"
  },
  "manufacturer": "resource:org.example.vehicle.manufacturer.Manufacturer#Arium",
  "orderer": "resource:org.example.vehicle.lifecycle.PrivateOwner#toby"
}
```

This `PlaceOrder` transaction creates a new order in the `Order` Asset Registry. It also emits a `PlaceOrderEvent` events.

Submit a `UpdateOrderStatus` transaction:

```
{
  "$class": "org.example.vehicle.manufacturer.UpdateOrderStatus",
  "orderStatus": "SCHEDULED_FOR_MANUFACTURE",
  "order": "resource:org.example.vehicle.manufacturer.Order#1234"
}
```

This `UpdateOrderStatus` transaction updates the order status of `orderId:1234` in the `Order` Asset Registry. It also emits a `UpdateOrderStatusEvent` event.

Congratulations!

This Business Network definition had been used to create demo applications for the `PrivateOwner`, `Manufacturer`, `Insurer` and `Regulator`. Find more information here: https://github.com/hyperledger/composer-sample-applications
