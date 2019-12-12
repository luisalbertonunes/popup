import React, { useState, useEffect } from 'react';
import Window from './window';
import Counter from './counter';

import './App.css';

function App() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeunload', () => closeWindow());
  }, []);

  const toggleWindow = () => setShow(!show);

  const closeWindow = () => setShow(false);



  return (
    <div className="App">

      <h1>Popup</h1>

      <button onClick={toggleWindow}>
        {show ? 'Fechar o' : 'Abrir o'} Popup
      </button>
      {/* <button onClick={() => setShow('')}>Hack</button> */}
      {show && (
        <Window>
          <Counter />
          <button onClick={() => closeWindow()}>Fechar</button>
        </Window>
      )}
    </div >
  );
}

export default App;
