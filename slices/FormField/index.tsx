import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import TextField from './TextField';
import EmailField from './EmailField';
import PhoneField from './PhoneField';
import TextAreaField from './TextAreaField';
import CheckField from './CheckField';

import Button from '@/components/Button';

/**
 * Props for `FormField`.
 */
export type FormFieldProps = SliceComponentProps<Content.FormFieldSlice>;

/**
 * Component for "FormField" Slices.
 */
const FormField = ({ slice }: FormFieldProps): JSX.Element => {
  const { variation, primary } = slice;

  switch (variation) {
    case 'default':
      return <TextField {...primary} />;
    case 'email':
      return <EmailField {...primary} />;
    case 'phone':
      return <PhoneField {...primary} />;
    case 'textArea':
      return <TextAreaField {...primary} />;
    case 'check':
      return <CheckField {...primary} />;
    case 'submit':
      return (
        <Button
          type="submit"
          name={primary.name as string}
          label={primary.label as string}
          disabled={primary.disabled as boolean}
        />
      );
    default:
      return <></>;
  }
};

export default FormField;
