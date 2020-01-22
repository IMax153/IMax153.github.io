import { DefaultTheme } from 'styled-components';

import * as base from './base';
// import * as components from './components';

export type WithTheme<T = {}> = { theme: DefaultTheme } & T;

export const theme: DefaultTheme = {
  ...base,
  // ...components,
};
