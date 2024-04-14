import { type Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicLink, PrismicImage } from '@prismicio/react';

/**
 * Props for `SocialButton`.
 */
export type SocialButtonProps = SliceComponentProps<Content.SocialButtonSlice>;

/**
 * Component for "SocialButton" Slices.
 */
const SocialButton = ({ slice }: SocialButtonProps): JSX.Element => {
  const {
    primary: { link, icon },
  } = slice;
  return (
    <PrismicLink className="h-[34px] w-[34px] bg-none text-transparent child:h-[34px] child:w-[34px]" field={link}>
      {isFilled.image(icon)}
      <PrismicImage field={icon} />
    </PrismicLink>
  );
};

export default SocialButton;
