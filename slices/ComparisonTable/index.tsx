import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

/**
 * Props for `ComparisonTable`.
 */
export type ComparisonTableProps = SliceComponentProps<Content.ComparisonTableSlice>;

/**
 * Component for "ComparisonTable" Slices.
 */
const ComparisonTable = ({ slice }: ComparisonTableProps): JSX.Element => {
  const {
    primary: { title, subtitle, description, columns },
  } = slice;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-16 bg-blue px-5 lg:px-[80px]"
    >
      <div className="flex flex-col gap-2 text-center child:text-primary md:text-left">
        {isFilled.richText(title) && (
          <div className="child:font-serif child:text-[3.5rem] child:font-semibold">
            <PrismicRichText field={title} />
          </div>
        )}
        {isFilled.richText(subtitle) && (
          <div className="child:font-hertine child:text-5xl child:font-normal">
            <PrismicRichText field={subtitle} />
          </div>
        )}
        <div className="flex flex-col pt-6 align-bottom child:text-primary md:hidden">
          {isFilled.richText(description) && <PrismicRichText field={description} />}
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-4 md:grid-rows-1">
        <div className="hidden flex-col justify-end py-6 pr-8 child:text-[1.125rem] child:text-primary md:flex md:min-w-[350px]">
          {isFilled.richText(description) && <PrismicRichText field={description} />}
        </div>
        {isFilled.group(columns) &&
          columns.map((column) => {
            const { number, title, icon, description } = column;
            return (
              <div
                key={uuidv4()}
                className="md:items-left flex flex-col items-center justify-between border-l-0 border-t-[1px] border-primary px-8 py-6 text-center text-primary md:border-l-[1px] md:border-t-0 md:text-left"
              >
                <div className="flex w-full flex-col gap-2 pb-[56px] md:pb-[150px]">
                  {isFilled.keyText(number) && <div className="font-hertine text-[2rem]">{number}</div>}
                  {isFilled.keyText(title) && <div className="font-sans text-2xl uppercase">{title}</div>}
                </div>
                <div className="md:items-left flex w-full flex-col items-center gap-6 child:text-[1.125rem]">
                  {isFilled.image(icon) && <PrismicNextImage className="h-[40px] w-[40px]" field={icon} />}
                  {isFilled.richText(description) && <PrismicRichText field={description} />}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ComparisonTable;
