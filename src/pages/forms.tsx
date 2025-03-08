import { Flex, TextBase } from "@co-fun/ui";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Automated Form Builder powered with AI</title>
      </Head>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Form Builder powered with AI
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight="2" p="2rem 0 .5rem 0">
        AI Chatbot Form Builder
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        We build interfaces that are easily adaptable to intelligent systems. Our main focus is automating workflows and simplifying the user experience in system modelling towards user-centric and data-driven design approach. Imitating real human communication and interactions is the key component in our software development. It reduces an costs and overhead of maintenance in building web application interfaces for simple business cases.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        See all of our <a href="https://cofun.digital/projects">projects</a> and <a href="https://cofun.digital/features">features</a>.
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/clddPytzfwM?si=XRWYvrsB27x_QIRm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </>
  );
}