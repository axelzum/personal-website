import Head from 'next/head';
import styled from 'styled-components';

import HyveeSection from '../components/work-experience/hyvee-section';
import CollinsSection from '../components/work-experience/collins-section';
import SoftronicsSection from '../components/work-experience/softronics-section';

import StyledH1 from './styles';

const StyledWorkExperiences = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const WorkExperience = () => (
  <>
    <Head>
      <title>{'Work Experience'}</title>
      <meta content='Detailed work experience history' name='description' />
    </Head>

    <StyledH1>{'Work Experience'}</StyledH1>
    <StyledWorkExperiences>
      <HyveeSection />
      <CollinsSection />
      <SoftronicsSection />
    </StyledWorkExperiences>
  </>
);

export default WorkExperience;
