import React, { useEffect, useState } from 'react';
import cafeExterior       from '../assets/cafe-exterior.jpeg';
import cafeExteriorMobile from '../assets/opening3.jpeg';
import { playClick } from '../sounds';

/* ─── Large top bow ─────────────────────────────────────────── */
function TopBow() {
  return (
    <div style={{
      position: 'absolute', top: -48, left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10, width: 120, height: 70,
      pointerEvents: 'none',
    }}>
      {/* left tail */}
      <div style={{
        position: 'absolute', left: '43%', bottom: 2,
        width: 14, height: 24,
        background: 'linear-gradient(180deg, #F09AB0, #C05878)',
        transform: 'rotate(16deg)', borderRadius: '2px 2px 8px 8px',
        border: '1.5px solid rgba(160,40,70,0.25)',
        boxShadow: '1px 2px 4px rgba(0,0,0,0.12)',
      }} />
      {/* right tail */}
      <div style={{
        position: 'absolute', right: '43%', bottom: 2,
        width: 14, height: 24,
        background: 'linear-gradient(180deg, #F09AB0, #C05878)',
        transform: 'rotate(-16deg)', borderRadius: '2px 2px 8px 8px',
        border: '1.5px solid rgba(160,40,70,0.25)',
        boxShadow: '1px 2px 4px rgba(0,0,0,0.12)',
      }} />
      {/* left loop */}
      <div style={{
        position: 'absolute', left: 2, top: 8,
        width: 50, height: 40,
        background: 'linear-gradient(140deg, #FFD4E0 0%, #F090A8 55%, #D86888 100%)',
        borderRadius: '62% 18% 18% 62%',
        transform: 'rotate(-24deg)',
        border: '2px solid rgba(180,50,80,0.22)',
        boxShadow: '2px 3px 8px rgba(0,0,0,0.16), inset 0 2px 0 rgba(255,255,255,0.35)',
      }} />
      {/* right loop */}
      <div style={{
        position: 'absolute', right: 2, top: 8,
        width: 50, height: 40,
        background: 'linear-gradient(220deg, #FFD4E0 0%, #F090A8 55%, #D86888 100%)',
        borderRadius: '18% 62% 62% 18%',
        transform: 'rotate(24deg)',
        border: '2px solid rgba(180,50,80,0.22)',
        boxShadow: '2px 3px 8px rgba(0,0,0,0.16), inset 0 2px 0 rgba(255,255,255,0.35)',
      }} />
      {/* knot */}
      <div style={{
        position: 'absolute', left: '50%', top: '48%',
        transform: 'translate(-50%, -50%)',
        width: 26, height: 26,
        background: 'radial-gradient(circle at 38% 32%, #FFE0E8, #C04870)',
        borderRadius: '50%', zIndex: 5,
        border: '2.5px solid rgba(160,40,70,0.28)',
        boxShadow: '0 3px 8px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,210,220,0.5)',
      }} />
    </div>
  );
}

/* ─── Small bow ─────────────────────────────────────────────── */
function SmallBow() {
  return (
    <div style={{ position: 'relative', width: 48, height: 26, display: 'inline-block' }}>
      <div style={{ position: 'absolute', left: '43%', bottom: 0, width: 7, height: 10, background: '#ECA0B8', transform: 'rotate(14deg)', borderRadius: '0 0 4px 4px' }} />
      <div style={{ position: 'absolute', right: '43%', bottom: 0, width: 7, height: 10, background: '#ECA0B8', transform: 'rotate(-14deg)', borderRadius: '0 0 4px 4px' }} />
      <div style={{ position: 'absolute', left: 1, top: 3, width: 22, height: 16, background: 'linear-gradient(135deg, #FFC8D8, #E890A8)', borderRadius: '60% 18% 18% 60%', transform: 'rotate(-20deg)', border: '1px solid rgba(200,80,110,0.2)' }} />
      <div style={{ position: 'absolute', right: 1, top: 3, width: 22, height: 16, background: 'linear-gradient(225deg, #FFC8D8, #E890A8)', borderRadius: '18% 60% 60% 18%', transform: 'rotate(20deg)', border: '1px solid rgba(200,80,110,0.2)' }} />
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 12, height: 12, background: 'radial-gradient(circle at 38% 35%, #FFD0E0, #D06088)', borderRadius: '50%', zIndex: 3 }} />
    </div>
  );
}

