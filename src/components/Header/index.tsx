import React from 'react';
import { DarkMode, LightMode } from '@styled-icons/material-twotone';

import 'react-toggle/style.css';

import {
  StyledHeader,
  StyledLink,
  StyledTitleLink,
  StyledNav,
  StyledToggle,
} from './Header.styled';

function Header({
  isDarkTheme,
  onThemeChange,
}: {
  isDarkTheme: boolean;
  onThemeChange: () => void;
}) {
  return (
    <StyledHeader>
      <StyledTitleLink to="/">DevThinking</StyledTitleLink>
      <StyledNav>
        <li>
          <StyledLink as="a" href="https://github.com/ErnestTeluk">
            Github
          </StyledLink>
        </li>
        <StyledToggle
          defaultChecked={isDarkTheme}
          icons={{
            checked: <DarkMode />,
            unchecked: <LightMode />,
          }}
          onChange={onThemeChange}
        />
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
