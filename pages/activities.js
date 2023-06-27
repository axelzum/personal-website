import Head from 'next/head';

import {StyledInfoPageContainer, StyledTitleBox} from '../styles/styles';
import InfoSection from '../components/info-section/info-section';
import Isucfvmb from '../components/activities/isucfvmb';
import Honors from '../components/activities/honors';
import BassImage from '../components/activities/images/bass-image';
import FHPImage from '../components/activities/images/fhp-image';

const Activities = () => (
    <>
        <Head>
            <title>{'Activities and Interests'}</title>
            <meta content='Detailed history of activities involved in' name='description'/>
        </Head>

        <StyledTitleBox>
            <h1>{'Activities and Interests'}</h1>
            <h2>{'Leadership Experiences'}</h2>
        </StyledTitleBox>
        <StyledInfoPageContainer>
            <InfoSection
                collapse={<Isucfvmb/>}
                detail='Fall 2018-Fall 2021'
                header='Cyclone Marching Band Varsity Drumline'
                image={<BassImage/>}
                subheader='Bass Drum Guide'
            />
            <InfoSection
                collapse={<Honors/>}
                detail='Fall 2017-Present'
                header='Iowa State Honors Program'
                image={<FHPImage/>}
                subheader='Freshman Honors Program Leader and Ambassador'
            />
        </StyledInfoPageContainer>
    </>
);

export default Activities;
