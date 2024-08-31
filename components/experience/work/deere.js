import {StyledParagraph} from '../styles';

const Deere = () => (
    <StyledParagraph>
        <h3>{'Roles and Responsibilities'}</h3>
        <h4>{'John Deere Financial: Sales Center Retail Financing'}</h4>
        <p>
            {'John Deere Sales Center is a suite of applications for John Deere dealers to support the sale of equipment. On this team I helped to create a cloud-based system '+
            'for the creation and submission of installment and financing contract applications. A lot of development focus was on code modernization ' +
            'which enabled me to establish modern patterns in testing, TypeScript, state managment, and API design.'}
        </p>
        <h4>{'Intelligent Solutions Group: Operations Center Land Manager'}</h4>
        <p>
            {'As a fullstack web software engineer working on Operations Center, I was responsible for maintaining, supporting, and building ' +
                'features helping farmers access and use their agronomic data.' +
                'I also performed production product support by monitoring AWS infrastructure and working with adjacent teams to resolve customer issues.'}
        </p>
        <p>
            {'In this role I quickly took the initiative to become a local subject matter expert in React Testing Library and Redux state management. ' +
                'The existing patterns used for these technologies were out of date and effecting product and developer performance. I coached other team members ' +
                'on modern techniques, and led a carefully planned effort to migrate to these new patterns.'}
        </p>

        <h3>{'Achievements'}</h3>
        <ul>
            <li>{'Removed Enzyme as a dependency in two large projects, set the department standard for the use of React Testing Library.'}</li>
            <li>{'Rewrote an entire application from the ground up using TypeScript, Redux Toolkit, and React Testing Library.'}</li>
            <li>{'Onboarded multiple new engineers and coached them to the point of independent confidence in development.'}</li>
            <li>{'Identified missed opportunities within IT Development Program networking channels and independently organized ' +
                'multiple networking events to improve that area.'}</li>
            <li>{'Awarded an uncommon early promotion for my initiative and techinical leadership.'}</li>
        </ul>
    </StyledParagraph>
);

export default Deere;
