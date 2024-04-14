import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

import ResponsiveContainer from '@/components/ResponsiveContainer';
import { createClient } from '@/prismicio';

interface Params {
  uid: string;
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID('text_page', params.uid).catch(() => notFound());

  return (
    <ResponsiveContainer>
      <div className="px-[50px] md:px-[100px]">
        {isFilled.richText(page.data.text) && <PrismicRichText field={page.data.text} />}
      </div>
    </ResponsiveContainer>
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('text_page', params.uid).catch(() => notFound());

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
