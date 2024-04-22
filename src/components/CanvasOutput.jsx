import React, { useEffect, useRef, useState } from 'react';

function CanvasOutput({ canvasData }) {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const patternImgRef = useRef(null); // Ref to hold the pattern image

  useEffect(() => {
    loadImages();
  }, [canvasData]);

  const loadImages = () => {
    const patternImg = new Image();
    patternImg.src = canvasData.urls?.design_pattern || '';
  
    patternImg.onload = () => {
      console.log('Image loaded successfully');
      patternImgRef.current = patternImg; // Save the pattern image reference
      setImagesLoaded(true);
      drawCanvas();
    };
  
    patternImg.onerror = (e) => {
      console.error('Error loading image:', e);
      console.log('Image URL:', patternImg.src); // Log the image URL for verification
    };
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = canvasData.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (imagesLoaded) {
      ctx.drawImage(patternImgRef.current, 0, 0, canvas.width, canvas.height); // Use patternImgRef.current
    }
  };

  return (
    <div className='w-1/2 h-screen bg-stone-200'>
      <canvas ref={canvasRef} width={1080} height={1080} style={{ width: '400px', height: '400px' }} />
    </div>
  );
}

export default CanvasOutput;
