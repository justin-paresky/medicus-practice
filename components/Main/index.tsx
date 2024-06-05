import { ImageField, GroupField, LinkField, KeyTextField, isFilled } from '@prismicio/client';

import GlobalFooter from '../GlobalFooter';
import headerData from '../../data/preBuild/globalHeader.json';
import footerData from '../../data/preBuild/globalFooter.json';
import FloatingButtons from '../FloatingButtons';
import Button from '../Button';

import { createClient } from '@/prismicio';
import { GlobalFooterDocumentData } from '@/prismicio-types';
import GlobalHeader from '@/components/GlobalHeader';
import ResponsiveContainer from '@/components/ResponsiveContainer';

export default async function Main({ children }: { children: React.ReactNode }) {
  const client = createClient();
  const page = await client.getSingle('home');
  const {
    data: { primaryCtaIcon, primaryCtaLabel, primaryCtaLink, secondaryCtaIcon, secondaryCtaLabel, secondaryCtaLink },
  } = page;
  return (
    <>
      {(isFilled.keyText(secondaryCtaLabel) ||
        isFilled.image(secondaryCtaIcon) ||
        isFilled.keyText(primaryCtaLabel) ||
        isFilled.image(primaryCtaIcon)) && (
        <FloatingButtons offset={400}>
          {(isFilled.keyText(secondaryCtaLabel) || isFilled.image(secondaryCtaIcon)) && (
            <Button
              className="btn-circle"
              variation="btn-secondary"
              label={secondaryCtaLabel}
              link={secondaryCtaLink}
              icon={secondaryCtaIcon}
            />
          )}
          {(isFilled.keyText(primaryCtaLabel) || isFilled.image(primaryCtaIcon)) && (
            <Button variation="btn-secondary" label={primaryCtaLabel} link={primaryCtaLink} icon={primaryCtaIcon} />
          )}
        </FloatingButtons>
      )}
      <GlobalHeader
        logo={headerData.logo as ImageField}
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
