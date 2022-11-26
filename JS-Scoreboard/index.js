//connect the buttons for event listeners
const increment_button1 = document.getElementById("increment-button1-h");
const increment_button2 = document.getElementById("increment-button2-h");
const increment_button3 = document.getElementById("increment-button3-h");
const increment_button1_g = document.getElementById("increment-button1-g");
const increment_button2_g = document.getElementById("increment-button2-g");
const increment_button3_g = document.getElementById("increment-button3-g");
const score_number = document.getElementById("score-number");
const score_number1 = document.getElementById("score-number_1");
const display_leader_text = document.getElementById("display-leader-text")
const score_box = document.getElementById("score_box")
const score_box_1 = document.getElementById("score_box_1")

let whistleSound = new Audio("whistle.mp3")


//DISABLE THE INCREMENT BUTTONS BEFORE THE USERS STARTS A TIME
    increment_button1.disabled = true;
    increment_button2.disabled = true;
    increment_button3.disabled = true;
    increment_button1_g.disabled = true;
    increment_button2_g.disabled = true;
    increment_button3_g.disabled = true;

let homeScore = "";
let guestScore = "";
let numCount = 0;
let numCount1 = 0;

//initialize the timer
const start_game = document.getElementById('start_game')
const stop_game = document.getElementById('stop_game')
const reset_game = document.getElementById('reset_game')

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let min = 0;
let sec = 0;

start_game.addEventListener("click", () => {
  if(paused){
    paused = false
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
    increment_button1.disabled = false;
    increment_button2.disabled = false;
    increment_button3.disabled = false;
    increment_button1_g.disabled = false;
    increment_button2_g.disabled = false;
    increment_button3_g.disabled = false;
    whistleSound.play()
  }
})

stop_game.addEventListener("click", () => {
  if(!paused){
    paused = true
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId)
    increment_button1.disabled = true;
    increment_button2.disabled = true;
    increment_button3.disabled = true;
    increment_button1_g.disabled = true;
    increment_button2_g.disabled = true;
    increment_button3_g.disabled = true;
    whistleSound.play()
  }
})

reset_game.addEventListener("click", () => {
  paused = true
  clearInterval(intervalId)
  startTime = 0
  elapsedTime = 0;
  currentTime = 0;
  paused = true;
  intervalId;
  hrs = 0;
  min = 0;
  sec = 0;
  document.getElementById("time").innerHTML = '00:00:00'
  increment_button1.disabled = true;
  increment_button2.disabled = true;
  increment_button3.disabled = true;
  increment_button1_g.disabled = true;
  increment_button2_g.disabled = true;
  increment_button3_g.disabled = true;
  whistleSound.play()
})


function updateTime(){

  elapsedTime = Date.now() - startTime

  sec = Math.floor((elapsedTime / 1000) % 60);
  min = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  sec = pad(sec);
  min = pad(min);
  hrs = pad(hrs);

  document.getElementById('time').textContent = `${hrs}:${min}:${sec}`;

  function pad(unit){
      return (("0") + unit).length > 2 ? unit : "0" + unit;
  }

}



//Button actions
//HOME SCORE
function displayScores(){

  increment_button1.addEventListener("click", () => {
    var homeScore = numCount++;
    score_number.innerHTML = homeScore;
})

increment_button2.addEventListener("click", () => {
  const homeScore  = numCount += 2;
  score_number.innerHTML = homeScore
})

increment_button3.addEventListener("click", () => {
    const homeScore  = numCount += 3;
    score_number.innerHTML = homeScore
  })

//GUEST SCORE
increment_button1_g.addEventListener("click", () => {
    const guestScore = numCount1++;
    score_number1.innerHTML = guestScore;
})

increment_button2_g.addEventListener("click", () => {
  const guestScore = numCount1 += 2;
  score_number1.innerHTML = guestScore
})

increment_button3_g.addEventListener("click", () => {
    const guestScore  = numCount1 += 3;
    score_number1.innerHTML = guestScore;
  })

}


displayScores()






