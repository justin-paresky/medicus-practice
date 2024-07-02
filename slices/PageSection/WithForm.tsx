'use client';

import { type Content, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

import FORMS from '@/app/forms';

export type WithFormProps = Content.PageSectionSliceWithForm;

export default function WithForm({ primary }: WithFormProps) {
  const { title, description, formId } = primary;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-12 text-center lg:pb-24">
      <div className="flex max-w-[600px] flex-col gap-8">
        {isFilled.richText(title) && <PrismicRichText field={title} />}
        {isFilled.richText(description) && (
          <div className="child:font-sans child:text-[1rem] child:text-primary">
            <PrismicRichText field={description} />
          </div>
        )}
        {isFilled.keyText(formId) && FORMS[formId as keyof typeof FORMS]()}
      </div>
    </div>
  );
}
