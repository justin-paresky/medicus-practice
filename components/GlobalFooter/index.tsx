import { isFilled } from '@prismicio/client';
import { v4 as uuidv4 } from 'uuid';
import { PrismicNextImage } from '@prismicio/next';

import ResponsiveContainer from '../ResponsiveContainer';

import FooterBlock from '@/slices/FooterBlock';
import { GlobalFooterDocumentData } from '@/prismicio-types';

export default function GlobalFooter({ copywrite, image, slices }: GlobalFooterDocumentData) {
  return (
    <div className="bg-primary">
      <ResponsiveContainer>
        <div className="p-ps relative flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex flex-col justify-between font-sans text-sm text-white">
            {isFilled.image(image) && <PrismicNextImage field={image} className="max-w-[380px]" />}
            {isFilled.keyText(copywrite) && copywrite}
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {slices.map((slice, idx) => (
              <FooterBlock key={uuidv4()} slice={slice} index={idx} slices={[]} context={null} />
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
