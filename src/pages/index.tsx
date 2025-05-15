import { Box, Flex, Hero, ImpactTable, InitiativeOverview, Project, TextBase } from "@co-fun/ui";
import Head from "next/head";
import { Heading, Image } from '@chakra-ui/react';

export default function Index() {

  const args = {
    link: 'http://ai-career-assistant.cofun.digital/',
    description: null,
    isFollowing: true,
  };
  return <>
    <Head>
      <title>AI career discovery</title>
    </Head>
    <Hero {
      ...{
        heading: <><TextBase color="primary.green" textStyle="hero-h1">power</TextBase><TextBase color={["primary.white", "primary.default"]} textStyle="hero-h2" pl=".8rem">of</TextBase><br /><TextBase color="primary.default" display={["none", "block"]} textStyle="hero-h1">intelligence</TextBase><TextBase color="primary.white" display={["block", "none"]} textStyle="hero-h1">co-creation</TextBase></>,
        subheading: <><TextBase textStyle="hero-h2" ml="1rem" color="primary.white">accelerating impact</TextBase><br /><TextBase color="primary.white" textStyle="hero-h1">in co-creation</TextBase></>,
        link: {
          label: 'Get started',
          href: '/explore'
        },
        image: '/weissensee.png',
      }
    } />
    <Flex direction="column" margin="auto" flexWrap="wrap" maxWidth="100%">
      <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} m="0 0 3rem">
        <TextBase textStyle="project-title" textAlign="center">
          CO-FUN enhances capabilities of AI Agents by human insight and collaboration. We envision a world where AI seamlessly integrates into daily business operations with human-like interactions and natural language.
        </TextBase>
      </Flex>
      <Flex justifyContent="center" alignItems="center" p="1rem" display={["flex", "flex"]} m="0 0 3rem" flexWrap="wrap">
        <Box width={["100%", "33%"]} p=".5rem">
          <TextBase textStyle='project-list-title'>Infrastructure for AI chat workflows</TextBase>
          <TextBase textStyle='project-list-descr'>Designing and optimizing cloud-native infrastructure to support high-performance conversational agents—ensuring low latency, high availability, and cost efficiency at scale.
          </TextBase>
        </Box>
        <Box width={["100%", "33%"]} p=".5rem">
          <TextBase textStyle='project-list-title'>Simulating real conversations</TextBase>
          <TextBase textStyle='project-list-descr'>Building modular, AI-native chat systems that integrate seamlessly with enterprise platforms to enable real-time responsiveness and long-term extensibility.</TextBase>
        </Box>
        <Box width={["100%", "33%"]} p=".5rem">
          <TextBase textStyle='project-list-title'>Securing digital assets</TextBase>
          <TextBase textStyle='project-list-descr'>Designing a framework that safeguard data, manage access, and support secure integration across sensitive applications.</TextBase>
        </Box>
        <Box width={["100%", "33%"]} p=".5rem">
          <TextBase textStyle='project-list-title'>Deploying and iterating chat workflows</TextBase>
          <TextBase textStyle='project-list-descr'>Launching, testing, and refining AI chat experiences through streamlined pipelines and adaptive tooling to accelerate time to value.</TextBase>
        </Box>
        <Box width={["100%", "33%"]} p=".5rem">
          <TextBase textStyle='project-list-title'>Integrating smart tools and APIs</TextBase>
          <TextBase textStyle='project-list-descr'>Selecting and connecting the most effective AI models, APIs, and orchestration layers to deliver scalable, domain-specific conversational solutions.</TextBase>
        </Box>
        <Box width={["100%", "33%"]} p=".5rem">
          <TextBase textStyle='project-list-title'>Analyzing and improving chat performance</TextBase>
          <TextBase textStyle='project-list-descr'>Capturing and interpreting interaction data to optimize AI agent behavior, enhance user experience, and create feedback loops for continuous improvement.</TextBase>
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} m="0 0 3rem">
        <TextBase textStyle="project-title">
          It unlocks competitive advantage enabling focus on strategic growth and user experience.
        </TextBase>
      </Flex>
      <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} m="0 0 3rem" flexDirection="column">
        <Box p=".5rem">
          <TextBase color="primary.default" textStyle="hero-h2">A single-founder workforce –</TextBase>
        </Box>
        <Box p=".5rem">
          <TextBase color="primary.green" textStyle="hero-h2">Challenges and opportunities for growth</TextBase>
        </Box>
      </Flex>
      <Flex m="0 0 3rem" flexWrap="wrap" justifyContent="space-around">
        <Box width={["100%", "33%"]} p="0 1rem" mb="1rem" textAlign="center">
          <Image src="clock.png" w="5rem" h="5rem" margin="auto" />
          <TextBase textStyle='project-list-title'>Manual Processes</TextBase>
          <TextBase textStyle='project-list-descr'>Businesses struggle with time-consuming manual operations that hinder productivity and efficiency.</TextBase>
        </Box>
        <Box width={["100%", "33%"]} p="0 1rem" mb="1rem" textAlign="center">
          <Image src="data.png" w="4.6rem" h="4.6rem" margin="auto" />
          <TextBase textStyle='project-list-title'>Data Analysis</TextBase>
          <TextBase textStyle='project-list-descr'>Companies face challenges in managing and analyzing vast amounts of data effectively.</TextBase>
        </Box>
        <Box width={["100%", "33%"]} p="0 1rem" mb="1rem" textAlign="center">
          <Image src="exchange.png" w="4.5rem" h="4.5rem" margin="auto" />
          <TextBase textStyle='project-list-title'>Point Of Access</TextBase>
          <TextBase textStyle='project-list-descr'>Lack of seamless integration with existing systems leads to operational inefficiencies.</TextBase>
        </Box>
      </Flex>
      <ImpactTable />
      <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} m="0 0 3rem" flexDirection="column">
        <Box p=".5rem">
          <TextBase color="primary.default" textStyle="hero-h2" pr=".5rem"> when we build </TextBase>
          <TextBase color="primary.green" textStyle="hero-h2">with</TextBase>
          <TextBase color="primary.default" textStyle="hero-h2" pl={["0", ".5rem"]}> clients, not for them</TextBase>
        </Box>
        <Box p=".5rem">
          <TextBase color="primary.default" textStyle="hero-h2" pr=".5rem">we deliver</TextBase>
          <TextBase color="primary.green" textStyle="hero-h2">lasting impact</TextBase>
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center" textAlign="center" lineHeight="2" display={["flex", "flex"]} m="0 0 3rem" flexDirection="column">
        <TextBase textStyle="project-title" w={["90%", "50%"]} mb="1rem">
          We offer business founders to double their teams by exceling digital transformation with cutting-edge AI solutions.
        </TextBase>
        <TextBase textStyle='project-list-descr' w={["90%", "50%"]} >
          Our approach is focused on solving real-world problems with strategic analysis and domain expertise to support our clients innovate and reduce operational costs. We offer conversational chat and search automation with hybrid approach to graph and vector search algorithms in order to achieve refined data observability and maximize product capabilities.
        </TextBase>
      </Flex>
        <InitiativeOverview {...args} border="1px solid #CCCCCC" borderRadius=".5rem" mt="1rem" isFollowing={null} p={["4rem .5rem", "3rem 2rem 2rem"]}>
          <Flex flexDirection={["column", "column", "row"]} overflow="none" flexWrap={["wrap", "wrap", "nowrap"]}>
            <Project title="Emerging opportunities of generative AI" description="Our work is embodied by nature with its ecological and sustainable approach. Our clients build IoT business projections with highly-performant operations aligned with social construct and impact-awareness. We explore human and machine interaction and share replicas of their assets, processes and people by simulating real situations, allowing them to build future with more informed decisions." isEndorsed={false} width="100%">
            </Project>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fZY8J8Y6KMM?si=YTex1ii-karn0W0n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Flex>
        </InitiativeOverview>
    </Flex>
  </>
}