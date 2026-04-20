import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import bakeryInterior       from '../assets/bakery-interior.jpeg';
import bakeryInteriorMobile from '../assets/interior-mobile.jpeg';
import { playClick, playSend } from '../sounds';

const SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const BG = {
  backgroundImage: `url(${window.innerWidth < 640 ? bakeryInteriorMobile : bakeryInterior})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

/* ── Warm parchment + subtle grid ── */
const PAPER = {
  background: [
    'linear-gradient(rgba(190,155,120,0.04) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(190,155,120,0.04) 1px, transparent 1px)',
    'radial-gradient(ellipse at 50% 20%, #FFFDF8 0%, #FFF8EE 55%, #FDF2E4 100%)',
  ].join(', '),
  backgroundSize: '24px 24px, 24px 24px, cover',
};

/* ── Single centered pink washi tape ── */
function WashiTapes() {
  return (
    <div style={{
      position: 'absolute', top: -10, left: '50%',
      transform: 'translateX(-50%) rotate(-1deg)',
      width: 72, height: 19,
      background: 'repeating-linear-gradient(90deg,rgba(245,185,198,0.90) 0px,rgba(245,185,198,0.90) 5px,rgba(255,210,220,0.90) 5px,rgba(255,210,220,0.90) 10px)',
      borderRadius: 3,
      boxShadow: '0 2px 5px rgba(0,0,0,0.08)', zIndex: 10,
    }} />
  );
}

/* ── Corner flower / star flourishes ── */
function CornerDecors() {
  return (
    <>
      <div style={{ position: 'absolute', top: 14, right: 16, fontSize: 17, opacity: 0.32, userSelect: 'none', lineHeight: 1, pointerEvents: 'none' }}>✿</div>
      <div style={{ position: 'absolute', top: 32, right: 12, fontSize: 10, opacity: 0.22, userSelect: 'none', lineHeight: 1, pointerEvents: 'none' }}>✦</div>
      <div style={{ position: 'absolute', bottom: 20, left: 13, fontSize: 15, opacity: 0.28, userSelect: 'none', lineHeight: 1, pointerEvents: 'none' }}>❀</div>
      <div style={{ position: 'absolute', bottom: 38, left: 11, fontSize: 9, opacity: 0.20, userSelect: 'none', lineHeight: 1, pointerEvents: 'none' }}>✦</div>
      <div style={{ position: 'absolute', bottom: 18, right: 15, fontSize: 11, opacity: 0.20, userSelect: 'none', lineHeight: 1, pointerEvents: 'none' }}>✿</div>
    </>
  );
}

/* ── Bakery stamp ── */
function BakeryStamp() {
  return (
    <div style={{
      position: 'absolute', top: 18, right: 22,
      width: 52, height: 52,
      border: '2px solid rgba(170,90,65,0.38)',
      borderRadius: '50%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      transform: 'rotate(14deg)',
      opacity: 0.52,
      pointerEvents: 'none',
    }}>
      <div style={{ fontSize: 20, lineHeight: 1 }}>🧁</div>
      <div style={{ fontFamily: 'VT323, monospace', fontSize: 8, color: '#7A3828', letterSpacing: 1, textAlign: 'center', lineHeight: 1.4 }}>SWEET</div>
    </div>
  );
}

/* ── Small pink bow divider ── */
function BowDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0 8px' }}>
      <div style={{ flex: 1, height: 1.5, background: 'linear-gradient(90deg, transparent, #F0B8C4)' }} />
      <div style={{ position: 'relative', width: 44, height: 28, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute', left: 1, top: 6,
          width: 18, height: 15,
          background: 'linear-gradient(135deg, #F8D0D8, #ECA0B0)',
          borderRadius: '60% 20% 20% 60%',
          transform: 'rotate(-18deg)',
          border: '1px solid rgba(210,110,130,0.25)',
        }} />
        <div style={{
          position: 'absolute', right: 1, top: 6,
          width: 18, height: 15,
          background: 'linear-gradient(225deg, #F8D0D8, #ECA0B0)',
          borderRadius: '20% 60% 60% 20%',
          transform: 'rotate(18deg)',
          border: '1px solid rgba(210,110,130,0.25)',
        }} />
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 11, height: 11,
          background: 'radial-gradient(circle at 38% 35%, #F4B0C0, #D07090)',
          borderRadius: '50%',
          zIndex: 3,
          border: '1px solid rgba(180,70,90,0.25)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.10)',
        }} />
      </div>
      <div style={{ flex: 1, height: 1.5, background: 'linear-gradient(90deg, #F0B8C4, transparent)' }} />
    </div>
  );
}

/* ── Ornate triple-dot divider ── */
function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, margin: '10px 0' }}>
      <div style={{ flex: 1, height: 1.5, background: 'linear-gradient(90deg, transparent, rgba(200,155,120,0.45))' }} />
      <span style={{ fontSize: 9, color: 'rgba(200,155,120,0.65)', userSelect: 'none', lineHeight: 1 }}>✦</span>
      <span style={{ fontSize: 12, color: 'rgba(200,155,120,0.65)', userSelect: 'none', lineHeight: 1 }}>✦</span>
      <span style={{ fontSize: 9, color: 'rgba(200,155,120,0.65)', userSelect: 'none', lineHeight: 1 }}>✦</span>
      <div style={{ flex: 1, height: 1.5, background: 'linear-gradient(90deg, rgba(200,155,120,0.45), transparent)' }} />
    </div>
  );
}

/* ── Section label pill ── */
function SectionLabel({ children, style }) {
  return (
    <div style={{
      display: 'inline-block',
      fontFamily: 'VT323, monospace',
      fontSize: 16,
      color: '#B05870',
      letterSpacing: 1.5,
      lineHeight: 1.3,
      marginBottom: 6,
      background: '#FFF3E0',
      padding: '1px 10px 1px 8px',
      borderRadius: 20,
      border: '1px solid rgba(235,170,185,0.55)',
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Soft section panel ── */
function SectionPanel({ children, style }) {
  return (
    <div style={{
      background: 'rgba(255,242,228,0.58)',
      border: '1.5px solid rgba(215,175,140,0.28)',
      borderRadius: 14,
      padding: '10px 12px',
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Thumbnail grid (replaces receipt rows) ── */
function ThumbnailGrid({ items }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'center',
    }}>
      {items.map(item => (
        <div key={item.id} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          width: 66,
        }}>
          <div style={{
            width: 66,
            height: 66,
            background: 'linear-gradient(180deg, #FFF6EE, #FFEEDE)',
            border: '2px solid #D4906A',
            borderRadius: 13,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            flexShrink: 0,
          }}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 46, height: 46, objectFit: 'contain', imageRendering: 'pixelated', display: 'block' }}
              draggable={false}
            />
          </div>
          <div style={{
            fontFamily: 'VT323, monospace',
            fontSize: 13,
            color: '#5C3020',
            textAlign: 'center',
            lineHeight: 1.2,
            width: 66,
            wordBreak: 'break-word',
          }}>
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SendScreen({ selectedItems, personalNote, toName, fromName, onBack, onAddMore }) {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMsg, setError] = useState('');

  const handleSend = async () => {
    if (!email || !email.includes('@')) { setError('Please enter a valid email address.'); return; }
    setError(''); setStatus('sending');

    const COLS = 4;
    const CARD_W = 120;

    const cardCell = (item) => `
      <td style="text-align:center; padding:4px; width:${CARD_W}px; vertical-align:top;">
        <img src="${item.imageUrl}" alt="${item.name}" width="80" height="80"
          style="display:block; margin:0 auto; object-fit:contain; image-rendering:pixelated;" />
        <p style="font-family:'Courier New',monospace; font-size:11px; color:#5C3D2E; margin:8px 0 0; line-height:1.4; text-align:center; width:${CARD_W}px;">
          ${item.name}
        </p>
      </td>
    `;

    let itemsHtml;
    if (selectedItems.length <= 4) {
      // Centered row, cards fixed width so they don't stretch
      itemsHtml = `
        <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
          <tr>${selectedItems.map(cardCell).join('')}</tr>
        </table>
      `;
    } else {
      // Multiple rows of 4
      const rows = [];
      for (let i = 0; i < selectedItems.length; i += COLS) {
        rows.push(selectedItems.slice(i, i + COLS));
      }
      itemsHtml = `
        <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
          ${rows.map(row => `
            <tr>${row.map(cardCell).join('')}</tr>
          `).join('')}
        </table>
      `;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        to_email: email,
        personal_note: personalNote || '(No note included)',
        to_name: toName || '',
        from_name: fromName || '',
        items_html: itemsHtml,
      }, PUBLIC_KEY);
      setStatus('success');
    } catch (err) {
      console.error(err); setStatus('error'); setError('Something went wrong. Please try again.');
    }
  };

  const card = {
    ...PAPER,
    borderRadius: 22,
    padding: '18px 20px 20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 6px rgba(0,0,0,0.04)',
    border: '2px solid rgba(210,165,128,0.50)',
    outline: '5px solid rgba(250,228,205,0.55)',
    outlineOffset: -9,
    position: 'relative',
  };

  /* ── Success ── */
  if (status === 'success') {
    return (
      <div style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px', ...BG }}>
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0)', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 480 }}>
          <div style={card}>
            <WashiTapes />
            <CornerDecors />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#7A3828', letterSpacing: 1, lineHeight: 2 }}>
                Shahla's Sweet Corner
              </div>
              <div style={{ fontFamily: 'Caveat, cursive', fontSize: 18, color: '#A07050', fontStyle: 'italic', marginTop: 2 }}>
                a little gift, just for you 🌸
              </div>
            </div>
            <BowDivider />
            <div style={{ textAlign: 'center', paddingTop: 8, paddingBottom: 8 }}>
              <div style={{ fontSize: 52, marginBottom: 12, animation: 'float 3s ease-in-out infinite', display: 'inline-block' }}>🎁</div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#7A3828', lineHeight: 2, marginBottom: 10 }}>
                Gift Delivered!
              </div>
              <p style={{ fontFamily: 'Caveat, cursive', fontSize: 22, color: '#8A5030', lineHeight: 1.6, marginBottom: 24 }}>
                Your sweet parcel is on its way to {email}.<br />May it bring a big smile!
              </p>
              <button
                onClick={() => { playClick(); onBack(); }}
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 7,
                  background: 'linear-gradient(180deg, #F8CCD4 0%, #E87090 50%, #D05070 100%)',
                  color: '#FFF0F4',
                  border: '2px solid #B03050',
                  borderRadius: 28,
                  padding: '12px 32px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 0 #A02040, 0 6px 16px rgba(180,40,70,0.22), inset 0 1px 0 rgba(255,220,230,0.5)',
                  letterSpacing: 1,
                  lineHeight: 1.8,
                }}
              >
                ▶ Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Main screen ── */
  return (
    <div style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 16px', ...BG }}>
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.1)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 520, width: '100%', position: 'relative', zIndex: 1, }}>
        <div style={card}>
          <WashiTapes />
          <CornerDecors />
          <BakeryStamp />

          {/* ── Header ── */}
          <div style={{ textAlign: 'center', marginBottom: 2 }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#7A3828', letterSpacing: 1, lineHeight: 1.8 }}>
              Shahla's Sweet Corner
            </div>
            <div style={{ fontFamily: 'Caveat, cursive', fontSize: 16, color: '#A07050', fontStyle: 'italic', marginTop: 1 }}>
              a little something sweet, just for you 🌸
            </div>
          </div>

          <BowDivider />

          {/* ── What's inside ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 6 }}>
            <SectionLabel style={{ marginBottom: 0, background: '#FFF3E0', border: '1px solid rgba(170,135,85,0.50)', color: '#9B6340' }}>What's inside 🎁</SectionLabel>
            <button
              onClick={() => { playClick(); onAddMore(); }}
              style={{
                fontFamily: 'VT323, monospace',
                fontSize: 17,
                color: '#C07888',
                background: 'rgba(240,180,196,0.22)',
                border: '1.5px solid rgba(210,140,160,0.40)',
                borderRadius: 16,
                padding: '5px 16px',
                cursor: 'pointer',
                lineHeight: 1.5,
                whiteSpace: 'nowrap',
              }}
            >
              ← Add more
            </button>
          </div>

          <ThumbnailGrid items={selectedItems} />

          <Divider />

          {/* ── A little note ── */}
          <SectionLabel style={{ background: '#FFF3E0', border: '1px solid rgba(180,120,128,0.50)', color: '#9B6340' }}>A little note 💌</SectionLabel>
          <SectionPanel style={{ marginTop: 8 }}>
            {personalNote ? (
              <p style={{
                fontFamily: 'Caveat, cursive',
                fontSize: 18,
                color: '#5C3020',
                lineHeight: 1.5,
                margin: 0,
              }}>
                {personalNote}
              </p>
            ) : (
              <p style={{
                fontFamily: 'Caveat, cursive',
                fontSize: 17,
                color: '#C4A090',
                fontStyle: 'italic',
                margin: 0,
                lineHeight: 1.5,
              }}>
                No note included...
              </p>
            )}
          </SectionPanel>

          <Divider />

          {/* ── To ── */}
          <SectionLabel style={{ background: '#FFF3E0', border: '1px solid rgba(170,135,85,0.50)', color: '#9B6340' }}>To: 📮</SectionLabel>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="their@email.com"
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            className="send-email-input"
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '5px 4px',
              fontFamily: 'Caveat, cursive',
              fontSize: 19,
              color: '#5C3020',
              background: 'transparent',
              border: 'none',
              borderBottom: '1.5px dashed rgba(190,140,110,0.45)',
              outline: 'none',
              letterSpacing: 0.3,
              marginTop: 8,
              marginBottom: 4,
            }}
          />
          {errorMsg && (
            <div style={{
              fontFamily: 'VT323, monospace',
              fontSize: 18,
              color: '#C0392B',
              marginTop: 10,
              padding: '7px 12px',
              background: 'rgba(192,57,43,0.07)',
              border: '1.5px solid rgba(192,57,43,0.25)',
              borderRadius: 8,
            }}>
              ⚠ {errorMsg}
            </div>
          )}

          {/* ── Seal & Send ── */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <button
              onClick={() => { playSend(); handleSend(); }}
              disabled={status === 'sending'}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 8,
                background: status === 'sending'
                  ? 'linear-gradient(180deg, #E0B8C0, #B88090)'
                  : 'linear-gradient(180deg, #F8CCD4 0%, #E87090 50%, #D05070 100%)',
                color: '#FFF0F4',
                border: '2px solid #B03050',
                borderRadius: 28,
                padding: '13px 36px',
                cursor: status === 'sending' ? 'wait' : 'pointer',
                opacity: status === 'sending' ? 0.75 : 1,
                boxShadow: status === 'sending'
                  ? '0 2px 0 #904050'
                  : '0 4px 0 #A02040, 0 6px 16px rgba(180,40,70,0.22), inset 0 1px 0 rgba(255,220,230,0.5)',
                letterSpacing: 1,
                lineHeight: 1.8,
                transition: 'opacity 0.2s, box-shadow 0.15s',
                width: '100%',
                maxWidth: 280,
              }}
            >
              {status === 'sending' ? '⏳ SENDING...' : 'SEAL & SEND 💌'}
            </button>
          </div>

        </div>

        {/* ── Back button ── */}
        <div style={{ marginTop: 16 }}>
          <button
            onClick={() => { playClick(); onBack(); }}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 6.5,
              background: 'rgba(120,80,55,0.10)',
              color: '#7A5035',
              border: '1.5px solid rgba(140,90,60,0.28)',
              borderRadius: 20,
              padding: '9px 18px',
              cursor: 'pointer',
              letterSpacing: 0.5,
              lineHeight: 1.8,
            }}
          >
            ◀ BACK
          </button>
        </div>

      </div>
    </div>
  );
}
