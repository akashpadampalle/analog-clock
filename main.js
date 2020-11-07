var secondHand = document.querySelector('#second-hand')
var minuteHand = document.querySelector('#minute-hand')
var hourHand = document.querySelector('#hour-hand')

var dayName = document.querySelector('#day')
var calDate = document.querySelector('#date')

setSecondHand()
setMinuteHand()
setHourHand()
setDayName()

function setSecondHand(){
    let date = new Date()
    secondHand.style.transform = `rotate(${(date.getSeconds())*6+180}deg)`
    return 0;
}
function setMinuteHand(){
    let date = new Date()
    minuteHand.style.transform = `rotate(${(date.getMinutes()*6+180)}deg)`
    return 0;
}
function setHourHand(){
    let date = new Date()
    var hourHandDeg
    if(date.getHours()>12){
        hourHandDeg = (date.getHours())-12
    }else{
        hourHandDeg = date.getHours()
    }
    hourHand.style.transform = `rotate(${(hourHandDeg*30)+(date.getMinutes()/10)+180}deg)` 
    return 0;     
}
function setDayName(){
    var date = new Date()
    var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    dayName.innerText= names[date.getDay()]
}
function setDate(){
    var date = new Date()
    var myDate = `${date.getDate()}`+`-${date.getMonth()}-`+`${date.getFullYear()}`
    calDate.innerText = myDate
}


setInterval(function(){setSecondHand()},1000)
setInterval(function(){setMinuteHand()},60000)
setInterval(function(){setHourHand()},600000)
setInterval(function(){setDayName();setDate(),3600000})