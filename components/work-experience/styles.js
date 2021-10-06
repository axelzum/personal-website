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

const StyledSectionTitle = styled.div`
  padding-right: 3vw;
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
  margin-left: auto;
  margin-right: 1vw;
`;

const StyledDropdownArrow = styled.div`
  max-width: 40px;
  max-height: 20px;
  width: 100%;
  height: 100%;
  margin-right: 1vw;

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
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledSectionTitle,
  StyledDate,
  StyledDropdownArrow,
};
