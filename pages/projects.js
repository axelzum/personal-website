import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';

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
      <InfoSection header='' info='' subheader='' />
    </StyledInfoPageContainer>
  </>
);

export default Projects;
