import Head from 'next/head';
import Link from "next/link";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: #0070f3;
`;

const WorkExperience = () => (
  <>
    <Head>
      <title>{'Projects'}</title>
      <meta content='Description of projects worked on' name='description' />
    </Head>
    <h1>{'Projects'}</h1>
      <StyledH2>
          <Link href='/'>
              <a>{'Back to home'}</a>
          </Link>
      </StyledH2>
  </>
);

export default WorkExperience;
