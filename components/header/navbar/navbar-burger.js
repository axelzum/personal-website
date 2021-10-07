import {useState} from 'react';

import RightNav from './navbar';
import { StyledBurger } from './styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <>
      <StyledBurger onClick={handleToggle} open={open}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Navbar;
