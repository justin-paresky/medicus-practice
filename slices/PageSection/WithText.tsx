import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

export type WithTextProps = Content.PageSectionSliceWithText;

export default function WithText({ primary }: WithTextProps) {
  const { title, subtitle, description, image, imagePosition, imageRounded } = primary;

  const isImage = isFilled.image(image);
  const isImagePosition = isFilled.select(imagePosition);
  const imageX = isImage && isImagePosition && (imagePosition === 'left' || imagePosition === 'right');
  const containerClassname =
    isImage && imageX
      ? 'grid grid-cols-1 gap-8 lg:grid-cols-2 relative'
      : 'w-full items-center text-center flex flex-col gap-8 relative';

  return (
    <div className="flex w-full flex-col gap-8 text-center">
      <div className={containerClassname}>
        <div
          className={`${imagePosition && (imagePosition === 'left' || imagePosition === 'top') ? 'order-1' : 'order-[-1]'} flex flex-col items-center gap-8`}
        >
          <div className="flex flex-col gap-2">
            {isFilled.richText(title) && <PrismicRichText field={title} />}
            {isFilled.richText(subtitle) && (
              <div className="child:font-hertine">
                <PrismicRichText field={subtitle} />
              </div>
            )}
          </div>
          {isFilled.richText(description) && (
            <div className="max-w-[720px] text-primary">
              <PrismicRichText field={description} />
            </div>
          )}
        </div>
        {isImage && <PrismicNextImage className={`${imageRounded ? 'rounded-[50%]' : ''}`} field={image} />}
      </div>
    </div>
  );
}
