window.Schedule = Ember.Application.create({
	authToken : null,
	currentuser : null,
	currentproject:null
});

Schedule.ApplicationAdapter = DS.RESTAdapter.extend({
	 host: 'http://localhost:8080/api'

	 
});
Schedule.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id',
  
});
