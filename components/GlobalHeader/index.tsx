/* eslint-disable @shopify/jsx-no-hardcoded-content */
/* eslint-disable no-unused-vars */
'use client';

import Script from 'next/script';
import clsx from 'clsx';
import { isFilled, ImageField, KeyTextField, LinkField, GroupField } from '@prismicio/client';
import { PrismicLink } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { v4 as uuidv4 } from 'uuid';

import navMenu from '../../data/preBuild/navMenu.json';
import Button from '../Button';
import ResponsiveContainer from '../ResponsiveContainer';

import css from './style.module.css';

import { FooterBlockSlice } from '@/prismicio-types';
import FooterBlock from '@/slices/FooterBlock';

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
            <label
              htmlFor="mobile-menu"
              className={clsx('relative z-[2147483647] cursor-pointer px-3 py-6 md:hidden', css.menuButton)}
            >
              <input
                aria-label="mobile menu"
                className="peer hidden"
                type="checkbox"
                id="mobile-menu"
                name="mobile-menu"
              />
              <div className="tham tham-e-squeeze tham-w-6 relative z-[2147483647] peer-checked:tham-active peer-checked:fixed peer-checked:right-[24px] peer-checked:top-[21px] peer-checked:[&>div>div]:bg-white">
                <div className="tham-box">
                  <div className="tham-inner bg-primary" />
                </div>
              </div>
              <div className="fixed right-0 top-0 z-40 h-full w-full translate-y-[-100%] overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-y-[0%]">
                <div className="float-right h-full w-full bg-primary px-4 pb-4 pt-[6px] shadow-2xl">
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex flex-col gap-6">
                      {isFilled.image(navMenu.logo) && <PrismicNextImage className="w-[220px]" field={navMenu.logo} />}
                      <div id="weglot-mobile-container" />
                      {navMenu.slices.map((slice, idx) => (
                        <FooterBlock
                          key={uuidv4()}
                          slice={slice as FooterBlockSlice}
                          index={idx}
                          slices={[]}
                          context={null}
                        />
                      ))}
                    </div>
                    {navMenu.ctas.length > 0 && (
                      <div className="flex flex-row flex-wrap">
                        {navMenu.ctas.map((cta) => {
                          const { link, label, icon } = cta;
                          return (
                            <Button key={uuidv4()} variation="btn-secondary" link={link} label={label} icon={icon} />
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  );
}
