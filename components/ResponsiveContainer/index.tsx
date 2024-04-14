export default function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[100%] md:max-w-[1440px]">{children}</div>;
}
