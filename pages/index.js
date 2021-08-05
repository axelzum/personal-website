import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHomeContainer = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMain = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledH1 = styled.h1`
  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }

  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const StyledP = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Home = () => (
  <>
    <Head>
      <title>{'Axel Zumwalt'}</title>
      <meta content='Personal resume website' name='description' />
    </Head>
    <StyledHomeContainer>
      <StyledMain>
        <StyledH1>
          {'placeholder'}
        </StyledH1>

        <StyledP>
          {'Get started by editing'} <code>{'pages/index.js'}</code>
        </StyledP>
      </StyledMain>
    </StyledHomeContainer>
  </>
);

export default Home;
