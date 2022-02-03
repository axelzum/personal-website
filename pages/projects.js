import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';
import CprE288 from '../components/projects/cpre288';
import ComS309 from '../components/projects/coms309';
import CprE491 from '../components/projects/cpre491';
import HonorsProject from '../components/projects/honors-project';
import { StyledInfoPageContainer, StyledTitleBox } from '../styles/styles';
import BuildertrendImage from '../components/projects/images/buildertrend-image';
import ThereminImage from '../components/projects/images/theremin-image';
import OpenCampusImage from '../components/projects/images/opencampus-image';
import PhilImage from '../components/projects/images/phil-image';

const Projects = () => (
  <>
    <Head>
      <title>{'Projects'}</title>
      <meta content='Description of projects worked on' name='description' />
    </Head>

    <StyledInfoPageContainer>
      <StyledTitleBox>
        <h1>{'Projects Worked On'}</h1>
      </StyledTitleBox>
      <InfoSection
        collapse={<CprE491 />}
        detail='Fall 2021-Present'
        header='Integrate Zoom Into a Web Application for Buildertrend'
        image={<BuildertrendImage />}
        subheader='CprE 491: Senior Design Project'
      />
      <InfoSection
        collapse={<HonorsProject />}
        detail='Fall 2021-Present'
        header='Theremin'
        image={<ThereminImage />}
        subheader='Honors Capstone Project'
      />
      <InfoSection
        collapse={<ComS309 />}
        detail='Fall 2019'
        header='OpenCampus Phone Application'
        image={<OpenCampusImage />}
        subheader='ComS 309: Software Development Practices'
      />
      <InfoSection
        collapse={<CprE288 />}
        detail='Spring 2019'
        header='Remotely Operated Golf Green Cleaner'
        image={<PhilImage />}
        subheader='CprE 288: Embedded Systems Final Project'
      />
    </StyledInfoPageContainer>
  </>
);

export default Projects;
