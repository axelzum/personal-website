import styled from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  border-bottom: 0.5px solid;

  &:hover {
    background: lightgray;
  }
`;

const StyledSectionTitle = styled.div`
`;

const StyledSectionHeader = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`;

const StyledSectionSubheader = styled.i`
  font-size: 1.17em;
`;

const StyledDate = styled.h3`
  font-weight: bolder;
  margin-left: auto;
  margin-right: 1vw;
`;

const StyledDropdownArrow = styled.div`
  margin-right: 1vw;
`;

export { StyledSection, StyledSectionHeader, StyledSectionSubheader, StyledSectionTitle, StyledDate, StyledDropdownArrow };
