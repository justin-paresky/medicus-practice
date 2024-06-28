import { type LinkField, type RichTextField, type KeyTextField, isFilled } from '@prismicio/client';
import { PrismicLink, PrismicRichText } from '@prismicio/react';

import FooterBlockSocialLinks from './FooterBlockSocialLinks';

interface FooterBlockItemProps {
  label?: KeyTextField;
  link?: LinkField;
  socialLinks?: boolean;
  textBlock?: RichTextField;
}

export default function FooterBlockItem({ label, link, socialLinks, textBlock }: FooterBlockItemProps) {
  if (isFilled.keyText(label)) {
    return (
      <div className="child:link-white">
        <PrismicLink field={link}>{label}</PrismicLink>
      </div>
    );
  }
  if (isFilled.richText(textBlock)) {
    return (
      <div className="child:text-white">
        <PrismicRichText field={textBlock} />
      </div>
    );
  }
  if (socialLinks) {
    return <FooterBlockSocialLinks />;
  }
  return <></>;
}
