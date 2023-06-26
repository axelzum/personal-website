import { StyledParagraph } from '../styles';

const Hyvee = () => (
  <StyledParagraph>
    <h3>{'Work Overview'}</h3>
    <p>
      {'Hy-Vee is a midwest-based premium grocery store. As a digital software engineer, I helped support and grow ' +
        "Hy-Vee's competency in online grocery ordering and fulfillment. I worked on the Aisles Online Ecommerce Fulfillment team " +
        'supporting the customer and employee experiences around online ordering.'}
    </p>

    <h3>{'Roles and Responsibilities'}</h3>
    <p>
      {'I am a fullstack web developer supporting the implementation and integration of a new online ordering platform, ShopperKit. ' +
        'Common tasks include making requests to databases, fixing data and user interface bugs, ' +
        'and working with user experience team members to design and create new user interfaces.'}
    </p>
    <p>
      {'The product I have spent the most time supporting is a digital customer support web application that was designed to interface ' +
        'with existing online order services to allow for automated refunding and reprocessing of orders by the stores. ' +
        'This application became indispensable to our team in the amount of time it saves on IT support services.'}
    </p>

    <h3>{'Skills and Lessons Learned'}</h3>
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
