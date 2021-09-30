import Image from 'next/image';

import HeaderNavbar from './header-navbar';
import { ImageContainer, StyledHeader, StyledNameContainer } from './styles';

const Header = () => (
  <StyledHeader>
    <ImageContainer>
      <Image height={10} layout='responsive' src='/images/icon.jpg' width={10} />
    </ImageContainer>
    <StyledNameContainer>
      <h1>{'Axel'}</h1>
      <h1>{'Zumwalt'}</h1>
    </StyledNameContainer>
    <HeaderNavbar />
  </StyledHeader>
);

export default Header;
