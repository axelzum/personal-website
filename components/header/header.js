import styled from 'styled-components';
import Image from 'next/image';

import HeaderNavbar from './header-navbar';

const StyledHeader = styled.header`
  max-width: 100%;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
`;

const StyledNameContainer = styled.div`
  padding-left: 15px;

  h1 {
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Header = () => (
  <StyledHeader>
    <div style={{ height: 100 }}>
      <Image height={100} layout='fixed' src='/images/icon.jpg' width={100} />
    </div>
    <StyledNameContainer>
      <h1>{'Axel'}</h1>
      <h1>{'Zumwalt'}</h1>
    </StyledNameContainer>
    <HeaderNavbar />
  </StyledHeader>
);

export default Header;
