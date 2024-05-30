import { KeyTextField, NumberField, BooleanField, SelectField } from '@prismicio/client';

import TextArea from '@/components/TextArea';

interface TextAreaFieldProps {
  title?: KeyTextField;
  autoFocus?: BooleanField;
  cols?: NumberField;
  rows?: NumberField;
  placeholder?: KeyTextField;
  name: KeyTextField;
  disabled?: BooleanField;
  maxLength?: NumberField;
  required?: BooleanField;
  readOnly?: BooleanField;
  wrap?: SelectField;
}

export default function TextAreaField(props: TextAreaFieldProps) {
  const properties = {
    title: props.title as string,
    autoFocus: props.autoFocus as boolean,
    cols: props.cols as number,
    rows: props.rows as number,
    placeholder: props.placeholder as string,
    name: props.name as string,
    disabled: props.disabled as boolean,
    maxLength: props.maxLength as number,
    required: props.required as boolean,
    readOnly: props.readOnly as boolean,
    wrap: props.wrap as 'soft' | 'hard',
    onChange: () => null,
  };
  const id = `text-area-${properties.name}`;
  return <TextArea id={id} {...properties} />;
}
