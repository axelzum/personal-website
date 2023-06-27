import Head from 'next/head';

import Softronics from '../components/experience/work/softronics';
import Collins from '../components/experience/work/collins';
import Hyvee from '../components/experience/work/hyvee';
import {
    StyledEducationInfoConatiner,
    StyledEducationTitle,
    StyledInfoPageContainer,
    StyledTitleBox,
} from '../styles/styles';
import HyveeImage from '../components/experience/images/hyvee-image';
import CollinsImage from '../components/experience/images/collins-image';
import NewInfoSection from '../components/info-section/new-info-section';
import GradImage from '../components/experience/images/grad-image';
import IsuImage from '../components/experience/images/isu-image';
import DeereImage from '../components/experience/images/deere-image';

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
                date='June 2022 – Present'
                detail='I am John Deere'
                header='John Deere, Intelligent Solutions Group • Urbandale, Iowa'
                image={<DeereImage/>}
                subheader='Software Engineer ITDP, Operations Center Web'
            />
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
                detail='Test and Training Instrumentation designs and manufactures mission critical air combat test and training equipment (think Top Gun).
                As a Java application developer in this domain, I created and tested a system control application to strict government quality assurance standards.'
                header='Collins Aerospace, Mission Systems • Cedar Rapids, Iowa'
                image={<CollinsImage/>}
                subheader='Software Engineering Intern, Test and Training Instrumentation'
            />
            <NewInfoSection
                collapse={<Softronics/>}
                date='May 2016 – August 2018'
                detail='Softronics Ltd. is a small engineering firm specializing in high frequency radio technology. They design and manufacture custom electrical components and products for commercial and military customers. During my time as an intern at Softronics I worked in many different roles to support various business operations.'
                header='Softronics Ltd. • Marion, Iowa'
                subheader='Intern'
            />
        </StyledInfoPageContainer>
        <StyledTitleBox>
            <h1>{'Education'}</h1>
        </StyledTitleBox>
        <StyledInfoPageContainer>
            <StyledEducationTitle>
                <h2>{'Iowa State University of Science and Technology • Ames, Iowa'}</h2>
                <h3>{'Graduated May 2022'}</h3>
            </StyledEducationTitle>
            <StyledEducationInfoConatiner>
                <GradImage/>
                <IsuImage/>
            </StyledEducationInfoConatiner>
            {/*<InfoSection*/}
            {/*    collapse={<MasterBusinessAdministration/>}*/}
            {/*    detail='May 2022 • GPA: 3.82'*/}
            {/*    header='Master of Business Administration'*/}
            {/*    image={<GerdinImage/>}*/}
            {/*    subheader='Debbie and Jerry Ivy College of Business'*/}
            {/*/>*/}
            {/*<InfoSection*/}
            {/*    collapse={<BachelorCprE/>}*/}
            {/*    detail='May 2022 • GPA: 3.80'*/}
            {/*    header='Bachelor of Science in Computer Engineering'*/}
            {/*    image={<MarstonImage/>}*/}
            {/*    subheader='College of Engineering'*/}
            {/*/>*/}
        </StyledInfoPageContainer>
    </>
);

export default Experience;
