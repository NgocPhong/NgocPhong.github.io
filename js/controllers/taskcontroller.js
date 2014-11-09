Schedule.ProjectTimerController = Ember.ArrayController.extend({
  curpage: 1,
	isEditing: false,
  _seconds: 0,
  _minutes: 0,
  _hours: 0,
  sortProperties: ['value'],
  sortAscending: true,
  time: function(){
      return this.get('_seconds') + ':' + this.get('_minutes')+':'+this.get('_hours');
  }.property('_seconds','_minutes','_hours'),

    tick: function(){
      var s = this.get('_seconds');
      this.set('_seconds',s+1);
  },
       seconds: function(){
      var s = this.get('_seconds');
      if(s == 60) {
          this._seconds = 0;
      };
      return this.get('_seconds');
  }.property('_seconds'),

  minutes: function(){

      var m =  this.get('_minutes');


      var s =  this.get('_seconds');
      if( s == 59) {
          this._minutes = m + 1;
      }
      if( this._minutes == 60) {
          this._minutes = 0;
      }

      return this._minutes;
  }.property('_seconds'),

  hours: function(){
      var m =  this.get('_minutes');
      var h =  this.get('_hours');
      if( m == 59) {
          this._hours = h + 1;
      }
      return this._hours;
  }.property('_minutes'),
  timer: null,
  init:function(){
      this.set('_minutes',0);
      this.set('_hours',0);
      this.set('_seconds', 0);
  },
  stopcount:function(){
                var self = this;
                this.init();
                clearInterval(this.timer);
            },
  startcount:function(){
      var clck = this;
      
    this.timer=  setInterval(function(){
      clck.tick.apply(clck);
      },1000);
  },
	actions: {
    
      loadMore: function() {
       // var id = this.get('model');
        console.log(this.get('curpage'));
      var entryCol = this.get('model');
      console.log(entryCol);
     // entryCol.length =0;
    
    //  entryCol.splice(0,entryCol.length);
      this.store.find('Task', {project_id:Schedule.currentproject ,skip:this.get('curpage')}).then(function (col){
      entryCol.pushObjects(col.toArray());
    

          });
      //curpage++;
      this.set('curpage',this.get('curpage')+1);
        },
    stop:function(){
      this.stopcount();
       this.set('isEditing', false);
       console.log(newproject.get('starttime'));
       console.log();
        var date = new Date();
            var value  = 0;
  value=  (date.getSeconds() - newproject.get('starttime').getSeconds())+(date.getMinutes() - newproject.get('starttime').getMinutes())*60 + (date.getHours() - newproject.get('starttime').getHours())*60*60;
       console.log(value);
       
   var time =   date.getHours() + ":"  
                + date.getMinutes() + ":" 
                + date.getSeconds();
      newproject.set("endtime",date);
      newproject.set('value',value);
      var project =  this.get('model');
     
     newproject.save();
     this.transitionToRoute('Project.Timer',Schedule.currentproject );
  //  var entryCol = this.get('model');
  // entryCol.pushObjects(newproject);
     /*.then(function(newproject){
     
        project.get('task').then(function(task){
                task.pushObject(newproject);
                //task.length = 5;
               //   project.get('task').save();
        });
      
         
 
      });*/
   
            
//console.log(this.store.find('task'));

    },
   
    tasksave: function() 
    {
  
        //this.store.update('Student', this.get('model')).save();
      //this.get('model').save();
     
         
    },
  newproject :null,
  createtask: function() {
      // Get the todo title set by the "New Todo" text field
       this.set('isEditing', true);
      var newdescription = this.get('newdescription');
    //  var project = this.get('model');
  //  listtask = project.get('task');
  this.startcount();
console.log(Schedule.get('currentproject'));
     
    if (!newdescription) { return false; }
      if (!newdescription.trim()) { return; }
      var date = new Date();
   var time = date.getHours() + ":"  
                + date.getMinutes() + ":" 
                + date.getSeconds();
       newproject = this.store.createRecord('Task', {
            description: newdescription,
            starttime: date,
            project:     Schedule.currentproject
      });

      // Clear the "New Todo" text field
      

      // Save the new model
     // newproject.save();
    }
  }
});
Schedule.TaskController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    
     edittask: function() {
    this.set('isEditing', true);
     console.log('timeedit');
     console.log(this.get('model'));
    },
    tasksave: function() 
    {
   this.set('isEditing', false);
   
      
          var task = this.get('model');
   console.log(this.get('model').get('project'));
   task.set('endtime' ,new Date(this.get('endtime'))  );
   task.set('starttime' ,new Date(this.get('starttime'))  );
      console.log(this.get('starttime'));
     task.save();
         
    },
     removetask: function () {
    var task = this.get('model');
    task.deleteRecord();
    task.save();
     this.transitionToRoute('Project.Timer',Schedule.currentproject );
  }
  
        // Clear the "New Todo" text field
      

      // Save the new model
     // newproject.save();
    }
  
});
