import styled from 'styled-components';

const StyledHeader = styled.header`
  max-width: 100%;
  border-bottom: 1px solid;
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 1;
  max-height: 10vh;
`;

const StyledNameContainer = styled.div`
  padding-left: 2vh;

  h1 {
    font-size: 3.7vh;
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const ImageContainer = styled.div`
  max-width: 10vh;
  min-width: 10vh;
  width: 100%;
`;

const StyledNav = styled.nav`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    align-items: center;
  }
`;

const StyledNavbarToggle = styled.div`
  position: absolute;
  top: 2.5vh;
  right: 2vw;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledLogo = styled.a`
  cursor: pointer;
  flex-shrink: 0;

  div {
    display: inline-block;
    vertical-align: middle;
  }
`;

export { ImageContainer, StyledHeader, StyledNameContainer, StyledNav, StyledNavbarToggle, StyledLogo };
