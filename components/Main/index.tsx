import { ImageField, GroupField, LinkField, KeyTextField, isFilled } from '@prismicio/client';

import GlobalFooter from '../GlobalFooter';
import headerData from '../../data/preBuild/globalHeader.json';
import footerData from '../../data/preBuild/globalFooter.json';
import FloatingButtons from '../FloatingButtons';
import Button from '../Button';

import { createClient } from '@/prismicio';
import { GlobalFooterDocumentData } from '@/prismicio-types';
import GlobalHeader from '@/components/GlobalHeader';

export default async function Main({ children }: { children: React.ReactNode }) {
  const client = createClient();
  const page = await client.getSingle('home');
  const {
    data: { primaryCtaIcon, primaryCtaLabel, primaryCtaLink, secondaryCtaIcon, secondaryCtaLabel, secondaryCtaLink },
  } = page;
  return (
    <>
      <GlobalHeader
        logo={headerData.logo as ImageField}
        ctas={headerData.ctas as GroupField}
        homeLink={headerData.homeLink as LinkField}
      />
      <div className="flex flex-col justify-start gap-6 pt-[3.5rem] child:w-full md:gap-16 lg:pt-[88px]">
        {children}
      </div>
      <GlobalFooter
        slices={footerData.slices as GlobalFooterDocumentData['slices']}
        copywrite={footerData.copywrite as KeyTextField}
        image={footerData.image as ImageField}
      />
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
    </>
  );
}
