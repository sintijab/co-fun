import { Box, Flex, Heading, TextBase } from "@co-fun/ui";
import Head from "next/head";
import { Image } from '@chakra-ui/react';

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
        We are excited about this new pathway of researching, networking and re-learning to make AI Agents "better version of ourselves" one chat at the time. It's a state of an art mastering to find the right questions instead of just looking for an answer.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Assistants at glance</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0">CO-FUN chat-based AI agents allows us to communicate in the most human, intuitive way—through conversation. Our unique standpoint lies in our approach to problem-solving: we automate how the conversation will develop in order to reduce manual effort in search and access information that is most relevant to achieve our business goals.</TextBase>
      <Image src="https://images.prismic.io/syntia/aCoTSSdWJ-7kSQwU_Screenshot2025-05-18at19.04.36.png?auto=format,compress" />
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0">We're not competing with other AI chat providers but offering fast and secure AI chat development platform that solves your business problem better than other web-based solutions while reducing costs, optimizing performance and service-level operations.</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0">
        We are celebrating pioneers in AI community and welcoming educators, developers, leaders, speakers and cross-industry experts to share the knwoledge about technology, leadership, science and business psychology. We are offering contributions to our platform and branding. Join our <u><a href="https://cofun.digital/academy">AI Academy</a></u> and <u><a href="https://cofun.digital/events">upcoming events</a></u> for collaborations, or reach us on <u><a href="https://www.instagram.com/co__fun/">social media</a></u>, <u><a href="https://cofun.digital/developers">slack</a></u> or <u><a href="https://cofun.digital/contact">contact form.</a></u></TextBase>
      <Heading fontFamily="gingerBold" size={["sm", "md"]} w="auto" margin={["1.5rem 0", "3rem 0 1.5rem"]} color="primary.default" textAlign="center">AI Assistant Builder</Heading>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Explore our featured new AI Assistants on our <u><a href="https://cofun.digital">website</a></u> and generate your own AI Agent with a form builder.
      </TextBase>
      <Flex position="relative" overflow="hidden" height={["auto", "300px"]} width="100%" margin="auto" justifyContent="space-between" flexDirection={["column", "row"]}>
        <Box width= {["100%", "48%"]}><img src="./02-form-builder.jpg" style={{ height: "100%", objectFit: "cover"}} /></Box>
        <Box width= {["100%", "48%"]}><img src="./03-form-builder.jpg" style={{ height: "100%", objectFit: "cover" }} /></Box>
      </Flex>
      <Heading fontFamily="gingerBold" size={["sm", "md"]} w="auto" margin={["1.5rem 0", "3rem 0 1.5rem"]} color="primary.default" textAlign="center">AI Assistants in Data Moderation</Heading>
      <Image src="https://images.prismic.io/syntia/aCoe6ydWJ-7kSQyY_Screenshot2025-05-18at19.54.32.png?auto=format,compress" />
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Data moderation with AI ensures consistent application with less centralized beurocracy of rules and more distributed, hyper-personalized content offers. With one annotation from content preference we are able to find the most suitable data streams from the past 10 years for a each user in a matter of a milliseconds.
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        For example, in a podcast or audiobook AI assistant recommends episodes of user’s preferred topics or storytelling style. It detects that a listener tends to favor fast-paced narratives during workouts and slower, more reflective content in the evenings and curates playlists aligning with those expectations.
      </TextBase>
      <Heading fontFamily="gingerBold" size={["sm", "md"]} w="auto" margin={["1.5rem 0", "3rem 0 1.5rem"]} color="primary.default" textAlign="center">AI Assistants in Augmented Reality</Heading>
      
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Augmented generation in Artificial Intelligence with high-res object-scene detection and predictive analysis. 
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Assistance in performance prediction learning from unique user profiles</TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Video and real-time movement analysis with pre-trained machine learning models in competitive sports.
      </TextBase>
      <Image src="https://images.prismic.io/syntia/aCmztydWJ-7kSQio_Screenshot2025-05-18at12.13.28.png?auto=format,compress" />
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Assistance with model pre-trained on behavioral patterns</TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Body motion capture for tracking actor's performance and analyze behavior patterns based on a context and situation analysis.
      </TextBase>
      <Image src="https://images.prismic.io/syntia/aCnS2CdWJ-7kSQlN_Screenshot2025-05-18at14.21.59.jpg?auto=format,compress" />
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        "There's never going to be a computer that will play World-Class Poker. It's a people game." - Doyle Brunson.
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        In voice-based learning platforms or therapeutic settings, an AI assistant tailors the delivery of instructions or affirmations based on emotional tone, language preferences, or cognitive patterns, creating a more engaging and supportive experience.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Assistance in material research for exterior and landscape design</TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Material fabrication based on attribute classification and composition from large datasets of models.</TextBase>
      <Image src="https://images.prismic.io/syntia/aCnlmSdWJ-7kSQoJ_Screenshot2025-05-18at15.49.32.png?auto=format,compress" />
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Placing emphasis on materiality enables us to reconsider the building blocks of the design process from the bottom up. Thanks to a raft of exciting designers and makers who are fostering disruptive approaches, we are beginning to see that alternative systems of production and consumption are possible – and we are recognizing that material innovation will be crucial to achieving this.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Assistance in spatial clustering and occupation</TextBase>
      <Image width={["100%", "83%"]} margin="auto" src="https://images.prismic.io/syntia/aCoBISdWJ-7kSQtN_Screenshot2025-05-18at17.42.06.jpg?auto=format,compress" />
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        AI Assistance in predictive analysis and clustering on temporal scale like community clustering based on motion data flow. It is applicable for tracking and predictive analysis in occupations with uneven spatial distribution like airports, military bases, event venues, hospitals.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem">AI Assistance in user discovery and support</TextBase>
      <Image width={["100%", "95%"]} margin="auto" src="https://images.prismic.io/syntia/aCoNmCdWJ-7kSQvU_Screenshot2025-05-18at18.38.05.jpg?auto=format,compress" />
      <Heading fontFamily="gingerBold" size={["sm", "md"]} w="auto" margin={["1.5rem 0", "3rem 0 1.5rem"]} color="primary.default" textAlign="center">CO-FUN Connect</Heading>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        We offer a significant opportunity for your platform to be a more integral part of health and wellness journey. Now you can create your own personalized experience by integrating daily health and fitness metrics into our AI chat for personalized insights for seamless workout or medical course integrations.
      </TextBase>
      <Image src="https://images.prismic.io/syntia/aCoqZCdWJ-7kSQ0C_tracker.jpg?auto=format,compress" />
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        One of our main partners is Garmin Connect to access workouts, training plans, and courses from Garmin Connect accounts to Chat and directly sync with health monitoring devices. It allows us to train AI models with health summary metrics such as heart rate, sleep, steps, activity data for over 30 activity types, as well as women's health Menstrual Cycle Tracking schedule, pregnancy information and integrate these metrics into personalized assistant.
      </TextBase>
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
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Imagine having one superpower that enables you to grow in five to ten of them. Our vision is to connect with chefs of AI who built programming recipes and spark your next big idea with over 1000 pre-built AI apps with our AI chat agent builder shipped over AI Galaxy. <a href="https://www.linkedin.com/company/co-fun" style={{ textDecoration: 'underline'}} target="blank">Follow us</a> and join our community.
      </TextBase>
      <Flex position="relative" overflow="hidden" height="300px" width="100%" margin="auto" alignItems="center">
        <img src="./matrix.png" style={{ position: "absolute", alignItems: "center" }} />
      </Flex>
    </>
  );
}
