import styled, { css } from 'styled-components';

import { mediaQuery } from '../../theme/mediaQuery';

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  margin-bottom: 2rem;

  ${mediaQuery.desktop(css`
    flex-direction: row;
    padding: 4rem 0;
    margin-bottom: 4rem;
  `)};
`;

export const StyledHeroDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.4;

  h1 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h4 {
    color: #5f738c;
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  ${mediaQuery.tablet(css`
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    h4 {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }
  `)};

  ${mediaQuery.desktop(css`
    align-items: flex-start;
    text-align: start;

    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    h4 {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  `)};
`;

export const StyledHeroImage = styled.div`
  flex: 1;
  margin-top: 2rem;

  ${mediaQuery.largeMobile(css`
    width: 100%;
    margin-top: 0;
  `)}

  img {
    width: 100%;
  }
`;
