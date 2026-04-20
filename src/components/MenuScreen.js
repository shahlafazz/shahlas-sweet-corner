import React, { useState, useEffect } from 'react';
import menuItems, { mobileMenuItems } from '../data/menuItems';
import bakeryInterior       from '../assets/bakery-interior.jpeg';
import bakeryInteriorMobile from '../assets/interior-mobile.jpeg';
import { playClick, playSelect, playDeselect } from '../sounds';

/* ─── Responsive hook ───────────────────────────────────────── */
function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
}

/* ─── MenuItem tile ─────────────────────────────────────────── */
function MenuItem({ item, selected, locked, onToggle, imgSize = 76, compact = false, cellHeight = 120 }) {
  const [hovered, setHovered] = useState(false);
  const [popping, setPopping] = useState(false);

  const handleClick = () => {
    if (locked) return;
    setPopping(true);
    setTimeout(() => setPopping(false), 180);
    selected ? playDeselect() : playSelect();
    onToggle(item);
  };

  let tileTransform = '';
  if (popping)      tileTransform = 'scale(0.97)';
  else if (hovered) tileTransform = 'translateY(-1px) scale(1.01)';

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => !locked && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: compact ? '6px 4px 6px' : '8px 6px 8px',
        cursor: locked ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: locked ? 0.38 : 1,
        filter: locked ? 'grayscale(0.4)' : 'none',
        /* tile background */
        background: selected
          ? 'linear-gradient(180deg, #FFF0F5 0%, #FFE4EF 100%)'
          : hovered
            ? 'linear-gradient(180deg, #FFF8F0, #FFF0E4)'
            : '#FFF8F2',
        borderRadius: 14,
        border: 'none',
        boxShadow: selected
          ? 'inset 0 0 0 2px #F0A0BC, 0 4px 14px rgba(220,80,110,0.12)'
          : hovered
            ? 'inset 0 0 0 2px rgba(220,165,140,0.7), 0 6px 18px rgba(0,0,0,0.14)'
            : 'inset 0 0 0 2px rgba(220,165,140,0.35), 0 2px 6px rgba(0,0,0,0.07)',
        transform: tileTransform || undefined,
        transition: 'transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease, opacity 0.22s ease',
        margin: 0,
      }}
    >
      {/* Selected heart badge */}
      {selected && (
        <div style={{
          position: 'absolute', top: 5, right: 5,
          width: 20, height: 20,
          background: 'linear-gradient(135deg, #FF8FAD, #D04870)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 10, color: '#fff',
          zIndex: 2,
          animation: 'heartPop 0.25s ease-out',
          boxShadow: '0 2px 6px rgba(200,50,80,0.35)',
          pointerEvents: 'none',
        }}>♥</div>
      )}

      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: compact && item.mobileImgSize ? item.mobileImgSize : imgSize,
          height: compact && item.mobileImgSize ? item.mobileImgSize : imgSize,
          objectFit: 'contain',
          imageRendering: 'pixelated',
          display: 'block',
          marginBottom: 8,
          marginTop: compact && item.mobileImagePadTop ? item.mobileImagePadTop : 0,
          filter: selected
            ? 'drop-shadow(0 0 5px rgba(220,80,110,0.5))'
            : hovered
              ? 'drop-shadow(0 3px 6px rgba(0,0,0,0.18))'
              : 'drop-shadow(0 2px 3px rgba(0,0,0,0.10))',
          transition: 'filter 0.18s ease',
        }}
        draggable={false}
      />

      {/* Name */}
      <div style={{
        fontFamily: 'VT323, monospace',
        fontSize: compact ? 15 : 15,
        color: selected ? '#7A2840' : '#5C3D2E',
        lineHeight: 1.25,
        textAlign: 'center',
        fontWeight: selected ? 'bold' : 'normal',
        width: '100%',
        overflow: 'hidden',
        whiteSpace: compact ? 'nowrap' : 'normal',
        textOverflow: compact ? 'ellipsis' : 'clip',
        wordBreak: compact ? 'normal' : 'break-word',
        marginTop: 'auto',
      }}>
        {compact && item.mobileName ? item.mobileName : item.name}
      </div>
    </div>
  );
}

