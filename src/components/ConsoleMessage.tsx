'use client';

import { useEffect } from 'react';

export default function ConsoleMessage() {
  useEffect(() => {
    console.log(
      '%c🐹 Hamster Software',
      'color: #024F90; font-size: 32px; font-weight: bold; text-shadow: 2px 2px 0 #FED514; font-family: sans-serif;'
    );
    console.log(
      '%cTransformamos datos en decisiones inteligentes.',
      'color: #666; font-size: 14px; font-family: sans-serif;'
    );
  }, []);

  return null;
}
