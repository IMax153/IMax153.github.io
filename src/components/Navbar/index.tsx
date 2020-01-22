import React from 'react';

import { Anchor } from '../Anchor';
import { Desktop } from '../Desktop';
import { NavLinks } from '../NavLinks';
import { StyledNavbar, StyledNavbarLogo } from './styles';

interface Props {}

export const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <StyledNavbar>
      <StyledNavbarLogo>
        <Anchor>Maxwell Brown&lsquo;s Dev Portfolio</Anchor>
      </StyledNavbarLogo>

      <Desktop>
        <NavLinks links={[{ link: 'about' }, { link: 'projects' }, { link: 'contact' }]} />
      </Desktop>

      {children}
    </StyledNavbar>
  );
};

Navbar.displayName = 'Navbar';
