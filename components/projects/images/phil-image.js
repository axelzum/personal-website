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
  </StyledItalics>
);

export default PhilImage;
