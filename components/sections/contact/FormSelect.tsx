import type { FormSelectProps } from "@/constants/types";

const FormSelect = ({
  label,
  name,
  options,
  className = "",
  required = false,
  ...props
}: FormSelectProps) => {
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

      <div className="relative w-full min-w-0">
        <select
          id={id}
          name={name}
          required={required}
          className="relative block h-auto w-full min-w-0 appearance-none rounded-[20px] border border-[#0e4a2b1f] bg-[#f1e2d0b3] py-3 pl-4 pr-11 font-onest text-sm font-normal leading-[1.4em] text-green focus:border-2 focus:border-[#0e4a2b80] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Dropdown arrow */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-green"
        >
          <path
            d="m7 10 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default FormSelect;
