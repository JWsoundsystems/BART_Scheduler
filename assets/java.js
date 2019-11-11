var api = "http://api.bart.gov/api/etd.aspx";
var query = "?cmd=etd&orig=ANTC";
var key = "&key=MW9S-E7SL-26DU-VV8V&json=y";

let array = []


$("#search").on('click', function() {
    console.log("Button Clicked!") 
    var xhr = $.get(api + query + key).done(function (response) {
        console.log("success got data", xhr, response);
    
      }) 
}); 


  