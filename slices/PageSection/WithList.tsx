import { type Content, isFilled, asText } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

export type WithListProps = Content.PageSectionSliceWithList;

export default function WithList({ primary, items }: WithListProps) {
  const { title, description } = primary;
  return (
    <div className="flex flex-col gap-6">
      {isFilled.richText(title) && (
        <div className="text-primary">
          <PrismicRichText field={title} />
        </div>
      )}
      {isFilled.richText(description) && <PrismicRichText field={description} />}
      {items.length && isFilled.richText(items[0].label) && (
        <div className="text-primary">
          {items.map((item) => {
            return (
              <div key={asText(item.label)} className="flex flex-row">
                {isFilled.image(item.icon) && (
                  <PrismicNextImage className="mr-1 mt-2 h-[16px] w-[18px]" field={item.icon} />
                )}
                {isFilled.richText(item.label) && <PrismicRichText field={item.label} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
