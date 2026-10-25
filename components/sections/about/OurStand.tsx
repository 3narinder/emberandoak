import SectionLayout from "@/components/layout/SectionLayout";
import StandCard from "@/components/ui/StandCard";
import { aboutPageContent } from "@/constants/data/about";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface OurStandProps {
  image: {
    src: string | StaticImageData;
    alt?: string;
    width?: number;
    height?: number;
    className: string;
  };
}

const OurStand = ({ image }: OurStandProps) => {
  return (
    <SectionLayout
      title={aboutPageContent.valuesHeading.title}
      description={aboutPageContent.valuesHeading.description}
      paddingClassName="px-4 py-16 tablet:px-8 tablet:py-28 desktop:px-0 desktop:py-28"
    >
      <div
        className={`pointer-events-none absolute z-0 ${image.className} mix-blend-multiply`}
      >
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          width={image.width ?? 300}
          height={image.height ?? 300}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative grid h-min w-full max-w-5xl flex-none grid-cols-1 grid-rows-[minmax(0,1fr)] auto-rows-fr justify-center gap-5 pt-4 tablet:grid-cols-3">
        {aboutPageContent.values.map((value) => (
          <StandCard key={value.number} {...value} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default OurStand;
