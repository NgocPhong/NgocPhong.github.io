Schedule.Project = DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string'),
  task: DS.hasMany('task',{ async: true }),
  value:DS.attr('number')
 
});
