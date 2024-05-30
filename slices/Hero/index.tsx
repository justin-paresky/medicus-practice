import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import Button from '@/components/Button';
import COLORS from '@/constants/colors';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const renderButtons = () => {
    return slice.items.length && isFilled.keyText(slice.items[0]?.label) ? (
      <div className="flex flex-row justify-center gap-3">
        {slice.items.map((button) => {
          return <Button key={button.label} {...button} variation={button.variation || 'btn-secondary'} />;
        })}
      </div>
    ) : null;
  };
  const renderButtonsMobile = () => {
    return slice.items.length && isFilled.keyText(slice.items[0]?.label) ? (
      <div className="flex flex-row justify-center gap-3">
        <Button
          key={slice.items[0].label}
          {...slice.items[0]}
          variation={slice.items[0].variation || 'btn-secondary'}
        />
      </div>
    ) : null;
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat lg:h-[600px] xl:h-[760px]"
      style={{
        backgroundImage:
          isFilled.image(slice.primary.backgroundImage) && slice.variation === 'default'
            ? `url("${slice.primary.backgroundImage.url}")`
            : '',
        backgroundColor: isFilled.color(slice.primary.backgroundColor)
          ? slice.primary.backgroundColor
          : COLORS.primary.DEFAULT,
      }}
    >
      <div className="relative flex h-[100%] w-[100%] flex-col lg:block">
        <div
          className={`${slice.variation === 'heroImageLeft' ? 'clip-hero-mobile lg:clip-hero-left lg:pl-[120px] lg:pr-[75px]' : 'clip-hero-mobile lg:clip-hero lg:pl-[75px] lg:pr-[120px]'} relative flex h-[100%] w-[100%] flex-col justify-center bg-green p-[25px] lg:absolute lg:z-10 lg:w-[70%]`}
          style={{
            right: slice.variation === 'heroImageLeft' ? 0 : 'initial',
            left: slice.variation === 'heroImageRight' ? 0 : 'initial',
          }}
        >
          <div className="flex flex-col justify-items-center gap-5">
            {isFilled.richText(slice.primary.eyebrow) && (
              <div className="text-center font-sans font-semibold uppercase child:text-sm child:text-accent">
                <PrismicRichText field={slice.primary.eyebrow} />
              </div>
            )}
            {isFilled.richText(slice.primary.title) && (
              <div
                className="text-center"
                style={{
                  color: isFilled.color(slice.primary.titleColor) ? slice.primary.titleColor : COLORS.accent.DEFAULT,
                }}
              >
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}
            {isFilled.richText(slice.primary.description) && (
              <div className="w-[100%] text-center text-[20px] font-semibold text-[#ffffff]">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
            <div className="hidden lg:block">{renderButtons()}</div>
            <div className="block lg:hidden">{renderButtonsMobile()}</div>
          </div>
        </div>
        {isFilled.image(slice.primary.backgroundImage) && (
          <PrismicNextImage
            className="relative w-auto lg:absolute lg:h-[100%]"
            style={{
              left: slice.variation === 'heroImageLeft' ? 0 : 'initial',
              right: slice.variation === 'heroImageRight' ? 0 : 'initial',
            }}
            field={slice.primary.backgroundImage}
          />
        )}
      </div>
      {slice.items.length && isFilled.keyText(slice.items[1]?.label) && (
        <div
          key={slice.items[1].label}
          className="absolute bottom-[40px] right-[60px] flex w-full flex-row justify-end lg:hidden"
        >
          <Button {...slice.items[1]} variation="btn-accent" />
        </div>
      )}
    </section>
  );
};

export default Hero;
