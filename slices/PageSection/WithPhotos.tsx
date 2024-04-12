import { type Content, isFilled } from '@prismicio/client';

import { createClient } from '@/prismicio';
import Photos from '@/components/Photos';

export type WithPhotosProps = Content.PageSectionSliceWithPhotos;

export default async function WithPhotos({ primary }: WithPhotosProps) {
  const { photos } = primary;
  const client = createClient();

  const gallery = isFilled.contentRelationship(photos) ? await client.getByUID('photos', photos.id) : null;

  return gallery?.data ? <Photos {...gallery.data} /> : null;
}