/* ─── Sparkle ───────────────────────────────────────────────── */
function Sparkle({ size = 11, delay = 0, style }) {
  return (
    <div style={{
      fontSize: size, color: '#FFD090',
      animation: `sparkle 2.5s ease-in-out ${delay}s infinite`,
      lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      ...style,
    }}>✦</div>
  );
}

/* ─── Heart ─────────────────────────────────────────────────── */
function Heart({ size = 15, style }) {
  return (
    <div style={{
      fontSize: size, color: '#F0A0B8', lineHeight: 1,
      userSelect: 'none', pointerEvents: 'none', ...style,
    }}>♥</div>
  );
}


export default function LandingScreen({ onEnter, toName, onToNameChange }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 120); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      minHeight: '100vh', position: 'relative',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      backgroundImage: `url(${window.innerWidth < 640 ? cafeExteriorMobile : cafeExterior})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      padding: '24px 16px',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.12)', zIndex: 1 }} />

      <div style={{
        position: 'relative', zIndex: 2,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
        width: '90%', maxWidth: 420,
        marginTop: 40,
      }}>
        {/* ── Outer pink scalloped frame ── */}
        <div style={{
          position: 'relative',
          paddingTop: 42,
          background: 'linear-gradient(180deg, #F4B0C4 0%, #E890A8 50%, #F4B0C4 100%)',
          borderRadius: 28,
          padding: '48px 10px 10px',
          boxShadow:
            '0 14px 48px rgba(0,0,0,0.26), 0 4px 12px rgba(0,0,0,0.16), ' +
            'inset 0 2px 0 rgba(255,220,232,0.6)',
          border: '3px solid rgba(220,120,148,0.45)',
        }}>
          <TopBow />

          {/* Hearts at top corners of frame */}
          <Heart size={18} style={{ position: 'absolute', top: 12, left: 14, opacity: 0.75 }} />
          <Heart size={18} style={{ position: 'absolute', top: 12, right: 14, opacity: 0.75 }} />
          <Heart size={12} style={{ position: 'absolute', top: 30, left: 32, opacity: 0.45 }} />
          <Heart size={12} style={{ position: 'absolute', top: 30, right: 32, opacity: 0.45 }} />

          {/* ── Inner cream card ── */}
          <div style={{
            background: '#FFF8F2',
            borderRadius: 20,
            padding: '28px 24px 26px',
            boxShadow:
              'inset 0 2px 8px rgba(200,100,130,0.10), ' +
              'inset 0 0 0 2px rgba(240,170,196,0.35)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Subtle inner sparkles */}
            <Sparkle size={10} delay={0}   style={{ position: 'absolute', top: 12, left: 18 }} />
            <Sparkle size={8}  delay={0.8} style={{ position: 'absolute', top: 18, right: 22 }} />
            <Sparkle size={9}  delay={1.6} style={{ position: 'absolute', bottom: 20, left: 28 }} />
            <Sparkle size={8}  delay={0.4} style={{ position: 'absolute', bottom: 14, right: 18 }} />

            <div style={{ textAlign: 'center', position: 'relative' }}>
              {/* Tiny hearts row above title */}
              <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center', gap: 6 }}>
                {['♡', '♥', '♡'].map((h, i) => (
                  <span key={i} style={{ fontSize: i === 1 ? 14 : 10, color: '#F0A0B8', opacity: i === 1 ? 0.9 : 0.55 }}>{h}</span>
                ))}
              </div>

              {/* Title */}
              <h1 style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 'clamp(11px, 3.2vw, 15px)',
                color: '#7A2840',
                lineHeight: 2.1,
                margin: 0,
                textShadow: '1px 1px 0 rgba(255,200,216,0.8), 2px 2px 0 rgba(200,80,110,0.15)',
                letterSpacing: 1,
              }}>
                Shahla's<br />Sweet Corner
              </h1>

              {/* Floating cake icon */}
              <div style={{
                fontSize: 46, margin: '14px 0 10px',
                display: 'inline-block',
                animation: 'float 3s ease-in-out infinite',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
              }}>🍰</div>

              {/* Subtitle */}
              <p style={{
                fontFamily: 'Caveat, cursive',
                fontSize: 22,
                color: '#C8849A',
                marginBottom: 20,
                fontStyle: 'italic',
                lineHeight: 1.55,
              }}>
                <span style={{ fontSize: 14, verticalAlign: 'middle', color: '#F0BEC8', fontStyle: 'normal', marginRight: 11 }}>♥︎</span>a sweet little gift, made with love<span style={{ fontSize: 14, verticalAlign: 'middle', color: '#F0BEC8', fontStyle: 'normal', marginLeft: 11 }}>♥︎</span>
              </p>

              {/* Who is this for? */}
              <div style={{ marginBottom: 22, width: '100%' }}>
                <div style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 9,
                  color: '#C0708A',
                  letterSpacing: 1.5,
                  lineHeight: 2,
                  marginBottom: 10,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}>
                  this is a gift for
                </div>
                <input
                  type="text"
                  value={toName}
                  onChange={e => onToNameChange(e.target.value)}
                  placeholder="their name"
                  maxLength={32}
                  className="recipient-input"
                  style={{
                    width: '100%',
                    background: 'rgba(255,240,246,0.75)',
                    border: '2px solid rgba(210,140,165,0.45)',
                    borderRadius: 16,
                    padding: '10px 18px',
                    fontFamily: 'Caveat, cursive',
                    fontSize: 22,
                    color: '#B06880',
                    outline: 'none',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                    caretColor: '#C04870',
                    boxShadow: 'inset 0 2px 6px rgba(200,100,130,0.08)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = 'rgba(200,90,125,0.70)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(210,100,135,0.13), inset 0 2px 6px rgba(200,100,130,0.08)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(210,140,165,0.45)';
                    e.target.style.boxShadow = 'inset 0 2px 6px rgba(200,100,130,0.08)';
                  }}
                />
              </div>

              {/* CTA button — pink pill */}
              <button
                onClick={() => { playClick(); onEnter(); }}
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 8,
                  background: 'linear-gradient(180deg, #FFC8D8 0%, #F080A0 50%, #D05878 100%)',
                  color: '#FFF0F4',
                  border: '2.5px solid #B03058',
                  borderRadius: 28,
                  padding: '13px 32px',
                  cursor: 'pointer',
                  boxShadow:
                    '0 5px 0 #980A38, 0 8px 20px rgba(180,40,70,0.25), ' +
                    'inset 0 1px 0 rgba(255,220,232,0.55)',
                  letterSpacing: 1,
                  lineHeight: 1.8,
                  transition: 'transform 0.08s, box-shadow 0.08s',
                }}
                onMouseDown={e => { e.currentTarget.style.transform = 'translateY(4px)'; e.currentTarget.style.boxShadow = '0 1px 0 #980A38, 0 2px 6px rgba(180,40,70,0.2), inset 0 1px 0 rgba(255,220,232,0.55)'; }}
                onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                ▶ ENTER THE CAFÉ
              </button>
            </div>
          </div>

          {/* Bottom row: small bows + hearts */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', padding: '10px 20px 4px',
          }}>
            <SmallBow />
            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              {['♥', '♡', '♥'].map((h, i) => (
                <span key={i} style={{ fontSize: i === 1 ? 10 : 13, color: '#FFF0F4', opacity: i === 1 ? 0.6 : 0.85 }}>{h}</span>
              ))}
            </div>
            <SmallBow />
          </div>
        </div>

        {/* Bottom tagline banner */}
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <div style={{
            display: 'inline-block',
            fontFamily: 'Caveat, cursive',
            fontSize: 17,
            color: '#FFF8F2',
            background: 'rgba(200,80,110,0.55)',
            backdropFilter: 'blur(4px)',
            border: '1.5px solid rgba(255,200,216,0.35)',
            borderRadius: 20,
            padding: '6px 20px',
            textShadow: '0 1px 3px rgba(0,0,0,0.2)',
            letterSpacing: 0.5,
          }}>
            ✦ Build a sweet order &amp; send it with love ✦
          </div>
        </div>
      </div>
    </div>
  );
}
