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
        <div className="p-ps relative flex flex-col justify-between gap-6 lg:flex-row lg:gap-8">
          <div className="flex flex-col justify-between font-sans text-sm text-white">
            {isFilled.image(image) && (
              <PrismicNextImage field={image} className="ml-[-5px] max-w-[200px] lg:max-w-[380px]" />
            )}
            {isFilled.keyText(copywrite) && <div className="hidden lg:block">{copywrite}</div>}
          </div>
          <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-16">
            {slices.map((slice, idx) => (
              <FooterBlock key={uuidv4()} slice={slice} index={idx} slices={[]} context={null} isFirst={idx === 0} />
            ))}
          </div>
          {isFilled.keyText(copywrite) && (
            <div className="block font-sans text-sm text-white lg:hidden">{copywrite}</div>
          )}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
