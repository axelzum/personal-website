import styled from 'styled-components';

import Header from './header/header';
import Footer from './footer/footer';

const StyledLayout = styled.div`
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <StyledLayout>{children}</StyledLayout>
    <Footer />
  </>
);

export default Layout;
