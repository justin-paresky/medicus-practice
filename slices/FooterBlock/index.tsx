import { v4 as uuidv4 } from 'uuid';
import { type Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import FooterBlockItem from './FooterBlockItem';

/**
 * Props for `FooterBlock`.
 */
export type FooterBlockProps = SliceComponentProps<Content.FooterBlockSlice>;

/**
 * Component for "FooterBlock" Slices.
 */
const FooterBlock = ({ slice }: FooterBlockProps): JSX.Element => {
  const { primary, items } = slice;
  return (
    <div className="flex flex-col">
      {isFilled.richText(primary.title) && (
        <div className="mb-6 font-serif font-semibold text-primary">
          <PrismicRichText field={primary.title} />
        </div>
      )}
      <div className="flex flex-col gap-2">
        {items.map((item) => {
          return <FooterBlockItem key={uuidv4()} {...item} />;
        })}
      </div>
    </div>
  );
};

export default FooterBlock;
