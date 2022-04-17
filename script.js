"use strict";

// CALCULATING TIME
// function calc() {
//   var hour = Number(document.Time.Time1.value);
//   var min = Number(document.Time.Time2.value);
//   var sec = Number(document.Time.Time3.value);
//   var dist = Number(document.Distance.Dist1.value);
//   var time = hour * 60;
//   var res = time / dist;
//   var pace = res.toString();
//   document.getElementById("minutes").innerHTML = calc;
// }

// <p></p>;
var distanceInput = document.getElementById("distance");
var hoursInput = document.getElementById("hours");
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");
var calculateBtn = document.getElementById("calculate_btn");
var paceText = document.getElementById("pace");

calculateBtn.addEventListener("click", function () {
  // function calc() {
  var miles = parseFloat(distanceInput.value),
    hours = parseFloat(hoursInput.value),
    minutes = parseFloat(minutesInput.value),
    seconds = parseFloat(secondsInput.value);
  var totalMinutes = hours * 60 + minutes + seconds / 60;
  var pace = totalMinutes / miles;
  var paceMinutes = Math.floor(pace);
  var paceSeconds = Math.round((pace - paceMinutes) * 60);

  if (paceSeconds < 10) {
    paceSeconds = "0" + paceSeconds;
  }
  paceText.textContent =
    paceMinutes + ":" + paceSeconds + "" + "minutes per mile";
});

// calculateBtn.addEventListener("click", calc);
