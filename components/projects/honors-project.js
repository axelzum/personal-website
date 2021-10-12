import styled from 'styled-components';
import Image from 'next/image';

const StyledParagraph = styled.div`
  margin-top: 1vh;

  p {
    margin-bottom: 0;
    margin-top: 1vh;
  }
`;

const HonorsProject = () => (
  <StyledParagraph>
    <Image height={300} layout='fixed' src='/images/theremin.gif' width={500} />
    <p>
      {
        'To graduate with honors from Iowa State University students are expected to complete a final capstone project that "synthesizes your experience at Iowa State with a research project or creative work that is uniquely yours." These do not have to be related to any particular field of study but must showcase a students willingness to go above and beyond to learn something new.'
      }
    </p>
    <p>
      {
        'While studying Computer Engineering I focused my area of study around software development so I want to make my project around a different area of study so I can learn new skills and explore a different area of problem solving. Because of my love of music I decided to build a Theremin which is an electrical musical instrument.'
      }
    </p>
    <p>
      {
        'Building this Theremin will require a good amount of research and relearning of electrical engineering topics I learned about early on in my degree. The project is still in early planning phases so I will add updates here as it evolved but I hope to learn about the fundamentals of how the circuity in a Theremin works, how to read a circuit diagram and properly build and test electrical circuits.'
      }
    </p>
  </StyledParagraph>
);

export default HonorsProject;
