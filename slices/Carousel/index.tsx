/* eslint-disable @shopify/jsx-no-complex-expressions */
/* eslint-disable @shopify/jsx-no-hardcoded-content */
/* eslint-disable @shopify/jsx-prefer-fragment-wrappers */
'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { v4 as uuidv4 } from 'uuid';

import css from './style.module.css';

import COLORS from '@/constants/colors';
import Button from '@/components/Button';

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

export default function Carousel({ slice }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = slice.primary.slides;

  const gridTemplate = (): string => {
    let templateString = '';
    slides.forEach((_, idx) => {
      const fr = idx === currentSlide ? '1.3fr' : '1fr';
      if (idx < slides.length - 1) {
        templateString += `${fr} `;
      } else {
        templateString += fr;
      }
    });
    return templateString;
  };

  const handleChangeSlide = (dir: string) => {
    if (dir === 'prev') {
      if (currentSlide === 0) {
        setCurrentSlide(slides.length - 1);
      } else {
        setCurrentSlide((prevState) => prevState - 1);
      }
    } else if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevState) => prevState + 1);
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative px-5 lg:px-[100px]"
    >
      <div
        className="relative block gap-0 px-4 md:grid md:gap-4 md:px-0"
        style={{
          gridTemplateColumns: gridTemplate(),
        }}
      >
        {isFilled.group(slides) && (
          <>
            {slides.map((slide, idx) => {
              const { title, description, icon, listItems, label, link } = slide;
              const isCurrentSlide = idx === currentSlide;
              const buttonBorder = isCurrentSlide
                ? 'border-accent'
                : 'border-primary !text-[0.75rem] !py-[7px] !px-[30px] !h-[2rem] !min-h-[2rem]';
              return (
                <div
                  key={uuidv4()}
                  className={`flex-grow ${isCurrentSlide ? 'text-white bg-primary' : 'my-20 hidden bg-accent text-primary md:flex'} flex flex-col justify-start gap-8 p-8`}
                >
                  {isFilled.image(icon) && (
                    <PrismicNextImage
                      field={icon}
                      className={isCurrentSlide ? 'h-[140px] w-[140px]' : 'h-[120px] w-[120px]'}
                    />
                  )}
                  {isFilled.richText(title) && (
                    <div
                      className={`child:font-serif child:font-bold ${isCurrentSlide ? 'child:text-[2rem]' : 'child:text-[1.625rem]'}`}
                    >
                      <PrismicRichText field={title} />
                    </div>
                  )}
                  {isFilled.richText(description) && (
                    <div
                      className={`child:font-normal ${isCurrentSlide ? 'child:text-[1rem]' : 'child:text-[.75rem]'}`}
                    >
                      <PrismicRichText field={description} />
                    </div>
                  )}
                  {isFilled.richText(listItems) && (
                    <div className={clsx(css.listItems, isCurrentSlide && css.active)}>
                      <PrismicRichText field={listItems} />
                    </div>
                  )}
                  {isFilled.keyText(label) && isFilled.link(link) && (
                    <div>
                      <Button variation="btn-accent" className={buttonBorder} label={label} link={link} />
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
      {isFilled.group(slides) && (
        <div className="mt-[50px] flex flex-row justify-center gap-3 md:hidden">
          {slides.map((_, idx) => {
            const isCurrentSlide = idx === currentSlide;

            return (
              <div
                key={uuidv4()}
                className="h-[8px] w-[8px] rounded-[4px]"
                style={{ backgroundColor: isCurrentSlide ? COLORS.primary.DEFAULT : COLORS.gray.light }}
              />
            );
          })}
        </div>
      )}
      <div className="absolute left-[-10px] top-[100px] flex w-[calc(100%_+_20px)] flex-row justify-between md:hidden">
        <button
          type="button"
          aria-label="previous"
          className={css.mobilePageButton}
          onClick={() => handleChangeSlide('prev')}
        >
          {' '}
        </button>
        <button
          type="button"
          aria-label="next"
          className={clsx(css.mobilePageButton, css.right)}
          onClick={() => handleChangeSlide('next')}
        >
          {' '}
        </button>
      </div>
      <div className="relative mt-[40px] hidden w-full flex-row justify-center gap-3 md:flex">
        <button
          type="button"
          aria-label="previous"
          className={css.pageButton}
          onClick={() => handleChangeSlide('prev')}
        >
          {' '}
        </button>
        <button
          type="button"
          aria-label="next"
          className={clsx(css.pageButton, css.right)}
          onClick={() => handleChangeSlide('next')}
        >
          {' '}
        </button>
      </div>
    </section>
  );
}
