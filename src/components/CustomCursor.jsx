import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top = glowY + 'px';
      rafId = requestAnimationFrame(animateGlow);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={glowRef} className="cursor-glow" />
    </>
  );
}