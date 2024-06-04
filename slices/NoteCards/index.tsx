/* eslint-disable @shopify/jsx-no-hardcoded-content */
'use client';

import { Content, isFilled } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

import css from './style.module.css';

/**
 * Props for `NoteCards`.
 */
export type NoteCardsProps = SliceComponentProps<Content.NoteCardsSlice>;

/**
 * Component for "NoteCards" Slices.
 */
const NoteCards = ({ slice }: NoteCardsProps): JSX.Element => {
  const {
    primary: { title, subtitle, description, cards },
  } = slice;

  if (!isFilled.group(cards)) {
    return <></>;
  }

  const handleSkip = () => {
    const skipAnchor = document.getElementById('skip_to_end');
    skipAnchor?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mb-[96px] grid grid-cols-1 grid-rows-1 px-5 pt-12 md:grid-cols-12 md:grid-rows-1 lg:px-[100px] lg:pt-[100px]"
    >
      <div className="flex flex-col gap-6 pb-12 text-center child:text-primary md:col-span-5 md:pb-0 md:pr-6 md:text-left">
        <div className="relative top-0 flex flex-col gap-6 md:sticky md:top-[192px]">
          {isFilled.richText(title) && (
            <div className="child:font-serif child:text-[3.5rem] child:font-semibold child:leading-none child:text-primary">
              <PrismicRichText field={title} />
            </div>
          )}
          {isFilled.richText(subtitle) && (
            <div className="child:font-hertine child:text-3xl child:font-normal child:text-primary">
              <PrismicRichText field={subtitle} />
            </div>
          )}
          {isFilled.richText(description) && <PrismicRichText field={description} />}
          <div className="col-span-1 flex flex-col items-center justify-start md:hidden">
            <button type="button" className={css.skip} onClick={handleSkip}>
              skip
            </button>
          </div>
        </div>
      </div>
      <div className="relative col-span-6 grid grid-cols-[1fr]">
        {isFilled.group(cards) &&
          cards.map((card, idx) => {
            const { title, steps } = card;
            const rotateVar = Math.floor(Math.random() * 10) + 1;
            const positiveOrNegative = Math.floor(Number(Math.random()));
            const rotateDeg = positiveOrNegative ? rotateVar : -rotateVar;
            return (
              <div
                key={title}
                className={css.card}
                style={{
                  transform: `rotate(${rotateDeg}deg)`,
                  zIndex: idx,
                  position: 'sticky',
                }}
              >
                <div className="p-12">
                  <div className="pb-6 font-sans text-2xl text-[#2f3735]">{title}</div>
                  <PrismicRichText field={steps} />
                </div>
              </div>
            );
          })}
        <div id="skip_to_end" />
      </div>
      <div className="col-span-1 hidden flex-col items-end justify-start md:flex">
        <button type="button" className={css.skip} onClick={handleSkip}>
          skip
        </button>
      </div>
    </section>
  );
};

export default NoteCards;
