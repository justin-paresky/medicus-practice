'use client';

import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';

import ResponsiveContainer from '../ResponsiveContainer';

import css from './style.module.css';

interface FloatingButtonsProps {
  children: React.ReactNode;
  offset?: number;
}

export default function FloatingButtons({ children, offset = 0 }: FloatingButtonsProps) {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY >= offset) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [ref, offset]);

  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <div
        ref={ref}
        className={clsx(
          'sticky top-[calc(100vh_-_80px)] z-[-1] opacity-0 transition-opacity duration-500 ease-in-out',
          scrolled && css.scrolled
        )}
      >
        <ResponsiveContainer>
          <div className="flex w-full flex-row justify-end gap-2">{children}</div>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
