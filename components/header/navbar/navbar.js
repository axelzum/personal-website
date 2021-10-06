import Link from 'next/link';

import { StyledNavbar, StyledRightNav } from './styles';

const Navbar = ({ open }) => (
  <StyledNavbar>
    <StyledRightNav open={open}>
      <li>
        <Link href='/'>
          <a>{'Home'}</a>
        </Link>
      </li>
      <li>
        <Link href='/work-experience'>
          <a>{'Work Experience'}</a>
        </Link>
      </li>
      <li>
        <Link href='/activities'>
          <a>{'Activities and Interests'}</a>
        </Link>
      </li>
      <li>
        <Link href='/projects'>
          <a>{'Projects'}</a>
        </Link>
      </li>
    </StyledRightNav>
  </StyledNavbar>
);

export default Navbar;
