import React, { useCallback, useState } from 'react';
import { ThreeBars } from 'styled-icons/octicons/ThreeBars';

import { IconButton } from '../IconButton';
import { Mobile } from '../Mobile';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';

interface Props {}

export const Header: React.FC<Props> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(isOpen => !isOpen);
  }, []);

  return (
    <Navbar>
      <Mobile>
        <Sidebar shown={sidebarOpen} onClose={toggleSidebar} />
        <IconButton
          title="Menu"
          ariaLabelledBy="menu-button-label"
          size="24"
          icon={ThreeBars}
          onClick={toggleSidebar}
        />
      </Mobile>
    </Navbar>
  );
};
