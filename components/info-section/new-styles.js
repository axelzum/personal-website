import styled from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 30px;
  align-items: center;
  //margin-bottom: 20px;
`;

const StyledSectionCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};


  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    max-height: none;
    align-items: center;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const StyledSectionHeader = styled.h2`
  font-weight: bolder;
  margin: 0;
`;

const StyledSectionSubheader = styled.h3`
  font-weight: lighter;
  margin: 0;
`;

const StyledSectionDate = styled.h4`
  font-weight: lighter;
  font-style: italic;
  margin: 0;
`;

const StyledSectionDetail = styled.p``;

const StyledReadMoreButton = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;

export {
    StyledSectionCard,
    StyledSection,
    StyledTextContainer,
    StyledSectionHeader,
    StyledSectionSubheader,
    StyledSectionDate,
    StyledSectionDetail,
    StyledReadMoreButton,
};
