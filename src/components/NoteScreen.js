import React, { useState } from 'react';
import bakeryInterior       from '../assets/bakery-interior.jpeg';
import bakeryInteriorMobile from '../assets/interior-mobile.jpeg';
import { playClick } from '../sounds';

const MAX_CHARS = 200;

/* ─── Small bow for card header ──────────────────────────────── */
function CardBow() {
  return (
    <div style={{ position: 'relative', width: 36, height: 20, display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }}>
      <div style={{ position: 'absolute', left: 1, top: 2, width: 16, height: 12, background: 'linear-gradient(135deg, #FFD0DC, #E890A8)', borderRadius: '60% 18% 18% 60%', transform: 'rotate(-20deg)', border: '1px solid rgba(200,80,110,0.2)' }} />
      <div style={{ position: 'absolute', right: 1, top: 2, width: 16, height: 12, background: 'linear-gradient(225deg, #FFD0DC, #E890A8)', borderRadius: '18% 60% 60% 18%', transform: 'rotate(20deg)', border: '1px solid rgba(200,80,110,0.2)' }} />
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 9, height: 9, background: 'radial-gradient(circle at 38% 35%, #FFD0E0, #D06080)', borderRadius: '50%', zIndex: 3 }} />
    </div>
  );
}

export default function NoteScreen({ note, onNoteChange, toName, onToNameChange, fromName, onFromNameChange, onNext, onBack }) {
  const remaining = MAX_CHARS - note.length;
  const [focused, setFocused] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 16px 48px',
      backgroundImage: `url(${window.innerWidth < 640 ? bakeryInteriorMobile : bakeryInterior})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Overlay — slightly deeper so card pops */}
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.22)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: 520,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 20,
      }}>

        {/* ── Scene label ── */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(180,70,100,0.52)',
          backdropFilter: 'blur(5px)',
          border: '1.5px solid rgba(255,200,220,0.38)',
          borderRadius: 22,
          padding: '8px 22px',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 8,
          color: '#FFF0F4',
          letterSpacing: 1.2,
          lineHeight: 2,
          textShadow: '0 1px 4px rgba(0,0,0,0.25)',
        }}>
          ✦ Write a Sweet Note ✦
        </div>

        {/* ── Card + Pen row ── */}
        <div style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 0,
        }}>

          {/* ── Note card ── */}
          <div style={{
            flex: 1,
            background: '#FFF8F0',
            backgroundImage: `
              repeating-linear-gradient(
                transparent, transparent 31px,
                rgba(170,125,95,0.13) 31px, rgba(170,125,95,0.13) 32px
              ),
              repeating-linear-gradient(
                90deg,
                transparent, transparent 48px,
                rgba(170,125,95,0.025) 48px, rgba(170,125,95,0.025) 49px
              )
            `,
            backgroundPosition: '0 52px, 0 0',
            borderRadius: 18,
            border: '1.5px solid rgba(240,175,195,0.55)',
            padding: '24px 26px 20px',
            boxShadow: focused
              ? '0 18px 52px rgba(0,0,0,0.20), 0 5px 16px rgba(0,0,0,0.11)'
              : '0 9px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)',
            transform: focused ? 'scale(1.012)' : 'scale(1)',
            transition: 'transform 0.28s ease, box-shadow 0.28s ease',
          }}>

            {/* Card header */}
            <div style={{
              display: 'flex', alignItems: 'center',
              marginBottom: 18,
            }}>
              <CardBow />
              <span style={{
                fontFamily: 'Caveat, cursive',
                fontSize: 20,
                color: '#A04860',
                fontWeight: 600,
                letterSpacing: 0.5,
              }}>
                A little note for you...
              </span>
            </div>

            {/* Dear line — top left */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
              <span style={{ fontFamily: 'Caveat, cursive', fontSize: 21, color: '#3E1E0E', whiteSpace: 'nowrap' }}>
                Dear
              </span>
              <input
                type="text"
                value={toName}
                onChange={e => onToNameChange(e.target.value)}
                placeholder=""
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1.5px dashed rgba(200,150,160,0.35)',
                  fontFamily: 'Caveat, cursive',
                  fontSize: 21,
                  color: '#3E1E0E',
                  outline: 'none',
                  padding: '2px 4px',
                  caretColor: '#C04870',
                }}
              />
              <span style={{ fontFamily: 'Caveat, cursive', fontSize: 21, color: '#3E1E0E' }}>,</span>
            </div>

            {/* Textarea */}
            <textarea
              className="note-textarea"
              value={note}
              onChange={e => { if (e.target.value.length <= MAX_CHARS) onNoteChange(e.target.value); }}
              placeholder="Say something warm and sweet…"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                width: '100%',
                minHeight: 172,
                background: 'transparent',
                border: 'none',
                resize: 'none',
                fontFamily: 'Caveat, cursive',
                fontSize: 21,
                color: '#3E1E0E',
                lineHeight: '32px',
                outline: 'none',
                padding: '0',
                boxSizing: 'border-box',
                caretColor: '#C04870',
              }}
            />

            {/* Sincerely line — bottom right */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 10, justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: 'Caveat, cursive', fontSize: 21, color: '#3E1E0E', whiteSpace: 'nowrap' }}>
                Sincerely,
              </span>
              <input
                type="text"
                value={fromName}
                onChange={e => onFromNameChange(e.target.value)}
                placeholder=""
                style={{
                  width: 140,
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1.5px dashed rgba(200,150,160,0.35)',
                  fontFamily: 'Caveat, cursive',
                  fontSize: 21,
                  color: '#3E1E0E',
                  outline: 'none',
                  padding: '2px 4px',
                  caretColor: '#C04870',
                }}
              />
            </div>

            {/* Character count + small hearts row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
              borderTop: '1px dashed rgba(200,150,160,0.25)',
              paddingTop: 8,
            }}>
              <div style={{
                fontFamily: 'Caveat, cursive',
                fontSize: 15,
                color: '#C8A0A8',
                fontStyle: 'italic',
                opacity: 0.75,
              }}>
                {['♡', '♡', '♡'].slice(0, note.length > 0 ? Math.min(3, Math.ceil(note.length / 67)) : 1).join(' ')}
              </div>
              <div style={{
                fontFamily: 'Caveat, cursive',
                fontSize: 15,
                color: remaining < 30 ? '#C03050' : 'rgba(160,100,90,0.6)',
                letterSpacing: 0.3,
                transition: 'color 0.2s',
              }}>
                {remaining} left
              </div>
            </div>
          </div>

        </div>

        {/* ── Actions ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 420,
          gap: 12,
          paddingRight: 12,
        }}>
          <button
            onClick={() => { playClick(); onBack(); }}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 7,
              background: 'linear-gradient(180deg, #FFFAF4 0%, #F5EAD0 50%, #E8D5B5 100%)',
              color: '#5C3020',
              border: '2px solid #C8A870',
              borderRadius: 24,
              padding: '10px 22px',
              cursor: 'pointer',
              letterSpacing: 0.5,
              lineHeight: 1.8,
              boxShadow: '0 4px 0 #A08848, 0 5px 12px rgba(90,55,15,0.16), inset 0 1px 0 rgba(255,255,255,0.7)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = '0 1px 0 #A08848, inset 0 1px 0 rgba(255,255,255,0.7)'; }}
            onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            ◀ BACK
          </button>

          <button
            onClick={() => { playClick(); onNext(); }}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 8,
              background: 'linear-gradient(180deg, #FFC8D8 0%, #F080A0 50%, #D05878 100%)',
              color: '#FFF0F4',
              border: '2px solid #B03058',
              borderRadius: 24,
              padding: '11px 32px',
              cursor: 'pointer',
              boxShadow: '0 4px 0 #980A38, 0 6px 16px rgba(180,40,70,0.22), inset 0 1px 0 rgba(255,220,232,0.5)',
              letterSpacing: 1,
              lineHeight: 1.8,
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = '0 1px 0 #980A38, inset 0 1px 0 rgba(255,220,232,0.5)'; }}
            onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            NEXT ▶
          </button>
        </div>

      </div>
    </div>
  );
}
