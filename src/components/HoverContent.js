import React, { useState } from 'react';

const HoverContent = ({ children, buttonText }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          background: "#1b1b1d",
          border: 'solid 1px #ccc',
          padding: '10px',
          display: showContent ? 'block' : 'none'
        }}
      >
        {children}
      </div>
      <button
        style={{ cursor: 'pointer' }}
        onClick={() => setShowContent(true)}
      >
        {buttonText || '显示内容'}
      </button>
    </div>
  );
};

export default HoverContent;
