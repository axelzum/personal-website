import styled from 'styled-components';

const StyledParagraph = styled.div`
  p {
    margin-bottom: 0;
    margin-top: 1vh;
  }
`;

const GeneralEducationReflection = () => (
  <StyledParagraph>
    <p>
      {'Many people see general education requirements as boring or a waste of time because they would rather ' +
        'be taking classes specific to their major. ' +
        'I think this is a unwise attitude to learning because if you only focus your learning and studying in one ' +
        'area you constrain yourself to only approaching problems in the same way.'}
    </p>
    <p>
      {'As an engineer I am a problem solver by trade, and I think the problem-solving skills ' +
        'I’ve learned in non-engineering classes have prepared me for my career almost the same amount as my engineering class. ' +
        'General education class force you to learn topics and face challenges you are less familiar with. ' +
        'This does a great job in preparing for the engineering work force because you never know what kinds of ' +
        'problems might present themselves. It might be something you have technical knowledge of but more than ' +
        'likely every will come across a problem that requires them to put on a whole different tool belt and ' +
        'learn something new to solve it.'}
    </p>
    <p>
      {'An obvious first choice of general education class that helps to see beyond engineering ' +
        'solutions is English 314: Technical Communication. ' +
        'While it may seem easy to write about the technology we work on every day, ' +
        'engineers are often less prepared to communicate their thoughts than they need to be. ' +
        'Technical Communication taught me that sometimes you must think broader than just the technical aspects of a project. ' +
        'If your mindset is on communicating something to other people who have different understandings than yourself, ' +
        'you view your ideas in a different light and often uncover hidden opportunities.'}
    </p>
    <p>
      {'A less obvious general education class that related to the engineering profession ' +
        'that I took was called HspM 363: Innovations in Chocolate. ' +
        'While taking a cooking class and working with chocolate isn’t directly related to computer engineering ' +
        'in any way I found the connections between the design, problem solving, and creative thinking ' +
        'components of this course and my engineering courses to be closely related. ' +
        'Often engineering students get stuck in thinking to technically about problems and about the design of their programs. ' +
        'I learned through chocolate that sometimes it helps to take the artistic “chocolate” approach to engineering problem solving. ' +
        'For example, a function decision might meet requirements and be easy to do, but is the chocolate (code) going to “taste” good?'}
    </p>
  </StyledParagraph>
);

export default GeneralEducationReflection;
