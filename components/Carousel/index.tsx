/* eslint-disable no-unused-vars */
'use client';

import { useEffect, useState, useRef, Children } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CarouselProps {
  children: React.ReactNode;
  currentSlide?: number;
  gapDistance?: number;
  onSelect?: (currentSlide: number) => void;
}

export default function Carousel({ children, currentSlide: _currentSlide, onSelect, gapDistance = 16 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(_currentSlide || 0);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (_currentSlide !== undefined) {
      setCurrentSlide(_currentSlide);
    }

    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, [_currentSlide, containerRef]);

  const handleSelectSlide = (idx: number) => {
    setCurrentSlide(idx);
    if (onSelect) {
      onSelect(idx);
    }
  };

  const slideWidth = containerWidth && containerWidth * 0.75;

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {slideWidth && (
        <>
          <div className="invisible relative top-6 flex flex-row justify-center">
            {Children.toArray(children).map((child, idx) => {
              const isSelected = idx === currentSlide;
              return (
                <div className="my-16" key={uuidv4()}>
                  {child}
                </div>
              );
            })}
          </div>
          <div
            className="absolute top-6 flex flex-row justify-center transition-all duration-300 ease-in-out"
            style={{
              gap: gapDistance,
              left: -(currentSlide * (slideWidth + gapDistance)) + slideWidth / 5 - gapDistance,
            }}
          >
            {Children.toArray(children).map((child, idx) => {
              const isSelected = idx === currentSlide;
              return (
                <button
                  onClick={() => handleSelectSlide(idx)}
                  type="button"
                  key={uuidv4()}
                  className={`border-0 ${isSelected ? 'my-0' : 'my-16'}`}
                  style={{ width: slideWidth }}
                >
                  {child}
                </button>
              );
            })}
          </div>
        </>
      )}
      <div className="bg-white flex flex-col pt-6">
        <div className="mt-[50px] flex flex-row justify-center gap-3">
          {Children.toArray(children).map((_, idx) => {
            return (
              <div
                key={uuidv4()}
                className={`h-2 w-2 rounded-[4px] ${currentSlide === idx ? 'bg-primary' : 'bg-gray-light'}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
