import { RichTextField, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

interface CheckboxProps {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  label?: RichTextField;
  name?: string;
  readonly?: boolean;
  required?: boolean;
  value?: string;
}

export default function Checkbox({ id, label, ...rest }: CheckboxProps) {
  return (
    <div className="form-control">
      <label htmlFor={id} className="flex cursor-pointer flex-row items-center justify-start gap-1">
        <input
          aria-labelledby={id}
          type="checkbox"
          className="peer relative h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-[3px] border-[1px] border-gray bg-[#ffffff] focus:outline-none disabled:border-gray-light"
          {...rest}
        />
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white pointer-events-none absolute left-[2px] hidden h-[10px] w-[11] outline-none peer-checked:block"
        >
          <path
            d="M4.63153 10C4.62999 10 4.62819 10 4.62666 10C4.56304 9.9987 4.50301 9.97109 4.45992 9.9237L0.0615739 5.06859C-0.0138438 4.98526 -0.0207699 4.85974 0.0451564 4.76834C0.111083 4.67719 0.231135 4.64594 0.332205 4.69386L4.35782 6.60736C4.39168 6.62351 4.4317 6.6157 4.45761 6.58835L10.5983 0.0731228C10.6814 -0.0151566 10.8173 -0.0247919 10.9117 0.0512482C11.0061 0.127288 11.0279 0.263744 10.962 0.366085L4.85368 9.86537C4.84496 9.87917 4.83469 9.89167 4.82341 9.90339L4.79647 9.93073C4.75261 9.975 4.69309 10 4.63153 10Z"
            fill="#215045"
          />
        </svg>
        {isFilled.richText(label) && (
          <span className="text-[16px] text-gray-dark">
            <PrismicRichText field={label} />
          </span>
        )}
      </label>
    </div>
  );
}
