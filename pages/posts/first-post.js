import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  color: #0070f3;
`;

const FirstPost = () => (
  <>
    <Head>
      <title>{'first post'}</title>
    </Head>
    <h1>{'First Post'}</h1>
    <StyledH2>
      <Link href='/'>
        <a>{'Back to home'}</a>
      </Link>
    </StyledH2>
  </>
);

export default FirstPost;
