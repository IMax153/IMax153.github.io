import { KeysOf } from './KeysOf';

export type ValuesOf<T extends Record<any, any>> = T[KeysOf<T>];
