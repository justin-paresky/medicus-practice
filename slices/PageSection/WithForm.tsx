import { type Content, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

import Form from '@/components/Form';
import { createClient } from '@/prismicio';

export type WithFormProps = Content.PageSectionSliceWithForm;

export default async function WithForm({ primary }: WithFormProps) {
  const { title, description, titleColor, descriptionColor } = primary;
  const client = createClient();

  const form =
    isFilled.contentRelationship(primary.form) && primary.form.uid
      ? await client.getByUID('form', primary.form.uid)
      : null;

  const confirmationModal =
    isFilled.contentRelationship(form?.data.confirmationModal) && form.data.confirmationModal.uid
      ? await client.getByUID('modal', form.data.confirmationModal.uid)
      : null;

  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-[50px] md:grid-cols-2 md:grid-rows-1 md:gap-[100px]">
      <div className="left">
        {isFilled.richText(title) && (
          <div style={{ color: (titleColor as string) || undefined }}>
            <PrismicRichText field={title} />
          </div>
        )}
        {isFilled.richText(description) && (
          <div style={{ color: (descriptionColor as string) || undefined }}>
            <PrismicRichText field={description} />
          </div>
        )}
      </div>
      <div className="right">{form && <Form {...form.data} id={form.uid} modal={confirmationModal?.data} />}</div>
    </div>
  );
}
