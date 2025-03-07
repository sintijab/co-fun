import { Box, Flex, Heading, InitiativeOverview, Project, TextBase } from "@co-fun/ui";

export default function CareerDiscover() {

  const args = {
    link: 'http://ai-career-assistant.cofun.digital/',
    description: "The Europe labor market in 2024 is the tightest with unemployment in the EU falling down to lowest. It has contributed to a decline in the job vacancy rate, which is largely attributed to the overall slowdown of the European economies following the period of high inflation between 2022 and 2023.",
    isFollowing: true,
  };
  return <>
    <Flex direction="column" margin={["0 .5rem", "1rem 10rem", "1rem 20rem 0"]} flexWrap="wrap">
      <Flex m={["0 .5rem .5rem", "0 2rem"]} flexWrap="wrap" maxWidth="100%">
        <Heading margin="auto" fontFamily="gingerBold" as="h1" textStyle="project-title" mt={["1.2rem", "0"]} mb={["0", ".3rem"]}>AI Assistance in Your Career Discovery</Heading>
        <Flex position="relative" justifySelf="center">
          <Box width={["100%", "auto"]} maxWidth={["100%", "90%"]} margin="auto">
            <img src="./preview_bot2.jpg" alt="web-crawler" />
          </Box>
          <Box position="absolute" bottom="0" left="0" right="0" margin="auto" color="primary.white" width="100%">
            <a href={args.link} style={{ display: "block" }}><TextBase textAlign="center" textStyle="project-title" pb="0.5rem" textDecoration="underline">Chat with our AI Agent to make your dream career</TextBase></a>
          </Box>
        </Flex>
        <InitiativeOverview {...args} border="1px solid #CCCCCC" borderRadius=".5rem" mt="1rem" isFollowing={null} p={["4rem .5rem", "3rem 2rem 2rem"]}>
          <Heading fontFamily="gingerBold" as="h4" size="sm" w="auto" margin="0" marginBottom="2rem" color="primary.default">
            How to naturally overcome your fear of a career change?
          </Heading>
          <Flex flexDirection={["column", "column", "row"]} overflow="none" flexWrap={["wrap", "wrap", "nowrap"]}>
            <Project title="Career Discovery with AI recruiter" description="The sudden emergence of remote work during the pandemic has become a fixture of work life in many European countries. As many as half the world's employees (52%) were looking for a new job in 2024, and yet navigating through job offers online often is comparable with archival work. The AI assistants overlooking recruitment platforms enables personalized job search and recommendations with AI." isEndorsed={false} width="100%" formId="https://co-fun.us9.list-manage.com/subscribe/post?u=afdf41c218cb20406a176006b&amp;id=5656180439&amp;f_id=00a056e1f0">
            </Project>
          </Flex>
        </InitiativeOverview>
      </Flex>
      <Flex justifyContent="center">
        <Box>
          <TextBase textStyle="activity-title" pt={["1rem", ".5rem"]} pb={["1rem", "2.5rem"]} textAlign="center">Our trusted partners</TextBase>
          <Flex justifyContent="center" alignSelf="center">
            <Box width={["3rem", "4rem"]} borderRadius="2rem" overflow="hidden">
              <a href="https://openai.com/" target="_blank"><img src="./open-ai.png" /></a>
            </Box>
            <Box width={["3rem", "4rem"]} borderRadius="1rem" overflow="hidden">
              <a href="https://puter.com/" target="_blank"><img src="./puter.png" /></a>
            </Box>
            <Box width={["3rem", "5rem"]} borderRadius="2rem" overflow="hidden">
              <a href="https://render.com/" target="_blank"><img src="./render.png" /></a>
            </Box>
            <Box width={["3rem", "5rem"]} borderRadius="2rem" overflow="hidden">
              <a href="https://aws.amazon.com/" target="_blank"><img src="./aws.png" /></a>
            </Box>
            <Box width={["3rem", "5rem"]} borderRadius="2rem" overflow="hidden">
              <a href="https://ploomber.io/" target="_blank"><img src="./ploomber.png" /></a>
            </Box>
          </Flex>
        </Box>
        <Box>
          <TextBase textStyle="activity-title" pt={["1rem", ".5rem"]} pb={["1rem", "2.5rem"]} textAlign="center">Job platforms</TextBase>
          <Flex justifyContent="center" alignSelf="center">
            <Box width={["3rem", "4rem"]} borderRadius="2rem" overflow="hidden">
              <a href="https://www.computerfutures.com/" target="_blank"><img src="./computerfutures.jpeg" /></a>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
    <Flex alignItems="center" flexDirection="column" mt="2rem">
      <Heading textAlign="center" fontFamily="gingerBold" as="h1" textStyle="project-title" mt={["1.2rem", "0"]} mb={["0", ".3rem"]}>First AI recruiter that <u>understands</u> you</Heading>
      <TextBase textStyle="activity-title" color="#7e00ff" pt={["1rem", ".5rem"]} pb="1rem" textAlign="center">
        & encourages you to <u>tame higher</u>
      </TextBase>
    </Flex>
    <Flex flexWrap="wrap" justifyContent="center">
      <Box width={["100%", "49%"]} borderRadius="2rem" overflow="hidden" margin=".5rem .3rem" position="relative">
        <Heading fontFamily="gingerBold" position="absolute" textStyle="project-title" top="50%" margin="auto" left="10%" mb={["0", ".3rem"]}>Ready where you need</Heading>
        <img src="./career-bot-1.jpg" alt="career bot" />
      </Box>
      <Box width={["100%", "40%"]} borderRadius="2rem" overflow="hidden" margin=".5rem .3rem" position="relative">
        <Heading fontFamily="gingerBold" position="absolute" textStyle="project-title" bottom="20%" margin="auto" left="5%" mb={["0", ".3rem"]}>Learns & grows <u>with you</u></Heading>
        <img src="./career-bot-2.jpg" alt="career bot" />
      </Box>
      <Box width={["100%", "49%"]} h={["auto", "40%"]} borderRadius="2rem" overflow="hidden" margin=".5rem .3rem" position="relative">
        <Heading fontFamily="gingerBold" position="absolute" textStyle="project-title" top="20%" margin="auto" left="5%" mb={["0", ".3rem"]}>Reflects & discovers <u>best</u> offers</Heading>
        <img src="./career-bot-3.jpg" alt="career bot" />
      </Box>
      <Box width={["100%", "40%"]} borderRadius="2rem" overflow="hidden" margin=".5rem .3rem" position="relative">
        <Heading fontFamily="gingerBold" position="absolute" textStyle="project-title" bottom="20%" margin="auto" right="5%" mb={["0", ".3rem"]}>Forwards <u>call to action</u></Heading>
        <img src="./career-bot-04.jpg" alt="career bot" />
      </Box>
    </Flex>
    <Box>
      <Flex direction="column" margin={["3rem .5rem", "5rem 10rem", "5rem 20rem 0"]} flexWrap="wrap">
        <Heading textAlign="center" fontFamily="gingerBold" textStyle="project-title" mt={["1.2rem", "0"]} mb={["0", ".3rem"]}>Why should professionals explore their career options</Heading>
        <TextBase textStyle="activity-title" pt={["1rem", ".5rem"]} pb={["1rem", "2.5rem"]} textAlign="center">
          & how it impacts entrepreneurship?
        </TextBase>
        <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]} mb="1rem">
          Reflecting on your actions and learning from them sounds simple, but it's almost impossible. This theory is based on idea of a 'second-order' observation. Where does it lead?
        </TextBase>
        <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
          Risking economic certainty and security
        </TextBase>
        <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
          55% of employees expressed a desire to change jobs in Germany , but this willingness has declined reducing also the professional growth to secure the future position and increase to desired level of income.
        </TextBase>
        <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
          Fear of stepping out of comfort zone
        </TextBase>
        <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
          A UK survey revealed that 64% of employees who regretted at least one past job changes are now more cautious and reserved about seeking new opportunities, fearing sacrifices in work-life balance and flexibility.
        </TextBase>
        <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
          "Job lock"
        </TextBase>
        <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
          The phenomenon of "job lock" occurs when employees feel unable to leave their jobs because doing so would result in the loss of crucial benefits, such as health insurance or retirement plans.
        </TextBase>
        <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
          Staying agile
        </TextBase>
        <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
          Insufficient career exploration can result in a limited view on industry dynamics. Slowing down on career goals and lack of interpersonal skills that comes from engagement and networking might block entrepreneurs in their business planning and risk management.
        </TextBase>
        <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
          Impact on career progression
        </TextBase>
        <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
          "Resenteeism" refers to employees staying in unfulfilling jobs due to perceived risks associated with changing employment, which in longer term can lead to decreased performance, hindering both personal and organizational growth.
        </TextBase>
      </Flex>
    </Box>
    <Flex background="button.action" color="primary.white" padding={[".5rem .5rem", "1rem 10rem", "1rem 20rem 0"]} alignItems="center">
      <TextBase textStyle="activity-title" lineHeight={["1.5", "2"]} mb="1rem" width="60%">
        Would you risk your job for most passionate and ambitious goals if you knew that career after one or two startup failures brings you the most exciting business and relationships in your lifetime?
      </TextBase>
      <a href="http://ai-career-assistant.cofun.digital/"><Heading fontFamily="gingerBold" textStyle="project-title" pb="0.5rem" textDecoration="underline">Start your best chapter NOW</Heading></a>
    </Flex>

  </>
}