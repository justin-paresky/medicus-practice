/* eslint-disable no-unused-vars */
import Card from '@/slices/Card';
import { type CardGridDocumentData } from '@/prismicio-types';

enum ColNumber {
  One = 'xl:grid-cols-1',
  Two = 'xl:grid-cols-2',
  Three = 'xl:grid-cols-3',
  Four = 'xl:grid-cols-4',
  Five = 'xl:grid-cols-5',
  Six = 'xl:grid-cols-6',
  Seven = 'xl:grid-cols-7',
  Eight = 'xl:grid-cols-8',
  Nine = 'xl:grid-cols-9',
  Ten = 'xl:grid-cols-10',
  Eleven = 'xl:grid-cols-11',
  Twelve = 'xl:grid-cols-12',
}

export default function CardGrid({ slices, colNumber }: CardGridDocumentData) {
  return (
    <div className={`mt-6 grid gap-5 sm:grid-cols-1 lg:grid-cols-2 ${ColNumber[colNumber || 'Three']}`}>
      {slices.map((card) => {
        return <Card key={card.id} slice={{ ...card }} index={0} slices={[]} context={{}} />;
      })}
    </div>
  );
}
