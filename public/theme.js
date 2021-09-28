import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#223286',
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}> {children}</ThemeProvider>;

export default Theme;
