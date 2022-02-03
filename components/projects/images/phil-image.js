import styled from 'styled-components';

const StyledItalics = styled.div`
  p {
    font-style: italic;
  }
`;

const PhilImage = () => (
  <StyledItalics>
    <p>
      {'The greens at the local golf course are very unkempt as Tiger Wood’s marriage. ' +
        'The Masters are coming up and Phil Mickelson wants his greens to be spotless. ' +
        'The course is understaffed and has decided to use an automated, ' +
        'robot to perform this task and save time and money.'}
    </p>
    <p>
      {'The maintenance staff at the course wants the robot to be placed anywhere on a hole, ' +
        'and navigate to the green where it can begin cleaning. On its way to the green, ' +
        'the robot must be able to detect and avoid any obstacles as to not disturb the nature or golf players. ' +
        'It should also detect drops in elevation so that it doesn’t fall into a sand trap or pond.'}
    </p>
    <p>
      {'Once it has reached the green, the robot will blow off any debris and relay back to maintenance command, ' +
        'that the green is clear.'}
    </p>
  </StyledItalics>
);

export default PhilImage;
