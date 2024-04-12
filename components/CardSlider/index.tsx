'use client';

import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import css from './style.module.css';

import { type CardSliderDocumentData } from '@/prismicio-types';
import Card from '@/slices/Card';
import useMediaQuery from '@/hooks/mediaQuery';

interface CardSliderProps extends CardSliderDocumentData {
  gutterWidth?: number;
  numberToDisplay?: number;
  previewWidth?: number;
}

export default function CardSlider({
  slices,
  gutterWidth = 20,
  numberToDisplay: _numberToDisplay = 3,
  previewWidth = 0,
}: CardSliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [cardContainerWidth, setCardContainerWidth] = useState(0);
  const containerRef = useRef<HTMLInputElement>(null);
  const cardsContainerRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (containerRef.current) {
      const numberToDisplay = isMobile ? 1 : _numberToDisplay;

      // Bounding box of the main container element
      const containerBox = containerRef.current.getBoundingClientRect();

      // if we're showing a preview of the next card to the right
      // we need to account for the gutter to the right of the last
      // fully displayed card. Otherwise we only factor in the gutters
      // between the fully displayed cards
      const gutterDiff = previewWidth ? gutterWidth * numberToDisplay : gutterWidth * (numberToDisplay - 1);

      // remove the sum of the displayed gutters width and the width of the card to preview
      const cardContainerWidth = (containerBox.width - previewWidth - gutterDiff) / numberToDisplay;

      setCardContainerWidth(cardContainerWidth);
    }
  }, [containerRef, previewWidth, gutterWidth, isMobile, _numberToDisplay]);

  const handleOnBack = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleOnForward = () => {
    if (slideIndex < slices.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div ref={containerRef} className={css.container}>
        <div
          ref={cardsContainerRef}
          className={css.cardsContainer}
          style={{ transform: `translate(${-(slideIndex * (cardContainerWidth + gutterWidth))}px, 0)` }}
        >
          {cardContainerWidth &&
            slices.map((card, idx) => {
              return (
                <div
                  key={card.id}
                  className={css.cardContainer}
                  style={{ width: cardContainerWidth, marginRight: idx === slices.length - 1 ? 0 : gutterWidth }}
                >
                  <Card slice={{ ...card }} index={0} slices={[]} context={{}} />
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-6 flex w-[100%] flex-row justify-center">
        <div className="flex flex-row gap-3">
          <button type="button" onClick={handleOnBack} className={clsx(css.button, css.left)}>
            {' '}
          </button>
          <button type="button" onClick={handleOnForward} className={clsx(css.button, css.right)}>
            {' '}
          </button>
        </div>
      </div>
    </div>
  );
}
