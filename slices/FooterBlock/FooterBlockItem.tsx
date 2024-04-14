import {
  type LinkField,
  type RichTextField,
  type KeyTextField,
  type ContentRelationshipField,
  isFilled,
} from '@prismicio/client';
import { PrismicLink, PrismicRichText } from '@prismicio/react';

import FooterBlockSocialLinks from './FooterBlockSocialLinks';

interface FooterBlockItemProps {
  label?: KeyTextField;
  link?: LinkField;
  socialLinks?: ContentRelationshipField;
  textBlock?: RichTextField;
}

export default function FooterBlockItem({ label, link, socialLinks, textBlock }: FooterBlockItemProps) {
  if (isFilled.keyText(label)) {
    return (
      <div className="child:text-gray">
        <PrismicLink field={link}>{label}</PrismicLink>
      </div>
    );
  }
  if (isFilled.richText(textBlock)) {
    return <PrismicRichText field={textBlock} />;
  }
  if (isFilled.contentRelationship(socialLinks)) {
    return <FooterBlockSocialLinks socialLinks={socialLinks} />;
  }
  return <></>;
}
