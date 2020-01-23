import React, { useCallback } from 'react';

import { StyledAnchor } from './styles';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  offset?: string | (() => number);
  external?: boolean;
}

export const Anchor: React.FC<Props> = ({ offset = () => 0, external, ...props }) => {
  const smoothScroll = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const offsetAmount = typeof offset === 'function' ? offset : () => parseInt(offset, 10);

      const id = event.currentTarget.getAttribute('href')?.slice(1);

      if (id) {
        const anchor = document.getElementById(id);

        if (anchor) {
          event.preventDefault();

          const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset;

          window.scroll({
            top: offsetTop - offsetAmount(),
            behavior: 'smooth',
          });
        }
      }

      if (props.onClick) props.onClick(event);
    },
    [offset, props.onClick], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <StyledAnchor
      {...props}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={smoothScroll}
    />
  );
};

Anchor.displayName = 'Anchor';
