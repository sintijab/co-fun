import { Box, Flex, Heading, TextBase } from "@co-fun/ui";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Product roadmap for 2025</title>
      </Head>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Product roadmap in 2025
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        We are excited about this new pathway of researching, networking and re-learning to make AI Agents "better version of ourselves" one chat at the time. &#9749; 
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0">We're celebrating and welcoming educators, developers, leaders, speakers and cross-industry experts to share the knwoledge about technology, leadership, science and business psychology. We are offering promotions and contributions to our platform and branding. Join our <u><a href="https://cofun.digital/academy">AI Academy</a></u> and <u><a href="https://cofun.digital/events">upcoming events</a></u> for collaborations, or reach us on <u><a href="https://www.instagram.com/co__fun/">social media</a></u>, <u><a href="https://cofun.digital/developers">slack</a></u> or <u><a href="https://cofun.digital/contact">contact form.</a></u></TextBase>
      <Heading fontFamily="gingerBold" size={["sm", "md"]} w="auto" margin={["1.5rem 0", "3rem 0 1.5rem"]} color="primary.default" textAlign="center">AI Assistant Builder</Heading>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Explore our featured new AI Assistants on our <u><a href="https://cofun.digital">website</a></u> and generate your own AI Agent with a form builder.
      </TextBase>
      <Flex position="relative" overflow="hidden" height={["auto", "300px"]} width="100%" margin="auto" justifyContent="space-between" flexDirection={["column", "row"]}>
        <Box width= {["100%", "48%"]}><img src="./02-form-builder.jpg" style={{ height: "100%", objectFit: "cover"}} /></Box>
        <Box width= {["100%", "48%"]}><img src="./03-form-builder.jpg" style={{ height: "100%", objectFit: "cover" }} /></Box>
      </Flex>
      <Heading fontFamily="gingerBold" size={["sm", "md"]} w="auto" margin={["1.5rem 0", "3rem 0 1.5rem"]} color="primary.default" textAlign="center">AI Fashion Week</Heading>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]} fontWeight="regular">
        Wearable devices gives you unlimited, instant access to information about you and your body. It is such a great resource for collecting and analyzing assets from physical environments and settings that can support you in your time managament, life-work balance and business communications.
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Our promise is to meet you where you are and as you are in support with different touchpoints and AI toolset that will guide you in action analysis and making more informed decisions in real time.
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]} fontWeight="regular">
        In the next few weeks you can expect our AI Assistants analyzing your data from wearable devices integrating multi-modal medical tasks, summarization, visual document retrieval, DocVQA datasets.
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]} fontWeight="regular">
        We are going to host one week of events dedicated to interdisciplinary in AI technology and science innovations in business domains.
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ImiZvSU2-ko?si=ZN1DSPKbD0-wd7Di" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <TextBase mt="1rem" fontSize="13pt" lineHeight="1.5" fontStyle="italic">*<u><a href="https://aivideo.hunyuan.tencent.com/">HunyuanVideo</a></u> represents the most parameter-rich and high-performce text-to-video model currently available in the open-source domain. With 13 billion parameters, it is capable of generating videos that exhibit high physical accuracy and scene consistency, thereby actualizing conceptual visions and fostering creative expression.</TextBase>
      <Heading fontFamily="gingerBold" size={["sm", "md"]} w="auto" margin={["1.5rem 0", "3rem 0 1.5rem"]} color="primary.default" textAlign="center">AI Cookbook</Heading>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Imagine having one superpower that enables you to grow in five to ten of them. Multitasking with no negative sentiment &mdash; wearing five different hats in your organization meanwhile planning your next holidays. Listen to the chefs of AI who built programming recipes into one single handbook. Spark your next big idea with over 1000 pre-built AI apps and start your own AI Galaxy.
      </TextBase>
      <Flex position="relative" overflow="hidden" height="300px" width="100%" margin="auto" alignItems="center">
        <img src="./matrix.png" style={{ position: "absolute", alignItems: "center" }} />
      </Flex>
    </>
  );
}