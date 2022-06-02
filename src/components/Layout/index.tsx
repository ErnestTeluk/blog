import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, SiteWrapper } from './Layout.styled';
import { useThemeDetector } from '../../hooks/useThemeDetector';
import { DarkTheme, LightTheme } from '../../theme';
import Header from '../Header';

function Layout({ children }: { children: ReactNode }) {
  const { isDarkTheme, onThemeChange } = useThemeDetector();

  return (
    <SiteWrapper>
      <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <Header isDarkTheme={isDarkTheme} onThemeChange={onThemeChange} />
        {children}
      </ThemeProvider>
    </SiteWrapper>
  );
}

export default Layout;
