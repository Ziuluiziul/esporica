export function criarAudio() {
  let ctx = null;
  const ensure = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
  const beep = (f, d, type, g) => {
    const c = ensure();
    const o = c.createOscillator();
    const a = c.createGain();
    o.type = type;
    o.frequency.value = f;
    a.gain.setValueAtTime(g, c.currentTime);
    a.gain.exponentialRampToValueAtTime(0.001, c.currentTime + d);
    o.connect(a); a.connect(c.destination);
    o.start(); o.stop(c.currentTime + d);
  };
  return {
    start: () => beep(220, 0.18, 'sine', 0.04),
    shoot: () => beep(640 + Math.random() * 80, 0.04, 'square', 0.012),
    hit: () => beep(140, 0.08, 'sawtooth', 0.03),
    xp: () => beep(880, 0.05, 'triangle', 0.02),
    level: () => { beep(392, 0.12, 'sine', 0.05); setTimeout(() => beep(523, 0.16, 'sine', 0.05), 90); },
    dead: () => beep(70, 0.5, 'sawtooth', 0.06),
    pick: () => beep(523, 0.1, 'triangle', 0.04)
  };
}
