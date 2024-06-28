import { v4 as uuidv4 } from 'uuid';

import socialLinks from '../../data/preBuild/socialLinks.json';
import SocialButton from '../SocialButton';

import { SocialButtonSlice } from '@/prismicio-types';

export default function FooterBlockSocialLinks() {
  return (
    <div className="flex flex-row gap-5">
      {socialLinks.slices.map((button, idx) => {
        return (
          <SocialButton
            key={uuidv4()}
            slice={{ ...(button as SocialButtonSlice) }}
            index={idx}
            context={null}
            slices={[]}
          />
        );
      })}
    </div>
  );
}
