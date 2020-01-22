import styled from 'styled-components';

import { Device } from '../../../theme/mediaQuery';
import { getViewportHideStyles } from '../helpers';

interface Props {
  on: Device[number][];
  block: boolean;
}

export const StyledHide = styled.span<Props>`
  ${({ on, block }) => getViewportHideStyles(on, block)};
`;
