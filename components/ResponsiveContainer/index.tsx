export default function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-[100%] flex-col justify-start gap-6 md:max-w-[1440px] md:gap-16">{children}</div>
  );
}
