import styled, { css } from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  border-bottom: 0.5px solid;

  &:hover {
    background: lightgray;
  }
`;

const StyledTextGrid = styled.div`
  display: grid;
  grid-template-columns: 50vw 20vw;
  grid-column-gap: 1vw;
  align-items: center;
`;

const StyledSectionHeader = styled.p`
  font-size: 3vh;
  font-weight: bold;
  margin: 0;
`;

const StyledSectionSubheader = styled.p`
  font-size: 2.3vh;
  font-style: italic;
  margin: 0;
`;

const StyledDate = styled.p`
  font-size: 3vh;
  font-weight: bolder;
`;

const StyledDropdownArrow = styled.div`
  max-width: 5vh;
  max-height: 2.5vh;
  width: 100%;
  height: 50%;
  margin-right: 1vw;
  margin-left: auto;
  
  ${(props) =>
    props.isOpen
      ? css`
           {
            transform: rotate(180deg);
            transition: transform 0.3s ease;
          }
        `
      : css`
           {
            transform: rotate(0deg);
            transition: transform 0.3s ease;
          }
        `};
`;

export {
  StyledSection,
  StyledTextGrid,
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledDate,
  StyledDropdownArrow,
};
