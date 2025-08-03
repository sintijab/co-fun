import { Box, Flex, Hero, ImpactTable, InitiativeOverview, Project, TextBase } from "@co-fun/ui";
import Head from "next/head";
import { Image, Button, Link } from '@chakra-ui/react';
import FeatureAnnouncement from "../components/FeatureAnnouncement";
import NextLink from 'next/link';

export default function Index() {

  const args = {
    link: 'http://ai-career-assistant.cofun.digital/',
    description: null,
    isFollowing: true,
  };
  return <>
    <Head>
      <title>Agentic AI chat builder</title>
    </Head>
    <Hero {
      ...{
        heading: <><TextBase color="primary.green" textStyle="hero-h1">power</TextBase><TextBase color={["primary.white", "primary.default"]} textStyle="hero-h2" pl=".8rem">of</TextBase><br /><TextBase color="primary.default" display={["none", "block"]} textStyle="hero-h1">intelligence</TextBase></>,
        subheading: <><TextBase textStyle="hero-h2" ml="1rem" color="primary.white">accelerating</TextBase><TextBase textStyle="hero-h2" ml="1rem" color={["primary.green", "primary.white"]}>impact</TextBase><br /><TextBase color="primary.white" textStyle="hero-h1">in co-creation</TextBase></>,
        link: {
          label: 'Get started',
          href: '/explore'
        },
        image: '/aI-ABaTt2nPbZzGg.avif',
      }
    } />
    <Flex direction="column" margin="auto" flexWrap="wrap" maxWidth="100%">
      <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} m="0 0 3rem">
        <TextBase textStyle="project-title" textAlign="center">
          Our AI agents automate business operations, automating manual work processes, cutting costs and enhancing capabilities of human insight and collaboration.
        </TextBase>
      </Flex>
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
      <Flex direction="row" alignItems="center" justifyContent="center" mt="2.5rem" mb="2.5rem">
        <Flex boxShadow="0 4px 32px rgba(0,0,0,0.08)" borderRadius="2rem" p={["1rem .5rem", "1.5rem 1rem"]} background="rgba(255,255,255,0.7)" backdropFilter="blur(8px)" maxWidth="700px" width="100%" flexDirection={["column", "row"]} alignItems="center" justifyContent="center" mr={6}>
          <img src="/glass.jpg" alt="Glass effect" style={{ width: '200px', height: '200px', aspectRatio: '1 / 1', borderRadius: '2rem', marginRight: '0', boxShadow: '0 2px 28px rgba(0,0,0,0.13)', objectFit: 'cover', objectPosition: 'center' }} />
          <Flex width="100%" flexDirection="column" alignItems="left" mt={["1.5rem", "0.5rem"]} align="center">
            <TextBase textStyle="heading" fontSize={["1.25rem", "1.45rem"]} mb={2} mr={3} color="#232323" fontWeight={700} fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" letterSpacing="-0.01em" textAlign="right">@co-fun/ui</TextBase>
            <TextBase textStyle="heading" fontSize={["1.25rem", "1.75rem"]} mb={2} color="#232323" fontWeight={700} fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" letterSpacing="-0.01em" ml="2.6rem">Open-Source UI for AI Chat</TextBase>
            <TextBase textStyle="project-descr" fontSize={["1rem", "1.15rem"]} color="#444" textAlign="justify" ml="2rem" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" fontWeight={400} lineHeight={1.7} px={3} mb={2}>
              Build modern, scalable AI chatbots and digital products with our open-source design system. Unified design language, reusable code, and clear guidelines for human-AI interaction. <u><br/></u>
            </TextBase>
                <NextLink href="/open-source" passHref legacyBehavior>
                <Button as={Link} color="primary.green" variant="link" mt={2}>
                  See demo & docs
                </Button>
              </NextLink>
          </Flex>
        </Flex>
        <FeatureAnnouncement />
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
      <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} m="0 0 3rem" flexDirection="column">
        <Box p=".5rem">
          <TextBase color="primary.default" textStyle="hero-h2">Advantages of Agent-Supervisor workforce</TextBase>
        </Box>
        <Box p=".5rem">
          <TextBase color="primary.green" textStyle="hero-h2">Our solutions help businesses</TextBase>
        </Box>
      </Flex>
      <Flex m="0 0 3rem" flexWrap="wrap" justifyContent="space-around">
        <Box width={["100%", "33%"]} p="0 1rem" mb="1rem" textAlign="center">
          <Image src="clock.png" w="5rem" h="5rem" margin="auto" />
          <TextBase textStyle='project-list-title'>Manual operations slowing growth</TextBase>
          <TextBase textStyle='project-list-descr'>Businesses struggle with time-consuming manual operations that hinder productivity and efficiency.</TextBase>
        </Box>
        <Box width={["100%", "33%"]} p="0 1rem" mb="1rem" textAlign="center">
          <Image src="data.png" w="4.6rem" h="4.6rem" margin="auto" />
          <TextBase textStyle='project-list-title'>Data overload for business analysis</TextBase>
          <TextBase textStyle='project-list-descr'>Companies face challenges in managing and analyzing vast amounts of data effectively.</TextBase>
        </Box>
        <Box width={["100%", "33%"]} p="0 1rem" mb="1rem" textAlign="center">
          <Image src="exchange.png" w="4.5rem" h="4.5rem" margin="auto" />
          <TextBase textStyle='project-list-title'>Disconnected tools and systems</TextBase>
          <TextBase textStyle='project-list-descr'>Lack of seamless integration with existing systems leads to operational inefficiencies.</TextBase>
        </Box>
      </Flex>
        <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} m="0 0 3rem">
        <TextBase textStyle="project-title">
          Our solutions are built to help you scale efficiently—without needing a full in-house AI team, enabling focus on strategic growth and user experience.
        </TextBase>
      </Flex>
      <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} m="0 0 3rem" flexDirection="column">
        <Box p=".5rem">
          <TextBase color="primary.green" textStyle="hero-h2">Our solutions drives higher profitability</TextBase>
        </Box>
        <Box p=".5rem">
          <TextBase color="primary.default" textStyle="hero-h2">with competitive advantage</TextBase>
        </Box>
      </Flex>
      <ImpactTable />
      <Head>
        <title>Product roadmap for 2025</title>
      </Head>
      <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} m={["0 0 1rem", "0 0 3rem"]} flexDirection="column">
        <Box p="1rem" textAlign="center">
          <TextBase  m="0 0 3rem" color="primary.default" textStyle="hero-h2" textAlign="center">Our partners</TextBase>
          <Flex justifyContent="center" flexDirection={["column", "row"]}>
            <Image src="https://images.prismic.io/syntia/aFV5f3fc4bHWik82_european_management_institute.jpg?auto=format,compress" height={["auto", "100px"]} width="auto" mr="1rem"/>
            <TextBase width={["100%", "50%"]} textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0">We have established a strategic partnership with the European Management Institute to co-develop and advance solutions for digitalization initiatives across Europe.</TextBase>
          </Flex>
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center" p=".5rem" display={["flex", "flex"]} flexDirection="column">
        <Box p=".5rem">
          <TextBase color="primary.default" textStyle="hero-h2">Our offers</TextBase>
        </Box>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center">
      <Box width={["100%", "100%"]} margin="auto" ml="1rem" mr="1rem">
        <TextBase flex='1' textStyle="activity-title" mt="1rem" mb=".5rem" width={["100%", "93%"]}>AI Assistants at glance</TextBase>
        <TextBase flex='1' textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0">CO-FUN chat-based AI agents allows us to communicate in the most human, intuitive way—through conversation, instructing conversations to access information and perform actions to achieve certain business goals.</TextBase>
      </Box>
      <Box width={["100%", "49%"]}>
        <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Chat Assistant in Q&A</TextBase>
        <Image src="https://images.prismic.io/syntia/aCoTSSdWJ-7kSQwU_Screenshot2025-05-18at19.04.36.png?auto=format,compress" width={["100%", "93%"]} />
      </Box>
      <Box width={["100%", "49%"]}>
        <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Chat Agent in Quoting and Transactions</TextBase>
        <Flex position="relative" overflow="hidden" height={["auto", "300px"]} width="100%" margin="auto" justifyContent="space-between" flexDirection={["column", "row"]}>
          <Box width= {["100%", "48%"]}><img src="./03-form-builder.jpg" style={{ height: "100%", objectFit: "cover" }} /></Box>
        </Flex>
      </Box>
      <Box width={["100%", "49%"]}>
        <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Agents for Marketplaces</TextBase>
        <Image src="https://images.prismic.io/syntia/aCpA7CdWJ-7kSQ2w_Screenshot2025-05-18at22.19.37.png?auto=format,compress" width={["100%", "93%"]} />
      </Box>
      <Box width={["100%", "49%"]}>
        <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Agents for Data Moderation</TextBase>
        <Image src="https://images.prismic.io/syntia/aCoe6ydWJ-7kSQyY_Screenshot2025-05-18at19.54.32.png?auto=format,compress" width={["100%", "93%"]}/>
      </Box>
      <Box width={["100%", "49%"]}>
        <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Assistants in Augmented Reality</TextBase>
        <Image src="https://images.prismic.io/syntia/aCmztydWJ-7kSQio_Screenshot2025-05-18at12.13.28.png?auto=format,compress" width={["100%", "93%"]} />
      </Box>
      <Box width={["100%", "49%"]}>
        <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Analysis for Behavioral and Psychometric Analysis</TextBase>
        <Image src="https://images.prismic.io/syntia/aCnS2CdWJ-7kSQlN_Screenshot2025-05-18at14.21.59.jpg?auto=format,compress" width={["100%", "93%"]} />
      </Box>
      <Box width={["100%", "49%"]}>
        <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Agents in Real-World Models</TextBase>
        <Image src="https://images.prismic.io/syntia/aCnlmSdWJ-7kSQoJ_Screenshot2025-05-18at15.49.32.png?auto=format,compress" width={["100%", "93%"]} />
      </Box>
      <Box width={["100%", "49%"]}>
        <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Analysis in Spatial Clustering and Occupation</TextBase>
        <Image src="https://images.prismic.io/syntia/aCoBISdWJ-7kSQtN_Screenshot2025-05-18at17.42.06.jpg?auto=format,compress" width={["100%", "93%"]}/>
      </Box>
      <Box width={["100%", "49%"]} height="600px" overflow="hidden">
        <a href='http://ai-career-assistant.cofun.digital/'><u><TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI for Recruitment and Career Discovery</TextBase></u></a>
        <Image src="./a51bca33-ab7c-445d-b403-cb46a80b2ff5.jpeg" width={["100%", "93%"]}/>
      </Box>
      <Box width={["100%", "49%"]}alignItems="center">
        <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Agents in IoT and Smart Devices</TextBase>
        <Image src="https://images.prismic.io/syntia/aCoqZCdWJ-7kSQ0C_tracker.jpg?auto=format,compress" width={["100%", "93%"]} />
      </Box>
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