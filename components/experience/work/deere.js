import {StyledParagraph} from '../styles';

const Deere = () => (
    <StyledParagraph>
        <h3>{'Roles and Responsibilities'}</h3>
        <p>
            {'As a front-end web software engineer working on Operations Center, I was responsible for maintaining, supporting, and building ' +
                'new features into farm data management applications. This entailed working with product and user-experience designers to ' +
                'create and refine application features designed to improve how customers access and use their agronomic data. ' +
                'I also performed production product support by monitoring AWS infrastructure and working with adjacent teams to resolve customer issues.'}
        </p>
        <p>
            {'In this role I quickly took the initiative to become a local subject matter expert in React Testing Library and Redux state management. ' +
                'The existing patterns used for these technologies were out of date and effecting product and developer performance. I taught other team members ' +
                'on more modern techniques, and led a carefully planned and successful effort to migrate a large project to use these new patterns. This effort was the first ' +
                'of its size in the organization.'}
        </p>

        <h3>{'Achievements'}</h3>
        <ul>
            <li>{'Removed Enzyme as a dependency in two large projects, became an example for the use of React Testing Library.'}</li>
            <li>{'Rewrote an entire application from the ground up using typescript, Redux Toolkit, and React Testing Library.'}</li>
            <li>{'Coordinated an investigation and subsequent implementation of Redux Toolkit in existing applications. Led other ' +
                'engineers through planning, presenting, and executing work.'}</li>
            <li>{'Identified missed opportunities within IT Development Program networking channels and independently organized ' +
                'multiple networking events to improve that area.'}</li>
            <li>{'Onboarded two engineers new to React development and coached them to the point of independent confidence in development.'}</li>
            <li>{'Awarded an uncommon early promotion for my initiative and techinical leadership.'}</li>
        </ul>
    </StyledParagraph>
);

export default Deere;
