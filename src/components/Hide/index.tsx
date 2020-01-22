import React from 'react';

import { Device } from '../../theme/mediaQuery';
import { StyledHide } from './styles';

interface Props {
  on?: Device[number][];
  block?: boolean;
}

export const Hide: React.FC<Props> = ({ on = [], block = true, children }) => {
  return (
    <StyledHide on={on} block={block}>
      {children}
    </StyledHide>
  );
};

Hide.displayName = 'Hide';
