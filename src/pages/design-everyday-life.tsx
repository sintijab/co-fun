import React from 'react';
import Head from 'next/head';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function AIReflections() {
  return (
    <>
      <Head>
        <title>The Design of Everyday Life</title>
      </Head>
      <Box minH="100vh" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif">
        <Flex direction="column" align="center" maxW="960px" mx="auto" py={12}>
          <Box w="100%" bg="white" borderRadius="2xl" boxShadow="0 4px 24px rgba(0,0,0,0.10)" p={[6, 10]} mb={5}>
                  <Heading as="h1" mb={6} fontSize={['1.5rem', '2rem']} fontWeight={700} color="#161616">
              The Design of Everyday Life
            </Heading>
                        <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              Last week I joined interactive discussion at DOCK 11 space themed "What happens when artificial and embodied intelligence meet? how might ai reshape the way we create and experience dance?"
            </Text>
            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              Despite of receiving a lot of criticism and underlying fear at first, the weight of our conversations shifted away after clearing the unknowns of Self and the Other exploration.
            </Text>
            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              "Is this your heart’s desire, then—for the two of you to become parts of the same whole, as near as can be, and never to separate, day or night? Because if that’s your desire, I’d like to weld you together and join you into something that is naturally whole, so that the two of you are made into one."
            </Text>
            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              This new era might deepen the depth of our desire of a profound connection. Is it artificial or real? Longing for complete union and wholeness in a relationship. It speaks to the desire to be inseparable and essentially one with another person.
            </Text>
            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              It reminded me dance theatre performance common in our search for completeness, happiness and fulfilment, by MN DANCE COMPANY, <a href="https://youtu.be/qSIddQNyYVE?feature=shared" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline'}}>watch here</a>.
            </Text>
            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              Artificial Intelligence does not embody consciousness, but it has very poetic definition of self and determinism of it's role and shape into society, a guide.
            </Text>
            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              As we turned our attention to artificial intelligence: not just as a tool, but as a force shaping how we move, make, and create meaning. What lens does AI bring to our work, our conversations, our lives?
            </Text>
            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              This second part of the B12 summer festival series was a hands-on workshop, inviting participants to experiment with AI and machine learning in creative space with play, probe, and push against the potentials and limitations.
            </Text>
      <Box
        position="relative"
        w="100%"
        minH="320px"
        mb={8}
        borderRadius="2xl"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          background: [
            // mobile/tablet: center center
            `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/aI9zcKTt2nPbZzGL.avif') center center/cover no-repeat`,
            // desktop: bottom center
            `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/aI9zcKTt2nPbZzGL.avif') bottom center/cover no-repeat`
          ]
        }}
      >
        <Box
          bg="rgba(255,255,255,0.3)"
          backdropFilter="blur(8px)"
          borderRadius="xl"
          p={6}
          boxShadow="0 2px 16px rgba(0,0,0,0.10)"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            as="h2"
            fontSize={['1.2rem', '1.5rem']}
            fontWeight={600}
            color="#161616"
            mb={4}
            textAlign="center"
          >
            Listen: The Design of Everyday Life
          </Heading>
          <audio
            controls
            style={{
              width: '100%',
              maxWidth: 340,
              background: 'transparent',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
          >
            <source src="/design_of_everyday_life.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Box>
      </Box>
            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              What fascinates me about working in artificial intelligence is the challenge of understanding problems from the machine learning perspective. As Adam Greenfield points out in <i>Radical Technologies</i>, tasks like handwriting recognition or speech interpretation are things humans do unconsciously—but machines need explicit articulation in the form of executable code- which is another story of a hitchhiker's guide to the Galaxy (of AI).
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              Recognizing handwriting or natural speech, identifying people and other discrete objects in the visual field, succeeding at a continuous exercise of identification we think of as a sense of vision itself. Profound explicit articulation and therefore expression in the form of executable code. These are things our brains do trivially and without conscious thought. But precisely for this reason, because we cannot explicitly reconstruct how we arrive at the decisions involved, we are generally unable to encode them as instructions computational systems would be able to make use of. So in other words, we might be able to imagine the set of principles that allow us to isolate the things we perceive in the visual field.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              But clearly we would have a very hard time making those principles concrete enough to articulate, convey the machine system and not overflow the ambiguity. What's more, we have an astonishing ability to keep track of the stable identity of things through relatively profound changes in state. We do still recognize the cat in the bright sunlight or Reiki after he's grown a beard. Mechanic systems are ever to have this slightest hope of mastering them, they would have to be provided with some way of acquiring knowledge that does not involve explicit instruction. What gives the neural network its flexibility and allows it to be trained, is that connection between any two neurons has strength. A numerical weightening. This value can be modulated at any time by whoever happens to be training the algorithm.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              Training involves manipulating these weights to reinforce the specific neural pathways responsible for successful recognition over thousands of iterations. As the weightings between layers are refined, a neural network will learn how to recognize complex features from data that is not merely unstructured, but very often noisy and wildly chaotic in the manner of the world we occupy and recognizes our own. When neural networks are stacked in multiple layers, each stacked with neurons responsible for discerning a particular kind of pattern, they are capable of modeling high level obstructions. This stacking accounts for the deep and deep learning in at least one of the circulating definitions.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              To do research every day about these tools and find the purpose, the meaning behind it and how it can enable automations for different target groups. So one example is finding solutions for converting the visual input. So when you have any graphical interface, photos, videos, media, making sense of it. So there are strategies on how you can manipulate data, create an algorithm in your favor. And in machine learning, everything is always in someone's favor. So the weightening to strengthen the neural pathways in a certain way in favor of one agency or another purely depends on how this group is instructed to do so. How to find information is one of the most important skills that not only computers and acquire these algorithms, but also humans.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              So for us, it's very important to understand how learning has changed over the decades and how to really navigate today in an industry that is oversaturated with products we have no understanding about.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              I would like to share a few techniques that I found very useful in my work with Artificial Intelligence and software that I discovered in the last six months. One of the techniques I'm using daily is web crawling, using the scripts and agency of a browser to find information online. So as you know, search is one of the most time consuming tasks that human agency has on a daily basis. When we try to look for anything online, when we try to find the tickets, when we try to find information about other people, when we try to approach someone or discover new things, we always use a search engine or chat agent.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              When you realize how to navigate through the digital space with the web crawlers, a whole new world opens to you, because you just discovered how to save hours of search and manual work. And so one example is collecting data online and transcribing it in a readable format and analyzing it with artificial intelligence. This is one workflow that I use very often because it allows me to understand what is the purpose and what is the strategy of when using media, to also benefit from it. So what we can learn from data. It’s a paradigm but engineers are spending hours and weeks and years trying to make sense of files in different formats and try to convert them to create audiobooks from text, creating text from images, creating text from videos, creating videos from text, and so on and so forth. So it’s about using communication as a tool in the right time and context to access it, which has a strong intangible.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              The other misconception about artificial intelligence that I hear very often is that “oh, we want to use AI, we need to train our models to acquire search, to acquire solutions, and it costs a lot of money.” This is wrong. So for most of the cases that I hear from people about, implementing a simple algorithm that finds something fast from large data sets of information just requires using pretrained models and feeding it with the context that you have.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              With sentence transformers, for instance, that can learn from these chunks of data that you structured in prior to make a prediction for the most accurate answer fast and to navigate through that answer to when you don't have a resource, when you don't have a teams or established process and you need really to spend hours of work. So you spend maybe one week preparing all the information you have and you want to use.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              When you want to create any workflow, an algorithm that finds data in milliseconds, that performs actions in milliseconds, that replace a human agency, then you need to always use the most common sense on what is cheap and not overpaying for the costs of computation and model training, because it's necessary and not sustainable.
            </Text>

            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              The second important thing after preparing the chunks for the data processing is bringing the batches of activities. So once you have a response and desired output, you always save it in a structured way, for instance in a JSON format. So then you can reuse the algorithm that you have with predictable input and predictable output by establishing strong evaluation mechanisms. And it really takes time to understand how to do this process in a precise way.
            </Text>

            <Text fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              So the third most important aspect of using artificial intelligence is thinking about user interface. Because in most of the cases when human agency is dependent on AI systems and prompting (and not the other way around). We don't know how to naturally ask good questions, we don't know naturally what we want to do and how to ask a computer for it. We might know how to ask for another human with a trust of our understanding.
            </Text>

            <Text mt={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              But since we don't know about ambiguities and evaluation of Artificial Intelligence systems, we need to get rid of our prompting and automate the way prompts are actually generated for a machine to understand which actions to perform and what to do on inference. And so re-prompting, developing prompting or query mechanisms is the top third most important aspect in this context.
            </Text>
            <Text mb={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">Watch the full conversation <a href="https://youtu.be/SQzmJ_8eA-4?feature=shared" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline'}}>here</a></Text>.
            <Text mt={4} fontSize="1.05rem" color="#525252" lineHeight={2} textAlign="justify">
              <i>&ndash; Interview with Sintija Birgele, founder and engineer of CO-FUN.</i>
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
