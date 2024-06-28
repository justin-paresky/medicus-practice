import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ColumnText`.
 */
export type ColumnTextProps = SliceComponentProps<Content.ColumnTextSlice>;

/**
 * Component for "ColumnText" Slices.
 */
const ColumnText = ({ slice }: ColumnTextProps): JSX.Element => {
  const {
    primary: { numberOfColumns: _numberOfColumns, columns },
  } = slice;

  const numberOfColumns = (isFilled.number(_numberOfColumns) && _numberOfColumns) || 1;
  const isColumns = columns.length;

  if (!isColumns) {
    return <></>;
  }
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid grid-cols-1 grid-rows-[var(--columnsSmall)] gap-[72px] md:grid-cols-[var(--columnsMedium)] md:grid-rows-2 lg:grid-cols-[var(--columnsLarge)] lg:grid-rows-1"
      style={
        {
          '--columnsLarge': `repeat(${numberOfColumns}, minmax(0, 1fr))`,
          '--columnsMedium': `repeat(${numberOfColumns % 2 === 0 ? numberOfColumns / 2 : Math.ceil(numberOfColumns / 2)}, minmax(0, 1fr))`,
          '--columnsSmall': `repeat(${columns.length}, minmax(0, 1fr))`,
        } as React.CSSProperties
      }
    >
      {columns.map((column) => {
        const { icon, title, description } = column;

        return (
          <div key={title as string} className="flex flex-col items-center gap-4 text-center text-primary">
            {isFilled.image(icon) && <PrismicNextImage field={icon} />}
            {isFilled.richText(title) && <PrismicRichText field={title} />}
            {isFilled.richText(description) && <PrismicRichText field={description} />}
          </div>
        );
      })}
    </section>
  );
};

export default ColumnText;
