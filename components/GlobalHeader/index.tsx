/* eslint-disable @shopify/jsx-no-hardcoded-content */
/* eslint-disable no-unused-vars */
'use client';

import { useState } from 'react';
import Script from 'next/script';
import clsx from 'clsx';
import { isFilled, ImageField, KeyTextField, LinkField, GroupField } from '@prismicio/client';
import { PrismicLink } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';
import ResponsiveContainer from '../ResponsiveContainer';

import css from './style.module.css';

declare global {
  interface Window {
    Weglot: any;
  }
}

export interface GlobalHeaderProps {
  logo?: ImageField;
  ctas?: GroupField;
  homeLink?: LinkField;
}

export default function GlobalHeader({ logo, ctas, homeLink }: GlobalHeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed z-50 w-full border-b border-[#000000] bg-white">
      <Script
        strategy="afterInteractive"
        src="https://cdn.weglot.com/weglot.min.js"
        onLoad={() => {
          window.Weglot.initialize({ api_key: 'wg_7bfdd08e6499182187bcb3e6908a64564', cache: true });
        }}
      />
      <ResponsiveContainer>
        <div className="flex h-[3.5rem] w-[100%] flex-row items-center justify-between px-3 lg:h-[88px] lg:px-[100px]">
          {isFilled.image(logo) && (
            <PrismicLink field={homeLink}>
              <PrismicNextImage className="h-[40px] w-[220px] md:h-[52px] md:w-[278px]" field={logo} />
            </PrismicLink>
          )}
          <div className="flex flex-row items-center gap-7">
            <div id="global-header-language-container" />
            {isFilled.group(ctas) && (
              <div className="hidden md:block">
                {ctas.map((cta) => {
                  const { label, link, icon } = cta;
                  return (
                    <Button
                      variation="btn-primary"
                      key={uuidv4()}
                      label={label as KeyTextField}
                      link={link as LinkField}
                      icon={icon as ImageField}
                    />
                  );
                })}
              </div>
            )}
            <div
              className={`dropdown dropdown-end block md:hidden ${css.dropdownCustom} ${menuOpen && 'dropdown-open'}`}
            >
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="open close menu"
                className={clsx('tham tham-e-squeeze tham-w-6', menuOpen && 'tham-active')}
              >
                <div className="tham-box">
                  <div className="tham-inner bg-primary" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  );
}
