import React, { useEffect, useState } from 'react';
import bakeryInterior       from '../assets/bakery-interior.jpeg';
import bakeryInteriorMobile from '../assets/interior-mobile.jpg';
import { playClick } from '../sounds';

const BG = {
  backgroundImage: `url(${window.innerWidth < 640 ? bakeryInteriorMobile : bakeryInterior})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

/* Wavy torn bottom — 40 teeth, more pronounced than the menu receipt */
const WAVY_BOTTOM = `polygon(
  0% 0%, 100% 0%, 100% 91%,
  97.5% 94.5%, 95%   91%,  92.5% 94.5%, 90%   91%,  87.5% 94.5%,
  85%   91%,  82.5% 94.5%, 80%   91%,  77.5% 94.5%, 75%   91%,
  72.5% 94.5%, 70%  91%,  67.5% 94.5%, 65%   91%,  62.5% 94.5%,
  60%   91%,  57.5% 94.5%, 55%   91%,  52.5% 94.5%, 50%   91%,
  47.5% 94.5%, 45%  91%,  42.5% 94.5%, 40%   91%,  37.5% 94.5%,
  35%   91%,  32.5% 94.5%, 30%   91%,  27.5% 94.5%, 25%   91%,
  22.5% 94.5%, 20%  91%,  17.5% 94.5%, 15%   91%,  12.5% 94.5%,
  10%   91%,   7.5% 94.5%,  5%   91%,   2.5% 94.5%,  0%   91%
)`;

/* Subtle horizontal paper grain */
const PAPER_GRAIN = {
  backgroundImage: `
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(170,140,90,0.045) 3px,
      rgba(170,140,90,0.045) 4px
    )
  `,
};


export default function ReceiptScene({ selectedItems, onNext, onBack }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);


  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 16px',
      ...BG,
    }}>
      {/* Dark overlay */}
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.18)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: 420,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        zoom: window.innerWidth >= 640 ? 0.85 : 1,
      }}>

        {/* Scene title above receipt */}
        <div style={{
          textAlign: 'center',
          marginBottom: 20,
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 9,
          color: '#FDF6E3',
          textShadow: '2px 2px 0 rgba(0,0,0,0.35), 1px 1px 0 rgba(0,0,0,0.2)',
          letterSpacing: 1.5,
          lineHeight: 2,
        }}>
          ✦ Here's Your Order ✦
        </div>

        {/* Receipt — floating, ever-so-slightly tilted */}
        <div style={{
          filter: 'drop-shadow(0 10px 28px rgba(0,0,0,0.30)) drop-shadow(0 3px 8px rgba(0,0,0,0.18))',
          animation: 'receiptFloat 5s ease-in-out infinite',
        }}>
          <div style={{
            background: '#FDFAF3',
            ...PAPER_GRAIN,
            clipPath: WAVY_BOTTOM,
            paddingBottom: 64,
            borderRadius: '4px 4px 0 0',
          }}>

            {/* Perforation holes */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 20px 0' }}>
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} style={{
                  width: 7, height: 7,
                  borderRadius: '50%',
                  background: '#EDE0C4',
                  border: '1px solid #D4BCA0',
                }} />
              ))}
            </div>

            {/* Header stamp block */}
            <div style={{ padding: '12px 28px 0', textAlign: 'center' }}>
              <div style={{ display: 'inline-block', transform: 'rotate(-2.5deg)' }}>
                <div style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 13,
                  color: '#3D1F0F',
                  border: '3px solid #3D1F0F',
                  padding: '7px 20px',
                  letterSpacing: 2,
                  lineHeight: 1.8,
                  opacity: 0.87,
                  background: 'rgba(253,250,243,0.0)',
                  boxShadow: 'inset 0 0 0 1px rgba(61,31,15,0.06)',
                }}>
                  YOUR ORDER
                </div>
              </div>
              <div style={{
                fontFamily: 'VT323, monospace',
                fontSize: 16,
                color: '#B08060',
                letterSpacing: 3,
                marginTop: 5,
                fontStyle: 'italic',
              }}>
                Shahla's Sweet Corner
              </div>
              <div style={{
                fontFamily: 'VT323, monospace',
                fontSize: 13,
                color: '#D4BCA0',
                letterSpacing: 2,
                marginTop: 2,
              }}>
                — a little something sweet —
              </div>
            </div>

            {/* Divider */}
            <div style={{ margin: '13px 22px 0', borderTop: '1.5px dashed #D4BCA0' }} />

            {/* Column headers */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 22px 4px',
              gap: 8,
            }}>
              {/* spacer: bullet + thumb */}
              <div style={{ width: 58, flexShrink: 0 }} />
              <div style={{ flex: 1, fontFamily: 'VT323, monospace', fontSize: 12, color: '#C8A97E', letterSpacing: 1.5 }}>
                ITEM
              </div>
              <div style={{ fontFamily: 'VT323, monospace', fontSize: 12, color: '#C8A97E', width: 30, textAlign: 'center', letterSpacing: 1 }}>
                QTY
              </div>
              <div style={{ fontFamily: 'VT323, monospace', fontSize: 12, color: '#C8A97E', width: 55, textAlign: 'right', letterSpacing: 1 }}>
                PRICE
              </div>
            </div>

            {/* Item rows */}
            <div style={{ padding: '0 22px' }}>
              {selectedItems.map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '7px 0',
                    borderBottom: i < selectedItems.length - 1
                      ? '1px dashed #E8D5B5'
                      : 'none',
                    animation: `receiptLine 0.38s ease ${i * 0.07}s both`,
                  }}
                >
                  {/* Checkbox bullet */}
                  <div style={{
                    width: 14, height: 14,
                    border: '2px solid #C8965A',
                    borderRadius: 3,
                    background: '#FFF4E0',
                    flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 8, color: '#9B6B3A',
                  }}>✓</div>

                  {/* Thumbnail */}
                  <div style={{
                    width: 40, height: 40,
                    flexShrink: 0,
                    background: 'rgba(255,245,230,0.75)',
                    border: '1px solid rgba(200,160,100,0.28)',
                    borderRadius: 7,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: 30, height: 30, objectFit: 'contain', imageRendering: 'pixelated', display: 'block' }}
                      draggable={false}
                    />
                  </div>

                  {/* Name */}
                  <div style={{
                    flex: 1,
                    fontFamily: 'VT323, monospace',
                    fontSize: 19,
                    color: '#3D1F0F',
                    lineHeight: 1.2,
                    minWidth: 0,
                  }}>
                    {item.name}
                  </div>

                  {/* Qty */}
                  <div style={{
                    fontFamily: 'VT323, monospace',
                    fontSize: 16,
                    color: '#9B7050',
                    width: 30,
                    textAlign: 'center',
                    flexShrink: 0,
                  }}>
                    x1
                  </div>

                  {/* Price */}
                  <div style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 6.5,
                    color: '#5C3D2E',
                    width: 55,
                    textAlign: 'right',
                    flexShrink: 0,
                    lineHeight: 1.8,
                  }}>
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ margin: '10px 22px 0', borderTop: '1.5px dashed #D4BCA0' }} />

            {/* Totals footer */}
            <div style={{ padding: '10px 22px 0' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}>
                <div style={{
                  fontFamily: 'VT323, monospace',
                  fontSize: 16,
                  color: '#9B7050',
                  fontStyle: 'italic',
                }}>
                  {selectedItems.length} {selectedItems.length === 1 ? 'item' : 'items'}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <div style={{ fontFamily: 'VT323, monospace', fontSize: 18, color: '#7A5030', letterSpacing: 1 }}>
                    TOTAL
                  </div>
                  <div style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 10,
                    color: '#3D1F0F',
                    lineHeight: 1.8,
                  }}>
                    ${total.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Thank-you line */}
              <div style={{
                textAlign: 'center',
                marginTop: 12,
                fontFamily: 'VT323, monospace',
                fontSize: 14,
                color: '#C8A97E',
                letterSpacing: 3,
              }}>
                ✦ &nbsp; thank you &nbsp; ✦
              </div>

            </div>

          </div>
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          marginTop: 16,
        }}>
          <button
            onClick={() => { playClick(); onNext(); }}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 9,
              background: 'linear-gradient(180deg, #FFC8D8 0%, #F080A0 50%, #D05878 100%)',
              color: '#FFF0F4',
              border: '2px solid #B03058',
              borderRadius: 26,
              padding: '12px 44px',
              cursor: 'pointer',
              boxShadow: '0 4px 0 #980A38, 0 6px 16px rgba(180,40,70,0.22), inset 0 1px 0 rgba(255,220,232,0.5)',
              letterSpacing: 1, lineHeight: 1.8,
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = '0 1px 0 #980A38, inset 0 1px 0 rgba(255,220,232,0.5)'; }}
            onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            PLACE ORDER ▶
          </button>
          <button
            onClick={() => { playClick(); onBack(); }}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 7,
              background: 'linear-gradient(180deg, #FFFAF4 0%, #F5EAD0 50%, #E8D5B5 100%)',
              color: '#5C3020',
              border: '2px solid #C8A870',
              borderRadius: 24,
              padding: '10px 28px',
              cursor: 'pointer',
              letterSpacing: 0.5, lineHeight: 1.8,
              boxShadow: '0 4px 0 #A08848, 0 5px 12px rgba(90,55,15,0.16), inset 0 1px 0 rgba(255,255,255,0.7)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = '0 1px 0 #A08848, inset 0 1px 0 rgba(255,255,255,0.7)'; }}
            onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            ◀ BACK
          </button>
        </div>

      </div>
    </div>
  );
}