/* ─── Pagination arrow ──────────────────────────────────────── */
function PageArrow({ dir, onClick, disabled, remainingCount }) {
  const isNext = dir === 'next';
  return (
    <button
      onClick={() => { if (!disabled) { playClick(); onClick(); } }}
      disabled={disabled}
      style={{
        height: 34,
        padding: '0 14px',
        border: `2px solid ${disabled ? 'rgba(220,165,180,0.25)' : 'rgba(220,120,155,0.65)'}`,
        borderRadius: 20,
        background: disabled ? 'rgba(220,165,180,0.08)' : 'linear-gradient(180deg, #FFF0F5, #FFE0EC)',
        color: disabled ? 'rgba(200,140,160,0.4)' : '#C04870',
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex', alignItems: 'center', gap: 5,
        boxShadow: disabled ? 'none' : '0 2px 0 rgba(180,80,110,0.2), inset 0 1px 0 rgba(255,255,255,0.7)',
        transition: 'background 0.12s',
        flexShrink: 0,
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = 'linear-gradient(180deg, #FFE8F2, #FFD4E8)'; }}
      onMouseLeave={e => { if (!disabled) e.currentTarget.style.background = 'linear-gradient(180deg, #FFF0F5, #FFE0EC)'; }}
    >
      {!isNext && (
        <span style={{ fontFamily: 'monospace', fontSize: 12, lineHeight: 1, opacity: disabled ? 0.4 : 1 }}>←</span>
      )}
      <span style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 8,
        lineHeight: 1,
        letterSpacing: 1,
        textShadow: disabled ? 'none' : '0 0 10px rgba(220,80,130,0.35), 0 0 3px rgba(220,80,130,0.2)',
      }}>
        {isNext ? 'NEXT' : 'BACK'}
      </span>
      {isNext && (
        <span style={{ fontFamily: 'monospace', fontSize: 12, lineHeight: 1, opacity: disabled ? 0.4 : 1 }}>→</span>
      )}
    </button>
  );
}

/* ─── Small bow for header ──────────────────────────────────── */
function TinyBow() {
  return (
    <div style={{ position: 'relative', width: 32, height: 18, display: 'inline-block', verticalAlign: 'middle', marginLeft: 6 }}>
      <div style={{ position: 'absolute', left: 1, top: 2, width: 14, height: 11, background: 'linear-gradient(135deg, #FFD0DC, #E890A8)', borderRadius: '60% 18% 18% 60%', transform: 'rotate(-20deg)', border: '1px solid rgba(200,80,110,0.2)' }} />
      <div style={{ position: 'absolute', right: 1, top: 2, width: 14, height: 11, background: 'linear-gradient(225deg, #FFD0DC, #E890A8)', borderRadius: '18% 60% 60% 18%', transform: 'rotate(20deg)', border: '1px solid rgba(200,80,110,0.2)' }} />
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 8, height: 8, background: 'radial-gradient(circle at 38% 35%, #FFD0E0, #D06080)', borderRadius: '50%', zIndex: 3 }} />
    </div>
  );
}

