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

/**
 * Props for `PageSection`.
 */
export type PageSectionProps = SliceComponentProps<Content.PageSectionSlice>;

/**
 * Component for "PageSection" Slices.
 */
const PageSection = ({ slice }: PageSectionProps): JSX.Element => {
  const renderContent = () => {
    switch (slice.variation) {
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
      default:
        return null;
    }
  };

  const paddingY = slice.variation === 'withDivider' ? 'pt-4' : 'p-12 lg:pt-[100px]';

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex flex-col gap-[25px] bg-cover bg-no-repeat px-5 md:flex-row md:gap-[50px] lg:px-[100px] ${paddingY}`}
      style={{
        backgroundColor:
          slice.variation !== 'withText' &&
          slice.variation !== 'withDivider' &&
          isFilled.color(slice.primary.backgroundColor)
            ? slice.primary.backgroundColor
            : '#ffffff',
        backgroundImage:
          slice.variation !== 'withDivider' && isFilled.image(slice.primary.backgroundImage)
            ? `url("${slice.primary.backgroundImage.url}")`
            : 'none',
      }}
    >
      {renderContent()}
    </section>
  );
};

export default PageSection;
