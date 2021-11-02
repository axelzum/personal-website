import Image from 'next/image';
import styled from 'styled-components';

import { StyledImageContainer, StyledParagraph } from '../styles';

const StyledImage = styled(StyledImageContainer)`
  max-width: 30vh;
  min-width: 30vh;
`;

const Hyvee = () => (
  <StyledParagraph>
    <StyledImage>
      <Image height={234} layout='responsive' src='/images/logos/hyvee.jpg' width={620} />
    </StyledImage>
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
