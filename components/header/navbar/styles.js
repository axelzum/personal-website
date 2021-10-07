import styled from 'styled-components';

const StyledNavbar = styled.nav`
  margin-left: auto;
  margin-right: 2vh;
`;

const StyledBurger = styled.div`
  width: 4vh;
  height: 4vh;
  position: absolute;
  right: 3vw;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 4vh;
    height: 0.4vh;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledRightNav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 2vh;
    text-align: center;

    a {
      font-size: 2.2vh;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.colors.primary};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 30vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease;
    z-index: 1;
    margin: 0;
    li {
      color: #fff;
      text-align: left;
    }
  }
`;

export { StyledNavbar, StyledBurger, StyledRightNav };
