import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
      } else {
        setCursorText('');
      }

      const isClickable = Boolean(
        target.closest('button, a, input, select, textarea, [role="button"]')
      );
      setIsHoveringClickable(isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out will-change-transform hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {cursorText ? (
        <div className="-translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#191919] text-[#FFF9F0] text-[11px] font-display font-bold tracking-widest uppercase rounded shadow-lg whitespace-nowrap border border-[#F7F3EA]/30 transition-all duration-150">
          {cursorText}
        </div>
      ) : (
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#191919] transition-all duration-150 ${
            isHoveringClickable
              ? 'w-7 h-7 bg-[#3155FF]/15 border-[#3155FF] scale-110'
              : 'w-3.5 h-3.5 bg-[#191919]/60'
          }`}
        />
      )}
    </div>
  );
};
