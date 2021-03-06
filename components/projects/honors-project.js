import styled from 'styled-components';

const StyledParagraph = styled.div`
  padding: 20px;
`;

const HonorsProject = () => (
  <StyledParagraph>
    <p>
      {'To graduate with honors from Iowa State University, students are expected to complete a final capstone project that ' +
        '"synthesizes your experience at Iowa State with a research project or creative work that is uniquely yours." ' +
        'It does not have to be related to any particular field of study but it must showcase a students willingness ' +
        'to go above and beyond to learn something new.'}
    </p>
    <p>
      {'While studying Computer Engineering, I focused my area of study around software development. Because of this, I wanted to focus ' +
        'my project around a different area of study so I can learn new skills and problem solving techniques. ' +
        'Because of my love of music, I decided to build a Theremin which is an electrical musical instrument.'}
    </p>
    <p>
      {'Building this Theremin will require a good amount of research and relearning of electrical engineering topics ' +
        'I learned about early on in my degree. The project is still in early planning phases so I will add updates here ' +
        'as it evolved but I hope to learn about the fundamentals of how the circuity in a Theremin works, ' +
        'how to read a circuit diagram and properly build and test electrical circuits.'}
    </p>
  </StyledParagraph>
);

export default HonorsProject;
