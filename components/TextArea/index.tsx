interface TextAreaProps {
  id: string;
  title?: string;
  autoFocus?: boolean;
  cols?: number;
  row?: number;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  maxLength?: number;
  required?: boolean;
  readOnly?: boolean;
  wrap?: 'hard' | 'soft';
  onChange: () => void;
}

export default function TextArea({ id, title, onChange, ...rest }: TextAreaProps) {
  return (
    <label htmlFor={id} className="input input-bordered relative flex h-24 flex-row items-center gap-2 py-0">
      <div className="input-title absolute top-0 font-sans text-[10px]">{title}</div>
      <div className="input-container absolute top-0 flex h-[100%] w-[calc(100%-1rem)]">
        <textarea
          onChange={onChange}
          aria-labelledby={id}
          className="h-[100%] w-[100%] bg-transparent outline-none"
          {...rest}
        />
      </div>
    </label>
  );
}
