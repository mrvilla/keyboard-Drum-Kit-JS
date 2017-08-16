/** * Created by enrique.cantillo on 14.08.17. */


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.pink.key[data-key="${e.keyCode}"], .indigo.key[data-key="${e.keyCode}"] , .purple.key[data-key="${e.keyCode}"]` )
    const noteName = document.querySelector(`[data-key="${e.keyCode}"] .sound`)

    if(!audio) return; // function stops running when another key doesnt have an audio
    if(!noteName) return;
    audio.currentTime = 0; // helps reset the audio without waiting for it to finish
    audio.play();
    key.classList.add('play');
    noteName.classList.add('name');
    //console.log(key);
}

function removeTransition(e)  {
    if(e.propertyName !== 'transform') return; // skip !== if its not a tranform
    this.classList.remove('play');
    //console.log(e);
    //console.log(e.propertyName);
}

function removeAnimation(e) {
    if(e.animationName !== 'move') return;
    this.classList.remove('name');
    //console.log(e.animationName);
}

const keys = document.querySelectorAll('.pink.key, .purple.key, .indigo.key'); // selects all key with the class of keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // when transition ends add a function remove transition
const names = document.querySelectorAll('.sound');
names.forEach(noteName => noteName.addEventListener('animationend', removeAnimation));

window.addEventListener('keydown', playSound);

