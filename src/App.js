import React from 'react';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ["#FF5733", "#3CFF33", "#3373FF"];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
