window.Schedule = Ember.Application.create({
	authToken : null,
	currentuser : null,
	currentproject:null
});

Schedule.ApplicationAdapter = DS.RESTAdapter.extend({
	 host: 'https://rocky-dusk-5116.herokuapp.com/api'

	 
});
Schedule.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id',
  
});
