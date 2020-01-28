import styled, { css } from 'styled-components';
import { mediaQuery } from '../../theme/mediaQuery';

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem;

  ${mediaQuery.desktop(css`
    max-width: 960px;
    padding: 1.5rem 0;
  `)};
`;

export const StyledNavbarLogo = styled.div`
  font-size: 1.25rem;

  ${mediaQuery.largeMobile(css`
    font-size: 1.5rem;
  `)};
`;
