import React from 'react';

/* Corner peg rendered as an absolute div — we need 4 of them */
const Peg = ({ style }) => (
  <div style={{
    position: 'absolute',
    width: 10, height: 10,
    background: 'linear-gradient(135deg, #A07840, #6B4820)',
    border: '2px solid #3D1F0F',
    boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.25)',
    zIndex: 3,
    ...style,
  }} />
);

/**
 * WoodPanel — wooden hanging-sign style panel matching the KoyLiang reference.
 *
 * Props:
 *   children     — content rendered inside the checker interior
 *   style        — extra styles on the outer wood frame wrapper
 *   innerStyle   — extra styles on the checker inner area
 *   noPadding    — if true, removes default padding from inner area
 *   className    — extra classNames on the frame
 */
export default function WoodPanel({ children, style, innerStyle, noPadding, className }) {
  return (
    <div
      className={`wood-panel${className ? ' ' + className : ''}`}
      style={style}
    >
      {/* Four corner pegs */}
      <Peg style={{ top: -2, left: -2 }} />
      <Peg style={{ top: -2, right: -2 }} />
      <Peg style={{ bottom: -2, left: -2 }} />
      <Peg style={{ bottom: -2, right: -2 }} />

      {/* Checker interior */}
      <div
        className="wood-panel-inner"
        style={{ padding: noPadding ? 0 : undefined, ...innerStyle }}
      >
        {children}
      </div>
    </div>
  );
}
