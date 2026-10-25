import GoodToKnow from "@/components/sections/about/GoodToKnow";
import OurStand from "@/components/sections/about/OurStand";
import Stats from "@/components/sections/about/Stats";
import CustomHero from "@/components/sections/CustomHero";
import CallOutBand from "@/components/ui/CallOutBand";
import StorySection from "@/components/ui/StorySection";
import { aboutPageContent } from "@/constants/data/about";
import { homeExplore } from "@/constants/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: aboutPageContent.metadata.title,
  description: aboutPageContent.hero.description,
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      <CustomHero
        subTitle={aboutPageContent.hero.subtitle}
        title={aboutPageContent.hero.title}
        description={aboutPageContent.hero.description}
        decorativeImages={aboutPageContent.hero.decorativeImages}
        component={<Stats />}
        paddingClassName="px-4 py-20 tablet:px-8 tablet:py-28 desktop:px-0 desktop:py-28"
      />

      {aboutPageContent.stories.map((story) => (
        <StorySection key={story.heading} {...story} />
      ))}

      <CallOutBand content={aboutPageContent.callout} />
      <OurStand
        image={{
          src: homeExplore.napkin,
          alt: "Our stand decorative image",
          className:
            "hidden tablet:block will-change-transform opacity-100 pointer-events-none z-0 absolute w-64 h-64.75 -bottom-9.25 -left-24 translate-y-[68.12px] rotate-[-45deg] px-4",
        }}
      />
      <GoodToKnow />
    </div>
  );
}
