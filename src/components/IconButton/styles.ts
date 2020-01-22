import styled from 'styled-components';

import { hexToRgb } from '../../theme/hexToRgb';
import { transition } from '../../theme/transition';

export const StyledIconButton = styled.button.attrs(() => ({ type: 'button' }))`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.xl};
  width: ${({ theme }) => theme.spacing.xxl};
  max-width: 100%;
  background-color: #f5f7f9;
  color: inherit;
  font-size: inherit;
  line-height: 1.4;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: ${transition(['all'], 'fast')};
  text-decoration: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #e5eaef;
  }

  &:active {
    background-color: #d6dee6;
    box-shadow: inset 0 0 6px 3px ${hexToRgb('#333', 8)};
  }

  &:focus {
    box-shadow: inset 0 0 6px 3px ${hexToRgb('#333', 8)};
  }

  > svg {
    color: inherit;
  }
`;
