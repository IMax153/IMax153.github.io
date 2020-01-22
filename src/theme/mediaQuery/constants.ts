import { ValuesOf } from '../../utils/types';

export const DEVICE = [
  'smallMobile',
  'mediumMobile',
  'largeMobile',
  'tablet',
  'desktop',
  'largeDesktop',
] as const;

export type Device = typeof DEVICE;

export const BREAKPOINT = {
  LARGE_DESKTOP: 'largeDesktop',
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  LARGE_MOBILE: 'largeMobile',
  MEDIUM_MOBILE: 'mediumMobile',
} as const;

export type Breakpoint = ValuesOf<typeof BREAKPOINT>;

export type MediaQueryCallback = (style: any) => any;

export type MediaQuery = { [key in Breakpoint]: MediaQueryCallback };
