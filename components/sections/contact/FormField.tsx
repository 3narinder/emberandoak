import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import type { FormFieldProps } from "@/constants/types";

const fieldClassName =
  "relative block h-auto w-full min-w-0 rounded-[20px] border border-[#0e4a2b1f] bg-[#f1e2d0b3] px-4 py-3 font-onest text-sm font-normal leading-[1.4em] tracking-normal text-green placeholder:text-[#0e4a2b73] focus:border-2 focus:border-[#0e4a2b80] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
  required = false,
  autoComplete,
  rows = 5,
  ...props
}: FormFieldProps) => {
  const id = name;

  return (
    <div
      className={`flex h-min w-full min-w-0 flex-col items-start gap-2 ${className}`}
    >
      <label
        htmlFor={id}
        className="font-onest text-xs font-semibold uppercase leading-[1.4em] tracking-[0.12em] text-green"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          autoComplete={autoComplete}
          className={`${fieldClassName} resize-y`}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className={fieldClassName}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};

export default FormField;
