import { type Content, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

import { createClient } from '@/prismicio';
import CardGrid from '@/components/CardGrid';

export type WithGridProps = Content.PageSectionSliceWithGrid;

export default async function WithGrid({ primary }: WithGridProps) {
  const { title, description, titleColor } = primary;
  const client = createClient();

  const cards =
    isFilled.contentRelationship(primary.cards) && primary.cards.uid
      ? await client.getByUID('card_grid', primary.cards.uid)
      : null;

  return (
    <div className="flex w-[100%] flex-col gap-5">
      {isFilled.richText(title) && (
        <div style={{ color: (titleColor as string) || undefined }}>
          <PrismicRichText field={title} />
        </div>
      )}
      {isFilled.richText(description) && <PrismicRichText field={description} />}
      {cards?.data.slices && <CardGrid {...cards.data} />}
    </div>
  );
}
