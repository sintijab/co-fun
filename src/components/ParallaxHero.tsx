

import { useRef, useEffect } from "react";

export default function ParallaxHero({ src, alt = "", height = "60vh", minHeight, objectPosition, parallaxScale = 1.4 }: { src: string; alt?: string; height?: string; minHeight?: string, objectPosition?: string, parallaxScale?: number}) {
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
      // Scroll progress across the time the container spends passing through
      // the viewport: 0 when it's just entering from the bottom, 1 once it
      // has fully scrolled past the top. Works regardless of whether the
      // container is taller or shorter than the viewport.
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - fromTop) / (windowHeight + rect.height))
      );
      // Make the image always taller than the container (e.g., 1.4x)
      const containerHeight = rect.height;
      const imgHeight = containerHeight * parallaxScale;
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
  }, [parallaxScale]);

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
          objectPosition: objectPosition || "center",
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
