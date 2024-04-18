import React, { useState } from 'react';
import CanvasOutput from './components/CanvasOutput';
import CanvasEdit from './components/CanvasEdit';

function App() {
  const [canvasData, setCanvasData] = useState({
    adContent: '',
    ctaText: '',
    bgColor: '#0369A1'
  });

  const handleCanvasUpdate = (data) => {
    setCanvasData({ ...canvasData, ...data });
  };

  return (
    <div className='flex'>
      <CanvasOutput canvasData={canvasData} />
      <CanvasEdit onUpdateCanvas={handleCanvasUpdate} />
    </div>
  );
}

export default App;
