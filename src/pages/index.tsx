import { Features } from "../components/Features";
import { Switchback } from "../stories/Switchback";
import { Config } from "../util/config";
import { hero } from "../util/data";
import Head from "next/head";

import { features, articles, homeSwitchbacks } from "../util/data";
import { CardContainer } from "../components/CardContainer";
import { Section } from "../components/Section";
import { CTANewsletter } from "../stories/CTANewsletter";
import { CtaContent } from "../stories/CtaContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>{Config.site.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Switchback
          title={hero.title}
          subtitle={hero.subtitle}
          btnLabel={hero.btnLabel}
        />
        <Section title="Features and Benefits">
          <Features data={features} />
        </Section>
        <Section
          title="Coming Soon / What's Happening Now / Happenings"
          fullWidth
        >
          <CardContainer
            data={articles.filter((article) => article.featured).slice(0, 3)}
          />
        </Section>
        {homeSwitchbacks.map((switchback, i) => (
          <Switchback
            key={i}
            title={switchback.title}
            subtitle={switchback.subtitle}
            btnLabel={switchback.btnLabel}
            btnPath={switchback.btnPath}
            left={i % 2 !== 0}
          />
        ))}
        <CtaContent title="Your Field Guide to Cannabis In New Mexico" />
        <CTANewsletter />
        <CtaContent title="Our Story" />
      </main>
    </>
  );
}
