import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

/**
 * Props for `IconGrid`.
 */
export type IconGridProps = SliceComponentProps<Content.IconGridSlice>;

/**
 * Component for "IconGrid" Slices.
 */
const IconGrid = ({ slice }: IconGridProps): JSX.Element => {
  const cells = slice.primary.cells;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-row justify-around px-5 lg:px-[100px]"
    >
      <div className="flex flex-row gap-12">
        {cells.map((cell) => {
          const { label, icon } = cell;
          return (
            <div
              key={uuidv4()}
              className="flex flex-col gap-6 text-center font-sans text-[1.5rem] capitalize text-primary"
            >
              {isFilled.image(icon) && <PrismicNextImage field={icon} />}
              {isFilled.keyText(label) && label}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IconGrid;
