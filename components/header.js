import styled from 'styled-components';
import HeaderNavbar from './header-navbar';

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => (
  <StyledHeader>
    <HeaderNavbar />
  </StyledHeader>
);

export default Header;
