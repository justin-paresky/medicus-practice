import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

import Pill from '@/components/Pill';
import ResponsiveContainer from '@/components/ResponsiveContainer';

/**
 * Props for `PillGrid`.
 */
export type PillGridProps = SliceComponentProps<Content.PillGridSlice>;

/**
 * Component for "PillGrid" Slices.
 */
const PillGrid = ({ slice }: PillGridProps): JSX.Element => {
  const {
    primary: { fullWidth, pills },
    slice_type,
    variation,
  } = slice;
  return (
    <section data-slice-type={slice_type} data-slice-variation={variation}>
      <ResponsiveContainer
        fullWidth={fullWidth}
        className="grid grid-cols-2 grid-rows-2 gap-4 bg-cover bg-no-repeat px-5 lg:grid-cols-4 lg:grid-rows-1 lg:px-[50px]"
      >
        {pills.map((pill) => {
          return <Pill key={uuidv4()} {...pill} />;
        })}
      </ResponsiveContainer>
    </section>
  );
};

export default PillGrid;
