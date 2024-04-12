import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `SocialButton`.
 */
export type SocialButtonProps = SliceComponentProps<Content.SocialButtonSlice>;

/**
 * Component for "SocialButton" Slices.
 */
const SocialButton = ({ slice }: SocialButtonProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for social_button (variation: {slice.variation}) Slices
    </section>
  );
};

export default SocialButton;
