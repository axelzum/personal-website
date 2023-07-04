import styled from 'styled-components';
import {ReactLogo, Java} from 'styled-icons/boxicons-logos';
import {Drum} from 'styled-icons/fa-solid';
import {School} from 'styled-icons/ionicons-outline';
import {ArrowUpShort} from 'styled-icons/bootstrap';
import {SelfImprovement} from 'styled-icons/material';

const StyledInfoCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px;

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
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-width: 400px;
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  justify-content: center;
  align-items: center;

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

const StyledInfoCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  
  h2 {
    color: ${(props) => props.theme.colors.primary};
    margin: auto 15px;
  }

  svg {
    color: ${(props) => props.theme.colors.primary};
    height: 40px;
  }
`;

const InfoCards = () => (
  <StyledInfoCardContainer>
    <StyledInfoCard>
      <StyledInfoCardTitle>
        <ReactLogo/>
        <h2>{'Software'}</h2>
        <Java/>
      </StyledInfoCardTitle>
      <div>
        {'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test testtest test testtest test testtest test testtest test test test test test'}
      </div>
    </StyledInfoCard>
    <StyledInfoCard>
      <StyledInfoCardTitle>
        <School/>
        <h2>{'Teaching'}</h2>
        <Drum/>
      </StyledInfoCardTitle>
      <div>
        {'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test testtest test testtest test testtest test testtest test test test test test'}
      </div>
    </StyledInfoCard>
    <StyledInfoCard>
      <StyledInfoCardTitle>
        <ArrowUpShort/>
        <h2>{'And More'}</h2>
        <SelfImprovement/>
      </StyledInfoCardTitle>
      <div>
        {'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test testtest test testtest test testtest test testtest test test test test test'}
      </div>
    </StyledInfoCard>
  </StyledInfoCardContainer>
);

export default InfoCards;
