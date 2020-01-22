import styled, { css } from 'styled-components';

import { mediaQuery } from '../../theme/mediaQuery';

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 14rem 0 4rem 0;
  text-align: center;

  ${mediaQuery.desktop(css`
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    padding: 28rem 0 4rem 0;
  `)};
`;

export const StyledContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  p {
    margin: 0 0.5rem;

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }

  ${mediaQuery.largeMobile(css`
    align-items: flex-start;
  `)};
`;

export const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${mediaQuery.largeMobile(css`
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 2rem;
  `)};
`;
