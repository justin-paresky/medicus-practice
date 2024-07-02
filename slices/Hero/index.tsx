import { type Content, isFilled } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

import COLORS from '@/constants/colors';
import Button from '@/components/Button';
import ResponsiveContainer from '@/components/ResponsiveContainer';

const CONTAINER_COLOR = {
  primary: COLORS.primary.DEFAULT,
  secondary: COLORS.secondary.DEFAULT,
  accent: COLORS.accent.DEFAULT,
  gray: COLORS.gray.DEFAULT,
};

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const {
    primary: { title, eyebrow, description, subDescription, containerColor, backgroundImage, textAlign, fullWidth },
    items,
    slice_type,
    variation,
  } = slice;

  const renderButtons = () => {
    return items.length && isFilled.keyText(items[0]?.label) ? (
      <div className="flex flex-row justify-center gap-3">
        {items.map((button) => {
          return <Button key={uuidv4()} {...button} variation={button.variation || 'btn-secondary'} />;
        })}
      </div>
    ) : null;
  };

  const renderButtonsMobile = () => {
    return items.length && isFilled.keyText(items[0]?.label) ? (
      <div className="flex flex-row justify-center gap-3">
        <Button {...items[0]} variation={items[0].variation || 'btn-secondary'} />
      </div>
    ) : null;
  };

  let alignment = 'items-center justify-center text-center';

  switch (textAlign) {
    case 'left':
      alignment = 'items-center justify-center text-left';
      break;
    case 'center':
      alignment = 'items-center justify-center text-center';
      break;
    case 'right':
      alignment = 'items-center justify-center text-right';
      break;
    default:
      break;
  }

  return (
    <section data-slice-type={slice_type} data-slice-variation={variation}>
      <ResponsiveContainer
        fullWidth={fullWidth}
        className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat lg:h-[600px] xl:h-[760px]"
      >
        <div
          className={`${alignment} relative left-0 top-0 flex h-[100%] w-full flex-col gap-6 bg-primary px-6 py-12 lg:absolute lg:w-[calc(50%_-_50px)] lg:pl-[50px]`}
          style={{
            backgroundColor: CONTAINER_COLOR[containerColor || 'primary'],
          }}
        >
          <div className="absolute right-[-204px] top-0 hidden h-full w-[204px] lg:block">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,0 C66,33 66,66 0,100" fill={CONTAINER_COLOR[containerColor || 'primary']} />
            </svg>
          </div>
          <div className="absolute left-0 top-[100%] block h-24 w-full lg:hidden">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,0 C33,66 66,66 100,0" fill={CONTAINER_COLOR[containerColor || 'primary']} />
            </svg>
          </div>
          <div className="flex max-w-full flex-col gap-6 lg:max-w-[560px]">
            {isFilled.richText(eyebrow) && (
              <div
                className={`font-sans font-semibold uppercase child:text-sm child:text-accent ${containerColor === 'accent' || containerColor === 'gray' ? 'child:text-primary' : 'child:text-gray'}`}
              >
                <PrismicRichText field={eyebrow} />
              </div>
            )}
            {isFilled.richText(title) && (
              <div
                className={`max-w-full child:text-[2.5rem] md:child:text-[3rem] lg:max-w-[560px] lg:child:text-[4rem] ${containerColor === 'accent' || containerColor === 'gray' ? 'child:text-primary' : 'child:text-white'}`}
              >
                <PrismicRichText field={title} />
              </div>
            )}
            {isFilled.richText(description) && (
              <div
                className={`w-full font-semibold child:text-lg lg:child:text-xl ${containerColor === 'accent' || containerColor === 'gray' ? 'child:text-primary' : 'child:text-white'}`}
              >
                <PrismicRichText field={description} />
              </div>
            )}
            {isFilled.richText(subDescription) && (
              <div
                className={`w-full font-semibold child:text-lg lg:child:text-xl ${containerColor === 'accent' || containerColor === 'gray' ? 'child:text-primary' : 'child:text-white'}`}
              >
                <PrismicRichText field={subDescription} />
              </div>
            )}
            <div className="hidden lg:block">{renderButtons()}</div>
            <div className="block lg:hidden">{renderButtonsMobile()}</div>
          </div>
        </div>
        <div
          className="relative right-0 z-[-1] block h-[512px] w-full bg-gray bg-cover bg-center bg-no-repeat lg:absolute lg:block lg:h-[100%] lg:w-[calc(50%_+_150px)]"
          style={{
            backgroundImage: isFilled.image(backgroundImage) ? `url("${backgroundImage.url}")` : undefined,
          }}
        />
      </ResponsiveContainer>
    </section>
  );
};

export default Hero;
