import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

import Pill from '@/components/Pill';

/**
 * Props for `PillGrid`.
 */
export type PillGridProps = SliceComponentProps<Content.PillGridSlice>;

/**
 * Component for "PillGrid" Slices.
 */
const PillGrid = ({ slice }: PillGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid grid-cols-2 grid-rows-2 gap-4 bg-cover bg-no-repeat px-5 lg:grid-cols-4 lg:grid-rows-1 lg:px-[50px]"
    >
      {slice.primary.pills.map((pill) => {
        return <Pill key={uuidv4()} {...pill} />;
      })}
    </section>
  );
};

export default PillGrid;
