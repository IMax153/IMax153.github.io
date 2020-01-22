import styled, { css } from 'styled-components';

import { mediaQuery } from '../../theme/mediaQuery';
import { transition } from '../../theme/transition';

export const ProjectsContainer = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8fr;
  gap: 1rem;
  align-items: center;

  ${mediaQuery.tablet(css`
    grid-template-columns: repeat(2, 1fr);
  `)};

  ${mediaQuery.largeMobile(css`
    grid-template-columns: repeat(3, 1fr);
  `)};
`;

export const Repository = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  transition: ${transition(['box-shadow'], 'fast')};

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const RepositoryCard = styled.div`
  padding: 1rem;
  background: #fff;
  height: 100%;
`;

export const RepositoryContent = styled.div`
  padding: 0 0 1rem 0;

  a {
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: #5f738c;
    font-size: 0.8rem;
  }
`;

export const RepositoryStats = styled.div`
  display: flex;
  align-items: center;
`;

export const RepositoryStat = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-right: 0.5rem;
  }

  p {
    margin-left: 0.25rem;
    margin-bottom: 0;
  }
`;
