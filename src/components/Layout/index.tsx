import '../../utils/polyfills';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';
import { CssReset, Main } from './styles';
import { Header } from '../Header';
import { SEO } from '../SEO';

interface Props {
  title: string;
}

export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssReset />
      <SEO title={title} />
      <Header />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

Layout.displayName = 'Layout';
