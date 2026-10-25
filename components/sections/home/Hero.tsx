import Image from "next/image";

import { businessInfo, pageImages } from "@/constants/data/reusable";
import { homePageContent } from "@/constants/data/home";

import RevealSection from "@/components/animation/RevealSection";
import HeroBean from "@/components/ui/HeroBean";

const Hero = () => {
  return (
    <RevealSection
      id="home-hero"
      revealOnScroll={false}
      className="home-hero relative flex h-[90vh] w-full flex-col items-center justify-start gap-5 overflow-visible bg-cream pb-8 scroll-mt-24 tablet:min-h-[90vh] tablet:justify-between tablet:overflow-y-visible desktop:min-h-204 desktop:overflow-clip"
    >
      {/* bean 1 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_1}
        alt={homePageContent.hero.beanAlt}
        className="desktop:w-22 tablet:w-17.5 w-13.25 desktop:h-20 tablet:h-16.25 h-12.25 desktop:top-17.5 tablet:top-49.5 top-57.75  desktop:left-31 tablet:left-7 left-2 rotate-[-18deg]"
      />

      {/* bean 2 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_2}
        alt={homePageContent.hero.beanAlt}
        className="hidden tablet:flex absolute pointer-events-none z-0 flex-none desktop:w-14.5 tablet:w-11.5 desktop:h-19.75 tablet:h-15.5 desktop:top-64.25 tablet:top-58.75 desktop:left-61.75 tablet:left-40.75 rotate-24 blur-[2px] opacity-[0.85]"
      />

      {/* bean 3 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_3}
        alt={homePageContent.hero.beanAlt}
        className="absolute pointer-events-none z-0 flex-none desktop:w-19 tablet:w-15.25 w-11.5 desktop:h-18.5 tablet:h-15  h-11.25  desktop:bottom-61 tablet:bottom-55.5 bottom-50.25  desktop:left-26.5 tablet:left-16.75 left-2 -rotate-8"
      />

      {/* bean 4 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_4}
        alt={homePageContent.hero.beanAlt}
        className="hidden tablet:flex absolute pointer-events-none z-0 flex-none desktop:w-11 tablet:w-8.75 desktop:h-10.25 tablet:h-8.25 desktop:bottom-30 tablet:bottom-27.5 desktop:left-69.5 tablet:left-46.25 rotate-40 blur-[3px] opacity-[0.7]"
      />

      {/* bean 5 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_5}
        alt={homePageContent.hero.beanAlt}
        className="absolute pointer-events-none z-0 flex-none desktop:w-17.5 desktop:h-16.25 desktop:top-4.5 desktop:right-72.25 tablet:w-14 tablet:h-13 tablet:top-53.5 tablet:right-7.5 w-10.5 h-9.75 top-12 right-2 rotate-12 blur-[1px] opacity-[0.95]"
      />

      {/* bean 6 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_6}
        alt={homePageContent.hero.beanAlt}
        className="absolute pointer-events-none z-0 flex-none desktop:w-24 desktop:h-23.5 desktop:top-48.75 desktop:right-36 tablet:w-19.25 tablet:h-18.75 tablet:top-76 tablet:right-10.5 w-14.5 h-14.25 top-55 right-2 rotate-[-30deg]"
      />

      {/* bean 7 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_7}
        alt={homePageContent.hero.beanAlt}
        className="hidden tablet:flex absolute pointer-events-none z-0 flex-none desktop:w-12.75 desktop:h-17.25 desktop:bottom-73.25 desktop:left-224.75 tablet:w-10.25 tablet:h-14 tablet:bottom-66.5 tablet:left-150.75 rotate-52 blur-[2px] opacity-[0.8]"
      />

      {/* bean 8 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_8}
        alt={homePageContent.hero.beanAlt}
        className="absolute pointer-events-none z-0 flex-none desktop:w-16 desktop:h-14.75 desktop:bottom-35.5 desktop:left-250 tablet:w-12.75 tablet:h-11.75 tablet:bottom-32.75 tablet:left-167.75 w-9.5 h-8.75 bottom-29.75 left-79 rotate-[-44deg] blur-[1px] opacity-[0.9]"
      />

      {/* bean 9 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_9}
        alt={homePageContent.hero.beanAlt}
        className="hidden tablet:flex absolute pointer-events-none z-0 flex-none desktop:w-9.5 desktop:h-12.75 desktop:top-3.5 desktop:left-103.25 tablet:w-7.5 tablet:h-10.25 tablet:top-3 tablet:left-70 rotate-8 blur-[3px] opacity-[0.6]"
      />

      {/* bean 10 */}
      <HeroBean
        src={pageImages.homeHero.bean_image_10}
        alt={homePageContent.hero.beanAlt}
        className="hidden tablet:flex absolute pointer-events-none z-0 flex-none desktop:w-8.75 desktop:h-8.25 desktop:top-35 desktop:left-178.75 tablet:w-6.5 tablet:h-7 tablet:top-50.5 tablet:right-53.5 rotate-[-62deg] blur-[3px] opacity-[0.55]"
      />

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-352 tablet:px-8 px-6.25 desktop:pt-16 tablet:pt-14 pt-15">
        <div className="whitespace-pre-wrap h-auto relative w-full wrap-break-word flex flex-col justify-start items-center">
          <h1 className="display-xl text-center">
            {homePageContent.hero.headingLines[0]}
            <br />
            {homePageContent.hero.headingLines[1]}
          </h1>
        </div>
      </div>
      {/* coffee hero image */}
      <div className="relative z-10 flex flex-row w-full items-end justify-center">
        <div className="relative h-128 w-183.25 max-w-full pointer-events-none">
          <Image
            src={pageImages.homeHero.hero_image}
            alt={homePageContent.hero.imageAlt}
            width={800}
            height={560}
            sizes="(max-width: 810px) 100vw, 733px"
            priority
            className="block w-full h-full rounded-[inherit] object-cover object-center"
          />
        </div>
      </div>

      {/* time and address */}
      <div className="absolute z-20 bottom-0 left-0 right-0 w-full">
        <div className="relative flex w-full items-end justify-between px-6 tablet:px-8 desktop:px-12 pb-8 tablet:pb-12 desktop:pb-25">
          {/* Time - Left side */}
          <div className="pointer-events-auto relative flex flex-col gap-1.5 text-left">
            <p className="home-hero-meta-label text-green">
              {homePageContent.hero.hoursLabel}
            </p>
            <p className="home-hero-meta-value">
              {businessInfo.openingHoursShort}
            </p>
          </div>

          {/* Address - Right side */}
          <div className="pointer-events-auto relative flex flex-col gap-1.5 text-right">
            <p className="home-hero-meta-label text-green">
              {homePageContent.hero.addressLabel}
            </p>
            <p className="home-hero-meta-value">{businessInfo.address}</p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default Hero;
