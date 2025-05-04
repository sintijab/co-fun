import { Carousel, Flex, TextBase } from "@co-fun/ui";
import Head from "next/head";
import { Image } from '@chakra-ui/react';


export default function Index() {
    const imageList = [
      'https://images.prismic.io/syntia/aBfotPIqRLdaB2sj_20250504_130951.jpg?auto=format,compress',
      'https://images.prismic.io/syntia/aBfowvIqRLdaB2sk_20250504_133359.heic?auto=format,compress',
      'https://images.prismic.io/syntia/aBfoi_IqRLdaB2sf_20250504_123727.heic?auto=format,compress',
      'https://images.prismic.io/syntia/aBfoafIqRLdaB2se_20250504_123559.heic?auto=format,compress',
      'https://images.prismic.io/syntia/aBfoTvIqRLdaB2sc_20250504_122201.jpg?auto=format,compress',
      'https://images.prismic.io/syntia/aBfomfIqRLdaB2sh_20250504_130136.jpg?auto=format,compress',
      'https://images.prismic.io/syntia/aBfoz_IqRLdaB2sm_20250504_134040.jpg?auto=format,compress',
      'https://images.prismic.io/syntia/aBfoy_IqRLdaB2sl_20250504_133835.jpg?auto=format,compress',
      'https://images.prismic.io/syntia/aBfopfIqRLdaB2si_20250504_130947.jpg?auto=format,compress',
    ]
    const list = imageList.map((image, i) =>
      <Flex key={i} justifyContent="center" alignItems="center">{typeof window !== undefined && <Image src={image} />}</Flex>
    );
    const args = {
      title: 'What are you listening now?',
      author: 'Sintija Birgele',
      description: '“Listening helps us communicate and deepen our understanding and appreciation of environment around us. Learning about the sound artists and their work in different contexts helps listeners recognize how location influences sound, and most importantly acknowledge - what brings us joy.”',
      isFollowing: true,
    };
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 3,
      speed: 700,
      adaptiveHeight: true
    };
  return (
    <>
    <Head>
      <title>Carte Blanche to Spiders</title>
    </Head>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
      Carte Blanche to Spiders
      </TextBase> 
      <Carousel cards={list} settings={settings} h='600px' />
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        It started in Tomás Saraceno exhibition in Palais de Tokyo, Paris in 2018. The exhibition functioned as an ensemble for silent voices, performing the hidden scores that link events and sensibilities weaving a web of relations that cannot be described but maybe can be felt. Visitors really felt it and tripped over Orbit, a twenty-five-metre wire-woven net which was suspended above the foyer. We found our bodies in multiple shapes to get through the web by crawling, dancing and simply giving up to this web space. I've never seen such strong expressions through human body language in a given constructed public space, it deeply fascinated me.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
      “The same way our environment is an extension of us. It is to question where nature starts and ends.”
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
      The focus on the individual as someone who acts in an independent world, ignores the interconnections and engagement of voices, relations, communities and experiences that each brings us to the current context. That co-creation is both concept and practice in the act of generating meaning and understanding.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
      It explores what sorts of social life become possible when one way of talking and acting is opposed to another. To attend to traditions situated practices requires a contrast of flexibility on the part of those involved by identifying what becomes valued. 
        </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
      I created a collection of miniature robot-spiders to explore real connections in their central ecosystems. Before discovering local sites with spider aggregations I failed with several objects close to the lake where strong wind pulled robots in and I had to swim and rescue. 
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight="2">
      I invite you to take these spider-robots and find your connection that brings you to the new social environment.
      </TextBase>
    </>
  );
}