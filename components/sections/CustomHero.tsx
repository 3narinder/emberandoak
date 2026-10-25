import Image from "next/image";
import { pageImages } from "@/constants/data/reusable";
import SectionLayout from "@/components/layout/SectionLayout";
import type { CustomHeroProps } from "@/constants/types";

const CustomHero = ({
  subTitle,
  title,
  description,
  className = "",
  decorativeImages = [],
  paddingClassName = "py-20 tablet:py-28 desktop:py-28",
  component,
}: CustomHeroProps) => {
  return (
    <SectionLayout paddingClassName={paddingClassName}>
      {/* Decorative images */}
      {decorativeImages.map((image, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute z-0 ${image.className} mix-blend-multiply`}
          aria-hidden="true"
        >
          <Image
            src={image.src}
            alt=""
            width={image.width ?? 300}
            height={image.height ?? 300}
            loading="eager"
            className="h-auto w-full object-contain"
          />
        </div>
      ))}

      {/* Hero content */}
      <div
        className={`relative z-10 flex w-full flex-col items-center gap-6 ${className}`}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          {subTitle && (
            <p className="text-xs font-semibold tracking-[0.18em] leading-[1.4em] uppercase text-[#0e4a2b8c]">
              {subTitle}
            </p>
          )}

          <h1 className="heading-1 w-full text-center">{title}</h1>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20 shrink-0 bg-green-rule" />

          <div className="h-6 w-6 shrink-0 rotate-[-18deg]">
            <Image
              src={pageImages.homeStory.SectionHeadingBean}
              width={24}
              height={24}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="h-px w-20 shrink-0 bg-green-rule" />
        </div>

        {description && (
          <p className="w-full max-w-xl text-center font-onest text-sm font-normal leading-[1.625em] tracking-[-0.02em] text-green-text-muted tablet:text-[13px] desktop:text-[16px]">
            {description}
          </p>
        )}
      </div>

      {component && <div className="relative z-10 w-full">{component}</div>}
    </SectionLayout>
  );
};

export default CustomHero;
