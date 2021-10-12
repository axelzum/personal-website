import styled from 'styled-components';

const StyledTitleBox = styled.div`
  text-align: center;

  h1 {
    font-size: 4vh;
    color: ${(props) => props.theme.colors.primary};
  }

  h2 {
    font-size: 3vh;
  }

  h3 {
    font-size: 2.3vh;
  }
`;

const StyledInfoPageContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export { StyledTitleBox, StyledInfoPageContainer };
