'use client';

import { useGetAllExtensionsQuery } from '@/lib/redux/queries/extensionsQueries';
import ExtensionItem from './ExtensionItem';
import { Skeleton } from '@mui/material';
import { useLocale } from 'next-intl';

const ExtensionsGrid = () => {
  const locale = useLocale();
  const { data: extensions } = useGetAllExtensionsQuery(locale);

  return (
    <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-8">
      {!extensions
        ? Array.from(Array(10).keys()).map((el) => (
            <Skeleton key={el} variant="rounded" />
          ))
        : extensions.map((extension) => (
            <ExtensionItem {...extension} key={extension.id} />
          ))}
    </div>
  );
};

export default ExtensionsGrid;
