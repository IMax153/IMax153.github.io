import React from 'react';

import { Hide } from '../Hide';

interface Props {}

export const Desktop: React.FC<Props> = ({ children }) => {
  return <Hide on={['smallMobile', 'mediumMobile', 'largeMobile', 'tablet']}>{children}</Hide>;
};

Desktop.displayName = 'Desktop';
