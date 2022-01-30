import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 1;

  @media screen and (min-width: 768px) {
    box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
  }

  box-shadow: ${({ isOpen }) => (isOpen ? '0' : '0px 0px 9px 3px rgba(41,41,41,.25)')};
  -webkit-box-shadow: ${({ isOpen }) => (isOpen ? '0' : '0px 0px 9px 3px rgba(41,41,41,.25)')};
  -moz-box-shadow: ${({ isOpen }) => (isOpen ? '0' : '0px 0px 9px 3px rgba(41,41,41,.25)')};
`;

const StyledNameContainer = styled.div`
  padding-left: 10px;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  h1 {
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledNav = styled.nav`
  max-width: 1400px;
  margin: auto
;
  
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    align-items: center;
  }
`;

const StyledNavbarToggle = styled.div`
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledLogoLink = styled.a`
  cursor: pointer;

  div {
    display: inline-block;
    vertical-align: middle;
  }
`;

export { StyledHeader, StyledNameContainer, StyledNav, StyledNavbarToggle, StyledLogoLink };
