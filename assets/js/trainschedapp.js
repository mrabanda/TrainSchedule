var config = {
  apiKey: "AIzaSyDGvAgIHjOt3k1D3_F3Ov66qzkP7u-dWzA",
  authDomain: "trainschedule-322d2.firebaseapp.com",
  databaseURL: "https://trainschedule-322d2.firebaseio.com",
  storageBucket: "trainschedule-322d2.appspot.com",
  messagingSenderId: "236411405831"
};
firebase.initializeApp(config);

var database = firebase.database();
var scheduleData = database.ref('/trains');
// 2. Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainTime = $("#first-train-input").val().trim();
  var trainFreq = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFreq
  };

  // Uploads train data to the database
  scheduleData.push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  // Alert
  console.log("train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

  // Prevents moving to new page
  return false;
});

// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
scheduleData.on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFreq = childSnapshot.val().frequency;

  // train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainTime);
  console.log(trainFreq);

  // Prettify the train start
  var trainTimePretty = moment.unix(trainTime).format("HH:mm");

  // Calculate the months worked using hardcore math
  // To calculate the months worked


  // Calculate the total billed frequency


  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  trainTimePretty + "</td><td>" + trainFreq + "</td><td>" + /*minAway*/ + "</td></tr>");
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume train start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case
