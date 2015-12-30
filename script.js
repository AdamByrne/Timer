window.onload = function() {
  var Timer = document.getElementById('time');
  var Start = document.getElementById('start');
  var Restart = document.getElementById('restart');

  var time = 0;
  var running = 0;

  Start.onclick = function() {
    if(Start.innerHTML === "Play" && running === 0) {
      running = 1;
      increment()
      Start.innerHTML = "Pause";
      Start.style.color = "red";
      Start.style.borderColor = "red";
    }else{
      running = 0
      Start.innerHTML = "Play";
      Start.style.color = "black";
      Start.style.borderColor = "black";
    }
  };

  Restart.onclick = function() {
    Start.innerHTML = "Play";
    running = 0;
    time = 0;
    mins = 0;
    secs = 0;
    tenths = 0;
    Timer.innerHTML = mins+":"+secs+":"+tenths;
  };

  function increment() {
    if(running === 1) {
      setTimeout(function() {
        time++;
        mins = Math.floor(time / 10 / 60);
        secs = Math.floor(time / 10);
        tenths = time % 10;
        Timer.innerHTML = mins+":"+secs+":"+tenths;
        increment();
      },100);
    }
  }
}
