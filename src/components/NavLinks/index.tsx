import React from 'react';

import { Anchor } from '../Anchor';
import { StyledNavLinks } from './styles';

interface NavLink {
  link: string;
  onClick?: () => void;
}

interface Props {
  links: NavLink[];
}

export const NavLinks: React.FC<Props> = ({ links }) => {
  const capitalize = (str: string) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  return (
    <StyledNavLinks>
      {links.map(({ link, onClick }) => (
        <Anchor key={link} href={`#${link}`} onClick={onClick}>
          {capitalize(link)}
        </Anchor>
      ))}
    </StyledNavLinks>
  );
};
