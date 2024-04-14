import { type Content, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

import { createClient } from '@/prismicio';
import CardSlider from '@/components/CardSlider';

export type WithCardSliderProps = Content.PageSectionSliceWithCardSlider;

export default async function WithCardSlider({ primary }: WithCardSliderProps) {
  const { title, description, titleColor } = primary;
  const client = createClient();

  const slider =
    isFilled.contentRelationship(primary.slider) && primary.slider.uid
      ? await client.getByUID('card_slider', primary.slider.uid)
      : null;

  return (
    <div className="flex w-[100%] flex-col gap-5">
      {isFilled.richText(title) && (
        <div style={{ color: (titleColor as string) || undefined }}>
          <PrismicRichText field={title} />
        </div>
      )}
      {isFilled.richText(description) && <PrismicRichText field={description} />}
      {slider?.data.slices && <CardSlider {...slider.data} />}
    </div>
  );
}
