import styled from 'styled-components';
import ReactPlayer from 'react-player';

const StyledParagraph = styled.div`
  padding: 20px;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  margin: auto;
`;

const Isucfvmb = () => (
  <StyledParagraph>
    <p>
      {"My role as bass drum guide is one of most important roles to have as a member of the Iowa State University Cyclone Football 'Varsity' " +
        "Marching Band. (ISUCF'V'MB) It was my responsibility to lead the bass drum section, which is one of the most " +
        'technically challenging and time consuming sections to play in. I had to set goals, lead meetings and rehearsals, and ' +
        'insure our performance and executed perfectly.'}
    </p>
    <p>
      {'My other role as bass drum guide was as a leader to the whole entire band. I was responsible for setting correct tempos ' +
        'for all performances, as well as contribute to the general flow of many of the songs we play by playing taps with no room for error.'}
    </p>
    <StyledReactPlayer controls url='https://www.youtube.com/embed/gnG67LqXjc0' />
  </StyledParagraph>
);

export default Isucfvmb;
