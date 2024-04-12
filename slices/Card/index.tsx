'use client';

import { useState } from 'react';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { type Content, isFilled } from '@prismicio/client';

import Button from '@/components/Button';

/**
 * Props for `Card`.
 */
export type CardProps = SliceComponentProps<Content.CardSlice>;

/**
 * Component for "Card" Slices.
 */
const Card = ({ slice }: CardProps) => {
  const [open, setOpen] = useState(false);

  const renderActionArea = () => {
    return isFilled.keyText(slice.primary.readMore) ||
      isFilled.keyText(slice.primary.readMore) ||
      (slice.items.length && slice.items[0]?.label?.length) ? (
      <div className="mt-2 flex min-h-[48px] items-center justify-between">
        {!open && isFilled.keyText(slice.primary.readMore) && (
          <button
            onClick={() => setOpen(true)}
            type="button"
            aria-label={slice.primary.readMore}
            className="font-sans text-primary"
          >
            {slice.primary.readMore}
          </button>
        )}
        {open && isFilled.keyText(slice.primary.readLess) && (
          <button
            onClick={() => setOpen(false)}
            type="button"
            aria-label={slice.primary.readLess}
            className="font-sans text-primary"
          >
            {slice.primary.readLess}
          </button>
        )}
        {slice.items.map((button) => {
          if (button.label) {
            return <Button key={button.label} {...button} variation="btn-accent" />;
          }
        })}
      </div>
    ) : null;
  };

  return (
    <div
      className={`flex flex-col justify-between overflow-hidden rounded bg-[#ffffff] px-6 py-[34px] ${slice.primary.elevated && 'shadow-md'}`}
      style={{ backgroundColor: slice.primary.backgroundColor as string }}
    >
      <div className="text-primary">
        {slice.variation !== 'profileCard' && isFilled.image(slice.primary.icon) && (
          <div className="mb-6">
            <PrismicNextImage className="h-[44px] w-[44px]" field={slice.primary.icon} />
          </div>
        )}
        {slice.variation !== 'profileCard' && isFilled.richText(slice.primary.title) && (
          <PrismicRichText field={slice.primary.title} />
        )}
        {slice.variation === 'profileCard' && (
          <div className="flex items-center">
            {isFilled.image(slice.primary.avatar) && (
              <PrismicNextImage className="mr-[19px] h-[67px] w-[67px] rounded-[40px]" field={slice.primary.avatar} />
            )}
            <div className="flex-col gap-[6px]">
              {isFilled.richText(slice.primary.title) && <PrismicRichText field={slice.primary.title} />}
              <div className="text-lg text-gray">
                {isFilled.richText(slice.primary.subtitle) && <PrismicRichText field={slice.primary.subtitle} />}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="description-area">
        {isFilled.richText(slice.primary.description) && (
          <div className={`mt-[30px] ${open ? 'max-h-[89px] overflow-auto' : 'line-clamp-3'}`}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}
        {renderActionArea()}
      </div>
    </div>
  );
};

export default Card;
