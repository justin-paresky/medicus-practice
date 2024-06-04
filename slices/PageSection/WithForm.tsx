'use client';

import { type Content, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

import FORMS from '@/app/forms';

export type WithFormProps = Content.PageSectionSliceWithForm;

export default function WithForm({ primary }: WithFormProps) {
  const { title, description, formId } = primary;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-12 text-center lg:pb-[100px]">
      <div className="flex max-w-[600px] flex-col gap-8">
        {isFilled.richText(title) && (
          <div className="child:font-serif child:text-[3.5rem] child:font-semibold child:text-primary">
            <PrismicRichText field={title} />
          </div>
        )}
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
