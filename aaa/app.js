function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Add leading zeros to minutes and seconds
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Choose between 12-hour or 24-hour format
    var timeFormat = (hours > 12) ? "PM" : "AM";
    hours = (hours > 12) ? hours - 12 : hours;
  
    // Display the clock
    var clockDiv = document.getElementById("clock");
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + timeFormat;
  }
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);