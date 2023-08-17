var attendees = Number(prompt("How many attendees?"));

//function to input runners and their times
let runners = [];
let time = [];

function addRunners() {
  let i = 0;
  while (i < attendees) {
    var names = prompt("Enter name of runner (first to last)");
    runners.push(names);
    var elapsedTime = prompt("What is the elapsed time (mm.ss.ms)?");
    time.push(elapsedTime);
    i++;
  }
}


//function to add cumulative times and show results 
var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var sum = '';
var newTime = [];

function cumulativeTimes() {
  for (var i in time) {

    minutes += parseInt(time[i].substring(0, 2))
    seconds += parseInt(time[i].substring(3, 5))
    miliseconds += parseInt(time[i].substring(6))

    if (miliseconds > 1000) {
      seconds += parseInt(miliseconds / 1000);
      miliseconds = parseInt(miliseconds % 1000);
    }

    if (seconds > 59) {
      minutes += parseInt(seconds / 60);
      seconds = parseInt(seconds % 60);
    }
    sum = minutes + ":" + seconds + ":" + miliseconds
    newTime.push(sum)
  }

  runners.forEach((runner, index) => {

    document.write(runner + ": " + newTime[index] + "<br />") 

  });


}


addRunners();
cumulativeTimes();
