import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

import ResponsiveContainer from '@/components/ResponsiveContainer';

/**
 * Props for `ColumnText`.
 */
export type ColumnTextProps = SliceComponentProps<Content.ColumnTextSlice>;

/**
 * Component for "ColumnText" Slices.
 */
const ColumnText = ({ slice }: ColumnTextProps): JSX.Element => {
  const {
    primary: { numberOfColumns: _numberOfColumns, columns, fullWidth },
    slice_type,
    variation,
  } = slice;

  const numberOfColumns = (isFilled.number(_numberOfColumns) && _numberOfColumns) || 1;
  const isColumns = columns.length;

  if (!isColumns) {
    return <></>;
  }
  return (
    <section data-slice-type={slice_type} data-slice-variation={variation}>
      <ResponsiveContainer
        fullWidth={fullWidth}
        style={
          {
            '--columnsLarge': `repeat(${numberOfColumns}, minmax(0, 1fr))`,
            '--columnsMedium': `repeat(${numberOfColumns % 2 === 0 ? numberOfColumns / 2 : Math.ceil(numberOfColumns / 2)}, minmax(0, 1fr))`,
            '--columnsSmall': `repeat(${columns.length}, minmax(0, 1fr))`,
          } as React.CSSProperties
        }
        className="grid grid-cols-1 grid-rows-[var(--columnsSmall)] gap-[72px] px-4 md:grid-cols-[var(--columnsMedium)] md:grid-rows-2 lg:grid-cols-[var(--columnsLarge)] lg:grid-rows-1 lg:px-24"
      >
        {columns.map((column) => {
          const { icon, title, description } = column;
          return (
            <div key={uuidv4()} className="flex flex-col items-center gap-4 text-center text-primary">
              {isFilled.image(icon) && <PrismicNextImage field={icon} />}
              {isFilled.richText(title) && <PrismicRichText field={title} />}
              {isFilled.richText(description) && <PrismicRichText field={description} />}
            </div>
          );
        })}
      </ResponsiveContainer>
    </section>
  );
};

export default ColumnText;
