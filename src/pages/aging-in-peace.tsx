import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { TextBase, Flex } from '@co-fun/ui';

function BlurredParallaxBackground({ src }: { src: string }) {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    function setParallax() {
      const img = imgRef.current;
      const container = img?.parentElement;
      if (!img || !container) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const fromTop = rect.top;
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - fromTop) / (windowHeight + rect.height))
      );
      const maxOffset = rect.height * 0.2;
      const translateY = -progress * maxOffset;
      img.style.transform = `translateY(${translateY}px) scale(1.15)`;
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
    <img
      ref={imgRef}
      src={src}
      alt=""
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '120%',
        objectFit: 'cover',
        objectPosition: 'top',
        filter: 'blur(16px)',
        willChange: 'transform',
        transition: 'transform 0.1s linear',
      }}
    />
  );
}

export default function AgingInPeace() {
  return (
    <>
      <Head>
        <title>Age doesn&apos;t have a look— peace does.</title>
      </Head>
      <div style={{ position: 'relative', width: '100%', display: 'grid' }}>
        <div
          style={{
            gridArea: '1 / 1',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <BlurredParallaxBackground src="/aging_in_peace.jpg" />
        </div>
        <div
          style={{
            gridArea: '1 / 1',
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          <img
            src="/aging_in_peace.jpg"
            alt="Cliffside portrait overlooking the ocean in Bali, peace over optimization"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </div>
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
          AGE DOESN&apos;T HAVE A LOOK— PEACE DOES.
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
          July 20, 2026 · 4 min to read · by Sintija
        </TextBase>

        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          Lately, I was thinking about longevity and its relationship between
          overwork, stress, recovery, and life towards wellbeing and work-life
          balance.
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          "Why Doing Nothing Can Change Your Life" book reminded me that our
          bodies are not designed for continuous productivity— chronic stress
          and insufficient recovery accumulate over time, affecting physical and
          cognitive health. Doing less is not lost time, but part of sustaining
          ourselves for longer.
        </TextBase>

        <TextBase
          textStyle="activity-title"
          mt="1rem"
          mb=".5rem"
          textAlign="justify"
        >
          The weight of overwork
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          Overwork starts as a heavy, suffocating feeling of dread. Moreover,
          you start blaming others for not keeping up with your end goals of
          productivity. Eventually, your mind stores feelings of guilt,
          hopelessness and unease that slowly develops into anxiety and
          depression. You wear them like skin, as if they were there all along.
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          What makes it particularly dangerous is that the habits leading to it
          — overwork, constant availability, pushing through exhaustion — are
          often mistaken for commitment and high performance.
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          Chronic stress can manifest as erratic or compulsive behavior,
          aggression, miscommunication, detachment, and short focus span —
          eventually making meaningful communication with the person
          increasingly difficult. When these patterns become normalized, burnout
          stops being an individual problem and becomes part of the culture.
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          Overwork is a progressive condition, a slow deterioration of mental
          health. Once it sets in, it can take up to three years to recover.
        </TextBase>

        <TextBase
          textStyle="activity-title"
          mt="1rem"
          mb=".5rem"
          textAlign="justify"
        >
          What it does to the brain
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          Overwork changes your brain&apos;s anatomy and chemistry, too. Worst
          hit is the frontal cortex, which controls decision-making,
          problem-solving, planning and attention. Overwork thins the frontal
          cortex in the same way that ageing does – it literally makes the brain
          older than it is. Like a forest gradually disappearing, your neurons
          lose the branch-like structures known as dendrites, which, once gone,
          are incredibly hard to recover. The frontal cortex is also the brain
          region responsible for good judgement and an awareness of long-term
          consequences, making it the only region that could advise a person
          against working too hard.
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          And that&apos;s not all. Overwork also shrinks the hippocampus, a
          region vital for learning and memory, and enlarges the amygdala, a
          region important for our fight-or-flight response. At the same time,
          it triggers the release of hormones called glucocorticoids. These
          hormones pass straight from your bloodstream into your brain, where
          they attack your neurons and damage your brain&apos;s fine circuitry.
          In everyday life the result is an exhausted, frightened, hesitant
          person, unable to plan, focus, remember and learn: a state also seen
          in patients with early-life trauma and post-traumatic stress disorder
          (PTSD). Age and gender make no difference.
        </TextBase>

        <TextBase
          textStyle="activity-title"
          mt="1rem"
          mb=".5rem"
          textAlign="justify"
        >
          And to the body
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          In the body, overwork affects every organ. Being chained to a desk for
          prolonged periods leads to circulatory diseases like heart attack and
          stroke – even in people with no other risk factors – and those with
          demanding jobs have a much higher risk of type 2 diabetes, high
          cholesterol, breathing problems, gut issues, headaches, chronic pain
          and muscle, bone and joint disorders.
        </TextBase>

        <TextBase
          textStyle="activity-title"
          mt="1rem"
          mb=".5rem"
          textAlign="justify"
        >
          Finding the way back
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          The recovery from burnout is a long term journey that starts with
          smallest everyday choices, to break and unlearn bad habits.
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          Mindfulness is simple to practice- taking longer breaks for a walk,
          reading books, embodiment and cognitive therapy, motion and dance,
          sleep longer hours, maintain nutrition and diet that supports your gut
          health, understanding ambivalence, breaking the cycle of saying
          &ldquo;yes&rdquo; when you want to say &ldquo;no&rdquo;, stop
          apologizing, and express gratitude instead, and lastly-start making
          better homemade drinks.
        </TextBase>

        <TextBase
          textStyle="activity-title"
          mt="1rem"
          mb=".5rem"
          textAlign="justify"
        >
          New versions of familiar pleasures
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          This is my homemade, alcohol-free interpretation inspired by the
          recipe from a cocktail of Mezcal. I replaced the mezcal with a Dryll
          watermelon electrolyte drink, combined with grapefruit lemonade, tonic
          water, homemade rosemary-infused water with agave syrup, a touch of
          habanero, and egg white for texture. The result is fresh, slightly
          bitter and subtly sweet refreshment, with just enough rosemary for
          fragrance and ice to enjoy it for longer.
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          I&apos;m becoming fascinated by homemade soft drinks and zero-proof
          cocktails. Experimenting with herbs, spice, sweetness and texture
          makes the process almost as enjoyable as the drink itself — and
          replacing alcohol can open up an entirely new world of flavors.
        </TextBase>
        <TextBase
          textStyle="initiative-descr"
          fontSize="17pt"
          fontWeight="regular"
          lineHeight="2"
          p=".5rem 0"
          textAlign="justify"
        >
          For me, aging in peace is less about constant optimization and more
          about mindful choices and action — enjoying simple things, finding
          creative solutions, allowing time for recovery, and finding new
          versions of familiar pleasures.
        </TextBase>
      </Flex>
    </>
  );
}
