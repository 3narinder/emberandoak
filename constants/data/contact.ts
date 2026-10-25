import { homeHero } from "../images";
import { ContactFormCopy, FormSelectOption } from "../types";

// Contact page: heading, form fields, topic options, and status messages.
export const contactPageContent = {
  metadata: {
    title: "Contact",
  },
  hero: {
    subtitle: "contact",
    title: "come say hello",
    description:
      "Questions, bookings, private events or just a note about something you liked — we read all of it.",
    decorativeImages: [
      {
        src: homeHero.bean_image_1,
        alt: "Decorative coffee bean",
        className:
          "desktop:w-18 tablet:w-14.5 w-10.75 desktop:h-16.75 tablet:h-13.25 h-10 desktop:top-19 tablet:top-19.25 top-19.75 desktop:left-42 tablet:left-27.25 left-11.25 rotate-[-22deg]",
      },
      {
        src: homeHero.bean_image_2,
        alt: "Decorative coffee bean",
        className:
          "hidden tablet:flex desktop:w-12.75 tablet:w-10.25 w-10.75 desktop:h-17.25 tablet:h-14 h-10 desktop:bottom-35.5 tablet:bottom-35 bottom-19.75 desktop:left-23.75 tablet:left-15.25 left-11.25 blur-[2px] opacity-[0.8] rotate-[30deg]",
      },
      {
        src: homeHero.bean_image_3,
        alt: "Decorative coffee bean",
        className:
          "hidden tablet:flex desktop:w-9.5 tablet:w-10.25 desktop:h-8.75 tablet:h-7 desktop:bottom-17.75 tablet:bottom-16.5 desktop:left-58.25 tablet:left-38.75 blur-[2px] opacity-[0.6] rotate-[30deg]",
      },
      {
        src: homeHero.bean_image_6,
        alt: "Decorative coffee bean",
        className:
          "hidden tablet:flex desktop:w-20 tablet:w-16 w-12 desktop:h-19.5 tablet:h-15.5 h-11.75 desktop:top-13.25 tablet:top-14.25 top-15 desktop:right-41 tablet:right-26.5 right-13 rotate-[16deg]",
      },
      {
        src: homeHero.bean_image_2,
        alt: "Decorative coffee bean",
        className:
          "desktop:w-12 tablet:w-9.5 w-7.25 desktop:h-16.25 tablet:h-12.75 h-9.75 desktop:bottom-39 tablet:bottom-38.5 bottom-37.75 desktop:right-24 tablet:right-15.5 right-6 blur-[1px] opacity-[0.85] rotate-[-36deg]",
      },
      {
        src: homeHero.bean_image_4,
        alt: "Decorative coffee bean",
        className:
          "hidden tablet:flex desktop:w-8.75 tablet:w-7 desktop:h-8.25 tablet:h-6.5 desktop:bottom-19 tablet:bottom-18.75 desktop:right-61.25 tablet:right-41 blur-[3px] opacity-[0.55] rotate-[62deg]",
      },
    ],
  },
  form: {
    labels: {
      name: "Your name",
      email: "Your email",
      topic: "Topic",
      message: "Your message",
    },
    placeholders: {
      name: "Your name",
      email: "you@example.com",
      message: "How can we help?",
    },
    submit: "Send message",
    submitting: "Sending...",
    sent: "Message ready",
    incomplete: "Check required fields",
    success:
      "Thank you for reaching out. We’ve received your message and will get back to you as soon as possible.",
    validationError: "Please complete all required fields.",
    contactHeading: "Find us",
  } satisfies ContactFormCopy,
  findUs: {
    title: "How to get here",
    description: "Open every day. Weekends from 8 AM.",
    addressLabel: "address",
    phoneLabel: "Call us at",
    hoursLabel: "Open daily",
    directionsLabel: "Get directions",
    email: "Email Us at",
  },
};

export const contactTopics: FormSelectOption[] = [
  { value: "", label: "Choose a topic" },
  { value: "general", label: "General enquiry" },
  { value: "reservation", label: "Table reservation" },
  { value: "event", label: "Private event" },
  { value: "feedback", label: "Feedback" },
  { value: "careers", label: "Careers" },
];
