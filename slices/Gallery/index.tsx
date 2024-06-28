/* eslint-disable @shopify/jsx-no-hardcoded-content */
'use client';

import { useEffect, useState } from 'react';
import { type Content, isFilled } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { ImageGallerySliceDefaultItem } from '../../prismicio-types';

/**
 * Props for `ImageGallery`.
 */
export type ImageGalleryProps = SliceComponentProps<Content.ImageGallerySlice>;

/**
 * Component for "ImageGallery" Slices.
 */
const ImageGallery = ({ slice }: ImageGalleryProps): JSX.Element => {
  const { items } = slice;
  const [photos, setPhotos] = useState<ImageGallerySliceDefaultItem[]>(items);

  useEffect(() => {
    setPhotos(items);
  }, [items]);

  const handlePhotoClick = (photo: ImageGallerySliceDefaultItem, idx: number) => {
    if (idx > 0) {
      setPhotos([photo, ...photos.slice(1, idx), photos[0], ...photos.slice(idx + 1, photos.length)]);
    }
  };

  const renderInfo = (photo: ImageGallerySliceDefaultItem) => {
    return (
      <>
        {isFilled.richText(photo.title) && (
          <div className="font-sans font-semibold child:text-xs md:child:text-xl md:child:text-primary">
            <PrismicRichText field={photo.title} />
          </div>
        )}
        {isFilled.richText(photo.description) && <PrismicRichText field={photo.description} />}
      </>
    );
  };

  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="carousel w-full md:grid md:grid-flow-col md:grid-rows-4 md:gap-[34px]"
      >
        {photos.map((photo, idx) => {
          return (
            isFilled.image(photo.image) && (
              <div
                key={photo.image.id}
                className={`${idx === 0 ? 'col-span-4 row-span-4 h-[100%]' : 'col-span-1 row-span-1'} carousel-item relative w-full cursor-pointer rounded shadow-lg`}
              >
                <PrismicNextImage
                  id={`slide${idx}`}
                  onClick={() => handlePhotoClick(photo, idx)}
                  className="aspect-[16/9]"
                  field={photo.image}
                />
                {photos.length > 1 && (
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between md:hidden">
                    <a href={`#slide${idx === 0 ? photos.length - 1 : idx - 1}`} className="btn btn-circle">
                      ❮
                    </a>
                    <a href={`#slide${idx === photos.length - 1 ? 0 : idx + 1}`} className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                )}
                <div className="child:text-white absolute bottom-0 left-0 right-0 w-[100%] bg-[#000000] bg-opacity-70 p-2 child:truncate child:text-xs md:hidden">
                  {renderInfo(photo)}
                </div>
              </div>
            )
          );
        })}
      </section>
      <div className="mt-3 hidden flex-col gap-3 md:flex">{renderInfo(photos[0])}</div>
    </>
  );
};

export default ImageGallery;
