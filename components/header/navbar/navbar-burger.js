import { useState } from 'react';

import RightNav from './navbar';
import { StyledBurger } from './styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger onClick={() => setOpen(!open)} open={open}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Navbar;
