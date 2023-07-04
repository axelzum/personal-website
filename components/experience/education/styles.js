import styled from 'styled-components';

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

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

const StyledEducationTextContainer = styled.div`
    margin: 20px;
  
  h2, h4 {
    margin: 0;
  }
`;

export { StyledEducationTitle, StyledEducationInfoConatiner, StyledEducationTextContainer };
