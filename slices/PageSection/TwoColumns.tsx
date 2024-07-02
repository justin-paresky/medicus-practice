import { type Content, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

export type TwoColumnsProps = Content.PageSectionSliceTwoColumns;

export default function TwoColumns({ primary }: TwoColumnsProps) {
  const { title, column1, column2 } = primary;

  return (
    <div className="flex flex-col gap-6">
      {isFilled.richText(title) && <PrismicRichText field={title} />}
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-[120px]">
        {isFilled.richText(column1) && (
          <div className="basis-[100%]">
            <PrismicRichText field={column1} />
          </div>
        )}
        {isFilled.richText(column2) && (
          <div className="basis-[100%]">
            <PrismicRichText field={column2} />
          </div>
        )}
      </div>
    </div>
  );
}
