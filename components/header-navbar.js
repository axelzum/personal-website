import Link from 'next/link';
import styled from 'styled-components';

const StyledLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const HeaderNavbar = () => (
  <StyledLinkContainer>
    <Link href='/posts/work-experience'>
      <a>{'Work Experience'}</a>
    </Link>
    <Link href='/posts/activities'>
      <a>{'Activities and Interests'}</a>
    </Link>
    <Link href='/posts/projects'>
      <a>{'Projects'}</a>
    </Link>
  </StyledLinkContainer>
);

export default HeaderNavbar;
