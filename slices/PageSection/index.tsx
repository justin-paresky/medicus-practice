import { type Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import WithImage from './WithImage';
import WithList from './WithList';
import TwoColumns from './TwoColumns';
import WithHeartBeat from './WithHeartBeat';
import WithCardSlider from './WithCardSlider';
import WithGrid from './WithGrid';
import WithPhotos from './WithPhotos';

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
      case 'withHeartbeat':
        return <WithHeartBeat {...slice} />;
      case 'withCardSlider':
        return <WithCardSlider {...slice} />;
      case 'withGrid':
        return <WithGrid {...slice} />;
      case 'withPhotos':
        return <WithPhotos {...slice} />;
      case 'withForm':
      default:
        return null;
    }
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-[25px] bg-cover bg-no-repeat p-[50px] sm:flex-row sm:gap-[50px] sm:p-[100px]"
      style={{
        backgroundColor: isFilled.color(slice.primary.backgroundColor) ? slice.primary.backgroundColor : '#ffffff',
        backgroundImage: isFilled.image(slice.primary.backgroundImage)
          ? `url("${slice.primary.backgroundImage.url}")`
          : 'none',
      }}
    >
      {renderContent()}
    </section>
  );
};

export default PageSection;
