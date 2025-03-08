import { TextBase } from "@co-fun/ui";
import Head from "next/head";

export default function Index() {
  return (
    <>
        <Head>
          <title>CO-FUN resources and contact channels</title>
        </Head>
        <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
          Resources
        </TextBase>
        <TextBase textStyle="project-descr" lineHeight="2">
          For educational content explore the resources on our <u><a href="https://cofun.digital/academy">CO-FUN Academy</a></u>. If you are new member please find references from <u><a href="https://cofun.digital/community">community channels</a></u>.
        </TextBase>
        <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
          For other inquiries please contact our team <u><a href="sintija.birgele@syntia.org">sintija.birgele@syntia.org</a></u>.
        </TextBase>
    </>
  );
}