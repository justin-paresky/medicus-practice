/* eslint-disable @typescript-eslint/naming-convention */
'use client';

import { useState } from 'react';
import uniq from 'lodash/uniq';
import { isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

import Button from '../Button';

import { type PhotosDocumentData, ImageGallerySliceDefaultItem } from '@/prismicio-types';
import ImageGallery from '@/slices/Gallery';

const buildPhotos = (slices: PhotosDocumentData['slices']) => {
  let categories = [] as string[];
  let photos = [] as ImageGallerySliceDefaultItem[];

  for (const slice of slices) {
    for (const item of slice.items) {
      const tags = item.tags?.split(';');
      if (tags) {
        categories = [...categories, ...tags];
      }
      photos = [...photos, item];
    }
  }

  return {
    categories: ['Show All', ...uniq(categories)],
    photos,
  };
};

export default function Photos({
  title,
  description,
  showFilter,
  filterPlaceholder,
  slices,
  link,
  label,
  variation,
}: PhotosDocumentData) {
  const { photos, categories } = buildPhotos(slices);
  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  const handleFilterChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    setFilteredPhotos(
      photos.filter((photo) => {
        return photo.tags?.includes(value) || value === 'Show All';
      })
    );
  };

  return (
    <div className="flex w-[100%] flex-col gap-5">
      <div className="flex flex-row justify-between">
        {isFilled.richText(title) && (
          <>
            <div className="flex-grow text-primary">
              <PrismicRichText field={title} />
            </div>
            {isFilled.keyText(label) && <Button label={label} variation={variation} link={link} />}
          </>
        )}
      </div>
      {isFilled.richText(description) && <PrismicRichText field={description} />}
      {showFilter && categories.length && (
        <div className="flex flex-row md:justify-end">
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue="placeholder"
            onChange={handleFilterChange}
          >
            {isFilled.keyText(filterPlaceholder) && (
              <option disabled value="placeholder">
                {filterPlaceholder}
              </option>
            )}
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <ImageGallery
        context={null}
        slices={[]}
        index={0}
        slice={{
          variation: 'default',
          primary: {
            title: [],
          },
          version: '',
          items: filteredPhotos,
          slice_label: null,
          slice_type: 'image_gallery',
          id: 'photos',
        }}
      />
    </div>
  );
}
