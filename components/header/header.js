import styled from 'styled-components';
import Image from 'next/image';

import HeaderNavbar from './header-navbar';

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
`;

const StyledNameContainer = styled.div`
  padding-left: 15px;
  h1 {
    margin: 0px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Header = () => (
  <StyledHeader>
    <Image height={100} layout="fixed" src="/images/icon.jpg" width={100}/>
    <StyledNameContainer>
      <h1>{'Axel'}</h1>
      <h1>{'Zumwalt'}</h1>
    </StyledNameContainer>
    <HeaderNavbar/>
  </StyledHeader>
);

export default Header;