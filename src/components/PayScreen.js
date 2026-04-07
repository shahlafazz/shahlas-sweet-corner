import React, { useEffect, useState } from 'react';
import kitchenImg   from '../assets/kitchen.jpeg';
import bakingGif    from '../assets/baking.gif';
import yourOrderGif from '../assets/yourorder.gif';

/* ─── Letter-by-letter text ───────────────────────────────────── */
function TypedText({ text, delayStart = 0, charDelay = 0.055, style }) {
  const chars = [...text]; // handles emoji as single chars
  return (
    <span style={style}>
      {chars.map((ch, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: 0,
            animation: `letterReveal 0.12s ease ${(delayStart + i * charDelay).toFixed(3)}s forwards`,
            whiteSpace: ch === ' ' ? 'pre' : 'normal',
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

/* ─── Main component ──────────────────────────────────────────── */
export default function PayScreen({ onComplete }) {
  const [phase, setPhase]       = useState(1);
  const [phaseIn, setPhaseIn]   = useState(true);
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhaseIn(false);
      setTimeout(() => { setPhase(2); setPhaseIn(true); }, 380);
    }, 4000);
    const t2 = setTimeout(() => onComplete(), 8000);
    return () => [t1, t2].forEach(clearTimeout);
  }, [onComplete]);

  useEffect(() => {
    if (phase !== 1) return;
    const iv = setInterval(() => setDotCount(d => (d + 1) % 4), 450);
    return () => clearInterval(iv);
  }, [phase]);

  /* How long "Your treats are ready! 🎀" takes to finish typing */
  const mainText    = 'Your treats are ready! 🎀';
  const subtitleDelay = mainText.length * 0.055 + 0.2; // starts after main text

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      gap: 28,
      backgroundImage: `url(${kitchenImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

      {/* Dark overlay */}
      <div style={{ position:'absolute', inset:0, background:'rgba(15,6,2,0.52)', pointerEvents:'none' }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 26,
        opacity: phaseIn ? 1 : 0,
        transition: 'opacity 0.38s ease',
      }}>

        <img
          src={phase === 1 ? bakingGif : yourOrderGif}
          alt={phase === 1 ? 'baking' : 'your order'}
          style={{
            width: 'min(560px, 88vw)',
            height: 'auto',
            borderRadius: 20,
            boxShadow: '0 16px 56px rgba(0,0,0,0.65)',
            display: 'block',
          }}
        />

        {/* Phase 1: preparing */}
        {phase === 1 && (
          <div style={{
            fontFamily: 'Caveat, cursive',
            fontSize: 'clamp(22px, 5vw, 32px)',
            color: '#FFF8E8',
            textShadow: '0 2px 10px rgba(0,0,0,0.55)',
            letterSpacing: 0.4,
            textAlign: 'center',
          }}>
            Preparing your order{'.'.repeat(dotCount)}
          </div>
        )}

        {/* Phase 2: letter-by-letter reveal */}
        {phase === 2 && (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 'clamp(10px, 2.8vw, 14px)',
              color: '#FFF8E8',
              lineHeight: 2.4,
              letterSpacing: 1,
              textShadow: '0 2px 12px rgba(0,0,0,0.6)',
            }}>
              <TypedText text={mainText} delayStart={0.1} charDelay={0.055} />
            </div>
            <div style={{
              fontFamily: 'Caveat, cursive',
              fontSize: 'clamp(18px, 4vw, 26px)',
              color: 'rgba(255,245,210,0.9)',
              marginTop: 10,
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              opacity: 0,
              animation: `letterReveal 0.5s ease ${subtitleDelay}s forwards`,
            }}>
              Wrapped with love ♥
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
