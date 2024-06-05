/* eslint-disable @shopify/jsx-no-hardcoded-content */
'use client';

import { useState } from 'react';
import clsx from 'clsx';
import {
  isFilled,
  ImageField,
  KeyTextField,
  LinkField,
  GroupField,
  AnyRegularField,
  ImageFieldImage,
} from '@prismicio/client';
import { PrismicLink } from '@prismicio/react';
import { Menu, MenuItem } from '@mui/material';
import { Language } from '@mui/icons-material';
import { PrismicNextImage } from '@prismicio/next';

import Button from '../Button';
import ResponsiveContainer from '../ResponsiveContainer';

import css from './style.module.css';

export interface GlobalHeaderProps {
  logo?: ImageField;
  locales?: GroupField;
  ctas?: GroupField;
  homeLink?: LinkField;
}

export default function GlobalHeader({ logo, locales, ctas, homeLink }: GlobalHeaderProps) {
  const [anchorElLocale, setAnchorElLocale] = useState<HTMLButtonElement | null>(null);
  const [selectedLocale, setSelectedLocale] = useState<Record<string, AnyRegularField> | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleCloseLocale = () => {
    setAnchorElLocale(null);
  };

  const handleLocaleClick = (locale: Record<string, AnyRegularField>) => {
    setSelectedLocale(locale);
    setAnchorElLocale(null);
  };

  const renderLocaleAvatar = () => {
    return selectedLocale ? (
      <PrismicNextImage
        className="h-[20px] w-[20px] rounded-badge md:h-[32px] md:w-[32px]"
        field={selectedLocale.flag as ImageFieldImage}
      />
    ) : (
      <Language className="!h-[20px] !w-[20px] rounded-badge md:!h-[32px] md:!w-[32px]" />
    );
  };

  return (
    <header className="fixed z-50 w-full border-b border-[#000000] bg-[#ffffff]">
      <ResponsiveContainer>
        <div className="flex w-[100%] flex-row items-center justify-between px-3 py-3 lg:px-[100px] lg:py-5">
          {isFilled.image(logo) && (
            <PrismicLink field={homeLink}>
              <PrismicNextImage className="h-[40px] w-[220px] md:h-[52px] md:w-[278px]" field={logo} />
            </PrismicLink>
          )}
          <div className="flex flex-row items-center gap-7">
            {isFilled.group(locales) && (
              <>
                <button
                  type="button"
                  className="flex flex-row items-center gap-2 text-primary"
                  onClick={(event) => setAnchorElLocale(event.currentTarget)}
                >
                  {renderLocaleAvatar()}
                  {selectedLocale && (
                    <div className="font-sans font-semibold uppercase text-primary">
                      {selectedLocale.shortLabel as string}
                    </div>
                  )}
                </button>
                <Menu
                  open={Boolean(anchorElLocale)}
                  anchorEl={anchorElLocale}
                  onClose={handleCloseLocale}
                  disableScrollLock
                >
                  {locales.map((locale) => {
                    return (
                      <MenuItem onClick={() => handleLocaleClick(locale)} key={locale.key as string}>
                        {locale.label as string}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            )}
            {isFilled.group(ctas) && (
              <div className="hidden md:block">
                {ctas.map((cta) => {
                  const { label, link, icon } = cta;
                  return (
                    <Button
                      variation="btn-primary"
                      key={label as string}
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
              <div className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">Test</div>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  );
}
