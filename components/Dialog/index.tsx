'use client';

import { PrismicNextImage } from '@prismicio/next';
import { ImageField, RichTextField, KeyTextField } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { Dialog as MuiDialog, DialogTitle, DialogContent } from '@mui/material';

interface DialogProps {
  image?: ImageField;
  title?: KeyTextField;
  description?: RichTextField;
}

export default function Dialog({ image, title, description }: DialogProps) {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const router = useRouter();

  const handleClose = () => {
    const { pathname } = router;
    const params = new URLSearchParams(searchParams.toString());
    params.delete('modal');
    router.replace({ pathname, query: params.toString() }, undefined, { shallow: true });
  };

  const renderConfirmationContent = () => {
    return description || title ? (
      <DialogContent>
        <div className="p-ps text-center">
          <h2>{title as string}</h2>
          <PrismicRichText field={description} />
        </div>
      </DialogContent>
    ) : null;
  };

  return (
    <MuiDialog maxWidth="md" open={Boolean(modal)} onClose={handleClose}>
      {image && (
        <DialogTitle
          sx={{
            padding: '45px 0',
            backgroundColor: '#f6f8f8',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PrismicNextImage field={image} />
        </DialogTitle>
      )}
      {renderConfirmationContent()}
    </MuiDialog>
  );
}
