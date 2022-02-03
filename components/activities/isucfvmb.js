import styled from 'styled-components';
import ReactPlayer from 'react-player';

const StyledParagraph = styled.div`
  padding: 20px;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  margin: auto
`;

const Isucfvmb = () => (
  <>
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
    </StyledParagraph>
    <StyledReactPlayer controls url='https://www.youtube.com/embed/gnG67LqXjc0' />
  </>
);

export default Isucfvmb;
