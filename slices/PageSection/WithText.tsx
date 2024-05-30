import { type Content, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

export type WithTextProps = Content.PageSectionSliceWithText;

export default function WithText({ primary }: WithTextProps) {
  const { title, subtitle, description } = primary;

  return (
    <div className="flex flex-col gap-8 text-center">
      {isFilled.richText(title) && (
        <div className="text-primary">
          <PrismicRichText field={title} />
        </div>
      )}
      {isFilled.richText(subtitle) && (
        <div className="child:font-hertine text-primary child:text-[3rem] child:font-medium child:leading-[5rem]">
          <PrismicRichText field={subtitle} />
        </div>
      )}
      {isFilled.richText(subtitle) && (
        <div className="text-primary">
          <PrismicRichText field={description} />
        </div>
      )}
    </div>
  );
}
