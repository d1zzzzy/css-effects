'use client';

import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react';

import "../styles/interactive-grid-animation.css";

export const Route = createFileRoute('/interactive-grid-animation')({
  component: InteractiveGridAnimation,
})

export function InteractiveGridAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current && tileRef.current) {
      for (let i = 0; i < 1599; i++) {
        containerRef.current.appendChild(tileRef.current.cloneNode());
      }
    }
  }, []);

  return (
    <article className='grid-animation h-full'>
        <section ref={containerRef} className="container h-full">
          <div ref={tileRef} className="tile"></div>
        </section>
    </article>
  )
}
