import { KeyTextField, NumberField, BooleanField } from '@prismicio/client';

import Input from '@/components/Input';

interface EmailFieldProps {
  autoComplete?: KeyTextField;
  autoFocus?: BooleanField;
  defaultValue?: KeyTextField;
  disabled?: BooleanField;
  maxLength?: NumberField;
  name: KeyTextField;
  pattern?: KeyTextField;
  placeholder?: KeyTextField;
  readOnly?: BooleanField;
  required?: BooleanField;
  size?: NumberField;
  title?: KeyTextField;
}

export default function EmailField(props: EmailFieldProps) {
  const properties = {
    autoComplete: props.autoComplete as string,
    autoFocus: props.autoFocus as boolean,
    defaultValue: props.defaultValue as string,
    disabled: props.disabled as boolean,
    maxLength: props.maxLength as number,
    name: props.name as string,
    pattern: props.pattern as string,
    placeholder: props.placeholder as string,
    readOnly: props.readOnly as boolean,
    required: props.required as boolean,
    size: props.size as number,
    title: props.title as string,
  };
  const id = `text-box-${properties.name}`;
  return (
    <Input
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 3H4C2.34806 3 1.01 4.34735 1.01 6L1 17.9992C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6C23 4.34772 21.6523 3 20 3ZM3.01 6.00083C3.01 5.44883 3.45574 5 4 5H20C20.5477 5 21 5.45228 21 6V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18L3.01 6.00083ZM5.48406 9.00015C5.01101 8.71512 4.85859 8.10058 5.14361 7.62753C5.42864 7.15447 6.04318 7.00205 6.51623 7.28708L11.9707 10.5735L17.6632 7.14361C18.1363 6.85859 18.7517 7.01239 19.0367 7.48544C19.3211 7.95742 19.1709 8.57188 18.6998 8.85777L12.01 12.918L12.0037 12.9284L5.48406 9.00015Z"
            fill="#768188"
          />
          <mask id="mask0_3371_1328" maskUnits="userSpaceOnUse" x="1" y="3" width="22" height="18">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 3H4C2.34806 3 1.01 4.34735 1.01 6L1 17.9992C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6C23 4.34772 21.6523 3 20 3ZM3.01 6.00083C3.01 5.44883 3.45574 5 4 5H20C20.5477 5 21 5.45228 21 6V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18L3.01 6.00083ZM5.48406 9.00015C5.01101 8.71512 4.85859 8.10058 5.14361 7.62753C5.42864 7.15447 6.04318 7.00205 6.51623 7.28708L11.9707 10.5735L17.6632 7.14361C18.1363 6.85859 18.7517 7.01239 19.0367 7.48544C19.3211 7.95742 19.1709 8.57188 18.6998 8.85777L12.01 12.918L12.0037 12.9284L5.48406 9.00015Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_3371_1328)">
            <rect width="24" height="24" fill="#768188" />
          </g>
        </svg>
      }
      id={id}
      title={properties.title}
    >
      <input
        type="email"
        {...properties}
        autoComplete={properties.autoComplete || 'off'}
        aria-label={properties.title}
        aria-labelledby={id}
      />
    </Input>
  );
}
