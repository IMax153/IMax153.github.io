import React from 'react';
import { StyledIconProps } from 'styled-icons/types';

import { StyledIconButton } from './styles';

interface Props extends Omit<StyledIconProps, 'focusable' | 'onClick'> {
  icon: React.ElementType<StyledIconProps>;
  ariaLabelledBy: string;
  title: string;
  onClick?: () => void;
}

export const IconButton: React.FC<Props> = ({
  icon: Icon,
  ariaLabelledBy,
  title,
  onClick,
  ...props
}) => {
  return (
    <StyledIconButton aria-labelledby={ariaLabelledBy} onClick={onClick}>
      <span id={ariaLabelledBy} hidden>
        {title}
      </span>

      <Icon {...props} focusable={false} />
    </StyledIconButton>
  );
};

IconButton.displayName = 'IconButton';
