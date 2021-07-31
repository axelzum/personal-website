import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const StyledLayout = styled.div`
  //max-width: 36rem;
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
