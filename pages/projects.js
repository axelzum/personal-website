import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';
import CprE288 from '../components/projects/cpre288';
import ComS309 from '../components/projects/coms309';
import CprE491 from '../components/projects/cpre491';
import HonorsProject from '../components/projects/honors-project';

import { StyledInfoPageContainer, StyledTitleBox } from './styles';

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
        header='Integrate Zoom Into a Web Application for Buildertrend'
        info='Fall 2021-Present'
        subheader='CprE 491: Senior Design Project'
      />
      <InfoSection
        collapse={<HonorsProject />}
        header='Theremin'
        info='Fall 2021-Present'
        subheader='Honors Capstone Project'
      />
      <InfoSection
        collapse={<ComS309 />}
        header='OpenCampus Phone Application'
        info='Fall 2019'
        subheader='ComS 309: Software Development Practices'
      />
      <InfoSection
        collapse={<CprE288 />}
        header='Remotely Operated Golf Green Cleaner'
        info='Spring 2019'
        subheader='CprE 288: Embedded Systems Final Project'
      />
    </StyledInfoPageContainer>
  </>
);

export default Projects;
