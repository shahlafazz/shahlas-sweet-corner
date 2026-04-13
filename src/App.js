import React, { useState } from 'react';
import './index.css';
import './App.css';
import LandingScreen from './components/LandingScreen';
import MenuScreen    from './components/MenuScreen';
import NoteScreen    from './components/NoteScreen';
import ReceiptScene  from './components/ReceiptScene';
import PayScreen     from './components/PayScreen';
import SendScreen    from './components/SendScreen';

function App() {
  const [step, setStep]                   = useState(0);
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
