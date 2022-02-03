import styled from 'styled-components';

const StyledParagraph = styled.div`
  padding: 20px;
`;

const StyledItalics = styled.div`
  p {
    margin-top: 0;
    padding: 0 20px 0 20px;
    font-style: italic;
  }
`;

const Honors = () => (
  <>
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
    <hr />
    <StyledParagraph>
      <p>
        {'In this project me and a team of three other embedded systems students were tasked with programming a ' +
          'modified Roomba robot to navigate an obstacle course with pitfalls, barriers, and a goal marked by specially sized posts.'}
      </p>
      <p>
        {
          "To achieve this we learned over the course of the project how to use C to program the robot's microcontroller to:"
        }
      </p>
      <ul>
        <li>{'Connect over Wifi to a computer to receive commands.'}</li>
        <li>{'Parse commands sent to instruct the robot to perform actions.'}</li>
        <li>
          {
            'Perform actions such as moving and allow the robot to interrupt those actions if an obstacle is encountered.'
          }
        </li>
        <li>{'Use analog to digital conversion and pulse width modulation to gather data from sensors'}</li>
      </ul>
      <a
        href='https://github.com/axelzum/CprE288Project'
        rel='noopener noreferrer'
        target='_blank'
        title='CprE 288 Project'
      >
        {'Click here for more project info and source code on Github.'}
      </a>
    </StyledParagraph>
  </>
);

export default Honors;
