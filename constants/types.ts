import type { StaticImageData } from "next/image";
import type { HTMLMotionProps } from "framer-motion";
import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

// Menu content: used by MenuItem, MenuItems, MenuSection, and menu data.
type MenuItemBase = {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
};

export type MenuItemData = MenuItemBase &
  (
    | { type: "price"; price: string; items?: never }
    | { type: "items"; items: string; price?: never }
  );

export type MenuButtonConfig = {
  label: string;
  href: string;
};

export type DecorativeImage = {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  className: string;
};

export type MenuSectionProps = {
  id: string;
  title: string;
  description?: string;
  items: MenuItemData[];
  button?: MenuButtonConfig;
  columns?: 1 | 2;
  contentClassName?: string;
  decorativeImages?: DecorativeImage[];
  paddingClassName?: string;
};

export type MenuCategoryData = {
  id: string;
  title: string;
  description?: string;
  items: MenuItemData[];
};

export type MenuGroupData = {
  id: string;
  title: string;
  description: string;
  categories: MenuCategoryData[];
};

export type MenuPageContent = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
    decorativeImages: DecorativeImage[];
  };
  navigation: {
    ariaLabel: string;
    selectLabel: string;
    placeholder: string;
  };
  address: {
    title: string;
    description: string;
  };
  groups: MenuGroupData[];
};

export type MenuNavItem = {
  label: string;
  id: string;
};

// Shared site content: used by reusable story, testimonial, FAQ, and card components.
export type TestimonialData = {
  quote: string;
  name: string;
};

export type StorySectionData = {
  image: string | StaticImageData;
  imageAlt: string;
  subheading: string;
  heading: string;
  paragraphs: string[];
  decorativeImages?: DecorativeImage[];
  reverseOnDesktop?: boolean;
};

export type StatData = {
  stat: string;
  content: string;
};

export type StandValueData = {
  number: string;
  title: string;
  description: string;
};

export type FAQData = {
  question: string;
  answer: string;
};

// Legal pages: each policy section renders a heading, paragraphs, and optional bullets.
export type LegalPolicySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPolicyPageData = {
  subtitle: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalPolicySection[];
};

// PolicyPage: props for the shared terms, privacy, and cookies page template.
export type PolicyPageProps = {
  page: LegalPolicyPageData;
};

// Layout and animation component props.
export type SectionLayoutProps = {
  title?: string;
  children: ReactNode;
  id?: string;
  className?: string;
  contentClassName?: string;
  headingClassName?: string;
  showHeading?: boolean;
  description?: string;
  paddingClassName?: string;
};

export type RevealSectionProps = HTMLMotionProps<"section">;

// RouteRevealDelayProvider: navigation callback and reveal state shared by page sections.
export type RouteRevealDelayContextValue = {
  delayNextRoute: (href: string) => void;
  shouldDelayReveal: boolean;
};

export type RouteRevealDelayProviderProps = {
  children: ReactNode;
};

export type HoverScaleProps = {
  children: ReactNode;
  className: string;
};

export type BrandMarkProps = {
  tone?: "dark" | "light";
};

export type HeroBeanProps = {
  src: string;
  alt: string;
  className: string;
  delay?: number;
};

export type CustomHeroProps = {
  subTitle?: string;
  title: string;
  description?: string;
  className?: string;
  decorativeImages?: DecorativeImage[];
  paddingClassName?: string;
  component?: ReactNode;
};

export type MenuItemsProps = {
  items: MenuItemData[];
  columns?: 1 | 2;
  itemHref?: string;
};

export type MenuItemProps = {
  item: MenuItemData;
  href?: string;
};

export type MenuBannerProps = {
  title: string;
  description: string;
};

export type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export type ContactCardProps = {
  icon: ReactNode;
  heading: string;
  content: ReactNode;
  className?: string;
};

export type FAQItemProps = FAQData;

export type StandCardProps = StandValueData;

export type StatsCardProps = StatData;

export type StorySectionProps = StorySectionData;

export type TestimonialCardProps = TestimonialData;

// Contact forms: used by FormField, FormSelect, and ContactForm.
export type FormSelectOption = {
  value: string;
  label: string;
};

export type FormSelectProps = {
  label: string;
  name: string;
  options: FormSelectOption[];
  placeholder?: string;
  className?: string;
  required?: boolean;
} & Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "name" | "className" | "required"
>;

export type FormFieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "password"
  | "textarea";

export type FormFieldProps = {
  label: string;
  name: string;
  type?: FormFieldType;
  placeholder?: string;
  className?: string;
  required?: boolean;
  autoComplete?: string;
  rows?: number;
} & Omit<
  InputHTMLAttributes<HTMLInputElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement>,
  "type" | "name" | "placeholder" | "className" | "required" | "rows"
>;

export type ContactFormData = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

// Footer: icon components stay in Footer while labels and destinations live in data.
export type SocialLinkData = {
  label: string;
  href: string;
};

export type NavigationLinkData = {
  label: string;
  href: string;
};

// ContactForm: reusable control for all visible labels and form status messages.
export type ContactFormCopy = {
  labels: {
    name: string;
    email: string;
    topic: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  submit: string;
  submitting: string;
  sent: string;
  incomplete: string;
  success: string;
  validationError: string;
  contactHeading: string;
};

export type ContactInfoItem = {
  label: string;
  value: string;
  icon: ReactNode;
  href?: string;
  external?: boolean;
};

export interface CallOutBandContent {
  headingLines: string[];
  buttonLabel: string;
  buttonHref: string;
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

export interface CallOutBandProps {
  content: CallOutBandContent;
}
