import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';
import Softronics from '../components/experience/softronics';
import Collins from '../components/experience/collins';
import Hyvee from '../components/experience/hyvee';
import { StyledInfoPageContainer, StyledTitleBox } from '../styles/styles';

const Experience = () => (
  <>
    <Head>
      <title>{'Experience'}</title>
      <meta content='Detailed work and education experience history' name='description' />
    </Head>

    <StyledInfoPageContainer>
      <StyledTitleBox>
        <h1>{'Work Experience'}</h1>
      </StyledTitleBox>
      <InfoSection
        collapse={<Hyvee />}
        header='Hy-Vee, Helpful Smiles Technology • Grimes, Iowa'
        info='May 2021–Present'
        subheader='Software Engineering Intern, Ecommerce Fulfillment'
      />
      <InfoSection
        collapse={<Collins />}
        header='Collins Aerospace, Mission Systems • Cedar Rapids, Iowa'
        info='May 2019–August 2020'
        subheader='Software Engineering Intern, Test and Training Instrumentation'
      />
      <InfoSection
        collapse={<Softronics />}
        header='Softronics Ltd. • Marion, Iowa'
        info='May 2016–August 2018'
        subheader='Intern'
      />
      <StyledTitleBox>
        <h1>{'Education Experience'}</h1>
        <h2>{'Iowa State University of Science and Technology • Ames, Iowa'}</h2>
      </StyledTitleBox>
      <InfoSection
        header='Master of Business Administration'
        info='May 2022 • GPA: 3.82'
        subheader='Debbie and Jerry Ivy College of Business'
      />
      <InfoSection
        header='Bachelor of Science in Computer Engineering'
        info='May 2022 • GPA: 3.80'
        subheader='College of Engineering'
      />
    </StyledInfoPageContainer>
  </>
);

export default Experience;
