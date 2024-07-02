import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

import ResponsiveContainer from '@/components/ResponsiveContainer';

/**
 * Props for `IconGrid`.
 */
export type IconGridProps = SliceComponentProps<Content.IconGridSlice>;

/**
 * Component for "IconGrid" Slices.
 */
const IconGrid = ({ slice }: IconGridProps): JSX.Element => {
  const {
    primary: { cells, fullWidth },
    slice_type,
    variation,
  } = slice;
  return (
    <section data-slice-type={slice_type} data-slice-variation={variation}>
      <ResponsiveContainer fullWidth={fullWidth} className="flex flex-row justify-around px-5 lg:px-24">
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
      </ResponsiveContainer>
    </section>
  );
};

export default IconGrid;
