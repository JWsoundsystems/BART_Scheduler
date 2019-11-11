var api = "http://api.bart.gov/api/etd.aspx";
var query = "?cmd=etd&orig=";
var key = "&key=MW9S-E7SL-26DU-VV8V&json=y";
let array = ['12TH', '16TH', '19TH', '24TH', 'ANTC', 'ASHB', 'BALB', 'BAYF', 'CAST', 'CIVC', 'COLS', 'COLM', 'CONC', 'DALY', 'DBRK', 'DUBL', 'DELN', 'PLZA', 'EMBR', 'FRMT', 'FTVL', 'GLEN', 'HAYW', 'LAFY', 'LAKE', 'MCAR', 'MLBR', 'MONT', 'NBRK', 'NCON', 'OAKL', 'ORIN', 'PITT', 'PCTR', 'PHIL', 'POWL', 'RICH', 'ROCK', 'SBRN', 'SFIA', 'SANL', 'SHAY', 'SSAN', 'UCTY', 'WCRK', 'WARM', 'WDUB', 'WOAK']


$("#search").on('click', function() {
    console.log("Button Clicked!") 
    for (let i = 0; i < array.length; i++) {
    var station = `${array[i]}`
    var xhr = $.get(api + query + station + key).done(function (response) {
        console.log("success got data", xhr, response);
    }) 
          }
    
}); 


  