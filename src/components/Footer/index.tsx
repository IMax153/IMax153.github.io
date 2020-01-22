import React from 'react';
import { MarkGithub } from 'styled-icons/octicons/MarkGithub';

import { Anchor } from '../Anchor';
import { StyledFooter, StyledContactDetails, StyledSocialLinks } from './styles';

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <StyledFooter id="contact">
      <StyledContactDetails>
        <h2>Maxwell Brown</h2>
        <p>maxwellbrown1990@gmail.com</p>
      </StyledContactDetails>
      <StyledSocialLinks>
        <Anchor
          href="https://github.com/IMax153"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow me on Github"
        >
          <MarkGithub size="32" />
        </Anchor>
      </StyledSocialLinks>
    </StyledFooter>
  );
};
