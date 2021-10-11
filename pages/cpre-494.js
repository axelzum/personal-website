import Head from 'next/head';


import InfoSection from '../components/info-section/info-section';

import {StyledInfoListContainer, StyledTitleBox} from './styles';


const Cpre494 = () => (
  <>
    <Head>
      <title>{'CprE 494'}</title>
      <meta content='Assignments completed for CprE 494: Senior Portfolio' name='description'/>
    </Head>

    <StyledTitleBox>
      <h1>{'CprE 494 Senior Portfolio Assignments'}</h1>
      <h3>{'This is a collection of assignments to meet the requirements for the CprE 494 Senior Portfolio'}</h3>
    </StyledTitleBox>
    <StyledInfoListContainer>
      <InfoSection
        date=''
        header='CprE 394 Ethics Essay'
        subheader=''
      />
    </StyledInfoListContainer>
  </>
);

export default Cpre494;
