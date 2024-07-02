import { type Content, type RichTextField, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import { v4 as uuidv4 } from 'uuid';

export type WithHeartBeatProps = Content.PageSectionSliceWithHeartBeat;

interface TextSectionProps {
  title: RichTextField;
  description: RichTextField;
}

const Title = ({ title }: { title: RichTextField }) => {
  return isFilled.richText(title) && <PrismicRichText field={title} />;
};

const Description = ({ description }: { description: RichTextField }) => {
  return (
    isFilled.richText(description) && (
      <div className="max-w-[275px] text-center child:font-sans child:text-sm child:font-normal child:text-primary">
        <PrismicRichText field={description} />
      </div>
    )
  );
};

const TextSection = ({ title, description }: TextSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-between">
      {isFilled.richText(title) && <PrismicRichText field={title} />}
      {isFilled.richText(description) && (
        <div className="max-w-[275px] text-center child:font-sans child:text-sm child:font-normal child:text-primary">
          <PrismicRichText field={description} />
        </div>
      )}
    </div>
  );
};

export default function WithHeartBeat({ primary }: WithHeartBeatProps) {
  const { title, heartbeats, backgroundImage } = primary;

  return (
    <div
      className="relative mx-auto w-[100%] bg-contain bg-center bg-no-repeat pb-[25px] md:bg-[image:var(--image-url)] md:pb-[50px]"
      style={
        {
          '--image-url': isFilled.image(backgroundImage) ? `url("${backgroundImage.url}")` : '',
        } as React.CSSProperties
      }
    >
      <div className="flex h-[100%] w-[100%] flex-col justify-start gap-8 text-center md:justify-between">
        <div className="child:font-hertine">
          <PrismicRichText field={title} />
        </div>
        <div className="hidden h-[450px] flex-row justify-evenly gap-5 md:flex">
          {heartbeats.map((heartbeat) => {
            const { title } = heartbeat;
            return <Title key={uuidv4()} title={title} />;
          })}
        </div>
        <div className="hidden flex-row justify-around gap-5 md:flex">
          {heartbeats.map((heartbeat) => {
            const { description } = heartbeat;
            return <Description key={uuidv4()} description={description} />;
          })}
        </div>
        <div className="flex flex-col gap-5 md:hidden">
          {heartbeats.map((heartbeat) => {
            const { title, description } = heartbeat;
            return <TextSection key={uuidv4()} title={title} description={description} />;
          })}
        </div>
      </div>
    </div>
  );
}
