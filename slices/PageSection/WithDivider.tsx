import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

import Button from '@/components/Button';

export type WithDividerProps = Content.PageSectionSliceWithDivider;

export default function WithDivider({ primary }: WithDividerProps) {
  const { title, description, divider, dividerPosition, buttons } = primary;

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div
        className={`${isFilled.image(divider) && dividerPosition === 'top' ? 'order-1' : 'order-[-1]'} flex flex-col gap-8`}
      >
        {isFilled.richText(title) && (
          <div className="text-primary">
            <PrismicRichText field={title} />
          </div>
        )}
        {isFilled.richText(description) && (
          <div className="text-primary">
            <PrismicRichText field={description} />
          </div>
        )}
        {isFilled.group(buttons) && (
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
            {buttons.map((button) => {
              const { link, label, variation } = button;

              return <Button key={label as string} link={link} label={label} variation={variation} />;
            })}
          </div>
        )}
      </div>
      {isFilled.image(divider) && <PrismicNextImage field={divider} />}
    </div>
  );
}
