import { v4 as uuidv4 } from 'uuid';
import { type Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import FooterBlockItem from './FooterBlockItem';

/**
 * Props for `FooterBlock`.
 */
export type FooterBlockProps = SliceComponentProps<Content.FooterBlockSlice> & { isFirst?: boolean };

/**
 * Component for "FooterBlock" Slices.
 */
const FooterBlock = ({ slice, isFirst }: FooterBlockProps): JSX.Element => {
  const { primary, items } = slice;

  return (
    <div className="flex flex-col">
      {isFilled.richText(primary.title) && (
        <div className="mb-6 hidden font-semibold capitalize child:font-sans child:text-xl child:text-white lg:block">
          <PrismicRichText field={primary.title} />
        </div>
      )}
      <div className={`${isFirst ? 'grid-cols-2' : 'grid-cols-1'} grid gap-2 lg:flex lg:flex-col`}>
        {items.map((item) => {
          return <FooterBlockItem key={uuidv4()} {...item} />;
        })}
      </div>
    </div>
  );
};

export default FooterBlock;
