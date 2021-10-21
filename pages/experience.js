import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';
import Softronics from '../components/experience/work/softronics';
import Collins from '../components/experience/work/collins';
import Hyvee from '../components/experience/work/hyvee';
import { StyledInfoPageContainer, StyledTitleBox } from '../styles/styles';
import HighSchool from '../components/experience/education/high-school';
import BachelorCprE from '../components/experience/education/bs-cpre';
import MasterBusinessAdministration from '../components/experience/education/mba';

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
        collapse={<MasterBusinessAdministration/>}
        header='Master of Business Administration'
        info='May 2022 • GPA: 3.82'
        subheader='Debbie and Jerry Ivy College of Business'
      />
      <InfoSection
        collapse={<BachelorCprE/>}
        header='Bachelor of Science in Computer Engineering'
        info='May 2022 • GPA: 3.80'
        subheader='College of Engineering'
      />
      <StyledTitleBox>
        <h2>{'Marion High School • Marion, Iowa'}</h2>
      </StyledTitleBox>
      <InfoSection
        collapse={<HighSchool/>}
        header='High School Diploma'
        info='May 2017 • GPA: 4.11'
        subheader=''
      />
    </StyledInfoPageContainer>
  </>
);

export default Experience;
