import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';

import {StyledInfoListContainer, StyledTitleBox} from './styles';


const Experience = () => (
  <>
    <Head>
      <title>{'Experience'}</title>
      <meta content='Detailed work and education experience history' name='description'/>
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
      <InfoSection date='May 2016–August 2018' header='Softronics Ltd. • Marion, Iowa' subheader='Intern'/>
    </StyledInfoListContainer>
    <StyledTitleBox>
      <h1>{'Education Experience'}</h1>
      <h2>{'Iowa State University of Science and Technology • Ames, Iowa'}</h2>
    </StyledTitleBox>
    <StyledInfoListContainer>
      <InfoSection
        date='May 2022 • GPA: 3.82'
        header='Master of Business Administration'
        subheader='Debbie and Jerry Ivy College of Business'
      />
      <InfoSection
        date='May 2022 • GPA: 3.80'
        header='Bachelor of Science in Computer Engineering'
        subheader='College of Engineering'
      />
    </StyledInfoListContainer>
  </>
);

export default Experience;
