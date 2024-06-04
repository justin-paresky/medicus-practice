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
    <div className="flex flex-col items-center rounded-[200px] bg-blue py-[64px] text-center">
      <div className="flex flex-col items-center gap-4 px-[4] text-center lg:px-[3.3rem]">
        {isFilled.image(icon) && <PrismicNextImage field={icon} />}
        {isFilled.richText(title) && (
          <div className="child:font-serif child:text-[1.25rem] child:font-bold child:text-primary lg:child:line-clamp-2 lg:child:text-[2rem]">
            <PrismicRichText field={title} />
          </div>
        )}
      </div>
      <div className="mx-[60px] my-[60px] box-content h-[1px] w-[50%] bg-primary" />
      {isFilled.richText(description) && (
        <div className="px-6 child:font-sans child:text-[1rem] child:font-normal child:text-primary lg:px-[60px]">
          <PrismicRichText field={description} />
        </div>
      )}
    </div>
  );
}
