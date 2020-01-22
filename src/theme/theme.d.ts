import 'styled-components';

import { borderRadius, breakpoints, spacing, transition, zIndex } from './base';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: typeof borderRadius;
    breakpoints: typeof breakpoints;
    spacing: typeof spacing;
    transition: typeof transition;
    zIndex: typeof zIndex;
  }
}