export default function MenuScreen({ selectedItems, onToggleItem, onNext, onBack, toName }) {
  const windowWidth = useWindowWidth();
  const isMobile    = windowWidth < 640;
  const COLS        = 3;
  const ROWS        = isMobile ? 3 : 4;
  const perPage     = COLS * ROWS;
  const imgSize     = isMobile ? 50 : 76;
  const cellHeight  = isMobile ? 100 : 120;
  const gridGap     = isMobile ? 8 : 10;
  const gridHeight  = ROWS * cellHeight + (ROWS - 1) * gridGap;

  const [page, setPage] = useState(0);
  useEffect(() => { setPage(0); }, [isMobile]);

  const items      = isMobile ? mobileMenuItems : menuItems;
  const totalPages = Math.ceil(items.length / perPage);
  const pageItems  = items.slice(page * perPage, (page + 1) * perPage);
  const isBoxFull  = selectedItems.length >= 6;

  /* remaining items on the next page */
  const nextPageCount = items.slice((page + 1) * perPage, (page + 2) * perPage).length;

  /* pad to fill grid so it keeps consistent height */
  const padded = [...pageItems];
  while (padded.length < perPage) padded.push(null);

  return (
    <div style={{
      minHeight: '100vh', position: 'relative',
      backgroundImage: `url(${isMobile ? bakeryInteriorMobile : bakeryInterior})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: isMobile ? '20px 24px' : '32px 16px',
    }}>
      {/* Overlay */}
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.16)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: 880,
        display: 'flex', gap: 20, alignItems: 'flex-start',
        zoom: isMobile ? 'unset' : 0.85,
      }}>

        {/* ── Display Board ── */}
        <div style={{
          flex: '1 1 0',
          /* outer pink frame */
          background: 'linear-gradient(180deg, #F4B0C4 0%, #EE90A8 50%, #F4B0C4 100%)',
          borderRadius: 22,
          padding: '8px 8px 10px',
          boxShadow:
            '0 10px 36px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.14), ' +
            'inset 0 2px 0 rgba(255,220,232,0.55)',
          border: '2.5px solid rgba(220,120,148,0.40)',
          position: 'relative',
        }}>

          {/* Tiny sparkles on the frame */}
          {[[6,6],[null,8,6],[6,null,null,8],[null,null,8,6]].map((pos, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: pos[0] ?? undefined, left: pos[1] ?? undefined,
              bottom: pos[2] ?? undefined, right: pos[3] ?? undefined,
              fontSize: 9, color: '#FFF0F4', opacity: 0.6,
              animation: `sparkle 2.8s ease-in-out ${i * 0.6}s infinite`,
              pointerEvents: 'none', userSelect: 'none',
            }}>✦</div>
          ))}

          {/* Inner cream board */}
          <div style={{
            background: '#FFF8F2',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: 'inset 0 2px 8px rgba(200,100,130,0.09)',
          }}>

            {/* ── Header tag ── */}
            <div style={{
              background: 'linear-gradient(180deg, #FFE8EF 0%, #FFD4E2 100%)',
              borderBottom: '2px solid rgba(220,150,175,0.35)',
              padding: '12px 16px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 8,
            }}>
              {/* Title pill */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'linear-gradient(180deg, #FFDDE8, #FFC0D4)',
                border: '2px solid rgba(220,120,155,0.45)',
                borderRadius: 20, padding: '6px 14px',
                boxShadow: '0 2px 6px rgba(200,80,120,0.15), inset 0 1px 0 rgba(255,255,255,0.55)',
              }}>
                <span style={{ fontSize: 14 }}>🍰</span>
                <span style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 'clamp(6px, 1.6vw, 9px)',
                  color: '#A03050',
                  textShadow: '1px 1px 0 rgba(255,200,215,0.7)',
                  lineHeight: 1.6,
                }}>
                  {toName ? `for ${toName}` : 'Pick Your Treats'}
                </span>
                <TinyBow />
              </div>

              {/* Right: badge + hint / whisper */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                {/* Count badge */}
                {selectedItems.length > 0 && (
                  <div style={{
                    background: isBoxFull
                      ? 'linear-gradient(135deg, #F0A040, #D07010)'
                      : 'linear-gradient(135deg, #FF8FAD, #D04870)',
                    color: '#FFF0F4',
                    border: `2px solid ${isBoxFull ? 'rgba(160,80,10,0.4)' : 'rgba(180,40,70,0.4)'}`,
                    borderRadius: 20,
                    padding: '3px 10px',
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 7,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.18)',
                    display: 'flex', alignItems: 'center', gap: 5,
                    flexShrink: 0,
                    transition: 'background 0.3s',
                  }}>
                    {isBoxFull ? '🎁' : '♥'} {selectedItems.length}/6
                  </div>
                )}

                <div style={{
                  fontFamily: 'Caveat, cursive',
                  fontSize: 16,
                  color: isBoxFull ? '#A06010' : '#A06070',
                  fontStyle: 'italic',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.3s',
                }}>
                  {isBoxFull ? 'box is full! 🎁' : 'Tap to choose'}
                </div>
              </div>
            </div>

            {/* ── Item grid (ROWS × COLS, responsive) ── */}
            <div style={{ padding: isMobile ? '14px 10px 12px' : '10px 10px 4px', overflow: 'hidden' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${COLS}, 1fr)`,
              gridAutoRows: cellHeight,
              gap: gridGap,
              height: gridHeight,
              overflow: 'hidden',
            }}>
              {padded.map((item, idx) => (
                <div key={idx} style={{ position: 'relative', height: cellHeight, minHeight: 0 }}>
                  {item ? (
                    <MenuItem
                      item={item}
                      selected={!!selectedItems.find(i => i.id === item.id)}
                      locked={isBoxFull && !selectedItems.find(i => i.id === item.id)}
                      onToggle={onToggleItem}
                      imgSize={imgSize}
                      compact={isMobile}
                      cellHeight={cellHeight}
                    />
                  ) : null}
                </div>
              ))}
            </div>
            </div>

            {/* ── Pagination footer ── */}
            <div style={{
              borderTop: '2px solid rgba(220,150,175,0.25)',
              padding: '10px 14px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255,232,240,0.45)',
            }}>
              <PageArrow dir="prev" onClick={() => setPage(p => p - 1)} disabled={page === 0} remainingCount={0} />

              {/* Page dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <div
                    key={i}
                    onClick={() => { playClick(); setPage(i); }}
                    style={{
                      width: i === page ? 22 : 8, height: 8,
                      borderRadius: 4,
                      background: i === page
                        ? 'linear-gradient(90deg, #F080A0, #D04870)'
                        : 'rgba(220,150,175,0.4)',
                      border: '1.5px solid rgba(220,130,160,0.5)',
                      cursor: 'pointer',
                      transition: 'width 0.22s, background 0.22s',
                      boxShadow: i === page ? '0 1px 4px rgba(180,40,70,0.22)' : 'none',
                    }}
                  />
                ))}
              </div>

              <PageArrow dir="next" onClick={() => setPage(p => p + 1)} disabled={page === totalPages - 1 || isBoxFull} remainingCount={nextPageCount} />
            </div>

            {/* ── Write a Note CTA ── */}
            {selectedItems.length > 0 && (
              <div style={{
                padding: '0 14px 14px',
                background: 'rgba(255,232,240,0.45)',
                display: 'flex', justifyContent: 'center',
                animation: 'fade-in 0.3s ease',
              }}>
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
                    width: '100%', maxWidth: 320,
                    boxShadow: '0 4px 0 #980A38, 0 6px 16px rgba(180,40,70,0.22), inset 0 1px 0 rgba(255,220,232,0.5)',
                    letterSpacing: 1, lineHeight: 1.8,
                    transition: 'transform 0.08s, box-shadow 0.08s',
                  }}
                  onMouseDown={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = '0 1px 0 #980A38, inset 0 1px 0 rgba(255,220,232,0.5)'; }}
                  onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  WRITE A NOTE ▶
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── Order Receipt (hidden on mobile) ── */}
        {!isMobile && <OrderReceipt selectedItems={selectedItems} onToggle={onToggleItem} />}
      </div>

