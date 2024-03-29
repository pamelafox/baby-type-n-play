Mousetrap.bind('ctrl+shift+q', function() {
  window.closeCurrentWindow();
});

const delayMilliseconds = 400;
let latestKeyDownTime = new Date().getTime();
const colorMap = {
  0: 'red',
  1: 'orange',
  2: 'gold',
  3: 'green',
  4: 'blue',
  5: 'indigo',
  6: 'violet',
};

// create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();
synth.oscillator.type = 'sine';
const toneDuration = '16n'; // Note length described by musical notation.


document.body.addEventListener('keydown', function(e) {
  e.preventDefault();
  const currentTime = new Date().getTime();
  const isAfterDelay = (currentTime - latestKeyDownTime) > delayMilliseconds;
  if (isAfterDelay && (e.key.length == 1) && (e.repeat != true)) {
    latestKeyDownTime = currentTime;
    updateDOM(e.key);
    playTone(e.key);
  }
  return false;
});

/**
   * Update DOM with most-recently-pressed key.
   * @param {string} key The pressed key.
   */
function updateDOM(key) {
  const charCode = key.charCodeAt(0);
  const color = colorMap[charCode % 7];
  document.getElementById('key').style.color = color;
  document.getElementById('key').innerHTML = key;
}

/**
   * Play a tone based on the pressed key.
   * @param {string} key The pressed key.
   */
function playTone(key) {
  const charCode = key.charCodeAt(0);
  const frequency = (charCode - 25) * 10;
  synth.triggerAttackRelease(frequency, toneDuration);
}
