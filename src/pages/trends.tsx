import { Box, Carousel, Flex, Heading, InitiativeOverview, Link, LipsIcon, Loader, ModalBase, Project, TextBase, WordCloud } from "@co-fun/ui";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { getTrends, selectTrends, trendsSlice } from "../slices/getTrends";
import _ from 'lodash';
import { SoundSourceContext } from "../components/charts/SoundSourceContext";
import { TempoRhythmicScale } from "../components/charts/TempoRhythmicScale";
import { BeatTypesTempo } from "../components/charts/BeatTypesTempo";
import { TempoRangeModulation } from "../components/charts/TempoRangeModulation";
import { SoundSourceEnclosed } from "../components/charts/SoundSourceEnclosed";
import { SoundSourceOpenAir } from "../components/charts/SoundSourceOpenAir";
import { SoundSourceNatural } from "../components/charts/SoundSourceNatural";
import { RhythmicScaleContext } from "../components/charts/RhythmicScaleContext";
import { TempoComplexityContext } from "../components/charts/TempoComplexityContext";
import { generateColorPalettes } from '../components/utils/p5_utils';
import dynamic from "next/dynamic";
import Head from "next/head";
import { AspectRatio } from "@chakra-ui/react";
const Sketch = dynamic(() => import('@co-fun/ui').then((data) => data.Sketch), {ssr: false});


