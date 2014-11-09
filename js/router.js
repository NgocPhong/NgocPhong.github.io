Schedule.Router.map(function () {
  this.resource('Schedule', { path: '/' }, function () {
    // additional child routes will go here later
    this.route('login');
     this.route('welcome');
  });

   this.resource('Project',{path:'/Project'},function(){
      this.resource('Delete',{path:'Delete/:project_id'});
      this.resource('Edit',{path:'Edit/:project_id'});
      this.route('New');
       this.route('Totalreport');
        this.route('TotalTaskreport');
      this.route('Timer',{path:'Timer/:project_id'},function(){
     
      });
   });
});

Schedule.AuthenticatedtionRoute = Ember.Route.extend({
 actions: {
  error: function(reason,transiton){
    if(reason.status ===401){
      this.transitionTo('Schedule.login');
    }
  
  }
 }
});
Schedule.ScheduleindexRoute = Ember.Route.extend({
 
});
Schedule.ProjectTimerRoute = Schedule.AuthenticatedtionRoute.extend({
  
  beforeModel:function(params){
   Schedule.currentproject = params.providedModelsArray[0];
  //this.controller.set('curpage',0);
//Schedule.currentproject = params.project_id;
 //console.log(Schedule.currentproject);
  },
 model: function(params) {
 // return this.store.find('Task', {project_id:Schedule.currentproject ,skip:1});
    //Schedule.currentproject = this.store.find('project', params.project_id);
   return this.store.find('Task', {project_id:Schedule.currentproject,skip:0});
/*    return this.store.find('Task', {project_id:params.project_id,skip:0});/*.then(function(project)
    {
    
    this.store.find('task', {skip:5}).then(function (col){
      project.get('task').then(function(task){
  task = [];
  task.pushObjects(col);

      });
          
        
    });
  });*/
  },

  setupController: function(controller, model) {
  
   
        // here, controller is whatever controller this route needs
        // by conventions, it knows it should be EmailsController
        // of the type ArrayController
        // model is whatever was returned by the model function above

        // the content is a "bag" which can be filled with a model or any
        // other object you need. Just keep in mind your view layer will
        // be referring to this object later on
        controller.set('curpage', 1);
        controller.set('model', model);
        // you can set other properties of the controller here too
      //  controller.set('applyFilter', true);
    },
   afterModel: function(project) {

     /*this.store.find('task', {skip:5}).then(function (col){
   project.get('task').then(function(task){
   
   console.log(task.length);
  
  task.pushObjects(col);
      });
    });*/
   // if (project.get('length') === 1) {
    //  this.transitionTo('article.show', articles.get('firstObject'));
    }
  
});
Schedule.ProjectRoute = 
Schedule.AuthenticatedtionRoute.extend({
  
 model: function() {
     return this.store.find('project');
    }
});
Schedule.ProjectIndexRoute = 
Schedule.AuthenticatedtionRoute.extend({
 model: function() {
    return this.modelFor('Project');
  }
});
Schedule.ProjectDeleteRoute = 
Schedule.AuthenticatedtionRoute.extend({
  model: function(params) {
    return this.store.find('project', params.project_id);
  }  
});
Schedule.ProjectEditRoute = Schedule.AuthenticatedtionRoute.extend({
 model: function(params) {
    return this.store.find('project', params.project_id);
  }  
     
});
Schedule.ProjectTotalreportRoute = Schedule.AuthenticatedtionRoute.extend({

      controllerName: 'Totalreport',
    /*  model:function(){
      return  Ember.$.getJSON( "http://localhost:8080/api/Task/report").then( function( data ) {
        console.log( "JSON Data: " + data);
  //return json.toArray();
 });
       
      }*/
});
Schedule.ProjectTotalTaskreportRoute = Schedule.AuthenticatedtionRoute.extend({

      controllerName: 'Totalreport',
       model: function() {
     return this.store.find('project');
    }
    /*  model:function(){
      return  Ember.$.getJSON( "http://localhost:8080/api/Task/report").then( function( data ) {
        console.log( "JSON Data: " + data);
  //return json.toArray();
 });
       
      }*/
});

/////




