/* eslint-disable react/button-has-type */
'use client';

import { PrismicNextImage } from '@prismicio/next';
import { type Content, isFilled } from '@prismicio/client';

interface ButtonProps {
  backgroundColor?: string | undefined | false;
  disabled?: boolean;
  icon?: Content.ButtonDocumentData['icon'];
  label: Content.ButtonDocumentData['label'];
  link?: Content.ButtonDocumentData['link'];
  name?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  variation?: Content.ButtonDocumentData['variation'];
}

export default function Button({
  backgroundColor,
  disabled,
  icon,
  label,
  link,
  name,
  onClick = () => null,
  type,
  variation = 'btn-primary',
}: ButtonProps) {
  if (isFilled.link(link) && link.url?.length) {
    return (
      <a
        className={`flex flex-row items-center gap-2 ${variation}`}
        href={link.url}
        style={{ backgroundColor: backgroundColor || undefined, borderColor: backgroundColor || undefined }}
      >
        {icon && <PrismicNextImage field={icon} />}
        {label}
      </a>
    );
  }

  return (
    <button
      className={`btn btn-sm md:btn-md ${variation}`}
      disabled={disabled}
      name={name}
      onClick={onClick}
      type={type || 'button'}
      aria-label={label as string}
      style={{ backgroundColor: backgroundColor || undefined, borderColor: backgroundColor || undefined }}
    >
      {icon && <PrismicNextImage field={icon} />}
      {label}
    </button>
  );
}
