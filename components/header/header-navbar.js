import Link from 'next/link';

import { StyledLinkContainer, StyledNavbarContainer } from './styles';

const HeaderNavbar = () => (
  <StyledNavbarContainer>
    <StyledLinkContainer>
      <Link href='/'>
        <a>{'Home'}</a>
      </Link>
    </StyledLinkContainer>
    <StyledLinkContainer>
      <Link href='/work-experience'>
        <a>{'Work Experience'}</a>
      </Link>
    </StyledLinkContainer>
    <StyledLinkContainer>
      <Link href='/activities'>
        <a>{'Activities and Interests'}</a>
      </Link>
    </StyledLinkContainer>
    <StyledLinkContainer>
      <Link href='/projects'>
        <a>{'Projects'}</a>
      </Link>
    </StyledLinkContainer>
  </StyledNavbarContainer>
);

export default HeaderNavbar;
