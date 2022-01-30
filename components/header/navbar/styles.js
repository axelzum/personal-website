import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 50px;
    height: 3px;
    background-color: ${({isOpen}) => (isOpen ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({isOpen}) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({isOpen}) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({isOpen}) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({isOpen}) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledMainNav = styled.ul`
  list-style-type: none;
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  margin: 0;
  background: white;
  align-items: center;

  box-shadow: 0px 5px 5px 0px rgba(41, 41, 41, 0.25);
  -webkit-box-shadow: 0px 5px 5px 0px rgba(41, 41, 41, 0.25);
  -moz-box-shadow: 0px 5px 5px 0px rgba(41, 41, 41, 0.25);

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

    box-shadow: 0px 0px;
    -webkit-box-shadow: 0px 0px;
    -moz-box-shadow: 0px 0px;

    li {
      margin: 0;
      padding: 0 0 0 30px;
    }
  }

  .active {
    color: ${(props) => props.theme.colors.primary};
    font-size: 19px;
  }
  
  a:hover {
    color: ${(props) => props.theme.colors.primary};
    font-size: 19px;
    transition: 0.2s ease;
  }
`;

export {StyledBurger, StyledMainNav};
