import Head from 'next/head';

import {StyledInfoPageContainer, StyledTitleBox} from './styles';

const Activities = () => (
  <>
    <Head>
      <title>{'Activities and Interests'}</title>
      <meta content='Detailed history of activities involved in' name='description'/>
    </Head>

    <StyledInfoPageContainer>
      <StyledTitleBox>
        <h1>{'Activities and Interests'}</h1>
        <h2>{'Under Construction: Come Back Soon!'}</h2>
      </StyledTitleBox>
    </StyledInfoPageContainer>
  </>
);

export default Activities;
