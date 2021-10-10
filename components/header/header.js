import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import NavbarBurger from './navbar/navbar-burger';
import Navbar from './navbar/navbar';
import { ImageContainer, StyledHeader, StyledLogo, StyledNameContainer, StyledNav, StyledNavbarToggle } from './styles';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <StyledHeader>
      <StyledNav>
        <Link href='/'>
          <StyledLogo>
            <ImageContainer>
              <Image height={10} layout='responsive' src='/images/icon.jpg' width={10} />
            </ImageContainer>
            <StyledNameContainer>
              <h1>{'Axel'}</h1>
              <h1>{'Zumwalt'}</h1>
            </StyledNameContainer>
          </StyledLogo>
        </Link>
        <Navbar open={open} />
        <StyledNavbarToggle onClick={handleToggle}>
          <NavbarBurger open={open} />
        </StyledNavbarToggle>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
