import React from 'react';
import { AiOutlineCloseCircle, AiOutlineUpload } from 'react-icons/ai';

function CanvasEdit({ onUpdateCanvas }) {
  const handleAdContentChange = (e) => {
    onUpdateCanvas({ adContent: e.target.value });
  };

  const handleCtaTextChange = (e) => {
    onUpdateCanvas({ ctaText: e.target.value });
  };

  const handleBgColorChange = (e) => {
    onUpdateCanvas({ bgColor: e.target.value });
  };

  return (
    <div>
      <AiOutlineCloseCircle size={24} />
      <div>
        <h1>Ad customization</h1>
        <p>Customize your ad and get the templates accordingly</p>
      </div>
      <div className='flex items-center'>
        <AiOutlineUpload size={24} />
        <p>Change the ad creative image</p>
        <input type="file" accept="image/*" />
      </div>
      <div>
        <hr />
        <p>Edit contents</p>
        <hr />
      </div>
      <div>
        <input type="text" placeholder='Ad Content' onChange={handleAdContentChange} />
        <br />
        <input type="text" placeholder='CTA' onChange={handleCtaTextChange} />
        <br />
        <input type="color" onChange={handleBgColorChange} />
      </div>
    </div>
  );
}

export default CanvasEdit;
