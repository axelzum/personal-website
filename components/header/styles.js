import styled from 'styled-components';

const StyledHeader = styled.header`
  max-width: 100%;
  height: 10vh;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
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

export {ImageContainer, StyledHeader, StyledNameContainer};
