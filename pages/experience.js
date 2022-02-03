import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';
import Softronics from '../components/experience/work/softronics';
import Collins from '../components/experience/work/collins';
import Hyvee from '../components/experience/work/hyvee';
import { StyledInfoPageContainer, StyledTitleBox } from '../styles/styles';
import HighSchool from '../components/experience/education/high-school';
import BachelorCprE from '../components/experience/education/bs-cpre';
import MasterBusinessAdministration from '../components/experience/education/mba';
import HyveeImage from '../components/experience/images/hyvee-image';
import CollinsImage from '../components/experience/images/collins-image';
import SoftronicsImage from '../components/experience/images/softronics-image';

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
        detail='May 2021–Present'
        header='Hy-Vee, Helpful Smiles Technology • Grimes, Iowa'
        image={<HyveeImage />}
        subheader='Software Engineering Intern, Aisles Online: Ecommerce Fulfillment'
      />
      <InfoSection
        collapse={<Collins />}
        detail='May 2019–August 2020'
        header='Collins Aerospace, Mission Systems • Cedar Rapids, Iowa'
        image={<CollinsImage />}
        subheader='Software Engineering Intern, Test and Training Instrumentation'
      />
      <InfoSection
        collapse={<Softronics />}
        detail='May 2016–August 2018'
        header='Softronics Ltd. • Marion, Iowa'
        image={<SoftronicsImage />}
        subheader='Intern'
      />
      <StyledTitleBox>
        <h1>{'Education Experience'}</h1>
        <h2>{'Iowa State University of Science and Technology • Ames, Iowa'}</h2>
      </StyledTitleBox>
      <InfoSection
        collapse={<MasterBusinessAdministration />}
        detail='May 2022 • GPA: 3.82'
        header='Master of Business Administration'
        image={<HyveeImage />}
        subheader='Debbie and Jerry Ivy College of Business'
      />
      <InfoSection
        collapse={<BachelorCprE />}
        detail='May 2022 • GPA: 3.80'
        header='Bachelor of Science in Computer Engineering'
        image={<HyveeImage />}
        subheader='College of Engineering'
      />
      <StyledTitleBox>
        <h2>{'Marion High School • Marion, Iowa'}</h2>
      </StyledTitleBox>
      <InfoSection
        collapse={<HighSchool />}
        detail='May 2017 • GPA: 4.11'
        header='High School Diploma'
        image={<HyveeImage />}
        subheader=''
      />
    </StyledInfoPageContainer>
  </>
);

export default Experience;
