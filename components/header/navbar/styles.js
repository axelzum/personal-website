import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 35px;
    height: 3px;
    background-color: ${({ isOpen }) => (isOpen ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s ease;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledMainNav = styled.ul`
  list-style-type: none;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin: -4px;
  background: white;
  align-items: center;
  font-weight: bold;
  font-size: large;

  box-shadow: 0 5px 5px 0 rgba(41, 41, 41, 0.25);
  -webkit-box-shadow: 0 5px 5px 0 rgba(41, 41, 41, 0.25);
  -moz-box-shadow: 0 5px 5px 0 rgba(41, 41, 41, 0.25);

  li {
    padding: 15px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
    background: transparent;

    box-shadow: 0 0;
    -webkit-box-shadow: 0 0;
    -moz-box-shadow: 0 0;

    li {
      margin: 0;
      padding: 0 0 0 30px;
    }
  }

  .active {
    color: ${(props) => props.theme.colors.primary};
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 3px;
  }

  a {
    text-decoration: underline;
    text-decoration-color: transparent;
    text-decoration-thickness: 0;
    text-underline-offset: 0;
    transition: text-decoration-color 0.3s ease, text-underline-offset 0.3s ease;
  }
  
  a:hover {
    color: ${(props) => props.theme.colors.primary};
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 8px;
    transition: 0.3s ease;
  }
`;

export { StyledBurger, StyledMainNav };
