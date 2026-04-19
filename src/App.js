import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import './App.css';
import kitchenImg        from './assets/kitchen.jpeg';
import kitchenMobileImg  from './assets/kitchen-mobile.jpeg';
import readyImg          from './assets/ready.jpeg';
import readyMobileImg    from './assets/ready-mobile.jpeg';
import bakingGif         from './assets/baking.gif';
import treatsGif         from './assets/treats.gif';
import LandingScreen from './components/LandingScreen';
import MenuScreen    from './components/MenuScreen';
import NoteScreen    from './components/NoteScreen';
import ReceiptScene  from './components/ReceiptScene';
import PayScreen     from './components/PayScreen';
import SendScreen    from './components/SendScreen';

function App() {
  const [step, setStep]                   = useState(0);
  const [muted, setMuted]                 = useState(false);
  const audioRef                          = useRef(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.12;

    const startOnFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener('click', startOnFirstInteraction);
      document.removeEventListener('touchstart', startOnFirstInteraction);
    };

    document.addEventListener('click', startOnFirstInteraction);
    document.addEventListener('touchstart', startOnFirstInteraction);
    return () => {
      document.removeEventListener('click', startOnFirstInteraction);
      document.removeEventListener('touchstart', startOnFirstInteraction);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  /* Preload PayScreen assets immediately so there's zero delay when the scene starts */
  useEffect(() => {
    [kitchenImg, kitchenMobileImg, readyImg, readyMobileImg, bakingGif, treatsGif].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  const [whiteIn, setWhiteIn]             = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [personalNote, setPersonalNote]   = useState('');
  const [toName, setToName]               = useState('');
  const [fromName, setFromName]           = useState('');

  /* Instant step change — no fade */
  const goToStep = (n) => setStep(n);

  /* Cream fade — Enter Café, Place Order, and treats-ready → Send */
  const goToStepWithFade = (n) => {
    setWhiteIn(true);
    setTimeout(() => setStep(n), 440);
    setTimeout(() => setWhiteIn(false), 500);
  };

  const startOver = () => {
    setSelectedItems([]);
    setPersonalNote('');
    setToName('');
    setFromName('');
    goToStepWithFade(0);
  };

  const MAX_TREATS = 6;

  const toggleItem = (item) => {
    setSelectedItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.filter(i => i.id !== item.id);
      if (prev.length >= MAX_TREATS) return prev;
      return [...prev, item];
    });
  };

  return (
    <>
      <div className="app-root">
        {step === 0 && (
          <LandingScreen
            onEnter={() => goToStepWithFade(1)}
            toName={toName}
            onToNameChange={setToName}
          />
        )}

        {step === 1 && (
          <MenuScreen
            selectedItems={selectedItems}
            onToggleItem={toggleItem}
            onNext={() => goToStep(2)}
            onBack={() => goToStep(0)}
            toName={toName}
          />
        )}

        {step === 2 && (
          <NoteScreen
            note={personalNote}
            onNoteChange={setPersonalNote}
            toName={toName}
            onToNameChange={setToName}
            fromName={fromName}
            onFromNameChange={setFromName}
            onNext={() => goToStep(3)}
            onBack={() => goToStep(1)}
          />
        )}

        {step === 3 && (
          <ReceiptScene
            selectedItems={selectedItems}
            onNext={() => goToStepWithFade(4)}
            onBack={() => goToStep(2)}
          />
        )}

        {step === 4 && (
          <PayScreen
            onComplete={() => goToStepWithFade(5)}
            selectedItems={selectedItems}
          />
        )}

        {step === 5 && (
          <SendScreen
            selectedItems={selectedItems}
            personalNote={personalNote}
            toName={toName}
            fromName={fromName}
            onBack={startOver}
            onAddMore={() => goToStepWithFade(1)}
          />
        )}
      </div>

      {/* Background music */}
      <audio ref={audioRef} src="/sounds/bg-music.mp3" loop preload="auto" />

      {/* Mute toggle — fixed bottom-right */}
      <button
          onClick={() => setMuted(m => !m)}
          title={muted ? 'Unmute music' : 'Mute music'}
          style={{
            position: 'fixed', bottom: 18, right: 18, zIndex: 10000,
            width: 36, height: 36,
            background: 'rgba(253,244,227,0.88)',
            border: '1.5px solid rgba(200,140,160,0.45)',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(4px)',
            transition: 'opacity 0.2s',
          }}
        >
          {muted ? '🔇' : '🎵'}
        </button>

      {/* Cream overlay — Enter Café, Place Order, treats ready → Send */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#FDF4E3',
        opacity: whiteIn ? 1 : 0,
        transition: 'opacity 0.44s ease',
        pointerEvents: 'none',
      }} />
    </>
  );
}

export default App;
