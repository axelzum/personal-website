import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';

import {StyledTitleBox, StyledInfoListContainer} from './styles';


const WorkExperience = () => (
  <>
    <Head>
      <title>{'Work Experience'}</title>
      <meta content='Detailed work experience history' name='description' />
    </Head>

    <StyledTitleBox>
      <h1>{'Work Experience'}</h1>
    </StyledTitleBox>
    <StyledInfoListContainer>
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
      <InfoSection date='May 2016–August 2018' header='Softronics Ltd. • Marion, Iowa' subheader='Intern' />
    </StyledInfoListContainer>
  </>
);

export default WorkExperience;
