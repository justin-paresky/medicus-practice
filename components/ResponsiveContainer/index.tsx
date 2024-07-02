import clsx from 'clsx';

export default function ResponsiveContainer({
  className,
  children,
  fullWidth = false,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={clsx(`mx-auto max-w-full ${fullWidth ? 'md:max-w-full' : 'md:max-w-[1440px]'}`, className)}
    >
      {children}
    </div>
  );
}
