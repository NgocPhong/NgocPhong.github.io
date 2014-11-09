Schedule.ScheduleIndexController = Ember.ObjectController.extend({
content: {},
	
	actions: {
    userlogin:function(){
var _data = this.getProperties( "name", "password");
console.log( _data);
$.post("https://rocky-dusk-5116.herokuapp.com/api/user/login",
    _data,
    function(data, textStatus, jqXHR)
    {
      console.log(data);
          //data: Received from server
    });
    },
   createuser:function(){

var _data = this.getProperties( "name", "password");
console.log( _data);
var seft = this;
$.post("https://rocky-dusk-5116.herokuapp.com/api/user/new",
    _data,
    function(data, textStatus, jqXHR)
    {
      console.log(data.message);
          //data: Received from server

        seft.transitionToRoute('Schedule.login');
    });
    

/*$.ajax({
    
    url: 'http://localhost:8080/api/user/new',
    type: "POST",
    dataType: "jsonp",
     contentType: 'application/x-www-form-urlencoded',
    jsonp: false,
    jsonpCallback: false,
     cache : true,
     data: _data
  }).then(function(response){
console.log(response);
  });*/
  /*Em.$.ajax('http://localhost:8080/api/user/new', {
    contentType: 'application/x-www-form-urlencoded',
        "type": 'POST', // HTTP method
        "dataType": 'JSONP', // type of data expected from the API response
        "data": _data, // End data payload
        "success": function (data, textStatus, jqXHR) {
            console.log('success');
        },
        "error": function (jqXHR, textStatus, errorThrown) {
            window.console.log(jqXHR);
        }
    });*/
    
   }
   
    
  }
});
Schedule.ScheduleLoginController = Ember.ObjectController.extend({
content: {},
  authToken: localStorage.authToken,
  actions: {
    tokenchanged: function(){
      localStorage.authToken = this.get('authToken');
    }.observes('authToken'),
    userlogin:function(){

      var seft = this;
var _data = this.getProperties( "name", "password");
console.log( _data);
$.post("https://rocky-dusk-5116.herokuapp.com/api/user/login",
    _data,
    function(data, textStatus, jqXHR)
    {
      console.log(data.sucess);
      if(data.sucess){
        authToken = data.message;

        Ember.$.ajaxPrefilter(function( options, oriOptions, jqXHR ) {
          jqXHR.setRequestHeader("AUTH", data.message);
        });
        Schedule.set('authToken', data.message);
        Schedule.set('currentuser', _data.name);
         seft.transitionToRoute('Schedule.welcome');
       // Ember.transitionTo('Project');
        /*

          Schedule.set('authToken', data.message);
           console.log(Ember.get('Schedule.authToken'));
             console.log(Schedule.authToken);*/
      }
    //  route.transitionToRoute('Project');
          //data: Received from server
    });
  //this.transitionToRoute('Schedule.welcome');
    }
   
    
  }
});