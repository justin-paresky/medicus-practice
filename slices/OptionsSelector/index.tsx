import React from 'react';
import clsx from 'clsx';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { v4 as uuidv4 } from 'uuid';

import css from './style.module.css';

import ResponsiveContainer from '@/components/ResponsiveContainer';

/**
 * Props for `OptionsSelector`.
 */
export type OptionsSelectorProps = SliceComponentProps<Content.OptionsSelectorSlice>;

/**
 * Component for "OptionsSelector" Slices.
 */
const OptionsSelector = ({ slice }: OptionsSelectorProps): JSX.Element => {
  const {
    primary: { options, fullWidth },
    slice_type,
    variation,
  } = slice;

  return (
    <section data-slice-type={slice_type} data-slice-variation={variation}>
      <ResponsiveContainer fullWidth={fullWidth}>
        <div className="relative mx-4 lg:mx-0">
          <div className="clip-hero-small xl:clip-hero absolute left-0 top-0 hidden h-[100%] w-[50%] bg-primary lg:block xl:w-[55%]" />
          <div className="absolute right-0 z-[-1] hidden h-[100%] w-[calc(50%_+_150px)] bg-gray lg:block" />
          <div className="join join-vertical w-full border border-primary lg:hidden">
            {options.map((option, idx) => {
              const { icon, label, items } = option;

              return (
                <div key={uuidv4()} className={clsx('collapse join-item collapse-plus', css.optionCollapse)}>
                  <input
                    defaultChecked={idx === 0}
                    aria-labelledby={label}
                    type="radio"
                    name="options-selector-collapse"
                  />
                  <div className="collapse-title flex cursor-pointer flex-row items-center gap-5 bg-primary font-serif text-[20px] font-semibold text-white">
                    {isFilled.image(icon) && <PrismicNextImage field={icon} className="child:text-white" />}
                    {isFilled.keyText(label) && <div id={label}>{label}</div>}
                  </div>
                  <div className={clsx('collapse-content bg-gray', css.optionsCollapse)}>
                    <div className="pb-2 pt-6">{items && <PrismicRichText field={items} />}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative hidden flex-row justify-start py-0 pl-0 pr-0 lg:flex lg:py-6 lg:pl-[25px] lg:pr-[60px] xl:py-12 xl:pl-[75px] xl:pr-[120px]">
            <div className="flex flex-col">
              {options.map((option, idx) => {
                const { icon, label, items } = option;

                return (
                  <React.Fragment key={uuidv4()}>
                    <div
                      className={clsx('relative bg-primary px-4 py-8 lg:bg-transparent lg:px-0 lg:py-0', css.option)}
                    >
                      <input
                        defaultChecked={idx === 0}
                        aria-labelledby={label}
                        type="radio"
                        name="options-selector"
                        className="absolute z-10 col-start-1 row-start-1 h-[100%] w-[100%] cursor-pointer appearance-none opacity-0"
                      />
                      <div className="flex flex-row items-center gap-5 border-b-[1px] border-white py-4 font-serif text-[20px] font-semibold text-white xl:text-[28px]">
                        {isFilled.image(icon) && <PrismicNextImage field={icon} className="child:text-white" />}
                        {isFilled.keyText(label) && <div id={label}>{label}</div>}
                      </div>
                    </div>
                    <div
                      className={clsx(
                        'absolute right-0 top-0 flex h-[100%] w-[50%] flex-grow flex-col justify-center px-[75px] font-sans text-[1rem] text-primary',
                        css.options
                      )}
                    >
                      {items && <PrismicRichText field={items} />}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default OptionsSelector;
