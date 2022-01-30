import Link from 'next/link';

import {StyledMainNav} from './styles';

const Navbar = ({isOpen, linkClicked}) => (
  <StyledMainNav isOpen={isOpen}>
    {/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    <li>
      <Link href='/'>
        <a onClick={linkClicked}>{'Home'}</a>
      </Link>
    </li>
    <li>
      <Link href='/experience'>
        <a onClick={linkClicked}>{'Experience'}</a>
      </Link>
    </li>
    <li>
      <Link href='/projects'>
        <a onClick={linkClicked}>{'Projects'}</a>
      </Link>
    </li>
    <li>
      <Link href='/activities'>
        <a onClick={linkClicked}>{'Activities and Interests'}</a>
      </Link>
    </li>
    {/* eslint-enable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
  </StyledMainNav>
);

export default Navbar;
