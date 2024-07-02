import ResponsiveContainer from '../ResponsiveContainer';

interface PageSectionContainerProps {
  children: React.ReactNode;
  backgroundColor: string | undefined;
  backgroundImage: string | undefined;
  fullWidth?: boolean | undefined;
}

export default function PageSectionContainer({
  children,
  backgroundColor,
  backgroundImage,
  fullWidth = false,
  ...rest
}: PageSectionContainerProps) {
  return (
    <section
      className={`flex flex-col gap-[25px] bg-white bg-cover bg-no-repeat px-4 md:flex-row md:gap-[50px] lg:px-24 ${backgroundColor || backgroundImage ? 'py-12 lg:py-24' : ''}`}
      style={{ backgroundColor, backgroundImage }}
      {...rest}
    >
      <ResponsiveContainer fullWidth={fullWidth}>{children}</ResponsiveContainer>
    </section>
  );
}
