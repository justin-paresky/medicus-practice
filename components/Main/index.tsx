import { ImageField, GroupField, LinkField, KeyTextField } from '@prismicio/client';

import GlobalFooter from '../GlobalFooter';
import headerData from '../../data/preBuild/globalHeader.json';
import footerData from '../../data/preBuild/globalFooter.json';

import { GlobalFooterDocumentData } from '@/prismicio-types';
import GlobalHeader from '@/components/GlobalHeader';
import ResponsiveContainer from '@/components/ResponsiveContainer';

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalHeader
        logo={headerData.logo as ImageField}
        locales={headerData.locales as GroupField}
        ctas={headerData.ctas as GroupField}
        homeLink={headerData.homeLink as LinkField}
      />
      <div className="pt-[65px] lg:pt-[88px]">
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
      <GlobalFooter
        slices={footerData.slices as GlobalFooterDocumentData['slices']}
        copywrite={footerData.copywrite as KeyTextField}
        image={footerData.image as ImageField}
      />
    </>
  );
}
