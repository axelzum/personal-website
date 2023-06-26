import Head from 'next/head';

import InfoSection from '../components/info-section/info-section';
import Softronics from '../components/experience/work/softronics';
import Collins from '../components/experience/work/collins';
import Hyvee from '../components/experience/work/hyvee';
import {StyledInfoPageContainer, StyledTitleBox} from '../styles/styles';
import BachelorCprE from '../components/experience/education/bs-cpre';
import MasterBusinessAdministration from '../components/experience/education/mba';
import HyveeImage from '../components/experience/images/hyvee-image';
import CollinsImage from '../components/experience/images/collins-image';
import GerdinImage from '../components/experience/images/gerdin-image';
import MarstonImage from '../components/experience/images/marston-image';
import NewInfoSection from '../components/info-section/new-info-section';

const Experience = () => (
    <>
        <Head>
            <title>{'Experience'}</title>
            <meta content='Detailed work and education experience history' name='description'/>
        </Head>

        <StyledTitleBox>
            <h1>{'Work Experience'}</h1>
        </StyledTitleBox>
        <StyledInfoPageContainer>
            <NewInfoSection
                collapse={<Hyvee/>}
                date='May 2021 – May 2022'
                detail='Hy-Vee is a midwest-based premium grocery store. As a digital software engineer for Aisles Online, I improved customer and employee experiences for online grocery ordering and fulfillment.'
                header='Hy-Vee, Helpful Smiles Technology • Grimes, Iowa'
                image={<HyveeImage/>}
                subheader='Software Engineering Intern, Aisles Online: Ecommerce Fulfillment'
            />
            <NewInfoSection
                collapse={<Collins/>}
                date='May 2019 – August 2020'
                detail='I was a team member in the Test and Training Instrumentation (TTI) department of the Mission Systems business unit at Collins Aerospace. At the time TTI was involved in a number of government contracts to design and manufacture air combat test and training equipment. With my team, I supported the Common Range Integrated Instrumentation System (CRIIS) and Tactical Combat Training System (TCTS) Increment II products as software developer for test and training range control systems that run missions with the CRIIS and TCTSII products.'
                header='Collins Aerospace, Mission Systems • Cedar Rapids, Iowa'
                image={<CollinsImage/>}
                subheader='Software Engineering Intern, Test and Training Instrumentation'
            />
            <NewInfoSection
                collapse={<Softronics/>}
                date='May 2016 – August 2018'
                detail='Softronics Ltd. is a small engineering firm specializing in high frequency radio technology. They design and manufacture custom electrical components and products to solve commercial and military customer problems. During my time as an intern at Softronics I worked in many different roles to support various business operations.'
                header='Softronics Ltd. • Marion, Iowa'
                subheader='Intern'
            />
        </StyledInfoPageContainer>
        <StyledTitleBox>
            <h1>{'Education'}</h1>
            <h2>{'Iowa State University of Science and Technology • Ames, Iowa'}</h2>
        </StyledTitleBox>
        <StyledInfoPageContainer>
            <InfoSection
                collapse={<MasterBusinessAdministration/>}
                detail='May 2022 • GPA: 3.82'
                header='Master of Business Administration'
                image={<GerdinImage/>}
                subheader='Debbie and Jerry Ivy College of Business'
            />
            <InfoSection
                collapse={<BachelorCprE/>}
                detail='May 2022 • GPA: 3.80'
                header='Bachelor of Science in Computer Engineering'
                image={<MarstonImage/>}
                subheader='College of Engineering'
            />
        </StyledInfoPageContainer>
    </>
);

export default Experience;
