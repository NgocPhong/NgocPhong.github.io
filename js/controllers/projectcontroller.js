Schedule.EditController = Ember.ObjectController.extend({
	actions: {
   
    acceptChanges: function() 
    {
   
   
    	console.log(Schedule.authToken);
        //this.store.update('Student', this.get('model')).save();
      this.get('model').save();
      console.log( this.get('model'));
          this.transitionToRoute('Project');
    }
  }
});
Schedule.DeleteController = Ember.ObjectController.extend({
	
	actions:{
		 
   		 removeProject: function () {
    var project = this.get('model');
    project.deleteRecord();
    project.save();
     this.transitionToRoute('Project');
  }
	}
});
Schedule.ProjectNewController = Ember.ArrayController.extend({
  
 actions: {
   
  
    createProject: function() {
      // Get the todo title set by the "New Todo" text field
      var newname = this.get('newname');
      var newdescription = this.get('newdescription');
      console.log(newname);
      if (!newname) { return false; }
      if (!newname.trim()) { return; }
    if (!newdescription) { return false; }
      if (!newdescription.trim()) { return; }
     
      // Create the new Todo model
      var newproject = this.store.createRecord('Project', {
        name: newname,
        description: newdescription,
    
      });

      // Clear the "New Todo" text field
      

      // Save the new model
      newproject.save();
       this.transitionToRoute('Project');
    }
  }
});