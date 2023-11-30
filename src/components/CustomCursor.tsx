// src/components/CustomCursor.tsx

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const addLinkHoveredClass = () => {
      document.body.classList.add('link-hovered');
    };

    const removeLinkHoveredClass = () => {
      document.body.classList.remove('link-hovered');
    };

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseover', addLinkHoveredClass);
      el.addEventListener('mouseout', removeLinkHoveredClass);
    });

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseover', addLinkHoveredClass);
        el.removeEventListener('mouseout', removeLinkHoveredClass);
      });
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        zIndex:'9999',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: '40px',
        height: '40px',
        border: clicked ? '1px solid red' : '1px dotted grey',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        backgroundColor: 'transparent',
        transition: 'border 0.3s ease',
      }}
    ></div>
  );
};

export default CustomCursor;