{/* Back button */}
      {!isMobile && (
        <div style={{ position: 'relative', zIndex: 1, marginTop: 16, zoom: 0.85 }}>
          <button
            onClick={() => { playClick(); onBack(); }}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 7,
              background: 'linear-gradient(180deg, #FFFAF4 0%, #F5EAD0 50%, #E8D5B5 100%)',
              color: '#5C3020',
              border: '2px solid #C8A870',
              borderRadius: 24,
              padding: '10px 24px',
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
      )}
    </div>
  );
}

/* ─── Bakery receipt panel (preserved, minor polish) ─────────── */
function OrderReceipt({ selectedItems, onToggle }) {
  return (
    <div style={{
      width: 270, flexShrink: 0,
      position: 'sticky', top: 24,
      transform: 'rotate(-1.5deg)',
      filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.28)) drop-shadow(0 2px 6px rgba(0,0,0,0.14))',
    }}>
      <div style={{
        width: '100%',
        background: '#FFFDF7',
        borderRadius: '6px 6px 0 0',
        clipPath: `polygon(
          0% 0%, 100% 0%, 100% 92%,
          96.7% 95%, 93.3% 92%, 90% 95%, 86.7% 92%, 83.3% 95%,
          80% 92%, 76.7% 95%, 73.3% 92%, 70% 95%, 66.7% 92%,
          63.3% 95%, 60% 92%, 56.7% 95%, 53.3% 92%, 50% 95%,
          46.7% 92%, 43.3% 95%, 40% 92%, 36.7% 95%, 33.3% 92%,
          30% 95%, 26.7% 92%, 23.3% 95%, 20% 92%, 16.7% 95%,
          13.3% 92%, 10% 95%, 6.7% 92%, 3.3% 95%, 0% 92%
        )`,
        paddingBottom: 36,
      }}>
        {/* Perforation holes */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 14px 0' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#EDE0C4', border: '1px solid #C8A97E' }} />
          ))}
        </div>

        {/* Stamp header */}
        <div style={{ padding: '8px 18px 0', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 8,
            color: '#5C3D2E',
            border: '2.5px solid #5C3D2E',
            padding: '5px 12px',
            transform: 'rotate(-1.5deg)',
            letterSpacing: 1, lineHeight: 1.8,
            opacity: 0.88,
          }}>YOUR ORDER</div>
          <div style={{ fontFamily: 'VT323, monospace', fontSize: 13, color: '#C8A97E', letterSpacing: 2, marginTop: 2 }}>
            Shahla's Sweet Corner
          </div>
        </div>

        <div style={{ margin: '7px 14px', borderTop: '1.5px dashed #D4BCA0' }} />

        {/* Items */}
        <div style={{ padding: '0 16px', minHeight: 100 }}>
          {selectedItems.length === 0 ? (
            <div style={{ fontFamily: 'VT323, monospace', fontSize: 16, color: '#C8A97E', textAlign: 'center', fontStyle: 'italic', padding: '14px 0', lineHeight: 1.5 }}>
              Nothing selected yet...<br />Pick your treats!
            </div>
          ) : (
            selectedItems.map((item, idx) => (
              <div key={item.id} onClick={() => onToggle(item)} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '5px 0', borderBottom: '1px dashed #E0CEBA', cursor: 'pointer',
                animation: `receiptLine 0.3s ease ${idx * 0.05}s both`,
              }}>
                <div style={{ width: 12, height: 12, border: '2px solid #C8965A', borderRadius: 3, background: '#FFF4E0', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#9B6B3A' }}>✓</div>
                <img src={item.image} alt={item.name} style={{ width: 24, height: 24, objectFit: 'contain', flexShrink: 0, imageRendering: 'pixelated' }} draggable={false} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'VT323, monospace', fontSize: 15, color: '#3D1F0F', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 5, color: '#9B6B4B' }}>${item.price.toFixed(2)}</div>
                </div>
                <div style={{ fontSize: 9, color: '#C8A97E', flexShrink: 0 }}>✕</div>
              </div>
            ))
          )}
        </div>

        <div style={{ margin: '7px 14px 0', borderTop: '1.5px dashed #D4BCA0' }} />
        <div style={{ padding: '5px 16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontFamily: 'VT323, monospace', fontSize: 14, color: '#9B6B4B', fontStyle: 'italic' }}>
            {selectedItems.length} {selectedItems.length === 1 ? 'item' : 'items'}
          </div>
          {selectedItems.length > 0 && (
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 6.5, color: '#5C3D2E' }}>
              ${selectedItems.reduce((s, i) => s + i.price, 0).toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
