import RevealSection from "@/components/animation/RevealSection";
import SectionHeading from "@/components/ui/SectionHeading";
import type { SectionLayoutProps } from "@/constants/types";

const SectionLayout = ({
  title,
  children,
  id,
  className = "",
  contentClassName = "",
  headingClassName = "",
  showHeading = true,
  description,
  paddingClassName = "py-16 tablet:py-28 desktop:py-28",
  revealOnScroll = true,
}: SectionLayoutProps) => {
  return (
    <RevealSection
      id={id}
      revealOnScroll={revealOnScroll}
      className={`relative z-10 flex w-full flex-col items-center overflow-x-clip scroll-mt-24 ${paddingClassName} ${className}`}
    >
      <div
        className={`mx-auto flex w-full flex-col items-center gap-6 ${contentClassName}`}
      >
        {showHeading && title && (
          <div className={`w-full ${headingClassName}`}>
            <SectionHeading title={title} description={description} />
          </div>
        )}

        {children}
      </div>
    </RevealSection>
  );
};

export default SectionLayout;
