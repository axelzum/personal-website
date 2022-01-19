import Link from 'next/link';

import { StyledMainNav } from './styles';

const Navbar = ({ open }) => (
  <StyledMainNav open={open}>
    <li>
      <Link href='/'>
        <a>{'Home'}</a>
      </Link>
    </li>
    <li>
      <Link href='/experience'>
        <a>{'Experience'}</a>
      </Link>
    </li>
    <li>
      <Link href='/projects'>
        <a>{'Projects'}</a>
      </Link>
    </li>
    <li>
      <Link href='/activities'>
        <a>{'Activities and Interests'}</a>
      </Link>
    </li>
  </StyledMainNav>
);

export default Navbar;
