import { useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const getCurrentTheme = () => {
  if (!isBrowser) {
    return true;
  }
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme') === 'true';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const onThemeChange = () => {
    setIsDarkTheme((prevState) => !prevState);
    localStorage.setItem('theme', `${!isDarkTheme}`);
  };

  return { isDarkTheme, onThemeChange };
};
