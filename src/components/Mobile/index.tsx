import React from 'react';

import { Hide } from '../Hide';

interface Props {}

export const Mobile: React.FC<Props> = ({ children }) => {
  return <Hide on={['desktop', 'largeDesktop']}>{children}</Hide>;
};

Mobile.displayName = 'Mobile';
