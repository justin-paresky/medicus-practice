'use client';

import { useState } from 'react';
import { PrismicLink, SliceZone } from '@prismicio/react';
import { KeyTextField, GroupField, LinkField, isFilled } from '@prismicio/client';
import { Drawer } from '@mui/material';
import { PrismicNextImage } from '@prismicio/next';

import ResponsiveContainer from '../ResponsiveContainer';

import { FooterPopupDocumentData } from '@/prismicio-types';
import { components } from '@/slices';

interface GlobalFooterProps {
  copywrite?: KeyTextField;
  links?: GroupField;
  footerPopupLink?: KeyTextField;
  footerPopup?: FooterPopupDocumentData;
}

export default function GlobalFooter({ copywrite, links, footerPopup, footerPopupLink }: GlobalFooterProps) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <div className="bg-[#ffffff]">
      <ResponsiveContainer>
        <div className="relative flex flex-col items-center justify-between gap-2 px-2 py-3 md:flex-row md:px-0">
          {isFilled.keyText(copywrite) && <div className="font-sans text-sm text-gray">{copywrite}</div>}
          {isFilled.group(links) && (
            <>
              {links.map((item) => {
                return (
                  <PrismicLink className="text-sm text-gray" field={item.link as LinkField} key={item.label as string}>
                    {item.label as string}
                  </PrismicLink>
                );
              })}
            </>
          )}
          {isFilled.keyText(footerPopupLink) && (
            <button type="button" className="link-gray text-sm" onClick={() => setDrawerOpen(true)}>
              {footerPopupLink}
            </button>
          )}
        </div>
      </ResponsiveContainer>
      <Drawer open={drawerOpen} anchor="bottom" onClose={() => setDrawerOpen(false)}>
        <button
          onClick={() => setDrawerOpen(false)}
          type="button"
          className="absolute left-[35px] top-[35px] h-[32px] w-[32px]"
        >
          {' '}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0003 29.3307C23.3641 29.3307 29.3337 23.3612 29.3337 15.9974C29.3337 8.6336 23.3641 2.66406 16.0003 2.66406C8.63653 2.66406 2.66699 8.6336 2.66699 15.9974C2.66699 23.3612 8.63653 29.3307 16.0003 29.3307Z"
              stroke="#54595F"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M19.771 12.2266L12.2285 19.769"
              stroke="#54595F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.2285 12.2266L19.771 19.769"
              stroke="#54595F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex flex-col rounded-t-[25px] bg-[#ffffff] px-[135px] pb-[135px] pt-6">
          {isFilled.image(footerPopup?.logo) && <PrismicNextImage className="mb-8" field={footerPopup.logo} />}
          <div className="mb-7 h-[1px] w-full border-b border-b-green" />
          <div className="md-grid-rows-2 grid grid-cols-1 gap-y-10 md:grid-cols-4">
            {footerPopup?.slices && <SliceZone slices={footerPopup.slices} components={components} />}
          </div>
        </div>
      </Drawer>
    </div>
  );
}
