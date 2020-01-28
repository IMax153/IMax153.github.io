import { css } from 'styled-components';

import { DEVICE, Device, mediaQuery } from '../../../theme/mediaQuery';
import { getDisplay } from './getDisplay';

export const getViewportHideStyles = (on: Device[number][], block: boolean) => {
  return DEVICE.map(viewport =>
    viewport !== 'smallMobile' && viewport in mediaQuery
      ? css`
          ${mediaQuery[viewport](css`
            display: ${on.indexOf(viewport) !== -1 ? 'none' : getDisplay(block)};
          `)}
        `
      : viewport === 'smallMobile' &&
        on.indexOf(viewport) !== -1 &&
        css`
          display: none;
        `,
  );
};
