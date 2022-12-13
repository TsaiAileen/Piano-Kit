// window.addEventListener('keydown', function (e) {
  // console.log(e.keyCode);
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//   // console.log(audio);
//   if (!audio) return // if not audio, stop running
//   audio.currentTime = 0
//   audio.play()
//   key.classList.add('playing')
// })  

// move the function(e) to below playSound(e)
// and move the widow.addEventListener to the bottom with the new playSound function

function playSound(e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(audio);
    if (!audio) return // if not audio, stop running
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
}

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return  // stop if it's not a transform
    // console.log(this);
    // console.log(e.propertyName);
    this.classList.remove('playing')
  }

  const keys = document.querySelectorAll('.key')
  // keys.addEventListener('transitionend')  It's a Node List, not an array 
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  // setTimeout(function () {

  window.addEventListener('keydown', playSound)
    
  // }, 0.5) //still fin but have to set times here and css
  // console.log(key);