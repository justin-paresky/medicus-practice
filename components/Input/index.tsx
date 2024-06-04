import { FieldError } from 'react-hook-form';

interface InputProps {
  error?: FieldError;
  icon?: React.ReactElement;
  id: string;
  title?: string;
  children: React.ReactNode;
}

export default function Input({ error, icon, id, title, children }: InputProps) {
  return (
    <div className="form-control w-full">
      <div
        className={`input input-bordered relative flex flex-row items-center gap-2 py-0 ${error ? 'input-error' : ''}`}
      >
        {icon}
        {title && (
          <div className={`input-title absolute top-0 font-sans text-[10px] ${icon && 'left-11'}`} id={id}>
            {title}
          </div>
        )}
        <div className={`input-container absolute top-0 flex h-[100%] w-[calc(100%-3rem)] ${icon && 'left-11'}`}>
          {children}
        </div>
      </div>
      {error?.message && (
        <div className="label">
          <span className="label-text-alt text-red">{error.message}</span>
        </div>
      )}
    </div>
  );
}
