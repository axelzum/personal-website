import Head from 'next/head';
import styled from 'styled-components';

import InfoSection from '../components/info-section/info-section';

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
      <InfoSection
        date='May 2021–Present'
        header='Hy-Vee, Helpful Smiles Technology • Grimes, Iowa'
        subheader='Software Engineering Intern, Ecommerce Fulfillment'
      />
      <InfoSection
        date='May 2019–August 2020'
        header='Collins Aerospace, Mission Systems • Cedar Rapids, Iowa'
        subheader='Software Engineering Intern, Test and Training Instrumentation'
      />
      <InfoSection
        date='May 2016–August 2018'
        header='Softronics Ltd. • Marion, Iowa'
        subheader='Intern'
      />
    </StyledWorkExperiences>
  </>
);

export default WorkExperience;
