
/*Schedule.Task = DS.Model.extend({

  starttime: DS.attr('string'),
  endtime: DS.attr('string'),
    description:DS.attr('string'),
  project:DS.belongsTo('project',  {async: true})

});*/
Schedule.Task = DS.Model.extend({

  starttime: DS.attr('date'),
  endtime: DS.attr('date'),
  description:DS.attr('string'),
  project:DS.attr('string'),
  value: DS.attr('number')
});