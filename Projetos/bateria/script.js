document.body.addEventListener("keyup", (event) => {
  console.log(event);
  console.log(event.key);
  console.log(event.code.toLowerCase());
  playSound(event.code.toLowerCase());
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  console.log(audioElement);

  if (audioElement) {
    audioElement.play();
  }
}
