import styled from 'styled-components';

const StyledTitleBox = styled.div`
  text-align: center;
  background: ${(props) => props.theme.colors.primaryLight};
  color: white;
  padding: 5px;
`;

const StyledInfoPageContainer = styled.div`
  max-width: 1400px;
  display: block;
  flex-shrink: 0;
  justify-content: center;
  margin: auto;
`;

const StyledEducationTitle = styled.div`
  text-align: center;
  margin: 20px;
  
  h2, h3 {
    margin: 0;
  }
`;

const StyledEducationInfoConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledTitleBox, StyledInfoPageContainer, StyledEducationTitle, StyledEducationInfoConatiner };
