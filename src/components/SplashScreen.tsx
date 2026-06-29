'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the splash screen (e.g. 1.5 seconds)
    // In a real app this could wait for specific data or fonts to load.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999, // Ensure it's on top of everything
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut"
            }}
            style={{ width: '120px', height: '120px' }}
          >
            {/* Hamster SVG Logo */}
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
              <circle cx="20" cy="20" r="18" fill="url(#hamsterSplashGrad)" />
              <ellipse cx="13" cy="14" rx="5" ry="6" fill="#FEE566" />
              <ellipse cx="27" cy="14" rx="5" ry="6" fill="#FEE566" />
              <circle cx="20" cy="22" r="10" fill="#FED514" />
              <circle cx="16" cy="20" r="2" fill="#013A6B" />
              <circle cx="24" cy="20" r="2" fill="#013A6B" />
              <ellipse cx="20" cy="24" rx="2.5" ry="1.5" fill="#E5BF00" />
              <circle cx="15" cy="24" r="3" fill="#FEE566" opacity="0.5" />
              <circle cx="25" cy="24" r="3" fill="#FEE566" opacity="0.5" />
              <defs>
                <linearGradient id="hamsterSplashGrad" x1="2" y1="2" x2="38" y2="38">
                  <stop stopColor="#024F90" />
                  <stop offset="1" stopColor="#0A6BB5" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
