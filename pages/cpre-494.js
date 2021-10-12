import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';
import EthicsEssay from '../components/cpre-494/ethics-essay';
import GeneralEducationReflection from '../components/cpre-494/general-education-reflection';
import CumulativeReflection from '../components/cpre-494/cumulative-reflection';
import { StyledInfoPageContainer, StyledTitleBox } from '../styles/styles';

const Cpre494 = () => (
  <>
    <Head>
      <title>{'CprE 494'}</title>
      <meta content='Assignments completed for CprE 494: Senior Portfolio' name='description' />
    </Head>

    <StyledInfoPageContainer>
      <StyledTitleBox>
        <h1>{'CprE 494 Senior Portfolio Assignments'}</h1>
        <h3>{'This is a collection of assignments to meet the requirements for the CprE 494 Senior Portfolio'}</h3>
      </StyledTitleBox>
      <InfoSection
        collapse={<GeneralEducationReflection />}
        header='General Education Reflection'
        info=''
        subheader=''
      />
      <InfoSection collapse={<CumulativeReflection />} header='Cumulative Reflection' info='' subheader='' />
      <InfoSection collapse={<EthicsEssay />} header='CprE 394 Ethics Essay' info='' subheader='' />
    </StyledInfoPageContainer>
  </>
);

export default Cpre494;
