import { css } from 'styled-components';
import { KeysOf } from '../../utils/types';

import { WithTheme } from '../index';
import { BREAKPOINT, Breakpoint, MediaQuery } from './constants';

interface Props {
  breakpoint: Breakpoint;
  pure?: boolean;
}

export const getBreakpointWidth = ({ theme, breakpoint, pure }: WithTheme<Props>) => {
  const breakpoints = {
    [BREAKPOINT.MEDIUM_MOBILE]: theme.breakpoints.mediumMobile,
    [BREAKPOINT.LARGE_MOBILE]: theme.breakpoints.largeMobile,
    [BREAKPOINT.TABLET]: theme.breakpoints.tablet,
    [BREAKPOINT.DESKTOP]: theme.breakpoints.desktop,
    [BREAKPOINT.LARGE_DESKTOP]: theme.breakpoints.largeDesktop,
  };

  if (pure) return breakpoints[breakpoint];

  return `(min-width: ${breakpoints[breakpoint]}px)`;
};

export const mediaQuery = (Object.keys(BREAKPOINT) as KeysOf<typeof BREAKPOINT>[]).reduce(
  (acc, breakpoint) => ({
    ...acc,
    [BREAKPOINT[breakpoint]]: (style: any) => css`
      @media ${({ theme }) => getBreakpointWidth({ theme, breakpoint: BREAKPOINT[breakpoint] })} {
        ${style}
      }
    `,
  }),
  {} as MediaQuery,
);

export * from './constants';
