import { Id } from '@/types/common';

export type ItemAPI<T> = { id: Id; } & T;

export type ResponseAPI<T> = { data: T };
