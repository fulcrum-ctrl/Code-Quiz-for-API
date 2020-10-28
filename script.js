var timeLeft = 5;
function countDown(){
  if (timeLeft>0){
      timeLeft -=1;
      console.log(timeLeft);
  }
  else{
      alert("Time's up");
  }
}


window.onload = function(){
    var startBtn = document.querySelector('#start-button');
    startBtn.addEventListener('click', countDown );
    setInterval(countDown,1000);
}