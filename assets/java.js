
  var firebaseConfig = {
    apiKey: "AIzaSyA9G4hHSqb0EPIe52eFX49WeZH6AWxqT4Y",
    authDomain: "traintime-f2710.firebaseapp.com",
    databaseURL: "https://traintime-f2710.firebaseio.com",
    projectId: "traintime-f2710",
    storageBucket: "traintime-f2710.appspot.com",
    messagingSenderId: "528508964654",
    appId: "1:528508964654:web:31f72ab8bea9f2f0ba34bf",
    measurementId: "G-J6PK9TSJXM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var train = ""
var destination = ""
var firstTime = 0;
var frequency = 0;

// var api = "http://api.bart.gov/api/etd.aspx";
// var query = "?cmd=etd&orig=";
// var key = "&key=MW9S-E7SL-26DU-VV8V&json=y";
// let array = ['12TH', '16TH', '19TH', '24TH', 'ANTC', 'ASHB', 'BALB', 'BAYF', 'CAST', 'CIVC', 'COLS', 'COLM', 'CONC', 'DALY', 'DBRK', 'DUBL', 'DELN', 'PLZA', 'EMBR', 'FRMT', 'FTVL', 'GLEN', 'HAYW', 'LAFY', 'LAKE', 'MCAR', 'MLBR', 'MONT', 'NBRK', 'NCON', 'OAKL', 'ORIN', 'PITT', 'PCTR', 'PHIL', 'POWL', 'RICH', 'ROCK', 'SBRN', 'SFIA', 'SANL', 'SHAY', 'SSAN', 'UCTY', 'WCRK', 'WARM', 'WDUB', 'WOAK']




$("#add-user").on('click', function (event) {
    event.preventDefault();

    train = $("#train").val().trim();
    destination = $("#destination").val().trim();
    firstTime = $("#firstTime").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref().push({

        train: train,
        destination: destination,
        firstTime: firstTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
    
    // console.log("Button Clicked!")
    // for (let i = 0; i < array.length; i++) {
    //     var rapid = `${array[i]}`
    //     var xhr = $.get(api + query + rapid + key).done(function (xhr) {
    //         // console.log("success got data");
    //         var bartReply = xhr
    //         console.log(`${bartReply.root.station[0].name}`)

    //         for (i in bartReply) {
    //             $("#You").append(`${bartReply.root.station[0].name}`)
    //             $("#Are").append(`${bartReply.root.station[0].etd[0].destination}`)
    //             $("#The").append(`${bartReply.root.station[0].etd[0].estimate[0].direction}`)
    //             $("#Best").append(`${bartReply.root.station[0].etd[0].estimate[0].minutes}`)
    //             $("#Train").append(`${bartReply.root.station[0].etd[0].destination}`)

    //         }

    //     })
    // }



});

database.ref().on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().train);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().firstTime);
    console.log(childSnapshot.val().frequency);
   

    // full list of items to the well
    

    // Handle the errors
  });

  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // Change the HTML to reflect
    $("#You").append(snapshot.val().train, "<br>");
    $("#Are").append(snapshot.val().destination, "<br>");
    $("#The").append(snapshot.val().firstTime, "<br>");
    $("#Best").append(snapshot.val().frequency, "<br>");

    
  });