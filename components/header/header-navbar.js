import Link from 'next/link';
import styled from 'styled-components';

const StyledLinkContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

const StyledNavbarContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
`;

const HeaderNavbar = () => (
    <StyledNavbarContainer>
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
