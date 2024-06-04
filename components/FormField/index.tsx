import { BooleanField, ImageField, KeyTextField, NumberField, RichTextField, SelectField } from '@prismicio/client';

import TextField from './TextField';
import EmailField from './EmailField';
import PhoneField from './PhoneField';
import TextAreaField from './TextAreaField';
import CheckField from './CheckField';

import Button from '@/components/Button';

interface FormFieldProps {
  placeholder?: KeyTextField;
  defaultValue?: KeyTextField;
  name: KeyTextField;
  size?: NumberField;
  disabled?: BooleanField;
  maxLength?: NumberField;
  pattern?: KeyTextField;
  required?: BooleanField;
  autoFocus?: BooleanField;
  title?: KeyTextField;
  icon?: ImageField;
  autoComplete?: KeyTextField;
  readOnly?: BooleanField;
  type: SelectField;
  label?: RichTextField;
}

const FormField = ({ type, ...rest }: FormFieldProps): JSX.Element => {
  switch (type) {
    case 'text':
      return <TextField {...rest} />;
    case 'email':
      return <EmailField {...rest} />;
    case 'phone':
      return <PhoneField {...rest} />;
    case 'textArea':
      return <TextAreaField {...rest} />;
    case 'check':
      return <CheckField {...rest} />;
    case 'submit':
      return (
        <Button
          type="submit"
          name={rest.name as string}
          label={rest.title as string}
          disabled={rest.disabled as boolean}
        />
      );
    default:
      return <></>;
  }
};

export default FormField;