export default function Trends() {
  const [isChatVisible, toggleWidget] = useState<boolean | null>(null);
  const iframeWidgetDesktop = useRef(null);
  const trendsList = useSelector(selectTrends);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(trendsSlice.actions.reset())
  }, [])

  useEffect(() => {
    if (!trendsList.length) {
      dispatch(getTrends('technical'))
    }
  }, [])

  if (!trendsList?.length) { 
    return <Loader top={["3.2rem", "0"]} />
  }
  const list = trendsList.map((sound, i) =>
    <Flex key={i} justifyContent="center" alignItems="center" position="relative"><Link href={sound?.source || '/trends'} isExternal={true} variant="card" position="absolute" p=".5rem" textAlign="center">{`${sound.author?.toUpperCase()} - ${sound.title?.toUpperCase()}`}</Link>{typeof window !== undefined && <Sketch reset={false} w={300} h={300} customColors={generateColorPalettes} />}</Flex>
  );
  const chunkedItems = _.chunk(list, 3);
  const info = <Flex cursor="pointer" border="1px" h="1.2rem" w="1.2rem" ml=".5rem" borderRadius="1rem" justifyContent="center" alignContent="center" flexWrap="wrap" _hover={{ boxShadow: "inset 0 0 0 150px rgba(0, 0, 0, 0.05)" }}><TextBase textStyle="button-select-info">{`?`}</TextBase></Flex>
  const args = {
    title: '',
    author: '',
    description: '“Listening helps us communicate and deepen our understanding and appreciation of environment around us. Learning about the sound artists and their work in different contexts helps listeners recognize how location influences sound, and most importantly acknowledge - what brings us joy.”',
    isFollowing: null,
  };
  return <>
      <Head>
        <title>The Connections That Stands the Test of Time</title>
      </Head>
      <Flex m={["2rem .5rem", "3.5rem"]} flexWrap="wrap" maxWidth="100%">
        <a href="https://sound-master-chat.onrender.com" target="_blank" rel="norefferer noopener"><TextBase textStyle="project-title" textDecoration="underline" mt={["1.2rem", "0"]} mb={["0", ".3rem"]}>Chat with our AI Moderator to update this radio stream</TextBase></a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=T1-rgZ1Ro-1BU_HH&amp;list=PLKGWhcWwmOrP7pW62wyS0qR5Os1wmgWfc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <TextBase fontStyle="italic">* AI Radio Stream is getting updated once in a day. It plays available sound records selected by AI moderators.</TextBase>
        <InitiativeOverview {...args} border="1px solid #CCCCCC" borderRadius=".5rem" mt="1rem" p={["2rem .5rem", "4rem"]}>
          <Project title="AI Radio Moderation" description="Based on your listening experience AI algorithm will analyze your stats and give you suggestions from similar playlists on a daily basis. Variety of selection is based on how many active listeners are contributing to this project." isEndorsed={false} width="100%" formId="https://co-fun.us9.list-manage.com/subscribe/post?u=afdf41c218cb20406a176006b&amp;id=5656180439&amp;f_id=00a056e1f0">
            <TextBase textStyle="project-title" flexBasis="100%" mb="1rem">Wisdom, intuition and growth</TextBase>
            <Carousel cards={chunkedItems} h="300px" />
            <Flex flexWrap="wrap" width="100%" justifyContent="space-between">
              <Flex flexBasis="100%" mb="2rem" mt="1rem" flexDirection="column">
              <Box m="2rem 0 0">
                <TextBase fontSize="clamp(2rem, 2.5vw, 4.5rem)" lineHeight="1.1" fontFamily="Poppins" textStyle="heading" mb=".5rem">
                  The Connections That Stands the Test of Time
                </TextBase>
                <TextBase fontSize="clamp(0.75rem, 1vw, 1.5rem)" lineHeight="1.5" textStyle="project-descr" mb=".2rem">
                  {`This auto-generated layout displays quotes and book recommendations from AI radio moderation. It analyzes open-ended feedback about the sound listening experiences over a period of month and associates responses with similar narratives from selected influential writers.`}
                </TextBase>
              </Box>
                <WordCloud />
                <TextBase fontStyle="italic">* The layout design has been inspired from generations of players is Tetris. Created by a software engineer Alexey Pajitnov in 1984, it is timeless and has been played by millions worldwide.</TextBase>
              </Flex>
              <Flex flexBasis="100%" mb="2rem" mt="1rem" alignItems="center">
              <TextBase textStyle="project-title">Sound Analysis</TextBase>
                <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<>
                  <TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Cluster Analysis: Group sounds based on origin and characteristics (e.g., natural vs. synthetic, enclosed vs. open spaces) by using sound sources, spatial context, and their subcategories.</TextBase>
                  <TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Pattern Recognition in Rhythm: Look at rhythm and tempo variables to identify common rhythmic and temporal patterns, which helps classify sound sources that share rhythmic qualities.</TextBase>
                  <TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Environmental Acoustics and Reverb Profiles: spatial context and its subsets to analyze environmental reverb and sound diffusion qualities, valuable for soundscapes and immersive audio experiences.</TextBase>
                </>}</Flex>} title={'Sound Analysis'} button={info} />
              </Flex>
              <Flex flexBasis="100%" alignItems="center" mb="2rem" mt="3rem" justifyContent="center">
                <TextBase textStyle="project-title">Sound Origin and Characteristics</TextBase>
                <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<><TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Sound source in its spatial context and its subcategories provides a framework for understanding where and how the sounds are produced or perceived. Analyzing these together allows you to identify sound sources in specific spatial environments and link natural or artificial sources with their acoustic settings.</TextBase></>}</Flex>} title={'Sound Origin and Characteristics'} button={info} />
              </Flex>
              <Box w={["100%", "31%"]} maxWidth="100%">
              <SoundSourceContext data={trendsList} />
              </Box>
              <Box w={["100%", "31%"]} maxWidth="100%">
              <RhythmicScaleContext data={trendsList} />
              </Box>
              <Box w={["100%", "31%"]} maxWidth="100%">
              <TempoComplexityContext data={trendsList} />
              </Box>
              <Flex flexBasis="100%" alignItems="center" mb="2rem" mt="3rem" justifyContent="center">
                <TextBase textStyle="project-title">Rhythm and Temporal Features</TextBase>
                <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<><TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">These rhythm-related variables cover how sound flows over time and the nature of its rhythm, tempo, and pattern complexity. Beat types complements rhythmic scale and tempo modulation by adding specific rhythmic structure, which is essential when assessing how sounds might interact in dynamic patterns or temporal shifts. This group helps classify sounds based on rhythmic features and tempo behaviors, aiding in clustering sounds by their temporal characteristics.</TextBase></>}</Flex>} title={'Rhythm and Temporal Features'} button={info} />
              </Flex>
              <Box w={["100%", "31%"]} maxWidth="100%">
              <TempoRhythmicScale data={trendsList} />
              </Box>
              <Box w={["100%", "31%"]} maxWidth="100%">
              <BeatTypesTempo data={trendsList} />
              </Box>
              <Box w={["100%", "31%"]} maxWidth="100%">
              <TempoRangeModulation data={trendsList} />
              </Box>
              <Flex flexBasis="100%" alignItems="center" mb="2rem" mt="3rem" justifyContent="center">
                <TextBase textStyle="project-title">Environment and Acoustic Properties</TextBase>
                <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<><TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Analyzing sound sources in spatial context allows you to evaluate the acoustic environments in which sounds are produced or recorded. This is important for categorizing sounds based on their spatial and environmental acoustics, which can influence how sounds propagate and blend in particular settings.</TextBase></>}</Flex>} title={'Environment and Acoustic Properties'} button={info} />
              </Flex>
              <Box w={["100%", "31%"]} maxWidth="100%">
              <SoundSourceEnclosed data={trendsList} />
              </Box>
              <Box w={["100%", "31%"]} maxWidth="100%">
              <SoundSourceOpenAir data={trendsList} />
              </Box>
              <Box w={["100%", "31%"]} maxWidth="100%">
              <SoundSourceNatural data={trendsList} />
              </Box>
            </Flex>
          </Project>
        </InitiativeOverview>
      </Flex>
      {isChatVisible && <AspectRatio ratio={3 / 4} position="fixed" bottom="4rem" right={["1rem", "4rem"]} zIndex={1} display={["none", "unset"]}>
        <iframe ref={iframeWidgetDesktop} src="https://sound-master-chat.onrender.com/" style={{ position: 'unset', borderRadius: "1.1rem", boxShadow: '0 -3px 12px rgba(0,0,0,0.05)', width: '20rem', height: "30rem", padding: '0 .2rem .8rem .2rem', background: 'primary.white' }} />
      </AspectRatio>}
      {isChatVisible && <AspectRatio ratio={3 / 4} position="fixed" bottom="4rem" right={["1rem", "4rem"]} zIndex={1} display={["unset", "none"]}>
        <iframe src="https://sound-master-chat.onrender.com/" style={{ position: 'unset', borderRadius: "1.1rem", boxShadow: '0 -3px 12px rgba(0,0,0,0.05)', width: '20rem', height: "30rem", padding: '0 .2rem .8rem .2rem', background: 'primary.white' }} />
      </AspectRatio>}
      {<Box background='primary.white' onClick={() => toggleWidget(isChatVisible === null ? true : !isChatVisible)} cursor="pointer" position="fixed" bottom="1rem" right={["1rem", "2rem"]} zIndex={10} boxShadow='0 -3px 12px rgba(0,0,0,0.1)' borderRadius="1.7rem">
        <LipsIcon width="60px" height="60px" />
        {isChatVisible === null && <Box position="absolute" bottom="-1px" right="0px" width=".75rem" height=".75rem" borderRadius="50%" background="#bd2e95" color="white" fontSize="10pt" display={["none", "unset"]} />}
        {isChatVisible && <Box position="absolute" bottom="-1px" right="0px" width=".75rem" height=".75rem" borderRadius="50%" background="#bd2e95" color="white" fontSize="10pt" display={["unset", "none"]} />}
      </Box>}
  </>
}