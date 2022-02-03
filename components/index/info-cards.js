import styled from 'styled-components';

const StyledInfoCardContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0;

  div {
    margin: 20px;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StyledInfoCard = styled.div`
  display: flex;
  flex: 1;
  max-width: 400px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 7px;

  .nth-of-type(1) {
    margin-right: 15px;
  }
  .nth-of-type(2) {
    margin: 15px 0;
  }
  .nth-of-type(3) {
    margin-left: 15px;
  }
`;

const InfoCards = () => (
  <StyledInfoCardContainer>
    <StyledInfoCard>{'texttexttexttexttexttexttexttext texttexttext text texttext'}</StyledInfoCard>
    <StyledInfoCard>{'text'}</StyledInfoCard>
    <StyledInfoCard>{'text'}</StyledInfoCard>
  </StyledInfoCardContainer>
);

export default InfoCards;
