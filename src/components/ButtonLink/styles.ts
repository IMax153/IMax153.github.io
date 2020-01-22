import styled from 'styled-components';

import { Anchor } from '../Anchor';

export const StyledButton = styled(Anchor)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: #0172cb;
  color: #ffffff;
  line-height: 1.4;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  appearance: none;
  cursor: pointer;

  &:hover {
    background: #0161ac;
  }

  &:active {
    background: #01508e;
  }
`;
