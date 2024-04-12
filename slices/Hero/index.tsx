import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import Button from '@/components/Button';
import COLORS from '@/constants/colors';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const renderButtons = () => {
    return slice.items.length && isFilled.keyText(slice.items[0]?.label) ? (
      <div className="flex flex-row gap-3">
        {slice.items.map((button) => {
          return <Button key={button.label} {...button} variation={button.variation || 'btn-secondary'} />;
        })}
      </div>
    ) : null;
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex h-[740px] flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          isFilled.image(slice.primary.backgroundImage) && slice.variation === 'default'
            ? `url("${slice.primary.backgroundImage.url}")`
            : '',
        backgroundColor: isFilled.color(slice.primary.backgroundColor)
          ? slice.primary.backgroundColor
          : COLORS.primary.dark,
      }}
    >
      <div className="relative h-[100%] w-[100%]">
        <div
          className={`flex ${slice.variation === 'heroImageRight' ? 'flex-row-reverse' : 'flex-row'} h-[100%] w-[100%]`}
        >
          {isFilled.image(slice.primary.backgroundImage) && slice.variation !== 'default' && (
            <PrismicNextImage className="h-[100%]" field={slice.primary.backgroundImage} />
          )}
          <div className="flex h-[100%] flex-col justify-center px-[100px]">
            <div className="flex flex-col gap-5">
              {isFilled.richText(slice.primary.title) && (
                <div
                  className="max-w-[780px] text-accent"
                  style={{
                    color: isFilled.color(slice.primary.titleColor) ? slice.primary.titleColor : COLORS.accent.DEFAULT,
                  }}
                >
                  <PrismicRichText field={slice.primary.title} />
                </div>
              )}
              {isFilled.richText(slice.primary.description) && (
                <div className="text-[20px] font-semibold text-[#ffffff]">
                  <PrismicRichText field={slice.primary.description} />
                </div>
              )}
              {renderButtons()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
