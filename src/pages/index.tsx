import { Box, Flex, Hero, ImpactTable, InitiativeOverview, Project, TextBase } from "@co-fun/ui";
import Head from "next/head";
import { Image, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import ParallaxHero from "../components/ParallaxHero";
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
          {/* Alchemy Parallax Banner */}
    <TextBase as="h2" textStyle="heading" fontSize={["1.5rem", "2.3rem"]} fontWeight={800} color="#181c2c" mb={["1.2rem", "1.7rem"]} mt={["2.5rem", "3.5rem"]} letterSpacing="-0.01em" textAlign="left" px={[3, 8]}>
      Latest Work
    </TextBase>
    <Box position="relative" width="100%" minHeight="320px" mb={0}>
      <ParallaxHero src="/A7401064.png" alt="The Alchemical Room Cover" height="40vh" minHeight="300px"/>
      <Flex position="absolute" top={0} left={0} width="100%" height="100%" alignItems="center" justifyContent="flex-start" zIndex={2} p={[3, 8]}>
        <Box background="rgba(0,0,0,0.32)" borderRadius="2rem" p={[2, 4]} maxWidth={["100%", "60%"]}>
          <TextBase textStyle="heading" fontSize={["1.1rem", "1.75rem"]} mb={1} color="#fff" fontWeight={600} fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" letterSpacing="-0.01em" textAlign="left">
            The Alchemical Room
          </TextBase>
          <TextBase textStyle="project-descr" fontSize={[".98rem", "1.05rem"]} color="#fff" textAlign="justify" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" fontWeight={400} lineHeight="1.7" px={2} mb={3}>
            A journey into the symbolism, history, and a personal story of the room construct.
          </TextBase>
          <NextLink href="/alchemy" passHref legacyBehavior>
            <Button as={Link} bg="#111" color="#fff" fontWeight={700} borderRadius="2rem" px={7} py={2} fontSize="1.08rem" _hover={{ bg: '#222' }} boxShadow="0 2px 12px rgba(0,0,0,0.16)">
              Read article
            </Button>
          </NextLink>
          <TextBase fontSize=".95rem" color="#fff" textAlign="left" fontWeight={300} mt={0}>September 5, 2025 · 4 min to read · by Sintija</TextBase>
        </Box>
      </Flex>
    </Box>
  <Flex direction={["column", "row"]} alignItems="center" justifyContent="center" mt={0} mb={0}>
        {/* Modern Parallax Banner for Construction AI Article */}
        <div style={{ width: '100%', minHeight: '320px', height: '340px', position: 'relative', marginBottom: '.5rem', borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}>
          <ParallaxHero src="/20250812_124822.jpg" alt="Construction AI" height="340px" />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(24,32,56,0.72) 0%, rgba(24,32,56,0.32) 60%, rgba(255,255,255,0.05) 100%)',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '2.5rem 3.5rem',
          }}>
            <TextBase textStyle="heading" fontSize={["1.3rem", "2.1rem"]} mb={2} color="#fff" fontWeight={700} fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" letterSpacing="-0.01em" textAlign="left" style={{textShadow: '0 2px 16px rgba(0,0,0,0.18)'}}>From the Construction Planning to Operations</TextBase>
            <TextBase textStyle="project-descr" fontSize={["1.05rem", "1.18rem"]} color="#e0e7ff" textAlign="left" lineHeight={[1.3, 1.7]} fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" fontWeight={400} mb={3} style={{maxWidth: 540}}>
              How AI is transforming construction: predictive analytics, digital twins, safety, and project optimization.
            </TextBase>
            <NextLink href="/construction-ai" passHref legacyBehavior>
              <Button as={Link} colorScheme="blue" bg="#2563eb" color="#fff" fontWeight={700} borderRadius="2rem" px={7} py={2} fontSize="1.08rem" _hover={{ bg: '#1e40af' }} boxShadow="0 2px 12px rgba(37,99,235,0.12)">
                Read article
              </Button>
            </NextLink>
            <TextBase fontSize=".98rem" color="#e0e7ff" textAlign="left" fontWeight={300} mt={3} style={{opacity: 0.85}}>August 31, 2025 · 3 min to read · by Sintija</TextBase>
          </div>
        </div>
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