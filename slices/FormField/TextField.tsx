import { v4 as uuidv4 } from 'uuid';
import { KeyTextField, NumberField, BooleanField } from '@prismicio/client';

import Input from '@/components/Input';

interface TextFieldProps {
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

export default function TextField(props: TextFieldProps) {
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
  const id = `text-box-${uuidv4()}`;
  return (
    <Input
      icon={
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 12C14.7623 12 17 9.76228 17 7C17 4.23772 14.7623 2 12 2C9.23772 2 7 4.23772 7 7C7 9.76228 9.23772 12 12 12ZM12 4C13.6577 4 15 5.34228 15 7C15 8.65772 13.6577 10 12 10C10.3423 10 9 8.65772 9 7C9 5.34228 10.3423 4 12 4ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V19C19 17.5399 15.156 16 12 16C8.844 16 5 17.5399 5 19V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V19C3 15.9353 7.83098 14 12 14C16.169 14 21 15.9353 21 19V21Z"
          />
          <mask id="mask0_3371_4860" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 12C14.7623 12 17 9.76228 17 7C17 4.23772 14.7623 2 12 2C9.23772 2 7 4.23772 7 7C7 9.76228 9.23772 12 12 12ZM12 4C13.6577 4 15 5.34228 15 7C15 8.65772 13.6577 10 12 10C10.3423 10 9 8.65772 9 7C9 5.34228 10.3423 4 12 4ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V19C19 17.5399 15.156 16 12 16C8.844 16 5 17.5399 5 19V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V19C3 15.9353 7.83098 14 12 14C16.169 14 21 15.9353 21 19V21Z"
            />
          </mask>
          <g mask="url(#mask0_3371_4860)">
            <rect width="24" height="24" />
          </g>
        </svg>
      }
      id={id}
      title={properties.title}
    >
      <input
        type="text"
        {...properties}
        autoComplete={properties.autoComplete || 'off'}
        aria-label={properties.title}
        aria-labelledby={id}
      />
    </Input>
  );
}
