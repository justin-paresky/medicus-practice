import { v4 as uuidv4 } from 'uuid';
import { KeyTextField, NumberField, BooleanField } from '@prismicio/client';

import Input from '@/components/Input';

interface PhoneFieldProps {
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

export default function PhoneField(props: PhoneFieldProps) {
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
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Default/phone">
            <path
              id="Icon"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.43436 0.0843575C3.92185 -0.0743434 4.45127 -0.0131506 4.88717 0.24622L5.02882 0.339988L5.14082 0.422105C5.56387 0.732292 5.97029 1.06456 6.35837 1.41752L6.93797 1.95049L7.51171 2.48975L8.23649 3.17848C8.76411 3.67986 8.85284 4.47984 8.4679 5.08069L8.37815 5.20622L7.57815 6.21312C7.54013 6.26097 7.50391 6.3102 7.46954 6.36074C7.44621 6.39505 7.44039 6.43745 7.45208 6.47579L7.4696 6.51234L7.68198 6.82409C7.7992 6.99616 7.92329 7.16341 8.05393 7.32544L8.25475 7.5645L8.41964 7.75294C8.67148 8.04075 8.94837 8.30536 9.24696 8.54371L9.47492 8.71749L9.92504 9.04503L10.6331 9.51115C10.6749 9.5387 10.7307 9.53145 10.7641 9.49411L10.8825 9.36606L11.6904 8.5206C12.1451 8.04473 12.8728 7.97742 13.4041 8.34261L13.5147 8.42749L16.1019 10.6338C16.6718 11.1198 17 11.8311 17 12.5801C17 13.2682 16.7299 13.9262 16.2522 14.4147L16.1169 14.5437L15.838 14.7909C15.25 15.3124 14.5442 15.6834 13.7813 15.8723C13.1055 16.0395 12.4007 16.0427 11.7255 15.8831L11.4739 15.8156L11.1428 15.7162C10.2862 15.4589 9.46864 15.088 8.71181 14.6137L8.39123 14.4041L6.78926 13.3124C5.70144 12.571 4.70531 11.7043 3.82121 10.7305L3.49496 10.3604L3.00122 9.78327C2.36815 9.0433 1.86779 8.19944 1.52224 7.28898C1.22003 6.49271 1.04418 5.65487 1.00037 4.8058L0.989692 4.44131C0.983548 3.56494 1.19742 2.70863 1.60929 1.9459L1.75389 1.69523L2.0964 1.13814C2.40316 0.639199 2.87742 0.265665 3.43436 0.0843575ZM3.95501 2.033L3.90904 2.06333L3.8494 2.11944L3.80014 2.18564L3.45763 2.74273C3.14732 3.24745 2.98545 3.82871 2.98964 4.42729C2.9948 5.16285 3.13108 5.89159 3.39209 6.5793C3.61816 7.17495 3.93105 7.73325 4.32011 8.23628L4.52095 8.48311L5.01469 9.06023C5.75648 9.92729 6.59605 10.7049 7.51628 11.3777L7.91556 11.6596L9.51753 12.7514C10.0965 13.1459 10.7244 13.4623 11.385 13.6927L11.718 13.8007L12.0491 13.9001C12.456 14.0223 12.8884 14.0329 13.3008 13.9308C13.6856 13.8356 14.0457 13.6616 14.3586 13.4206L14.511 13.2946L14.7899 13.0473C14.9235 12.9288 15 12.7587 15 12.5801C15 12.4494 14.9542 12.3239 14.8722 12.2247L14.8041 12.1555L12.698 10.36L12.3284 10.7478L12.2546 10.8277C11.599 11.5604 10.5301 11.7354 9.68081 11.2704L9.53335 11.1817L8.74828 10.6622L8.29816 10.3347C7.8927 10.0396 7.51459 9.70913 7.16823 9.34722L6.91449 9.06995L6.7496 8.88151C6.57713 8.68439 6.41269 8.48045 6.2567 8.27018L6.02908 7.9501L5.8167 7.63836C5.32309 6.91377 5.3227 5.96105 5.81573 5.23606L5.9115 5.10069L6.01223 4.96897L6.53001 4.316L6.13401 3.93956C5.94903 3.76378 5.76309 3.58901 5.5762 3.41527L5.01269 2.8971C4.78863 2.69331 4.5575 2.49748 4.31976 2.30998L3.95501 2.033Z"
            />
          </g>
        </svg>
      }
      id={id}
      title={properties.title}
    >
      <input
        type="phone"
        {...properties}
        autoComplete={properties.autoComplete || 'off'}
        aria-label={properties.title}
        aria-labelledby={id}
      />
    </Input>
  );
}
