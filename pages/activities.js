import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  color: #0070f3;
`;

const Activities = () => (
  <>
    <Head>
      <title>{'Activities and Interests'}</title>
      <meta content='Detailed history of activities involved in' name='description' />
    </Head>
    <h1>{'Activities and Interests'}</h1>
    <StyledH2>
      <Link href='/'>
        <a>{'Back to home'}</a>
      </Link>
    </StyledH2>
  </>
);

export default Activities;
