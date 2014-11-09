Schedule.TotalreportController = Ember.Controller.extend({
  projectreport:null,
  taskreport:null,
  actions:{
     showprojectreport: function() 
    {
             
             
             var _data = this.getProperties( "fromdate", "todate");
             console.log( _data);
             var seft = this;
             $.post("http://localhost:8080/api/Project/report",
              _data,
              function(data, textStatus, jqXHR)
              {
                console.log(data);
                    //data: Received from server
              seft.set('projectreport' , data.toArray());
                  
              });
        
    },
    showtaskreport: function() 
    {
   
    var seft = this;
    var _data = this.getProperties( "tfromdate", "ttodate","projectid");
       $.post("http://localhost:8080/api/Task/report",
              _data,
              function(data, textStatus, jqXHR)
              {
                var array = [];
            for(i=0;i<data.length;i++){
              var myobj={
                label:data[i].label,
                time: new Date(data[i].time),
                value:parseInt(data[i].value)

              };
              array.push(myobj);
            }
            console.log( array);
             seft.set('taskreport' , array);
                  
              });

  /* console.log(this.get('project'));
          var seft = this;
          Ember.$.getJSON( "http://localhost:8080/api/Task/report").then( function( data ) {
            console.log(  data.toArray());
          
        });*/
     },
  },
  // Used for horizontal bar chart, vertical bar chart, and pie chart
 /* content: [
  {
    "label": "Equity",
    "value": 12935781.176999997
  },
  {
    "label": "Real Assets",
    "value": 10475849.276172025
  },
  {
    "label": "Fixed Income",
    "value": 8231078.16438347
  },
  {
    "label": "Cash & Cash Equivalent",
    "value": 5403418.115000006
  },
  {
    "label": "Hedge Fund",
    "value": 1621341.246006786
  },
  {
    "label": "Private Equity",
    "value": 1574677.59
  }
  ],*/
  
 
  
  // Used only for time series chart
  timeSeriesBarContent: [
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
      label: "Financial analytics software",
      value: 49668
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-06-15"),
      label: "Financial analytics software",
      value: 68344
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-07-16"),
      label: "Financial analytics software",
      value: 60654
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-08-16"),
      label: "Financial analytics software",
      value: 48240
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-09-16"),
      label: "Financial analytics software",
      value: 62074
    }
  ],
  
  // Used only for time series chart
  timeSeriesLineContent: [
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
      label: "Software & Programming",
      value: 17326,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
      label: "Telecommunication",
      value: 4515,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-06-15"),
      label: "Software & Programming",
      value: 15326,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-06-15"),
      label: "Telecommunication",
      value: 1515,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-07-16"),
      label: "Software & Programming",
      value: 14326,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-07-16"),
      label: "Telecommunication",
      value: 8518,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-08-16"),
      label: "Software & Programming",
      value: 42301,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-08-16"),
      label: "Telecommunication",
      value: 90191,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-09-16"),
      label: "Software & Programming",
      value: 57326,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-09-16"),
      label: "Telecommunication",
      value: 39544,
      type: "money"
    }
  ]
});