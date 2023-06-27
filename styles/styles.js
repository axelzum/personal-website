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

export { StyledTitleBox, StyledInfoPageContainer };
