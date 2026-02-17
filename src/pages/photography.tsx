import React, { useRef, useEffect } from 'react';
import ParallaxHero from '../components/ParallaxHero';
import Head from 'next/head';
import { TextBase, Link, Flex } from '@co-fun/ui';

function ParallaxGallery({ images }: { images: string[] }) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 900;
      if (leftRef.current) {
        leftRef.current.style.transform = isMobile
          ? 'none'
          : `translateY(${scrollY * 0.25}px)`;
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `translateY(${-scrollY * 0.18}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // initial alignment
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Both columns show all images, left is small, right is large
  const leftImages = images;
  const rightImages = images;

  return (
    <div
      className="parallax-gallery-root"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        gap: '3vw',
        margin: '0 0 0 0',
        minHeight: '70vh',
        position: 'relative',
      }}
    >
      {/* Responsive columns: 30% left, 60% right on mobile */}
      <div
        ref={leftRef}
        style={{
          flex: '0 0 30%',
          maxWidth: '30%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5vw',
          zIndex: 1,
        }}
      >
        {leftImages.map((src, idx) => (
          <div
            key={src + '-left'}
            style={{
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
              background: '#fff',
              marginBottom: idx % 2 === 0 ? '2vw' : '0',
            }}
          >
            <img
              src={src}
              alt={`Photography small ${idx + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
                minHeight: '220px',
              }}
            />
          </div>
        ))}
      </div>
      <div
        ref={rightRef}
        style={{
          flex: '0 0 60%',
          maxWidth: '60%',
          display: 'flex',
          flexDirection: 'column',
          gap: '3vw',
          zIndex: 2,
        }}
      >
        {rightImages.map((src, idx) => (
          <div
            key={src + '-right'}
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 6px 32px rgba(0,0,0,0.13)',
              background: '#fff',
              marginTop: idx % 2 === 1 ? '2vw' : '0',
            }}
          >
            <img
              src={src}
              alt={`Photography large ${idx + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
                minHeight: '320px',
              }}
            />
          </div>
        ))}
      </div>
      {/* Responsive styles for mobile */}
      <style>{`
        @media (max-width: 900px) {
          .parallax-gallery-left { flex: 0 0 30%; max-width: 30%; }
          .parallax-gallery-right { flex: 0 0 60%; max-width: 60%; }
          .parallax-gallery-root { min-height: 30vh !important; }
        }
        @media (max-width: 600px) {
          .parallax-gallery-left { flex: 0 0 30%; max-width: 30%; }
          .parallax-gallery-right { flex: 0 0 60%; max-width: 60%; }
          .parallax-gallery-root { min-height: 30vh !important; }
        }
      `}</style>
    </div>
  );
}

export default function Photography() {
  const images = Array.from(
    { length: 20 },
    (_, i) => `/${i + 1 < 10 ? '0' : ''}${i + 1}.png`
  );

  return (
    <>
      <Head>
        <title>Visual Templating with AI in Photography</title>
      </Head>
      <Flex
        direction="column"
        margin={['3rem .5rem', '5rem 10rem', '5rem 20rem']}
        flexWrap="wrap"
      >
        <TextBase
          textStyle="heading"
          lineHeight="2"
          alignSelf="center"
          textAlign="justify"
        >
          VISUAL TEMPLATING WITH AI IN PHOTOGRAPHY
        </TextBase>
        <TextBase
          textStyle="heading"
          fontSize="1.1rem"
          fontWeight="300"
          color="#888"
          alignSelf="center"
          textAlign="center"
          mt=".1rem"
          mb="1.2rem"
        >
          February 17, 2026 · 5 min to read · by Sintija
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          Recently I discovered photographer and cinematographer Xenie
          Zasetskaya. Her work stands out with depth of portraiture, abstract
          composition of space, play of light, and various optical techniques
          that creates unique and highly recognizable outcome. While I haven’t
          had a chance to work with her, I was inspired to learn from her
          techniques and outstanding work, and to try generative AI in process
          to attempt creating similar results.
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          Image generation in portrait photography works best when it analyzes
          several carefully chosen photos of the same person that look like
          “twins” of each other: same face, clear view, but with small
          variations in pose, light, or expression. These photos are turned into
          compact numerical fingerprints (embeddings), and keeping those
          fingerprints tightly clustered around one identity is what gives you
          stable, realistic AI portraits.
        </TextBase>
        <TextBase
          textStyle="activity-title"
          mt="1rem"
          mb=".5rem"
          textAlign="justify"
        >
          What “twin” selection means in this context
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          “Twin” selection means picking several reference shots of one subject
          that are clearly the same person, with similar framing and reasonable
          variation in pose and lighting, but without mixing in other people or
          radically different looks. If the reference set is coherent, all
          embeddings fall into a tight cluster, so the generator can learn “this
          is the identity” and then move around that cluster to change pose,
          clothing, or background while keeping the face stable. Human
          twin‑recognition studies and identity‑preserving editing papers show
          that algorithms perform best when the compared or guiding images are
          close in viewpoint and illumination, which is exactly what good twin
          selection enforces.
        </TextBase>
        <TextBase
          textStyle="activity-title"
          mt="1rem"
          mb=".5rem"
          textAlign="justify"
        >
          How to reduce operational costs in visual storytelling with generative
          AI?
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          The typical photo session can be decomposed into: concept and
          storytelling design, scenography and wardrobe planning, selection of a
          location or interior, the actual shoot, and post‑production for a
          fixed deliverable set. This service business model entails substantial
          financial outlays and protracted timelines due to logistical
          coordination, equipment procurement, and post-production refinements.
          Conversely, AI-assisted methodologies afford significant cost
          reductions—potentially by 80-90% relative to traditional sessions—and
          accelerate turnaround from days to hours, enabling artists to scale
          operations for clients.
        </TextBase>
        <TextBase
          textStyle="activity-title"
          mt="1rem"
          mb=".5rem"
          textAlign="justify"
        >
          Choosing the right day and time for the photoshoot
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          You will no longer be showing merely what you saw, but how you reacted
          to it. You will no longer be reporting on scenes; instead, you will be
          commenting on them. Planning photography work with generative AI can
          deliberately cut costs in production for both photographer and client
          if you consider applying this process instead of capturing and
          revisiting physical spaces over. Lighting effects are crucial for
          modeling and saturation: But until someone can show me otherwise, in
          reality I will continue leaving my white balance set to Sunlight 99
          percent of the time when shooting in natural light, to preserve warm
          tones and enhance visual depth.
        </TextBase>
        <TextBase
          textStyle="activity-title"
          mt="1rem"
          mb=".5rem"
          textAlign="justify"
        >
          Practical checklist for an AI‑extended portrait workflow
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          For a photographer‑client collaboration that explicitly includes AI
          replication, a compact, technically and legally robust workflow can
          include:
          <ul
            style={{
              margin: '1rem 0 1rem 2rem',
              fontSize: '1.2rem',
              lineHeight: '1.8',
            }}
          >
            <li>
              Contract: state clearly that the shoot is designed both for
              traditional outputs and for potential AI‑based creative
              replication, and define separate fee components for those uses.
            </li>
            <li>
              Licensing: grant the client only those AI rights that are intended
              (for example, internal experimentation versus full commercial
              generative campaigns), with explicit prohibitions on onward
              training unless negotiated.
            </li>
            <li>
              Model release: obtain written consent from the model that
              expressly covers training, style transfer, and synthetic image
              generation based on their likeness, with any agreed content or
              context limitations.
            </li>
            <li>
              Data protection: provide GDPR‑compliant notices, document the
              legal basis for processing, and define retention periods and
              technical safeguards for the dataset.
            </li>
            <li>
              Technical curation: select only visually coherent “twin” shots of
              the same model for AI reference sets, with controlled variation in
              pose, lighting, and scenography, and avoid mixing fundamentally
              different faces in the same identity pool.
            </li>
          </ul>
        </TextBase>
      </Flex>
      <ParallaxHero src="/04.png" alt="Photography Cover" height="70vh" />
      <div style={{ marginTop: '20rem' }}>
        <ParallaxGallery images={images} />
      </div>
    </>
  );
}
