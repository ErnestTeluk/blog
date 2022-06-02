import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      textTitle: string;
      textLink: string;
    };
    fontWeight: {
      thin: number;
      regular: number;
      medium: number;
      bold: number;
    };
    fontFamily: {
      lato: string;
      firaCode: string;
    };
    fontSize: {
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  }
}
