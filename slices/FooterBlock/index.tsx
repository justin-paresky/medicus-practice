import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FooterBlock`.
 */
export type FooterBlockProps = SliceComponentProps<Content.FooterBlockSlice>;

/**
 * Component for "FooterBlock" Slices.
 */
const FooterBlock = ({ slice }: FooterBlockProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for footer_block (variation: {slice.variation}) Slices
    </section>
  );
};

export default FooterBlock;
