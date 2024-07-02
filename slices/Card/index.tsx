'use client';

import { useState } from 'react';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { type Content, isFilled } from '@prismicio/client';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/Button';

/**
 * Props for `Card`.
 */
export type CardProps = SliceComponentProps<Content.CardSlice>;

/**
 * Component for "Card" Slices.
 */
const Card = ({ slice }: CardProps) => {
  const {
    items,
    primary: { backgroundColor, readMore, readLess, elevated, title, description },
    variation,
  } = slice;
  const [open, setOpen] = useState(false);

  const renderActionArea = () => {
    return isFilled.keyText(readMore) || isFilled.keyText(readMore) || (items.length && items[0]?.label?.length) ? (
      <div className="mt-2 flex min-h-[48px] items-center justify-between">
        {!open && isFilled.keyText(readMore) && (
          <button onClick={() => setOpen(true)} type="button" aria-label={readMore} className="font-sans text-primary">
            {readMore}
          </button>
        )}
        {open && isFilled.keyText(readLess) && (
          <button onClick={() => setOpen(false)} type="button" aria-label={readLess} className="font-sans text-primary">
            {readLess}
          </button>
        )}
        {items.map((button) => {
          if (button.label) {
            return <Button key={uuidv4()} {...button} variation="btn-accent" />;
          }
        })}
      </div>
    ) : null;
  };

  return (
    <div
      className={`flex flex-col justify-between overflow-hidden rounded bg-white px-6 py-[34px] ${elevated && 'shadow-md'}`}
      style={{ backgroundColor: backgroundColor as string }}
    >
      <div className="text-primary">
        {variation !== 'profileCard' && isFilled.image(slice.primary.icon) && (
          <div className="mb-6">
            <PrismicNextImage className="h-[44px] w-[44px]" field={slice.primary.icon} />
          </div>
        )}
        {variation !== 'profileCard' && isFilled.richText(title) && <PrismicRichText field={title} />}
        {variation === 'profileCard' && (
          <div className="flex items-center">
            {isFilled.image(slice.primary.avatar) && (
              <PrismicNextImage className="mr-[19px] h-[67px] w-[67px] rounded-[40px]" field={slice.primary.avatar} />
            )}
            <div className="flex-col gap-[6px]">
              {isFilled.richText(title) && <PrismicRichText field={title} />}
              <div className="text-lg text-gray">
                {isFilled.richText(slice.primary.subtitle) && <PrismicRichText field={slice.primary.subtitle} />}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="description-area">
        {isFilled.richText(description) && (
          <div className={`mt-[30px] ${open ? 'max-h-[89px] overflow-auto' : 'line-clamp-3'}`}>
            <PrismicRichText field={description} />
          </div>
        )}
        {renderActionArea()}
      </div>
    </div>
  );
};

export default Card;
