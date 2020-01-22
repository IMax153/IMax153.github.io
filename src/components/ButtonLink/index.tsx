import React from 'react';

import { StyledButton } from './styles';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ButtonLink: React.FC<Props> = ({ onClick, ...props }) => {
  return <StyledButton {...props} />;
};

ButtonLink.displayName = 'ButtonLink';
