export default function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-[100%] max-w-[100%] md:mx-auto md:w-[1440px] md:max-w-[1440px]">{children}</div>;
}
