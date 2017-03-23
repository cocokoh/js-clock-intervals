document.addEventListener('DOMContentLoaded', function () {
  var secondHand = document.getElementById('second')
  var minuteHand = document.getElementById('minute')
  var hourHand = document.getElementById('hour')

 var actualSecond = 0
  var rotateDegree = 6
  var rotateDegreeHour = 30
  var timeInterval= 1000

 // function secondRotation (sec) {
 //    secondHand.style.transform = 'rotate(' + actualSecond * rotateDegree + 'deg)'
 //    minuteRotate()
 //    actualSecond ++

 // }
 // setInterval(secondRotation.bind(null, actualSecond), 1000)

setInterval(runClock, timeInterval)
var time = new Date()
 function runClock(second){
   var time = new Date()
   updateTime('second', time.getSeconds(), rotateDegree)
   updateTime('minute', time.getMinutes(), rotateDegree)
   updateTime('hour', time.getHours(), rotateDegreeHour)
  //  secondRotation(time.getSeconds())
  //  minuteRotate(time.getMinutes())
  //  hourRotate(time.getHours())
  //  setInterval(runClock.bind(), timeInterval)
 }
var digitalClocks = document.querySelector('#digitalClock')
digitalClocks.textContent = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()

function updateTime(element, timeUnit, degree){
  // console.log('update the time element:' + element + 'to' + timeUnit)
  var element = document.querySelector('#' + element)
  // console.log(element)
  element.style.transform = 'rotate('+timeUnit*degree+'deg)'
}

 function minuteRotate(){
    var actualMinute = Math.floor(actualSecond/60)
    // console.log(actualMinute)
    minuteHand.style.transform = 'rotate(' + actualMinute * rotateDegree + 'deg)'
    hourRotate(actualMinute)
  }


 function hourRotate(min){
    var actualHour = Math.floor(min/60)
    hourHand.style.transform = 'rotate(' + actualHour * rotateDegreeHour + 'deg)'
  }

 // setInterval(secondRotation, 100)


})
