/**
 * Place an order for a vehicle
 * @param {org.example.insurance.CreatePolicy} createPolicy - the CreatePolicy transaction
 * @transaction
 */

function createPolicy(createPolicy) {
    console.log('createPolicy');

    var factory = getFactory();
    var NS_I = 'org.example.insurance';
    var NS = 'org.example.vehicle.lifecycle';
  	var NS_V = 'org.example.vda'

    var policy = factory.newResource(NS_I, 'Policy', createPolicy.policyId);
    policy.vehicleDetails = factory.newRelationship(NS_V, 'Vehicle', createPolicy.vehicleDetails.getIdentifier());
    policy.holder = factory.newRelationship(NS, 'PrivateOwner', createPolicy.holder.getIdentifier());
  	policy.insurer = factory.newRelationship(NS_I, 'Insurer', createPolicy.insurer.getIdentifier());
  	policy.policyType = createPolicy.policyType;

    // save the order
    return getAssetRegistry(policy.getFullyQualifiedType())
        .then(function (registry) {
            return registry.add(policy);
        })
        .then(function(){
    		var policyEvent = factory.newEvent(NS_I, 'PolicyEvent');
      		policyEvent.policyId = createPolicy.policyId;
      		policyEvent.vehicleDetails = policy.vehicleDetails;
      		policyEvent.holder = policy.holder;
      		policyEvent.insurer = policy.insurer;
      		policyEvent.policyType = policy.policyType;
    		emit(policyEvent);
    	});
}