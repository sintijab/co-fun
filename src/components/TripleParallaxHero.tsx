import { useEffect, useRef } from 'react';

const PARALLAX_SCALE = 1.3;

export default function TripleParallaxHero({
  images,
  height = '46vh',
  minHeight = '260px',
}: {
  images: { src: string; alt: string }[];
  height?: string;
  minHeight?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    function setParallax() {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const fromTop = rect.top;
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - fromTop) / (windowHeight + rect.height))
      );
      const containerHeight = rect.height;
      const imgHeight = containerHeight * PARALLAX_SCALE;
      const maxOffset = imgHeight - containerHeight;
      const translateY = -progress * maxOffset;
      imgRefs.current.forEach((img) => {
        if (!img) return;
        img.style.height = `${imgHeight}px`;
        img.style.transform = `translateY(${translateY}px)`;
      });
    }
    window.addEventListener('scroll', setParallax, { passive: true });
    window.addEventListener('resize', setParallax);
    setParallax();
    return () => {
      window.removeEventListener('scroll', setParallax);
      window.removeEventListener('resize', setParallax);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        width: '100%',
        height,
        minHeight,
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      {images.map((img, index) => (
        <div
          key={img.src}
          style={{
            flex: '1 1 33.3333%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            ref={(el) => {
              imgRefs.current[index] = el;
            }}
            src={img.src}
            alt={img.alt}
            style={{
              width: '100%',
              objectFit: 'cover',
              position: 'absolute',
              left: 0,
              top: 0,
              willChange: 'transform',
              transition: 'transform 0.1s linear',
            }}
          />
        </div>
      ))}
    </div>
  );
}
