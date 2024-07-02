import { type Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import WithImage from './WithImage';
import WithList from './WithList';
import TwoColumns from './TwoColumns';
import WithCardSlider from './WithCardSlider';
import WithGrid from './WithGrid';
import WithPhotos from './WithPhotos';
import WithForm from './WithForm';
import WithText from './WithText';
import WithDivider from './WithDivider';
import WithHeartBeat from './WithHeartBeat';

import PageSectionContainer from '@/components/PageSectionContainer';

/**
 * Props for `PageSection`.
 */
export type PageSectionProps = SliceComponentProps<Content.PageSectionSlice>;

/**
 * Component for "PageSection" Slices.
 */
const PageSection = ({ slice }: PageSectionProps): JSX.Element => {
  const {
    variation,
    slice_type,
    primary: { fullWidth },
  } = slice;
  const renderContent = () => {
    switch (variation) {
      case 'default':
      case 'imageRight':
      case 'largeImage':
        return <WithImage {...slice} />;
      case 'withList':
        return <WithList {...slice} />;
      case 'twoColumns':
        return <TwoColumns {...slice} />;
      case 'withCardSlider':
        return <WithCardSlider {...slice} />;
      case 'withGrid':
        return <WithGrid {...slice} />;
      case 'withPhotos':
        return <WithPhotos {...slice} />;
      case 'withForm':
        return <WithForm {...slice} />;
      case 'withText':
        return <WithText {...slice} />;
      case 'withDivider':
        return <WithDivider {...slice} />;
      case 'withHeartBeat':
        return <WithHeartBeat {...slice} />;
      default:
        return null;
    }
  };

  const backgroundColor =
    variation !== 'withText' &&
    variation !== 'withDivider' &&
    variation !== 'withHeartBeat' &&
    isFilled.color(slice.primary.backgroundColor)
      ? slice.primary.backgroundColor
      : undefined;

  const backgroundImage =
    variation !== 'withDivider' && variation !== 'withHeartBeat' && isFilled.image(slice.primary.backgroundImage)
      ? `url("${slice.primary.backgroundImage.url}")`
      : undefined;

  return (
    <PageSectionContainer
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      data-slice-type={slice_type}
      data-slice-variation={variation}
      fullWidth={fullWidth}
    >
      {renderContent()}
    </PageSectionContainer>
  );
};

export default PageSection;
