import Link from 'next/link';
import styled from 'styled-components';

const StyledLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;
`;

const HeaderNavbar = () => (
  <StyledLinkContainer>
    <Link href='/work-experience'>
      <a>{'Work Experience'}</a>
    </Link>
    <Link href='/activities'>
      <a>{'Activities and Interests'}</a>
    </Link>
    <Link href='/projects'>
      <a>{'Projects'}</a>
    </Link>
  </StyledLinkContainer>
);

export default HeaderNavbar;
