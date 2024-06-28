interface PageSectionContainerProps {
  children: React.ReactNode;
  backgroundColor: string | undefined;
  backgroundImage: string | undefined;
}

export default function PageSectionContainer({
  children,
  backgroundColor,
  backgroundImage,
  ...rest
}: PageSectionContainerProps) {
  return (
    <section
      className={`bg-white flex flex-col gap-[25px] bg-cover bg-no-repeat px-5 md:flex-row md:gap-[50px] lg:px-[100px] ${backgroundColor || backgroundImage ? 'py-12 lg:py-[100px]' : ''}`}
      style={{ backgroundColor, backgroundImage }}
      {...rest}
    >
      {children}
    </section>
  );
}
