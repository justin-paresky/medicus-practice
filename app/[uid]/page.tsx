import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';

import { components } from '@/slices';
import { createClient } from '@/prismicio';

interface Params {
  uid: string;
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID('landing_page', params.uid).catch(() => notFound());

  return (
    <>
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
