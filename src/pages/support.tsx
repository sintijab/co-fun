import { TextBase } from "@co-fun/ui";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>CO-FUN contact form</title>
      </Head>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Support
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight="2">
        For product questions, community guidelines or troubleshooting please join our Slack. Invitation link to <u><a href="https://join.slack.com/t/co-fun/shared_invite/zt-2w1cfh47p-PGP6lU3l0JAuP4Z6_EEEQw" target="_blank" rel="noreferrer noopener">Slack workspace</a></u>
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        For other inquiries please contact our team <u><a href="sintija.birgele@syntia.org">sintija.birgele@syntia.org</a></u>.
      </TextBase>
    </>
  );
}