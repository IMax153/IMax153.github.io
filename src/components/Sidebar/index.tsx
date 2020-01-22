import React, { useCallback, useRef } from 'react';

import { NavLinks } from '../NavLinks';
import { StyledSidebar, StyledSidebarOverlay } from './styles';

interface Props {
  shown: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<Props> = ({ shown, onClose }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleOnClose = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );
  return (
    <StyledSidebarOverlay
      role="button"
      aria-hidden={!shown}
      shown={shown}
      onClick={handleOnClose}
      ref={overlayRef}
    >
      <StyledSidebar role="navigation" shown={shown}>
        <NavLinks
          links={[
            { link: 'about', onClick: onClose },
            { link: 'projects', onClick: onClose },
            { link: 'contact', onClick: onClose },
          ]}
        />
      </StyledSidebar>
    </StyledSidebarOverlay>
  );
};

Sidebar.displayName = 'Sidebar';
