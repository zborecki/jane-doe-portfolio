import { ItemAPI } from '@/types/api/common';

export type LinkAPI<T extends 'labeled' | 'unlabeled'> = ItemAPI<{
  href: string;
  isExternal?: boolean;
  label: T extends 'labeled' ? string : never;
}>;
