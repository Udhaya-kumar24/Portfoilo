import React, { useState, useEffect } from 'react';

const PointerAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY -10});
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="pointer" 
      style={{ 
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
      }} 
    />
  );
};

export default PointerAnimation;
