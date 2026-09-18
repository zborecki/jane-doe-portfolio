import { ResponseAPI } from '@/types/api/common';
import { Nullable } from '@/types/common';

export type MetadataAPI = {
  description?: Nullable<string>;
  keywords?: Nullable<string[]>;
  title: string;
}

export type MetadataResponseAPI = ResponseAPI<MetadataAPI>;
