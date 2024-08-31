import {StyledParagraph} from '../styles';

const Collins = () => (
    <StyledParagraph>
        <h3>{'Roles and Responsibilities'}</h3>
        <p>
            {'Wrote object-oriented Java modules in the OSGi framework to comply with strict product requirements. ' +
                'This included TCP message handling and data display, data validation, resolving defects, and user interface design.' +
                'For all code that I wrote, I also wrote strict business logic GUI tests with a Python testing framework.'}
        </p>
        <p>
            {'I also acted as a substitute for my team\'s scrum master. In this role I had to understand and report on weekly ' +
                'metrics to the head program office, run daily standup meetings, write stories for backlog grooming, ' +
                'write acceptance criteria for new stories, and host meetings for story writing and prioritization with the client.'}
        </p>

        <h3>{'Skills'}</h3>
        <ul>
            <li>{'Object-oriented Java development using the OSGi Framework.'}</li>
            <li>{'TCP/IP message sending and receiving of data packages.'}</li>
            <li>{'User interface design with Eclipse RCP and implementation in a reusable software package.'}</li>
            <li>{'Python GUI testing with the Squish framework.'}</li>
            <li>{'Scrum master duties: managing team story board and schedule and story writing'}</li>
        </ul>
    </StyledParagraph>
);

export default Collins;
