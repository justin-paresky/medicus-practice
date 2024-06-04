import { v4 as uuidv4 } from 'uuid';
import { KeyTextField, BooleanField, RichTextField } from '@prismicio/client';

import Checkbox from '@/components/Checkbox';

interface CheckFieldProps {
  checked?: BooleanField;
  disabled?: BooleanField;
  label?: RichTextField;
  name?: KeyTextField;
  readOnly?: BooleanField;
  required?: BooleanField;
  value?: KeyTextField;
}

export default function CheckField(props: CheckFieldProps) {
  const properties = {
    id: `check-box-${uuidv4()}`,
    defaultChecked: props.checked as boolean,
    disabled: props.disabled as boolean,
    label: props.label,
    name: props.name as string,
    readOnly: props.readOnly as boolean,
    required: props.required as boolean,
    value: props.value as string,
  };

  return <Checkbox {...properties} />;
}
