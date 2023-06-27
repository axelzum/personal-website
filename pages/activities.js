import Head from 'next/head';
import styled from 'styled-components';

import {StyledInfoPageContainer, StyledTitleBox} from '../styles/styles';
import NewtonImage from '../components/activities/images/newton-image';
import ComedyImage from '../components/activities/images/comedy-image';
import NewInfoSection from '../components/info-section/new-info-section';
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
            <NewInfoSection
                date='August 2022 – Present'
                detail='In college I marched 4 years of bass drum with the Iowa State Marching Band. Two of those years I was a section leader.
                Today, I continue my love of music, drums, and working with groups by teaching drumline at a local high school.
                This position involves planning and writing shows, organising rehearsals, and teaching and coaching students to be the best drummers they can be.
                I have a passion for helping others grow, and challenging those I mentor to go beyond what they think their skills are.'
                header='Newton High School Drumline Instructor • Newton, Iowa'
            />
            <NewInfoSection
                date='4 Years Experience'
                detail="For the past 4 years I have operated as a semi-professional comedian. Starting in college with an honors course about comedy,
                I became an 'All-Star' graduate of Gavin Jerome's Comedy College and was invited to perform professionally at Stephens Auditorium in Ames, Iowa.
                I now continue to do open-mics and small local venues. The skills I've learned as a comedian translate directly into the workplace.
                Being able to think on my toes, be confident speaking to crowds, and skilled at reading audience reactions has helped me become a better problem solver and technical leader."
                header='Stand-up Comedy'
            />
            <NewInfoSection
                detail='Some of my other interests include collecting board games, playing the piano, running, cooking, making new drinks, and watching movies.'
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
