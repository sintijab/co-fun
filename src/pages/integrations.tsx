import { TextBase } from "@co-fun/ui";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>CO-FUN Leading Integrations</title>
      </Head>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Integrations
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        At CO-FUN mainly use open-source and cross-platform libraries for software development, and incorporate intelligent systems such as <u><a href="https://openai.com/" target="_blank" rel="norefferer noopener">Open AI</a></u> LLMs for developing reasoning algorithms globally and performing semantic data analysis for various business strategies.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        List of our latest projects is featured on our <a href="https://cofun.digital/"><u>website</u></a>.
      </TextBase>
      <TextBase textStyle="project-title" lineHeight="2">
        List of Technologies
      </TextBase>
      <ul>
        <li><u><a href="https://aws.amazon.com/" target="_blank" rel="norefferer noopener">AWS</a></u> Cloud provider for managing infrastructure and web instances.</li>
        <li><u><a href="https://render.com/" target="_blank" rel="norefferer noopener">Render.io</a></u> Cloud provider for scaling infrastructure and resources.</li>
        <li><u><a href="https://mistral.ai/" target="_blank" rel="norefferer noopener">Mistral AI</a></u> Large Language Model for search with AI and integrations with our software.</li>
        <li><u><a href="https://fireflies.ai/" target="_blank" rel="norefferer noopener">Fireflies AI</a></u> Transcribe, summarize, search, and analyze video calls and audio files.</li>
        <li><u><a href="https://socket.io/" target="_blank" rel="norefferer noopener">Socket.IO</a></u> Event-based communication framework for our chatbot systems with low-overhead communication channels.</li>
        <li><u><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank" rel="norefferer noopener">WebSockets API</a></u> Protocol for two-way interactive connection between the browser and a server. </li>
        <li><u><a href="https://expressjs.com/" target="_blank" rel="norefferer noopener">Express JS</a></u> Node.js web application framework that provides a robust features for web and mobile applications.</li>
        <li><u><a href="https://nextjs.org/" target="_blank" rel="norefferer noopener">Next JS</a></u> React based web application framework that allows us to create high performing web applications.</li>
        <li><u><a href="https://developers.google.com/maps/documentation/places/web-service/overview" target="_blank" rel="norefferer noopener"> Google Places API</a></u> service for location-aware features to make detailed location data easily accessible.</li>
        <li><u><a href="https://rapidapi.com/" target="_blank" rel="norefferer noopener">Rapid API</a></u> Marketplace for application programming interface (API) management.</li>
        <li><u><a href="https://apexcharts.com/" target="_blank" rel="norefferer noopener">ApexCharts</a></u> open-source chart library for building interactive visualizations for web software.</li>
        <li><u><a href="https://ahrefs.com/" target="_blank" rel="norefferer noopener">Ahrefs</a></u> SEO and analytics tool for SEO optimizations.</li>
        <li><u><a href="https://posthog.com/" target="_blank" rel="norefferer noopener">PostHog</a></u> SEO and analytics tool for A/B tests and experiments.</li>
        <li><u><a href="https://ploomber.io/" target="_blank" rel="norefferer noopener">Ploomber</a></u> Cloud provider with scalable enterprise solutions.</li>
        <li><u><a href="https://puter.com/" target="_blank" rel="norefferer noopener">Puter</a></u> Cloud provider with Open AI integrations for client.</li>
        <li><u><a href="https://playwright.dev/" target="_blank" rel="norefferer noopener">Playwright</a></u> Test framework modern rendering engines including Chromium, WebKit, and Firefox for cross-device and browser testing.</li>
        <li>Integrations are available on-demand and inquired from our customers and main partners.</li>
      </ul>
    </>
  );
}
