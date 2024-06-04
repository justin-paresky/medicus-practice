/* eslint-disable jsx-a11y/control-has-associated-label */
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { type Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import css from './style.module.css';

import Button from '@/components/Button';

/**
 * Props for `Table`.
 */
export type TableProps = SliceComponentProps<Content.TableSlice>;

/**
 * Component for "Table" Slices.
 */
const Table = ({ slice }: TableProps): JSX.Element => {
  const {
    primary: { title, description, link, label, variation },
    items,
  } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        'flex flex-col gap-[25px] overflow-x-auto bg-cover bg-no-repeat px-5 py-12 md:flex-row md:gap-[50px] lg:px-[100px] lg:py-[100px]',
        css.tableContainer
      )}
    >
      <div className="flex w-[100%] flex-col gap-5">
        {isFilled.richText(title) && (
          <div className="text-primary">
            <PrismicRichText field={title} />
          </div>
        )}
        {isFilled.richText(description) && <PrismicRichText field={description} />}
        {isFilled.keyText(label) && isFilled.link(link) && (
          <div className="flex flex-row justify-end">
            <Button link={link} label={label} variation={variation} />
          </div>
        )}
        <table className={css.table}>
          <thead className="text-primary">
            <tr>
              <th>
                <PrismicRichText field={items[0].col1} />
              </th>
              <th className="bg-gray">
                <PrismicRichText field={items[0].col2} />
              </th>
              <th className="bg-gray">
                <PrismicRichText field={items[0].col3} />
              </th>
              <th className="bg-gray">
                <PrismicRichText field={items[0].col4} />
              </th>
              <th className="bg-gray">
                <PrismicRichText field={items[0].col5} />
              </th>
            </tr>
          </thead>
          <tbody>
            {items.slice(1, items.length).map((item) => {
              return (
                <tr key={uuidv4()}>
                  <td className="bg-gray">
                    <PrismicRichText field={item.col1} />
                  </td>
                  <td className="bg-primary">
                    <PrismicRichText field={item.col2} />
                  </td>
                  <td className="bg-gray">
                    <PrismicRichText field={item.col3} />
                  </td>
                  <td className="bg-gray">
                    <PrismicRichText field={item.col4} />
                  </td>
                  <td className="bg-gray">
                    <PrismicRichText field={item.col5} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
