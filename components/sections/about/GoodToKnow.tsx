import SectionLayout from "@/components/layout/SectionLayout";
import FAQItem from "@/components/ui/FAQItem";
import { aboutPageContent } from "@/constants/data/about";

const GoodToKnow = () => {
  return (
    <SectionLayout
      title={aboutPageContent.faqHeading.title}
      description={aboutPageContent.faqHeading.description}
      paddingClassName="px-4 py-16 tablet:px-8 tablet:py-28 desktop:px-0 desktop:py-28"
    >
      <div className="relative flex h-min w-full max-w-5xl flex-col items-center gap-3 pt-4 tablet:px-8">
        {aboutPageContent.faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default GoodToKnow;
