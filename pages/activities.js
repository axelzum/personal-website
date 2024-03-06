import Head from 'next/head';
import styled from 'styled-components';

import {StyledInfoPageContainer, StyledTitleBox} from '../styles/styles';
import NewtonImage from '../components/activities/images/newton-image';
import ComedyImage from '../components/activities/images/comedy-image';
import InfoSection from '../components/info-section/info-section';
import BassImage from '../components/activities/images/bass-image';

const StyledActivityPhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  
  div {
    margin: 20px;
  }
`;

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
                date='August 2022 – Present'
                detail='In college I served as the bass drum section leader for the Iowa State Marching Band Drumline.
                Today, I continue my love of music as an instructor for the Newton High School Band.
                This position involves creating show design, writing music, organising rehearsal, and teaching/coaching students to be percussionists and leaders.
                I have a passion for helping others grow, and challenging those I mentor to go beyond what they think their skills are.'
                header='Newton High School Drumline Instructor • Newton, Iowa'
            />
            <InfoSection
                detail="Since becoming an 'All-Star' graduate of Gavin Jerome's Comedy College in 2019, I have enjoyed occasionally performing as an ameteur comedian.
                Skills like improv thinking and execution, confidence speaking to crowds, and reading audience reactions have helped me become a better problem solver and technical leader in the workplace."
                header='Stand-up Comedy'
            />
            <InfoSection
                detail='Some of my other interests include collecting board games, playing the piano, outdoor adventures, cooking, and watching movies.'
            />
            <StyledActivityPhotoContainer>
                <NewtonImage/>
                <ComedyImage/>
                <BassImage/>
            </StyledActivityPhotoContainer>
        </StyledInfoPageContainer>
    </>
);

export default Activities;
