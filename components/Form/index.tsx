'use client';

import { useState } from 'react';
import { type Content, KeyTextField, RichTextField, ImageField, isFilled } from '@prismicio/client';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

import Button from '../Button';

import formData from './formData';

import { type FormDocumentData } from '@/prismicio-types';
import FormField from '@/slices/FormField';

interface DialogProps {
  headerImage?: ImageField;
  title?: KeyTextField;
  description?: RichTextField;
}

interface FormProps extends FormDocumentData {
  id: string;
  modal?: DialogProps;
}

export default function Form({
  id,
  slices,
  primaryButtonIcon,
  primaryButtonLink,
  primaryButtonLabel,
  primaryButtonVariation,
  secondaryButtonIcon,
  secondaryButtonLink,
  secondaryButtonLabel,
  secondaryButtonVariation,
  modal,
}: FormProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    await formData[id as keyof typeof formData]();
    handleOpen();
  };

  const renderConfirmationContent = () => {
    return modal?.description || modal?.title ? (
      <DialogContent>
        <div className="p-[50px] text-center md:p-[100px]">
          <h2 className="font-serif text-primary">{modal.title as string}</h2>
          <PrismicRichText field={modal.description} />
        </div>
      </DialogContent>
    ) : null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        {slices.map((field, idx) => {
          const { id } = field;
          return <FormField key={id} slice={{ ...field }} index={idx} slices={[]} context={null} />;
        })}
        {(isFilled.keyText(primaryButtonLabel) || isFilled.keyText(secondaryButtonLabel)) && (
          <div className="flex flex-col gap-4 child:flex-grow md:flex-col">
            {isFilled.keyText(secondaryButtonLabel) && (
              <Button
                icon={secondaryButtonIcon}
                label={secondaryButtonLabel}
                link={secondaryButtonLink}
                variation={secondaryButtonVariation as Content.ButtonDocumentData['variation']}
              />
            )}
            {isFilled.keyText(primaryButtonLabel) && (
              <Button
                type="submit"
                icon={primaryButtonIcon}
                label={primaryButtonLabel}
                link={primaryButtonLink}
                variation={primaryButtonVariation as Content.ButtonDocumentData['variation']}
              />
            )}
          </div>
        )}
      </div>
      <Dialog maxWidth="md" open={open} onClose={handleClose}>
        {modal?.headerImage && (
          <DialogTitle
            sx={{
              padding: '45px 0',
              backgroundColor: '#f6f8f8',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PrismicNextImage field={modal.headerImage} />
          </DialogTitle>
        )}
        {renderConfirmationContent()}
      </Dialog>
    </form>
  );
}
