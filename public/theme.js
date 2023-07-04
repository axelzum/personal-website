import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#223286',
    primaryLight: '#223286D9',
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}> {children}</ThemeProvider>;

export default Theme;
