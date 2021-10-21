import styled from 'styled-components';
import Image from 'next/image';

const StyledParagraph = styled.div`
  margin-bottom: 0;
  margin-top: 1vh;
`;

const Hyvee = () => (
  <StyledParagraph>
    <Image height={125} layout='fixed' src='/images/logos/hyvee.jpg' width={400} />
    <ul>
      <li>
        {'Collaborated with an agile team to solve online grocery ordering solutions using test driven development.'}
      </li>
      <li>{'Created and optimized user interfaces using TypeScript, JavaScript, the React framework, and CSS.'}</li>
      <li>
        {'Built custom GraphQL queries and resolvers to surface and display needed information stored in databases.'}
      </li>
    </ul>
  </StyledParagraph>
);

export default Hyvee;
