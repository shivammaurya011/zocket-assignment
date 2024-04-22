import React, { useState } from 'react';
import CanvasOutput from './components/CanvasOutput';
import CanvasEdit from './components/CanvasEdit';

function App() {
  const [canvasData, setCanvasData] = useState({
    adContent: '',
    ctaText: 'Shop now',
    bgColor: '#0369A1',
    imageData: null,
  });

  const handleCanvasUpdate = (data) => {
    setCanvasData({ ...canvasData, ...data });
  };

  const handleImageUpload = (imageData) => {
    setCanvasData({ ...canvasData, imageData });
  };

  return (
    <div className='flex'>
      <CanvasOutput canvasData={canvasData} />
      <CanvasEdit onUpdateCanvas={handleCanvasUpdate} onImageUpload={handleImageUpload} />
    </div>
  );
}

export default App;
