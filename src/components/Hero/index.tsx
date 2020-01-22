import React from 'react';

import codeThinkingIllustration from '../../assets/code-thinking.png';
import { ButtonLink } from '../ButtonLink';
import { StyledHero, StyledHeroDetails, StyledHeroImage } from './styles';

interface Props {}

export const Hero: React.FC<Props> = () => {
  return (
    <StyledHero id="about">
      <StyledHeroDetails>
        <h1>Hello there!</h1>
        <h4>I&lsquo;m Max and I&lsquo;m a pharmacist and full-stack web developer.</h4>
        <ButtonLink href="#contact">Get in touch</ButtonLink>
      </StyledHeroDetails>

      <StyledHeroImage>
        <img
          src={codeThinkingIllustration}
          alt="I'm Max and I'm a pharmacist and full-stack web developer."
        />
      </StyledHeroImage>
    </StyledHero>
  );
};
