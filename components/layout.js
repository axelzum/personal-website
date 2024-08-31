import styled from 'styled-components';

import Header from './header/header';
import Footer from './footer/footer';

const StyledLayout = styled.div`
  width: 100%;
  margin: 80px 0 0 0;
  font-size: .75rem;

  @media screen and (min-width: 950px) {
    font-size: 1rem;
  }
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
