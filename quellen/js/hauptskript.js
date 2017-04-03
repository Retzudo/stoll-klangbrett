var h2s = document.getElementsByTagName('h2');

for (var i = 0; i < h2s.length; i++) {
  var h2 = h2s[i];

  h2.addEventListener('click', function (event) {
    var audio = event.target.parentNode.querySelector('audio');
    audio.play();
  });
}
