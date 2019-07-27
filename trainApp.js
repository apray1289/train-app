var firebaseConfig = {
    apiKey: "AIzaSyAf17XIvGQ4bdF7csnnWAGeT_j_zBczSSw",
    authDomain: "train-app-homework.firebaseapp.com",
    databaseURL: "https://train-app-homework.firebaseio.com",
    projectId: "train-app-homework",
    storageBucket: "",
    messagingSenderId: "826688605930",
    appId: "1:826688605930:web:833a62e170398a85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();



$("#form-button").on("click", function (event) {

    console.log("clicked");
    event.preventDefault();
    console.log("clickedafter");


    var trainInfo = {
        name: $("#name").val().trim(),
        destination: $("#destination").val().trim(),
        firstTrain: $("#train-time").val().trim(),
        frequency: $("#frequency").val().trim(),


    };



    // var newTrain = {
    //     name: name,
    //     destination: destination,
    //     firstTrain: firstTrain,
    //     frequency: frequency,
    // }

    // database.ref().push(newTrain);

    database.ref().push({
        name: trainInfo.name,
        destination: trainInfo.destination,
        firstTrain: trainInfo.firstTrain,
        frequency: trainInfo.frequency,
    });



});

database.ref().on("child_added", function (snapshot) {

    var name = snapshot.val().name;
    var destination = snapshot.val().destination;
    var firstTrain = snapshot.val().firstTrain;
    var frequency = parseInt(snapshot.val().frequency);
    var nextArrival = "";
    var minsAway;

    var sv = snapshot.val();
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().firstTrain);
    console.log(snapshot.val().frequency);

    // First train next arrival= first train+ frequency what is the current time and find the frequency after 2pm.

    var firstTrainConverted = moment(sv.firstTrain, "HH:mm").subtract(1, "years");
    console.log(firstTrainConverted.format());

    var currentTime = moment();
    console.log(moment());
    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    var timeRemaining = diffTime % frequency;
    console.log({ frequency, diffTime, timeRemaining })
    minsAway = frequency - timeRemaining;

    console.log({ minsAway });

    nextArrival = moment().add(minsAway, "minutes");

    console.log("arrival time: " + moment(nextArrival).format("hh:mm"));

    var newRow = $("<tr>");
    var tableDataName = $("<td>");
    var tableDataDestination = $("<td>");
    var tableDataFrequency = $("<td>");
    var tableDataNextArrival = $("<td>");
    var tableDataMinutesAway = $("<td>");

    tableDataName.text(snapshot.val().name);
    tableDataDestination.text(snapshot.val().destination);
    tableDataFrequency.text(snapshot.val().frequency);
    tableDataNextArrival.text(nextArrival);
    tableDataMinutesAway.text(minsAway);



    tableDataName.appendTo(newRow);
    tableDataDestination.appendTo(newRow);
    tableDataFrequency.appendTo(newRow);
    tableDataNextArrival.appendTo(newRow);
    tableDataMinutesAway.appendTo(newRow);
    newRow.appendTo(".info");

});