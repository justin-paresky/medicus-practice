import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

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
            <div key={uuidv4()} className={`${hasCaption && 'flex w-[100%] flex-row items-start justify-between'}`}>
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

  const renderImage = () => {
    return isFilled.image(image) && <PrismicNextImage className="h-auto w-[100%]" field={image} />;
  };

  return (
    <div className="flex flex-col items-center gap-16 lg:flex-row">
      {variation !== 'imageRight' && renderImage()}
      <div className="flex flex-grow flex-col gap-16 text-center lg:text-left">
        <div className="child:text-[2rem] child:font-semibold child:text-primary lg:child:text-[3rem]">
          {isFilled.richText(title) && <PrismicRichText field={title} />}
        </div>
        {isFilled.richText(description) && (
          <div style={{ color: descriptionColor || undefined }}>
            <PrismicRichText field={description} />
          </div>
        )}
        {renderButtons()}
      </div>
      {variation === 'imageRight' && renderImage()}
    </div>
  );
}
