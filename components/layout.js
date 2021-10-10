import styled from 'styled-components';

import Header from './header/header';
import Footer from './footer/footer';

const StyledLayout = styled.div`
  padding: 0 1rem;
  margin: 10vh auto auto;
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout = ({ children }) => (
  <StyledFlexWrapper>
    <Header />
    <StyledLayout>{children}</StyledLayout>
    <Footer />
  </StyledFlexWrapper>
);

export default Layout;
