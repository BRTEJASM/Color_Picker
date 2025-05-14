import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';

function App() {
  const [color, setColor] = useState('#000000');

  return (
    <div className="app">
      <h1>Color Picker</h1>
      <ColorPicker color={color} setColor={setColor} />
      <p>Selected Color: <span style={{ color }}>{color}</span></p>
    </div>
  );
}

export default App;