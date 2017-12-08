window.onload = function(){

  var audio = new Audio('crissementcrash.mp3');
  audio.play();

  var video = document.getElementById("myVideo");
  video.play();

  function changeDisplay() {
    document.getElementById('born2beAlive').style.display = 'none';
  }

  function changeDisplayDead() {
      document.getElementById('uAreDead').style.display = 'block';
      document.getElementById('errorBody').style.backgroundColor = 'black';
  }

  setTimeout(changeDisplay, 4000);
  setTimeout(changeDisplayDead, 4000);

}
