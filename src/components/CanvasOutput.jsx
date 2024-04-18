import React, { useEffect, useRef } from 'react';

function CanvasOutput({ canvasData }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = canvasData.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

  }, [canvasData]);

  return (
    <canvas ref={canvasRef} width={1080} height={1080} style={{ width: '400px', height: '400px' }} />
  );
}

export default CanvasOutput;
