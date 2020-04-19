window.onload = function () {
  var body = document.getElementsByTagName('body');
  body[0].style.backgroundColor = '#000000';

  var audio = new Audio(chrome.runtime.getURL("./data/sample.mp3"));
  audio.play()
};