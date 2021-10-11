import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';

import {StyledTitleBox, StyledInfoListContainer} from './styles';


const Projects = () => (
  <>
    <Head>
      <title>{'Projects'}</title>
      <meta content='Description of projects worked on' name='description'/>
    </Head>

    <StyledTitleBox>
      <h1>{'Projects Worked On'}</h1>
    </StyledTitleBox>
    <StyledInfoListContainer>
      <InfoSection
        date=''
        header=''
        subheader=''
      />
    </StyledInfoListContainer>
  </>
);

export default Projects;
