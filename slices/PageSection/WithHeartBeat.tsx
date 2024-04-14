import { type Content, type RichTextField, type KeyTextField, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

export type WithHeartBeatProps = Content.PageSectionSliceWithHeartbeat;

interface TextSectionProps {
  title: RichTextField;
  description: KeyTextField;
}

const Title = ({ title }: { title: RichTextField }) => {
  return (
    isFilled.richText(title) && (
      <div className="font-serif text-2xl font-semibold text-secondary">
        <PrismicRichText field={title} />
      </div>
    )
  );
};

const Description = ({ description }: { description: KeyTextField }) => {
  return (
    isFilled.keyText(description) && (
      <div className="max-w-[275px] text-center font-sans text-sm font-normal">{description}</div>
    )
  );
};

const TextSection = ({ title, description }: TextSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-between">
      {isFilled.richText(title) && (
        <div className="font-serif text-2xl font-semibold text-secondary">
          <PrismicRichText field={title} />
        </div>
      )}
      {isFilled.keyText(description) && (
        <div className="max-w-[275px] text-center font-sans text-sm font-normal">{description}</div>
      )}
    </div>
  );
};

export default function WithHeartBeat({ primary }: WithHeartBeatProps) {
  const { title1, title2, title3, description1, description2, description3 } = primary;

  return (
    <div className="relative mx-auto w-[100%] pb-[25px] md:pb-[50px]">
      <div className="flex h-[100%] w-[100%] flex-col justify-start gap-5 md:justify-between">
        <div className="hidden h-[450px] flex-row justify-evenly gap-5 md:flex">
          <Title title={title1} />
          <Title title={title2} />
          <Title title={title3} />
        </div>
        <div className="hidden flex-row justify-around gap-5 md:flex">
          <Description description={description1} />
          <Description description={description2} />
          <Description description={description3} />
        </div>
        <div className="flex flex-col gap-5 md:hidden">
          <TextSection title={title1} description={description1} />
          <TextSection title={title2} description={description2} />
          <TextSection title={title3} description={description3} />
        </div>
      </div>
    </div>
  );
}
