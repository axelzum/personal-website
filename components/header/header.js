import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import NavbarBurger from './navbar/navbar-burger';
import Navbar from './navbar/navbar';
import { StyledHeader, StyledLogoLink, StyledNameContainer, StyledNav, StyledNavbarToggle } from './styles';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <StyledHeader open={open}>
      <StyledNav>
        <Link href='/'>
          <StyledLogoLink>
            <Image height={80} layout='fixed' src='/images/logos/icon.jpg' width={80} />
            <StyledNameContainer>
              <h1>{'Axel'}</h1>
              <h1>{'Zumwalt'}</h1>
            </StyledNameContainer>
          </StyledLogoLink>
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
