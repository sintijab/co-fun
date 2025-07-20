import { Flex, Box, TextBase } from "@co-fun/ui";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title> AI Assistance at Glance</title>
      </Head>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        AI Assistance at Glance
      </TextBase>
      {/* --- @co-fun/ui Open Source Announcement --- */}
      <Box w={["100%", "80%", "60%"]} mx="auto" mt={["2rem", "3rem"]} mb={["2rem", "3rem"]} p={[4, 8]} bg="white" borderRadius="2xl" boxShadow="0 4px 24px rgba(0,0,0,0.10)" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={0} style={{ filter: 'blur(18px)', opacity: 0.18 }}>
          <img src="/glass.jpg" alt="Glass background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Flex direction="column" align="center" zIndex={1} position="relative">
          <TextBase textStyle="heading" fontSize={["1.25rem", "1.75rem"]} mb={2} color="#232323" fontWeight={700} fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" letterSpacing="-0.01em" textAlign="center">@co-fun/ui Open Source Library</TextBase>
          <TextBase textStyle="project-descr" fontSize={["1rem", "1.15rem"]} color="#444" textAlign="center" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" fontWeight={400} lineHeight={1.7} px={3} mb={2}>
            Build modern, scalable AI chatbots and digital products with our open-source design system. Unified design language, reusable code, and clear guidelines for human-AI interaction. <u><a href="https://www.cofun.digital/open-source" target="_blank" rel="noopener">See demo & docs</a></u>
          </TextBase>
        </Flex>
      </Box>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Adopting AI tools for assistance requires some technical knowledge. At CO-FUN we are making conscious decisions by promoting sustainable and efficient use of technology, adaptation and learning, consulting and developing solutions end-to-end to support businesses in project planning and execution.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        If you are planning how intelligent systems will integrate into your technical workflow, to start with fill out our <u><a href="https://us9.list-manage.com/survey?u=afdf41c218cb20406a176006b&id=27b46a6107">questionaire</a></u> and <u><a href="./contact" target="_blank" rel="norefferer noopener">contact us</a></u>.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Collecting some data about areas of your work that you feel like AI could be an integral part in any stages of your project. For instance, collecting biometric data using hardware and computer vision on devices to build interactive and actionable software. 
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        For one of my clients we used document scanning with OCR technology to scan and find the information from the documents and images for processing insurance claims. It can be also useful for analyzing damages on objects and even proposed methods for restoration.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        For AI radio moderation I built a chatbot that collects info about listening experience from clients and then  <u><a href="https://cofun.digital/trends" target="_blank" rel="norefferer noopener">personalized the selection of recommendations</a></u>. AI Assistant was built with a <u><a href="https://youtu.be/clddPytzfwM" target="_blank" rel="norefferer noopener">chatbot</a></u> in communication with clients. AI tools can assist in optimizing pricing, and identifying target audiences.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        AI is practical in generative art to experiment with different shapes, proportions, and materials. In digital mediums generating designs or transforming the forms of writing into visual formats replaces manual steps, that can be achieved for many generative processes with clear and guided system instructions.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        In marketing we developed content generator deployed after several rounds of testing with rule-based rewards, delivering the results with high precision and quality. Another example of generated art work with hundreds of geometrical shapes in vector graphics is visible on our <u><a href="./explore" target="_blank" rel="norefferer noopener">storyline exploration</a></u>, and visual format display on <u><a href="./trends" target="_blank" rel="norefferer noopener">projects</a></u>. There are many variations of how to develop AI tools in design while reducing manual work and fulfiling autonomy with generative process.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">The highest demand in requested integrations from our community memebrs is administrative toolkit for automating communications for business applications. It will be part of the AI courses for our free community access and guided end-to-end implementation with advanced features to our business plan members.</TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">One of the most demanding services we offer for creators is guided content generation by our AI moderators with technologies in Large Language Model processing (LLMs), Optical Character Recognition (OCR) to read and convert text embedded from images and videos, visual identification and classification, framework accessibility and support in linguistic structures known to incur processing difficulties to humans, internationalization support in business applications.</TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Physical environments share information that can be used in industrial settings and information processing with AI. As it analyzes historical data and real-time information to optimize manufacturing, it improves efficiency and quality. In CNC machining (computerized operation of machining tools used in manufacturing) and 3D printing it can fine-tune settings for creating prototypes or even final pieces, reducing waste and ensuring high precision.
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight="2" p=".5rem 0">
        AI-Powered System Components
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Design System is one of the core modules for deploying scalable and reusable AI products. It helps us both reducing the code maintenance while establishing the the design standards and integrations with open-source or third-part service providers such as Open AI.
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JiYBssULoQY?si=JsWYOQJFGfQII_di" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      <TextBase textStyle="initiative-descr" lineHeight="2" p="2rem 0 .5rem 0">
        AI Chatbot Form Builder
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        We build interfaces that are easily adaptable to the integrations with intelligent systems, for instance, AI Assistants. Automating workflows and simplifying the user experience is our strategy in modelling user-centric and data-driven software design.
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/clddPytzfwM?si=XRWYvrsB27x_QIRm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      <TextBase textStyle="initiative-descr" lineHeight="2" p="2rem 0 .5rem 0">
        AI-Powered Search
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        AI-Powered Search shows us how to build cutting-edge search engines that continuously learn from both our users and content and drive more domain-aware, intelligent and personalized search algorithms. It connects people with original, high-quality content from the web and makes it part of their conversation. By integrating search with a chat interface, users can engage with information in a new way, while content owners gain new opportunities to reach a broader audience.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        AI search leverages available content including third-party search providers to provide the information users are looking for.
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CR-hFmfI63E?si=nzo28b_DO3bJYUOM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      <TextBase textStyle="initiative-descr" lineHeight="2" p="2rem 0 .5rem 0">
        AI SEO tooling
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        AI is a powerful SEO tool that uses data sources for in-depth performance analysis, site audits, backlink tracking, and so much more to ensure information remains both trustworthy and profitable. It is useful for selecting the outperforming competitors and top keywords to find the best strategy that aligns with market demand. We aim towards educating people about the use of AI with our <u><a href="./academy">Online Acedemy</a></u> that consists of resources like mockups, guidance and tools for marketing and business growth.
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/T9M-SRWuXXI?si=JHS_pc9l532q7Nx9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <u><a href="./academy"><TextBase textStyle="initiative-descr" lineHeight="2" p="2rem 0 .5rem 0">
        AI Academy
      </TextBase></a></u>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Evaluating AI capabilities require connection between technical and non-technical domains. Education enables better communication and alignment of expectations about requirements of data collection, cleaning, and labeling operations. The demands for accurate labelling stem in applications in Computer Vision, Natural Language Processing and Speech Recognition. See an example on how AI Assistant can refine and fine-tune the conversations in sustainable tourism with Natural Language Processing.
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FeCGwBh8Rd8?si=Q-R2xbH0HJ3l1qBr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </>
  );
}