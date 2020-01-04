Mousetrap.bind('ctrl+shift+q', function() {
  window.closeCurrentWindow();
});

const minimumDelayMilliseconds = 400;
var latestKeyDownTime = new Date().getTime();
const colorMap = {
  0: 'red',
  1: 'orange',
  2: 'gold',
  3: 'green',
  4: 'blue',
  5: 'indigo',
  6: 'violet',
};

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();
synth.oscillator.type = 'sine';
const toneDuration = '16n'; // Note length described by musical notation.


document.body.addEventListener('keydown', function(e) {
    e.preventDefault();
    const currentTime = new Date().getTime();
    const isAfterDelay = (currentTime - latestKeyDownTime) > minimumDelayMilliseconds;
    if (isAfterDelay && (e.key.length == 1) && (e.repeat != true)){
        latestKeyDownTime = currentTime;
        const charCode = e.key.charCodeAt(0);
        updateDOM(e.key, charCode);
        playTone(charCode);
    }
    return false;
});

function updateDOM(key, charCode) {
    const color = colorMap[charCode % 7];
    document.getElementById('key').style.color = color;
    document.getElementById('key').innerHTML = key;
}

function playTone(charCode) {
    const frequency = (charCode - 45) * 10;
    synth.triggerAttackRelease(frequency, toneDuration);
}
