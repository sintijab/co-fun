import ParallaxHero from "../components/ParallaxHero";
import Head from "next/head";
import { TextBase, Flex } from "@co-fun/ui";
import { useEffect } from "react";

declare global {
    interface Window {
        instgrm?: any;
    }
}

export default function Neuroaesthetics() {

useEffect(() => {
  if (!window.instgrm) {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  } else {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }
}, []);
    return (
        <>
            <Head>
                <title>Neuroaesthetics: Design for the Mind</title>
            </Head>
            <Flex direction="column" align="center" maxW="960px" mx="auto" py={12}>
                <TextBase textStyle="heading" lineHeight="2" alignSelf="center" textAlign="center">
                    THE NEUROAESTHETIC FRAMEWORK: SCIENCE MEETS SENSATION
                </TextBase>
                <TextBase textStyle="heading" fontSize="1.1rem" fontWeight="300" color="#888" alignSelf="center" textAlign="center" mt=".1rem" mb="1.2rem">
                    October 4, 2025 · 10 min to read · by Sintija
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    When I arrived in Italy and began working on construction projects, I was struck by how architecture reshaped my daily life. It started shaping my new standards and perspective on construction after experiencing some of the most vibrant and memorable stays in Mexico. The design of buildings, rooms, and outdoor spaces influences our mood, decisions, and even social interactions. This experience led me to explore the field of neuroaesthetics and learn how our minds respond to environmental design.
                </TextBase>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', alignItems: 'center', marginBottom: '2rem' }}>

                    <ParallaxHero src="./472935387_1635479040377473.png" height="480px" alt="Yoga on rooftop in Puglia" />
                </div>
                <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">Environmental Psychology</TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Research in environmental psychology and neuroaesthetics shows that humans have an innate affiliation with nature, a phenomenon that goes beyond a fondness for greenery; our brains are wired to respond favorably to spaces that echo natural forms, materials and rhythmic patterns.
                </TextBase>
                
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Architecturally, buildings that use stone, wood, and natural building materials like clay, soil, or adobe feels more harmonious and provide thermal, acoustic effects, and comfort. When rooms open onto gardens, lakes, or mountain views, the experience of prospect—feeling safe while looking out over open space—increases feelings of creativity, relaxation, and clarity. Elements like earth-tone rooftops, natural ventilation, and large windows save energy and allow our daily rhythm synchronize with the environment, improving sleep, mood stability, and even immune response.
                </TextBase>

                <ParallaxHero src="./521844422_18391691815136549_4605097953059149504_n.jpg" height="480px" alt="Yoga on rooftop in Puglia" />
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>
                    Source: <a href="https://www.instagram.com/p/DMSUHH2tcNE?img_index=8" style={{ color: '#888', textDecoration: 'underline', fontSize: '0.85rem' }} target="_blank" rel="noopener noreferrer">https://www.instagram.com/p/DMSUHH2tcNE?img_index=8</a>
                </div>                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Agrotourism and longevity are intimately connected with these concepts. Stays at farms or estates that prioritize organic agriculture, local food, and natural cycles provide a unique form of restorative travel. Here, architecture teaches about the rhythms and wisdom of the land and its heritage from generations. Participating in orchard harvests, family dinners, or time in the nature known to reduce chronic stress in recovery process and promote longevity and well-being.
                </TextBase>
                
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Psychologically, prioritizing agrotourism signals care, stewardship, and a sense of continuity—qualities associated with increased trust, community and care. In this way, architecture serves as a bridge—integrating the built environment with nature and inviting us to discover new.
                </TextBase>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', width: '100%', justifyContent: 'center', margin: '2rem 0' }}>
                  <ParallaxHero src="./502669200_18385473763136549_854997160371190443_n.jpg" height="480px" alt="Parallax Image 1" />
                  <ParallaxHero src="./502681898_18385473745136549_3028420093694613459_n.jpg" height="480px" alt="Parallax Image 2" objectPosition="25% 50%" />
                </div>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Modern research reveals that has an impact on brain activity and connection with body functions. Spaces bathed in natural light, constructed with authentic materials, adorned in its landscape natural blending, designed for open and social spaces rather than isolating, activate neurological networks associated with pleasure, safety, and sense of belonging.
                </TextBase>
                <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">Architecture and Tradition Rooted in Place</TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Italian design hotels and villas are defined by their boundary-blurring approach—combining open layouts, dramatic vistas, meticulous use of natural materials, and constant dialogue with landscape and history.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Many Italian villas embrace exposed stone walls, timber ceilings, terracotta floors, and vaults, balancing thermal regulation. Trulli houses in Puglia, with their conical stone roofs, create spaces that maintain a cool temperature and echo the traditional Apulian building craft whereas classic masserias (farmhouses) center around shaded courtyards.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    In contemporary style construction, spaces are stripped to their essentials, employing glass walls and steel structures alongside artisanal stone and timber. Features like frameless panoramic windows—for instance, at Miramonti Boutique Hotel in South Tyrol, allow vast views of forest and mountains, developing connection with the environment and open spaces.
                </TextBase>
                {/* Architectural Analysis */}
                <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">Architectural Decisions For Living</TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    <b>Porosity and Flow. </b> Italian architecture often focuses on spatial continuity, blurring the line between inside and outside. This approach impacts health by increasing access to daylight and surrounding environment.
                </TextBase>
                <ParallaxHero src="./s-palazzo-daniele-gagliano-del-capo-puglia-italy.webp" height="480px" alt="Yoga on rooftop in Puglia" />
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>
                    Source: <a href="https://www.palazzodaniele.com/" style={{ color: '#888', textDecoration: 'underline', fontSize: '0.85rem' }} target="_blank" rel="noopener noreferrer">https://www.palazzodaniele.com/</a>
                </div>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    <b>Material Resonance:</b> Stone, wood, and terracotta are more than historical flourishes; they regulate humidity, temperature, and acoustics.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    <b>Pattern and Ornament:</b> Even minimalist properties retain subtle patterns through brick arches, decorative moldings, and artisanal tilework. These details engage the attention and curiosity.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    <b>Sustainability:</b> Increasingly, Italian villas and hotels adopt energy-efficient insulation, solar panels, and eco-friendly materials, aligning with global trends toward sustainable hospitality and tourism.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Modern Mexican villas are monuments to cultural fusion, regional adaptation, and open-air living. Key elements include traditional elements: adobe construction and terracotta tiles provide thermal insulation and rustic texture. Courtyards and gardens with fountains become private sanctuaries. Vivid Color and Detail- façades are painted in bold hues reflecting local flora and cultural traditions.
                </TextBase>
                <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">Spatial Layouts and Eco-Conscious Design</TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    <b>Spatial Construction. </b> Open layouts, and expansive doors/windows allow the landscape—in jungle, mountain, or sea—to enter at every turn in rhythm of a slow living.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Infinity pools, rooftop terraces, and hammocks recall hacienda grandeur and contemporary luxury. Many villas in Riviera Maya, Punta Mita, and Los Cabos are shaped by the Hacienda, Colonial, and Modernist styles.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Many new builds utilize locally sourced stone, salvaged wood, and natural plasters for cooling, acoustic comfort, and environmental integration.
                </TextBase>
                <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">Architectural Foundations of Neuroaesthetic Science</TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    Modern villas/hotels reflecting on design by nature are standing out with organic materials and interior elements, aesthetics of incomplete, minimalism, design of plantings, water features, and natural textures.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    <b>Cultural Expression. </b> Embedded motifs and reference points connect guests to place, heightening the quality of value for stay with local integrity.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    <b>Spatial Versatility. </b> Spaces transition easily from social gathering zones to private, contemplative nooks.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    <b>Sensory Calibration. </b> Each architectural element—light, color, echo, and tactility—is thoughtfully calibrated to optimize sensory clarity or rest, harnessing the power of environmental psychology.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    The architecture, furnishings, and rituals are not arbitrary. Each choice is rooted in the way human minds respond to light, pattern, space, and social exchange. By integrating neuroscience with craft, locality, and artistry, these properties deliver comfort, belonging, and authentic experience. The future of hospitality is about how our efforts to meet our needs and connect with other people and experiences makes us feel, think, and experience the world.
                </TextBase>
                {/* Instagram Blockquotes in 3 columns on desktop */}
<style>{`
  .insta-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
    margin: 2rem 0;
  }
  @media (min-width: 900px) {
    .insta-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`}</style>
<div className="insta-grid">
  <div style={{ width: '100%', maxWidth: '340px', minWidth: '320px', margin: '0 auto' }}>
    <div
      dangerouslySetInnerHTML={{
        __html: `<blockquote class=\"instagram-media\" data-instgrm-permalink=\"https://www.instagram.com/reel/DMYNHy1sXhf/\" data-instgrm-version=\"14\" style=\"background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; width:100%; min-width:320px; max-width:340px; padding:0;\"></blockquote>`
      }}
    />
  </div>
  <div style={{ width: '100%', maxWidth: '340px', minWidth: '320px', margin: '0 auto' }}>
    <div
      dangerouslySetInnerHTML={{
        __html: `<blockquote class=\"instagram-media\" data-instgrm-permalink=\"https://www.instagram.com/reel/DK7b6Y2oCtI/\" data-instgrm-version=\"14\" style=\"background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; width:100%; min-width:320px; max-width:340px; padding:0;\"></blockquote>`
      }}
    />
  </div>
  <div style={{ width: '100%', maxWidth: '340px', minWidth: '320px', margin: '0 auto' }}>
    <div
      dangerouslySetInnerHTML={{
        __html: `<blockquote class=\"instagram-media\" data-instgrm-permalink=\"https://www.instagram.com/reel/DNIsTykobB0/\" data-instgrm-version=\"14\" style=\"background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; width:100%; min-width:320px; max-width:340px; padding:0;\"></blockquote>`
      }}
    />
  </div>
</div>
                <TextBase textStyle="activity-title" mt="2rem" textAlign="center">
                  What science has taught us so far?
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="16pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                  Aesthetic experiences reshape a complex web of our physiological, neurological, and biological systems—sensory, cognitive, immune, endocrine, motor, respiratory, and more.<br/><br/>
                  We might think the brain runs the show, but our body's physiology responds to our environments without our awareness, and as sensations of light, sound, smell, taste, and touch enter the brain, they set off a complex cascade of neurobiological effects in a continuous feedback loop.<br/><br/>
                  New non-invasive technologies like mobile EEG headsets to measure brainwaves, biosensors to capture physiology, brain-computer interfaces, and AI are enabling us to make meaning of our moment-to-moment responses in real-world settings.<br/><br/>
                  This is revolutionizing the way we translate and apply science into design, by creating a wealth of new information that allows us to integrate scientific measures within our complex social tapestry.
                </TextBase>
                                <TextBase textStyle="activity-title" mt="2rem" mb=".5rem" textAlign="center">
                    How aesthetic experiences impact our brain
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="16pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                    <b>Evolution. </b>
                    Our biological responses stem from our evolutionary needs for survival from our time in savannahs. We are wired to favor safety and security.<br/><br/>
                    <b>Saliency. </b>
                    The salience network in the brain brings attention to what matters to us, emotionally or practically, and aesthetic experiences light up this brain region.<br/><br/>
                    <b>Neurochemicals. </b>
                    Pleasure centers in the brain light up when we engage with aesthetics. These moments trigger the release of feel-good chemicals such as dopamine, serotonin, and oxytocin from the reward system.<br/><br/>
                    <b>Emotions. </b>
                    These physiological sensations often serve as our first response to an environment.<br/>
                    Linked with the autonomic nervous system, they communicate with our brain to guide our feelings, actions, and experiences.<br/><br/>
                    <b>Default Mode Network. </b>
                    The DMN or 'seat of self' encodes what we find beautiful and meaningful. This mechanism thrives on the patterns in aesthetics that are personally significant to us.<br/><br/>
                    <b>Memories. </b>
                    While memories reside in the hippocampus, the emotional essence of aesthetics drives them deeper. Engaging with our sensory and rewards system, memories are stored somatically.
                </TextBase>
                <TextBase textStyle="activity-title" mt="2rem" mb=".5rem" textAlign="center">
                  Designing for Belonging
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="16pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                  "There are certain shapes we gravitate towards, like a cup, because our hands have shaped it and they can embrace it. We have millions of nerves in our fingers and hands that connect to our brain and what feels intuitively right. Honoring these physiologies is really when design gets better."<br/>
                  <i>— Susan Magsamen</i>
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="16pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                  The character, culture, and shape of built spaces is linked to our sense of belonging—a feeling deeply ingrained in human nature.<br/><br/>
                  Our emotions have the most physiological influence over our decision-making, reiterating that designing for emotion will have more impactful results.
                </TextBase>
                <ParallaxHero src="./509436663_122200943936256056_4864651780829267929_n.jpg" height="480px" alt="Yoga on rooftop in Puglia" />
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>
                    Source: <a href="https://www.instagram.com/p/DLRiT52qXpD?img_index=6" style={{ color: '#888', textDecoration: 'underline', fontSize: '0.85rem' }} target="_blank" rel="noopener noreferrer">https://www.instagram.com/p/DLRiT52qXpD?img_index=6</a>
                </div>
                <TextBase textStyle="initiative-descr" fontSize="16pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                  Stemming from our evolutionary needs, this feeling of affinity and physical safety is essential for us to be present, connected, and to flourish in our environments.<br/><br/>
                  This begins at the very first encounter with a space. Our bodies respond before we are able to consciously process it, so when entering a new environment, we should ideally feel a sense of calm and security. Elements like color, light, and materials create something new that is unique to each of us. Understanding the interplay of these sensory ingredients enables us to design from a richer basis of knowledge.
                </TextBase>
                <TextBase textStyle="initiative-descr" fontSize="16pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
                  In 2024, the World Economic Forum stated that to create a truly sustainable future we must "take full advantage of the links between nature, the environment, and human health and longevity."<br/><br/>
                  By placing nature at the heart of design, we can preserve our planet and shift our role from environmental takers to stewards—improving our health and longevity in the process.
                </TextBase>
            </Flex>
        </>
    );
}
