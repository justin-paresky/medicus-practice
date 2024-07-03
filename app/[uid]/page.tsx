import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SliceZone, PrismicRichText } from '@prismicio/react';
import { isFilled } from '@prismicio/client';

import { components } from '@/slices';
import { createClient } from '@/prismicio';
import ResponsiveContainer from '@/components/ResponsiveContainer';

interface Params {
  uid: string;
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID('landing_page', params.uid).catch(() => notFound());

  return (
    <>
      {isFilled.richText(page.data.text) && (
        <ResponsiveContainer className="p-ps">
          <PrismicRichText
            components={{
              paragraph: ({ children }) => <p className="mb-6">{children}</p>,
            }}
            field={page.data.text}
          />
        </ResponsiveContainer>
      )}
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('landing_page', params.uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('text_page');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
