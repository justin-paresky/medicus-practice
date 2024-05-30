'use client';

import { useEffect, useState, Children } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CarouselProps {
  children: React.ReactNode;
  currentSlide?: number;
}

export default function Carousel({ children, currentSlide: _currentSlide }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(_currentSlide || 0);

  useEffect(() => {
    if (_currentSlide !== undefined) {
      setCurrentSlide(_currentSlide);
    }
  }, [_currentSlide]);

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {Children.toArray(children).map((child, idx) => {
        return (
          <div key={uuidv4()} className={`flex-grow ${idx === currentSlide ? 'bg-green' : 'bg-green-light'}`}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
