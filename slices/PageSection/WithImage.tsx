import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

import Button from '@/components/Button';

export type WithImageProps =
  | Content.PageSectionSliceDefault
  | Content.PageSectionSliceImageRight
  | Content.PageSectionSliceLargeImage;

export default function WithImage({ primary, items, variation }: WithImageProps) {
  const { image, title, description, descriptionColor } = primary;

  const renderButtons = () => {
    return items.length && isFilled.keyText(items[0].label) ? (
      <div className="flex flex-row gap-5">
        {items.map((button) => {
          const hasCaption = isFilled.richText(button.buttonCaption);
          return (
            <div key={button.label} className={`${hasCaption && 'flex w-[100%] flex-row items-start justify-between'}`}>
              {isFilled.richText(button.buttonCaption) && (
                <div
                  style={{ color: isFilled.color(button.captionColor) ? (button.captionColor as string) : 'inherit' }}
                >
                  <PrismicRichText field={button.buttonCaption} />
                </div>
              )}
              <div className={`${hasCaption && 'mt-3'} inline-flex`}>
                <Button
                  {...button}
                  backgroundColor={isFilled.color(button.buttonColor) && (button.buttonColor as string)}
                />
              </div>
            </div>
          );
        })}
      </div>
    ) : null;
  };

  const renderImage = (isDesktop?: boolean) => {
    return (
      isFilled.image(image) && (
        <PrismicNextImage
          className={`${variation === 'largeImage' ? 'sm:h-[480px]' : `sm:h-[316px]`} h-auto w-[100%] rounded sm:w-[480px] ${isDesktop ? 'hidden sm:block' : 'block sm:hidden'}`}
          field={image}
        />
      )
    );
  };

  return (
    <>
      {variation !== 'imageRight' && renderImage(true)}
      <div className="flex flex-grow flex-col gap-6">
        <div className="text-[48px] font-semibold text-primary">
          {isFilled.richText(title) && <PrismicRichText field={title} />}
        </div>
        {renderImage()}
        {isFilled.richText(description) && (
          <div style={{ color: descriptionColor || undefined }}>
            <PrismicRichText field={description} />
          </div>
        )}
        {renderButtons()}
      </div>
      {variation === 'imageRight' && renderImage(true)}
    </>
  );
}
