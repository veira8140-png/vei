
import React, { useRef, useEffect } from 'react';

export const WaveBackground: React.FC<{ color?: string }> = ({ color = '#D946EF' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 0.002;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      const lines = 180; // Extremely high density for "silk" look
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = color;
      
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        // Layered opacity creates the "mesh" depth
        ctx.globalAlpha = 0.01 + (Math.sin(i * 0.02 + time) * 0.04 + 0.04);
        
        const yBase = (height / lines) * i;
        ctx.moveTo(-100, yBase);
        
        for (let x = 0; x < width + 100; x += 10) {
          const progress = x / width;
          
          // Rolls-Royce "Silk" effect uses multiple harmonics
          const wave1 = Math.sin(x * 0.002 + time + i * 0.04) * 80;
          const wave2 = Math.sin(x * 0.005 - time * 0.5 + i * 0.08) * 30;
          const wave3 = Math.cos(x * 0.001 + time * 0.3 + i * 0.02) * 120;
          
          // Creating "folds" by modulating amplitude based on index
          const foldMod = Math.sin(i * 0.05 + progress * 2.0) * 40;
          
          ctx.lineTo(x, yBase + wave1 + wave2 + wave3 + foldMod);
        }
        
        ctx.stroke();
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-100 pointer-events-none" />;
};
