import styled from 'styled-components';

const StyledParagraph = styled.div`
  padding: 20px;
`;

const Honors = () => (
  <StyledParagraph>
    <p>
      {'The Freshman Honors Program (FHP) at Iowa State is a program to introduce high-achieving students all that the university has to offer them. ' +
        'As a leader in the program, I was a the teacher of a class for incoming freshman. In the class we had to manage a schedule, ' +
        'lead the students through completing a project, and act as a point of contact for any worries or questions.'}
    </p>
  </StyledParagraph>
);

export default Honors;
