import Link from 'next/link';
import { useRouter } from 'next/router';

import { StyledMainNav } from './styles';

const Navbar = ({ isOpen, linkClicked }) => {
  const router = useRouter();

  return (
    <StyledMainNav isOpen={isOpen}>
      {/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <li>
        <Link href='/'>
          <a className={router.pathname === '/' ? 'active' : 'no'} onClick={linkClicked}>
            {'Home'}
          </a>
        </Link>
      </li>
      <li>
        <Link href='/experience'>
          <a className={router.pathname === '/experience' ? 'active' : 'no'} onClick={linkClicked}>
            {'Experience'}
          </a>
        </Link>
      </li>
      <li>
        <Link href='/projects'>
          <a className={router.pathname === '/projects' ? 'active' : ''} onClick={linkClicked}>
            {'Projects'}
          </a>
        </Link>
      </li>
      <li>
        <Link href='/activities'>
          <a className={router.pathname === '/activities' ? 'active' : ''} onClick={linkClicked}>
            {'Activities and Interests'}
          </a>
        </Link>
      </li>
      {/* eslint-enable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    </StyledMainNav>
  );
};

export default Navbar;
