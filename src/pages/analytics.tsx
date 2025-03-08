import { TextBase } from "@co-fun/ui";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Privacy and Cookieless policies</title>
      </Head>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Analytics
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        In order to navigate on this website and use all of its features, necessary cookies are required. However we don't use “cross-site tracking”. We do not collect personal data to use it for ads or compromising a persons online identity.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Co-FUN establishes what is known as Cookieless tracking. It is an alternative form of tracking that uses methods of unique address and browser fingerprint to identify user sessions instead of online identities. It means that we use anonimized data for tracing browsing patterns and sessions on website.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Learn more about our teams work <u><a href="https://cofun.digital/collaboration">culture</a></u>, <u><a href="https://cofun.digital/development">teams development</a></u> and <u><a href="https://cofun.digital/analysis">action analysis</a></u>.
      </TextBase>
    </>
  );
}