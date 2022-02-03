import styled, { css } from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;

  margin-top: 30px;
  min-width: 300px;
  max-height: 300px;

  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 7px 7px ${(props) => (props.isOpen ? '0' : '7px')} ${(props) => (props.isOpen ? '0' : '7px')};
  border-bottom: ${(props) => (props.isOpen ? '0' : '')};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    max-height: none;
    align-items: center;
  }

  &:hover {
    background: lightgray;
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const StyledTextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: right;
  margin: 20px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const StyledSectionHeader = styled.h2`
  font-weight: bold;
  margin: 0;
`;

const StyledSectionSubheader = styled.h3`
  font-style: italic;
  margin: 0;
`;

const StyledSectionDetail = styled.p``;

const StyledDropdownArrow = styled.div`
  min-width: 75px;
  max-width: 75px;
  margin: auto 10px;

  ${(props) =>
    props.isOpen
      ? css`
          svg {
            transform: rotate(-180deg);
            transition: transform 0.3s ease;
          }
        `
      : css`
          svg {
            transform: rotate(0deg);
            transition: transform 0.3s ease;
          }
        `};
`;

export {
  StyledSection,
  StyledImageContainer,
  StyledTextContainer,
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledSectionDetail,
  StyledDropdownArrow,
};
