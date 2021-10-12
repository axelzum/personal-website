import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 5vh;
  height: 5vh;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 5vh;
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

const StyledMainNav = styled.ul`
  list-style-type: none;
  display: ${({ open }) => (open ? 'block' : 'none')};
  margin: 0;
  background: white;
  align-items: center;

  li {
    padding: 1.5vh;
    text-align: center;

    a {
      font-size: 2.2vh;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;

    li {
      margin: 0;
      padding: 0 0 0 4vh;
    }
  }
`;

export { StyledBurger, StyledMainNav };
