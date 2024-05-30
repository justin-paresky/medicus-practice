interface InputProps {
  icon?: React.ReactElement;
  id: string;
  title?: string;
  children: React.ReactNode;
}

export default function Input({ icon, id, title, children }: InputProps) {
  return (
    <div className="input input-bordered relative flex flex-row items-center gap-2 py-0">
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
  );
}
