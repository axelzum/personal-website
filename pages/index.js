import Head from 'next/head';
import styled from 'styled-components';

import SiteIntro from '../components/index/site-intro';
import Resume from '../components/index/resume';
import ContactInfo from '../components/index/contact-info';


// const StyledTitle = styled.div`
//   width: 100%;
//   text-align: center;
//   background: ${(props) => props.theme.colors.primaryLight};
//   color: white;
//   min-height: 80px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//
//   h1 {
//     margin: 0;
//     padding: 0 30px;
//     font-size: 40px;
//   }
// `;

const StyledHomepageWrapper = styled.div`
  max-width: 1400px;
  display: block;
  flex-shrink: 0;
  justify-content: center;
  margin: auto;
`;

const StyledBlueBackground = styled.div`
  background: ${(props) => props.theme.colors.primaryLight};
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const Home = () => (
  <>
    <Head>
      <title>{'Axel Zumwalt - Career Portfolio'}</title>
    </Head>

    <StyledHomepageWrapper>
      <SiteIntro />
    </StyledHomepageWrapper>

    <StyledBlueBackground>
      <Resume />
    </StyledBlueBackground>

    <StyledHomepageWrapper>
      <ContactInfo/>
    </StyledHomepageWrapper>
  </>
);

export default Home;
