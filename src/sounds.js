let ctx = null;

function getCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  return ctx;
}

function play(freq1, freq2, duration, volume = 0.18) {
  try {
    const ac = getCtx();
    if (ac.state === 'suspended') ac.resume();

    const osc  = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);

    const now = ac.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq1, now);
    osc.frequency.exponentialRampToValueAtTime(freq2, now + duration);
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.start(now);
    osc.stop(now + duration + 0.01);
  } catch (_) {}
}

/* Soft wooden tap — navigation buttons */
export function playClick() {
  play(520, 360, 0.07, 0.15);
}

/* Bright little chime — menu item select */
export function playSelect() {
  play(780, 620, 0.09, 0.13);
}

/* Slightly lower pop — menu item deselect */
export function playDeselect() {
  play(480, 320, 0.07, 0.12);
}

/* Warm ding — send / confirm */
export function playSend() {
  play(880, 700, 0.12, 0.16);
}

/* Oven timer ding — two-tone metallic bell */
export function playOvenDing() {
  try {
    const ac = getCtx();
    if (ac.state === 'suspended') ac.resume();
    const now = ac.currentTime;

    const strike = (startTime) => {
      [1109, 2218].forEach((freq, i) => {
        const osc  = ac.createOscillator();
        const gain = ac.createGain();
        osc.connect(gain);
        gain.connect(ac.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.92, startTime + 1.2);
        const vol = i === 0 ? 0.28 : 0.10;
        gain.gain.setValueAtTime(vol, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.4);
        osc.start(startTime);
        osc.stop(startTime + 1.5);
      });
    };

    strike(now);
    strike(now + 0.22);
  } catch (_) {}
}
