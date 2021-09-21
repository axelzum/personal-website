import Link from 'next/link';
import styled from 'styled-components';

const StyledLinkContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

const StyledNavbarContainer = styled.div`
  padding-right: 253px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const HeaderNavbar = () => (
    <StyledNavbarContainer>
      <StyledLinkContainer>
        <Link href="/">
          <a>{'Home'}</a>
        </Link>
      </StyledLinkContainer>
      <StyledLinkContainer>
        <Link href="/work-experience">
          <a>{'Work Experience'}</a>
        </Link>
      </StyledLinkContainer>
      <StyledLinkContainer>
        <Link href="/activities">
          <a>{'Activities and Interests'}</a>
        </Link>
      </StyledLinkContainer>
      <StyledLinkContainer>
        <Link href="/projects">
          <a>{'Projects'}</a>
        </Link>
      </StyledLinkContainer>
    </StyledNavbarContainer>
  )
;

export default HeaderNavbar;
