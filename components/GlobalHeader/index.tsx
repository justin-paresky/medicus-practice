'use client';

import { useState } from 'react';
import {
  isFilled,
  ImageField,
  KeyTextField,
  LinkField,
  GroupField,
  AnyRegularField,
  ImageFieldImage,
} from '@prismicio/client';
import { Menu, MenuItem, Button as MuiButton } from '@mui/material';
import { Language, KeyboardArrowDown } from '@mui/icons-material';
import { PrismicNextImage } from '@prismicio/next';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';
import ResponsiveContainer from '../ResponsiveContainer';

interface GlobalHeaderProps {
  logo?: ImageField;
  locales?: GroupField;
  links?: GroupField;
  ctas?: GroupField;
}

export default function GlobalHeader({ logo, locales, links, ctas }: GlobalHeaderProps) {
  const [anchorElLocale, setAnchorElLocale] = useState<HTMLButtonElement | null>(null);
  const [selectedLocale, setSelectedLocale] = useState<Record<string, AnyRegularField> | null>(null);

  const handleCloseLocale = () => {
    setAnchorElLocale(null);
  };

  const handleLocaleClick = (locale: Record<string, AnyRegularField>) => {
    setSelectedLocale(locale);
    setAnchorElLocale(null);
  };

  const renderLocaleAvatar = () => {
    return selectedLocale ? (
      <PrismicNextImage className="h-[32px] w-[32px] rounded-badge" field={selectedLocale.flag as ImageFieldImage} />
    ) : (
      <Language fontSize="large" />
    );
  };

  return (
    <header className="fixed z-50 w-full border-b border-[#000000] bg-[#ffffff]">
      <ResponsiveContainer>
        <div className="flex w-[100%] flex-row items-center justify-between px-[50px] py-5 sm:px-[100px]">
          {isFilled.image(logo) && <PrismicNextImage className="h-[52px] w-[278px]" field={logo} />}
          <div className="flex flex-row items-center gap-7">
            {links?.length && (
              <div className="flex flex-col gap-2">
                {links.map((item) => {
                  const { label, link, icon } = item;
                  return (
                    <Button
                      key={uuidv4()}
                      label={label as KeyTextField}
                      link={link as LinkField}
                      icon={icon as ImageField}
                      variation="link-primary"
                    />
                  );
                })}
              </div>
            )}
            {isFilled.group(locales) && (
              <>
                <MuiButton
                  sx={{
                    padding: 0,
                    width: 60,
                    minWidth: 0,
                    display: 'inline-flex',
                    gap: '8px',
                    '&:hover': {
                      background: 'none',
                    },
                  }}
                  disableRipple
                  disableTouchRipple
                  disableFocusRipple
                  color="primary"
                  variant="text"
                  size="small"
                  onClick={(event) => setAnchorElLocale(event.currentTarget)}
                  endIcon={!selectedLocale && <KeyboardArrowDown />}
                >
                  {renderLocaleAvatar()}
                  {selectedLocale && (
                    <div className="font-sans font-semibold uppercase text-primary">
                      {selectedLocale.shortLabel as string}
                    </div>
                  )}
                </MuiButton>
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
              <>
                {ctas.map((cta) => {
                  const { label, link, icon } = cta;
                  return (
                    <Button
                      variation="btn-secondary"
                      key={label as string}
                      label={label as KeyTextField}
                      link={link as LinkField}
                      icon={icon as ImageField}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  );
}
