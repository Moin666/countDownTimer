var daysDisplay = document.getElementById("daysDisplay")
var hoursDisplay=document.getElementById("hoursDisplay")
var minuteDisplay = document.getElementById("minuteDisplay")
var secondsDisplay = document.getElementById("secondsDisplay")

var seconds = 1000;
var minute = seconds * 60;
var hour = minute * 60;
var day = hour * 24;


var interval = setInterval(TimerStart,100)


function TimerStart(){

    var futureDate = new Date("14-jan-2022");
    var currentDate = new Date().getTime();

    var gap = futureDate - currentDate;
    var txtDays = Math.floor(gap/day);
    var txtMinute = Math.floor((gap % hour) / minute);
    var txtHours = Math.floor((gap % day) / hour);
    var txtseconds = Math.floor((gap % minute) / seconds);
    
    daysDisplay.innerHTML = txtDays;
    hoursDisplay.innerHTML = txtHours;
    minuteDisplay.innerHTML =  txtMinute;
    secondsDisplay.innerHTML = txtseconds;
    
    
    
    // console.log(daysDisplay)
    // console.log(currentDate)
    console.log(gap)
    // console.log("Days ",txtDays)
    // console.log("Minutes ",txtMinute)
    // console.log("Hours ",txtHours)
    console.log("Seconds ",txtseconds)
    
}
    
    
    // new Date(year, month, day, hours, minutes, seconds, milliseconds)