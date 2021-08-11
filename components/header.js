import styled from 'styled-components';
import HeaderNavbar from './header-navbar';
import Image from 'next/image';

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => (
  <>
    <Image height={50} src='/images/icon.jpg' width={50} />
    <StyledHeader>
      <HeaderNavbar />
    </StyledHeader>
  </>
);

export default Header;
