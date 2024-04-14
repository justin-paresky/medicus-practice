import { ContentRelationshipField, isFilled } from '@prismicio/client';

import SocialButton from '../SocialButton';

import { createClient } from '@/prismicio';

interface FooterBlockSocialLinksProps {
  socialLinks: ContentRelationshipField;
}

export default async function FooterBlockSocialLinks({ socialLinks }: FooterBlockSocialLinksProps) {
  const client = createClient();

  const socialLinkButtons =
    isFilled.contentRelationship(socialLinks) && socialLinks.uid
      ? await client.getByUID('social_links', socialLinks.uid)
      : null;

  return (
    <div className="flex flex-row gap-5">
      {socialLinkButtons?.data.slices.map((button, idx) => {
        return <SocialButton key={button.id} slice={{ ...button }} index={idx} context={null} slices={[]} />;
      })}
    </div>
  );
}
