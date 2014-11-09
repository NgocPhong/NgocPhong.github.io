Schedule.TotalreportController = Ember.Controller.extend({
  projectreport:null,
  taskreport:null,
  actions:{
     showprojectreport: function() 
    {
             
             
             var _data = this.getProperties( "fromdate", "todate");
             console.log( _data);
             var seft = this;
             $.post("https://rocky-dusk-5116.herokuapp.com/api/Project/report",
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
       $.post("https://rocky-dusk-5116.herokuapp.com/api/Task/report",
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
  }
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
  
 
 
});