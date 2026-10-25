"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Check, Clock3, LoaderCircle, Mail, MapPin, Phone } from "lucide-react";

import RevealSection from "@/components/animation/RevealSection";
import FormField from "./FormField";
import FormSelect from "./FormSelect";
import { contactPageContent, contactTopics } from "@/constants/data/contact";
import type { ContactFormData, ContactInfoItem } from "@/constants/types";
import { businessInfo } from "@/constants/data/reusable";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import { homeGallery } from "@/constants/images";

const contactInfoItems: ContactInfoItem[] = [
  {
    label: contactPageContent.findUs.addressLabel,
    value: businessInfo.address,
    href: businessInfo.mapUrl,
    external: true,
    icon: <MapPin size={18} aria-hidden="true" />,
  },
  {
    label: contactPageContent.findUs.phoneLabel,
    value: businessInfo.phone,
    href: `tel:${businessInfo.phone.replace(/[^\d+]/g, "")}`,
    icon: <Phone size={18} aria-hidden="true" />,
  },
  {
    label: contactPageContent.findUs.hoursLabel,
    value: businessInfo.openingHoursShort,
    icon: <Clock3 size={18} aria-hidden="true" />,
  },
  {
    label: contactPageContent.findUs.email,
    value: businessInfo.email,
    href: `mailto:${businessInfo.email}`,
    icon: <Mail size={18} aria-hidden="true" />,
  },
];

const formCopy = contactPageContent.form;

const initialValues: ContactFormData = {
  name: "",
  email: "",
  topic: "",
  message: "",
};

const ContactForm = () => {
  const [values, setValues] = useState<ContactFormData>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [status, setStatus] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const isFormComplete =
    values.name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) &&
    values.topic !== "" &&
    values.message.trim().length > 0;

  const updateField = (name: string, value: string) => {
    setValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
    setIsSent(false);
  };

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    updateField(event.target.name, event.target.value);
  };

  const handleTopicChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target;
    updateField(target.name, target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = formRef.current;

    if (!form || isSubmitting || !form.reportValidity()) {
      setStatus(formCopy.validationError);
      return;
    }

    if (!isFormComplete) {
      setStatus(formCopy.validationError);
      return;
    }

    setIsSubmitting(true);
    setStatus(formCopy.submitting);

    await new Promise<void>((resolve) => window.setTimeout(resolve, 900));

    setIsSubmitting(false);
    setIsSent(true);
    setStatus(formCopy.success);
    setValues(initialValues);
    form.reset();
  };

  return (
    <RevealSection className="relative z-10 flex w-full flex-col items-center overflow-x-clip scroll-mt-24 py-14 tablet:py-20">
      <div className="relative flex w-full flex-col items-start gap-10 px-5 tablet:gap-12 tablet:px-8 desktop:flex-row desktop:justify-between desktop:gap-12 max-w-6xl">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={homeGallery.beanGroup}
            alt=""
            aria-hidden="true"
            width={320}
            height={203}
            className="hidden tablet:block absolute -bottom-34 -left-47 h-48 w-76 -rotate-12 object-contain mix-blend-multiply"
          />
        </div>
        {/* Contact form */}
        <form
          ref={formRef}
          noValidate
          onSubmit={handleSubmit}
          aria-busy={isSubmitting}
          className="relative z-10 grid h-min w-full min-w-0 grid-cols-1 items-start gap-5 tablet:grid-cols-2 desktop:flex-1"
        >
          {/* Name */}
          <FormField
            label={formCopy.labels.name}
            name="name"
            type="text"
            placeholder={formCopy.placeholders.name}
            autoComplete="name"
            value={values.name}
            onChange={handleFieldChange}
            disabled={isSubmitting}
            required
          />

          {/* Email */}
          <FormField
            label={formCopy.labels.email}
            name="email"
            type="email"
            placeholder={formCopy.placeholders.email}
            autoComplete="email"
            value={values.email}
            onChange={handleFieldChange}
            disabled={isSubmitting}
            required
          />

          {/* Topic */}
          <FormSelect
            label={formCopy.labels.topic}
            name="topic"
            options={contactTopics}
            value={values.topic}
            onChange={handleTopicChange}
            disabled={isSubmitting}
            required
            className="tablet:col-span-2"
          />

          {/* Message */}
          <FormField
            label={formCopy.labels.message}
            name="message"
            type="textarea"
            placeholder={formCopy.placeholders.message}
            rows={5}
            value={values.message}
            onChange={handleFieldChange}
            disabled={isSubmitting}
            required
            className="tablet:col-span-2"
          />

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || isSent}
            className={`flex w-fit items-center justify-center gap-2 rounded-full px-6 py-4 font-onest text-sm font-semibold text-cream transition-colors duration-300 disabled:cursor-default capitalize tracking-[-0.02em] leading-[1em] ${
              isSubmitting || isSent
                ? "bg-green"
                : isFormComplete
                  ? "bg-green hover:opacity-85"
                  : "bg-accent hover:opacity-90"
            }`}
          >
            {isSubmitting ? (
              formCopy.submitting
            ) : isSent ? (
              <>
                {formCopy.sent}
                <Check size={16} aria-hidden="true" />
              </>
            ) : isFormComplete ? (
              formCopy.submit
            ) : (
              formCopy.incomplete
            )}
            {isSubmitting && (
              <LoaderCircle
                size={16}
                aria-hidden="true"
                className="motion-safe:animate-spin"
              />
            )}
          </button>

          {/* Success or error message */}
          {status && (
            <div
              id="contact-form-status"
              role="status"
              aria-live="polite"
              className={`tablet:col-span-2 flex items-start gap-3 rounded-2xl border p-4 transition-all duration-300 ${
                isSent
                  ? "border-green/20 bg-green/5"
                  : "border-accent/20 bg-accent/5"
              }`}
            >
              <span
                className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full ${
                  isSent ? "bg-green/10 text-green" : "bg-accent/10 text-accent"
                }`}
              >
                {isSent ? (
                  <Check size={20} aria-hidden="true" />
                ) : (
                  <Mail size={20} aria-hidden="true" />
                )}
              </span>

              <div className="min-w-0 flex-1">
                <p
                  className={`font-onest text-sm font-semibold ${
                    isSent ? "text-green" : "text-accent"
                  }`}
                >
                  {isSent
                    ? "Message sent successfully!"
                    : "Please check your details"}
                </p>

                <p className="mt-1 font-onest text-sm leading-relaxed text-foreground/75">
                  {status}
                </p>
              </div>
            </div>
          )}
        </form>

        {/* Contact details */}
        <div className="relative z-10 w-full min-w-0 desktop:w-104 desktop:shrink-0">
          <ContactInfo
            title={formCopy.contactHeading}
            items={contactInfoItems}
          />
        </div>
      </div>
    </RevealSection>
  );
};

export default ContactForm;
