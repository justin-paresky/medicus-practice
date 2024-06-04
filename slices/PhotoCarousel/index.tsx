'use client';

import uniqBy from 'lodash/uniqBy';
import { useState } from 'react';
import { Content, isFilled } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Tabs, { TabProps } from '@/components/Tabs';

/**
 * Props for `PhotoCarousel`.
 */
export type PhotoCarouselProps = SliceComponentProps<Content.PhotoCarouselSlice>;

/**
 * Component for "PhotoCarousel" Slices.
 */
const PhotoCarousel = ({ slice }: PhotoCarouselProps): JSX.Element => {
  const tabs = uniqBy(slice.primary.tabs, 'tabId');

  const [selectedTab, setSelectedTab] = useState<TabProps>({
    title: tabs[0].tabTitle,
    id: tabs[0].tabId,
  });
  const [selectedPhoto, setSelectedPhoto] = useState(1);
  const selectedPhotos = slice.primary.tabs.filter((photo) => {
    return photo.tabId === selectedTab.id;
  });
  const selectedPhotoData = selectedPhotos[selectedPhoto];

  const handleTabClick = (tab: TabProps) => {
    setSelectedTab(tab);
    setSelectedPhoto(0);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center"
    >
      <Tabs
        onClick={handleTabClick}
        selectedTab={selectedTab}
        tabs={tabs.map((tab) => ({ id: tab.tabId as string, title: tab.tabTitle as string }))}
      />
      <Carousel currentSlide={selectedPhoto} onSelect={(idx) => setSelectedPhoto(idx)}>
        {selectedPhotos.map((photo) => {
          return (
            <div
              key={uuidv4()}
              className="h-full min-h-[480px] w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${photo.image.url}")`,
              }}
            />
          );
        })}
      </Carousel>
      <div className="flex flex-col items-center justify-center pt-6 text-center">
        {isFilled.richText(selectedPhotoData.description) && (
          <div className="w-[50%] child:text-primary">
            <PrismicRichText field={selectedPhotos[selectedPhoto].description} />
          </div>
        )}
        {isFilled.link(selectedPhotoData.linkUrl) && isFilled.keyText(selectedPhotoData.linkLabel) && (
          <div className="pt-6">
            <Button
              className="kt-6"
              label={selectedPhotoData.linkLabel}
              link={selectedPhotoData.linkUrl}
              variation="link-primary"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoCarousel;
