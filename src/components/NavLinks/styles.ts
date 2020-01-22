import styled, { css } from 'styled-components';

import { mediaQuery } from '../../theme/mediaQuery';

export const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${mediaQuery.desktop(css`
    flex-direction: row;

    a {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }
  `)};
`;
