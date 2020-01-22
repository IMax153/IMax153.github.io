import React, { useCallback } from 'react';

import { StyledAnchor } from './styles';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  offset?: string | (() => number);
}

export const Anchor: React.FC<Props> = ({ offset = () => 0, onClick, ...props }) => {
  const smoothScroll = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();

      const offsetAmount = typeof offset === 'function' ? offset : () => parseInt(offset, 10);

      const id = event.currentTarget.getAttribute('href')?.slice(1);

      if (id) {
        const anchor = document.getElementById(id);

        if (anchor) {
          const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset;

          window.scroll({
            top: offsetTop - offsetAmount(),
            behavior: 'smooth',
          });
        }
      }

      if (onClick) onClick(event);
    },
    [offset, onClick],
  );

  return <StyledAnchor {...props} onClick={smoothScroll} />;
};

Anchor.displayName = 'Anchor';
