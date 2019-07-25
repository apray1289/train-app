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

    var name = $("#name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#train-time").val().trim();
    var frequency = $("#frequency").val().trim();
    var nextArrival = "";
    var minsAway = "";




    // var newTrain = {
    //     name: name,
    //     destination: destination,
    //     firstTrain: firstTrain,
    //     frequency: frequency,
    // }

    // database.ref().push(newTrain);

    database.ref().set({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
    });

    $("#name").val("");
    $("#destination").val("");
    $("#train-time").val("");
    $("#frequency").val("");

})

database.ref().on("child_added", function (snapshot) {
    console.log(snapshot.val());

    
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);

    console.log(snapshot.val().firstTrain);
    console.log(snapshot.val().frequency);

var newRow = $("<tr>").append(
$("<td>").text(name);
$("<td>").text(destination);
$("<td>").text(frequency);
$("<td>").text(nextArrival);
$("<td>").text(minsAway);
);

});