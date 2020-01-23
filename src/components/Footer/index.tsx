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
        <p>
          Icon made by{' '}
          <Anchor
            title="Prettycons profile page"
            href="https://www.flaticon.com/authors/prettycons"
            external
          >
            Prettycons
          </Anchor>{' '}
          from{' '}
          <Anchor title="Flaticon website" href="https://www.flaticon.com/" external>
            www.flaticon.com
          </Anchor>
        </p>
      </StyledContactDetails>
      <StyledSocialLinks>
        <Anchor title="Follow me on Github" href="https://github.com/IMax153" external>
          <MarkGithub size="32" />
        </Anchor>
      </StyledSocialLinks>
    </StyledFooter>
  );
};
