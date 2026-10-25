import RevealSection from "@/components/animation/RevealSection";
import Button from "@/components/ui/Button";
import type { CallOutBandProps } from "@/constants/types";
import Image from "next/image";

const CallOutBand = ({ content }: CallOutBandProps) => {
  const { headingLines, buttonLabel, buttonHref, images } = content;

  return (
    <RevealSection className="relative h-auto w-full scroll-mt-24">
      <div className="relative flex w-full flex-col items-center overflow-x-clip py-16">
        <div className="bg-green flex h-min w-full flex-col items-center overflow-x-clip">
          <div className="relative z-20 flex h-min w-full flex-col items-center gap-8 px-6 py-16">
            <h2 className="heading-2 relative flex w-full flex-col items-center text-center text-cream">
              {headingLines.map((line, index) => (
                <span
                  key={`${line}-${index}`}
                  className="block w-full text-center"
                >
                  {line}
                </span>
              ))}
            </h2>

            <Button
              label={buttonLabel}
              href={buttonHref}
              className="border-0 bg-cream px-8 py-4.5 text-green hover:bg-cream-deep hover:text-green"
            />
          </div>
        </div>
      </div>

      {images.slice(0, 2).map((image, index) => (
        <div
          key={`${image.alt}-${index}`}
          className={`desktop:flex absolute top-9.5 -bottom-7 z-10 hidden w-68 aspect-[.75] ${
            index === 0 ? "left-6 rotate-[-5deg]" : "right-6 rotate-[4deg]"
          }`}
        >
          <Image
            src={image.src}
            width={680}
            height={1000}
            alt={image.alt}
            className="h-full w-full rounded-4xl object-cover object-center"
          />
        </div>
      ))}
    </RevealSection>
  );
};

export default CallOutBand;
