

import { useRef, useEffect } from "react";

export default function ParallaxHero({ src, alt = "", height = "60vh", minHeight }: { src: string; alt?: string; height?: string; minHeight?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    function setParallax() {
      const container = containerRef.current;
      const img = imgRef.current;
      if (!container || !img) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // How far the top of the container is from the top of the viewport
      const fromTop = rect.top;
      // The scroll progress through the container (0 = top, 1 = bottom)
      const progress = Math.max(0, Math.min(1, -fromTop / (rect.height - windowHeight)));
      // Make the image always taller than the container (e.g., 1.4x)
      const containerHeight = rect.height;
      const imgHeight = containerHeight * 1.4;
      img.style.height = `${imgHeight}px`;
      img.style.width = '100%';
      // The max offset is the difference between image and container
      const maxOffset = imgHeight - containerHeight;
      const translateY = -progress * maxOffset;
      img.style.transform = `translateY(${translateY}px)`;
    }
    window.addEventListener("scroll", setParallax, { passive: true });
    window.addEventListener("resize", setParallax);
    setParallax();
    return () => {
      window.removeEventListener("scroll", setParallax);
      window.removeEventListener("resize", setParallax);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: height,
        minHeight: minHeight || "650px",
        maxWidth: "100%",
        overflow: "hidden",
        position: "relative",
        margin: 0,
        padding: 0,
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 0,
          willChange: "transform",
          transition: "transform 0.1s linear",
        }}
      />
    </div>
  );
}
