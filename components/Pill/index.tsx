import { isFilled, RichTextField, ImageField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

interface PillProps {
  icon: ImageField;
  title: RichTextField;
  description: RichTextField;
}

export default function Pill({ icon, title, description }: PillProps) {
  return (
    <div className="grid grid-cols-[1fr_1px_1fr] items-center rounded-[200px] bg-blue px-6 py-8 text-center lg:flex lg:flex-col lg:px-0 lg:py-16">
      <div className="flex flex-col items-center gap-4 px-4 text-center lg:px-[3.3rem]">
        {isFilled.image(icon) && <PrismicNextImage field={icon} />}
        {isFilled.richText(title) && (
          <div className="child:font-serif child:text-xl child:font-bold child:text-primary lg:child:line-clamp-2 lg:child:text-[2rem]">
            <PrismicRichText field={title} />
          </div>
        )}
      </div>
      <div className="mx-0 my-0 box-content h-full w-[1px] bg-primary lg:mx-[60px] lg:my-[60px] lg:block lg:h-[1px] lg:w-[50%]" />
      {isFilled.richText(description) && (
        <div className="px-6 child:font-sans child:text-[1rem] child:font-normal child:text-primary lg:px-[60px]">
          <PrismicRichText field={description} />
        </div>
      )}
    </div>
  );
}
