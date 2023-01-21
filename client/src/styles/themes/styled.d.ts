import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      logo: string;
      primary100: string;
      primary80: string;
      primary40: string;

      secondary100: string;
      secondary80: string;
      secondary40: string;

      green: string;

      smile: string;

      background: {
        '1': string;
        '2': string;
        '3': string;
      };
      text: {
        '1': string;
        '2': string;
        '3': string;
        link: string;
      };
    };
  }
}
