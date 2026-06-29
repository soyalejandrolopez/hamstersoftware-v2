'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Only show on devices with a mouse
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Ensure cursor disappears when leaving the window
    document.addEventListener('mouseleave', () => setIsVisible(false));
    document.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          pointerEvents: 'none',
          zIndex: 10000,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          rotate: isClicking ? -15 : isHovering ? 15 : 0,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 300 }}
      >
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
          <circle cx="20" cy="20" r="18" fill="url(#hamsterCursorGrad)" />
          <ellipse cx="13" cy="14" rx="5" ry="6" fill="#FEE566" />
          <ellipse cx="27" cy="14" rx="5" ry="6" fill="#FEE566" />
          <circle cx="20" cy="22" r="10" fill="#FED514" />
          <circle cx="16" cy="20" r="2" fill="#013A6B" />
          <circle cx="24" cy="20" r="2" fill="#013A6B" />
          <ellipse cx="20" cy="24" rx="2.5" ry="1.5" fill="#E5BF00" />
          <circle cx="15" cy="24" r="3" fill="#FEE566" opacity="0.5" />
          <circle cx="25" cy="24" r="3" fill="#FEE566" opacity="0.5" />
          <defs>
            <linearGradient id="hamsterCursorGrad" x1="2" y1="2" x2="38" y2="38">
              <stop stopColor="#024F90" />
              <stop offset="1" stopColor="#0A6BB5" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}
