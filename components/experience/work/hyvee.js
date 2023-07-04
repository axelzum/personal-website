import {StyledParagraph} from '../styles';

const Hyvee = () => (
    <StyledParagraph>
        <h3>{'Roles and Responsibilities'}</h3>
        <p>
            {'Supporting the integration of a new online ordering platform, ShopperKit. ' +
                'Common tasks included making requests to databases, fixing data integrity issues and user interface defects, ' +
                'and working with user experience team members to design and create new user interfaces.'}
        </p>
        <p>
            {'Was a primary developer for a new digital customer support web application that was intended to interface ' +
                'with existing online order services to allow for automated refunding and reprocessing of orders by the stores. ' +
                'This application became indispensable to our team in the amount of time it saves on IT support services.'}
        </p>

        <h3>{'Skills'}</h3>
        <ul>
            <li>{'Working in a very collaborative environment with test driven development and pair programming.'}</li>
            <li>
                {'Learned and utilized cutting edge frontend web development technologies such as ' +
                    'TypeScript, React, React Testing Library, NextJs, and CSS Styled Components.'}
            </li>
            <li>
                {'Built custom GraphQL queries and resolvers to surface and display needed information stored in databases.'}
            </li>
        </ul>
    </StyledParagraph>
);

export default Hyvee;
