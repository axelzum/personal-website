import Image from 'next/image';
import styled from 'styled-components';

import { StyledImageContainer, StyledParagraph } from '../styles';

const StyledImage = styled(StyledImageContainer)`
  max-width: 50vh;
  min-width: 50vh;
`;

const Collins = () => (
  <StyledParagraph>
    <StyledImage>
      <Image height={88} layout='responsive' src='/images/logos/collins.png' width={512} />
    </StyledImage>

    <h3>{'Work Overview'}</h3>
    <p>
      {'I was a team member in the Test and Training Instrumentation (TTI) department of the Mission Systems business unit at Collins Aerospace. ' +
        'At the time TTI was involved in a number of government contracts to design and manufacture air combat test and training equipment. ' +
        'With my team, I supported the Common Range Integrated Instrumentation System (CRIIS) and Tactical Combat Training System (TCTS) Increment II products ' +
        'as software developer for test and training range control systems that run missions with the CRIIS and TCTSII products.'}
    </p>

    <h3>{'Roles and Responsibilities'}</h3>
    <p>
      {'Wrote object-oriented Java code to comply with product software requirements. ' +
        'This included TCP message handling and data display, data validation, bug fixing, and user interface design.' +
        'All code that I wrote I had to also write business logi GUI tests with a Python testing framework.'}
    </p>
    <p>
      {"I also acted as a substitute for my team's scrum master. In this role I had to understand and report on weekly " +
        'metrics to the head program office, run daily standup meetings, write stories for backlog grooming, ' +
        'write acceptance criteria for new stories, and host meetings for story writing and prioritization with the client.'}
    </p>

    <h3>{'Skills and Lessons Learned'}</h3>
    <ul>
      <li>{'Object-oriented Java development using an OSGi Framework.'}</li>
      <li>{'TCP/IP message sending and receiving of data packages.'}</li>
      <li>{'User interface design with Eclipse RCP and implementation in a reusable software package.'}</li>
      <li>{'Python GUI testing with the Squish framework.'}</li>
      <li>{'Agile methodologies as a developer and a scrum master.'}</li>
      <li>{'Git workflows on a large software development team.'}</li>
      <li>{'Scrum master duties: managing team story board and schedule and story writing'}</li>
    </ul>
  </StyledParagraph>
);

export default Collins;
