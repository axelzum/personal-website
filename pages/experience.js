import Head from 'next/head';

import Softronics from '../components/experience/work/softronics';
import Collins from '../components/experience/work/collins';
import Hyvee from '../components/experience/work/hyvee';
import {
    StyledInfoPageContainer,
    StyledTitleBox,
} from '../styles/styles';
import HyveeImage from '../components/experience/images/hyvee-image';
import CollinsImage from '../components/experience/images/collins-image';
import InfoSection from '../components/info-section/info-section';
import GradImage from '../components/experience/images/grad-image';
import IsuImage from '../components/experience/images/isu-image';
import DeereImage from '../components/experience/images/deere-image';
import {
    StyledEducationInfoConatiner,
    StyledEducationTextContainer,
    StyledEducationTitle,
} from '../components/experience/education/styles';
import MasterBusinessAdministration from '../components/experience/education/mba';
import BachelorCprE from '../components/experience/education/bs-cpre';
import Deere from '../components/experience/work/deere';

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
            <InfoSection
                collapse={<Deere/>}
                date='June 2022 – Present'
                detail='As part of a rotational program I held two fullstack web development positions with John Deere. At Intelligent Solutions Group I worked on land data managment applications. 
                At John Deere Financial I built software that facilitates the creation and submission of installment and lease financing applications.'
                header='John Deere • Des Moines, Iowa'
                image={<DeereImage/>}
                subheader='Software Engineer II'
            />
            <InfoSection
                collapse={<Hyvee/>}
                date='May 2021 – May 2022'
                detail='Hy-Vee is a midwest-based premium grocery store. As a digital software engineer for Aisles Online, I improved customer and employee experiences for online grocery ordering and fulfillment.'
                header='Hy-Vee, Helpful Smiles Technology • Grimes, Iowa'
                image={<HyveeImage/>}
                subheader='Software Engineering Intern, Aisles Online: Ecommerce Fulfillment'
            />
            <InfoSection
                collapse={<Collins/>}
                date='May 2019 – August 2020'
                detail='Test and Training Instrumentation designs and manufactures mission critical air combat test and training equipment.
                As a Java application developer in this domain, I created and tested a system control application to strict government quality assurance standards.'
                header='Collins Aerospace, Mission Systems • Cedar Rapids, Iowa'
                image={<CollinsImage/>}
                subheader='Software Engineering Intern, Test and Training Instrumentation'
            />
            <InfoSection
                collapse={<Softronics/>}
                date='May 2016 – August 2018'
                detail='Softronics Ltd. is a small engineering firm specializing in high frequency radio technology. They design and manufacture custom electrical components and products for commercial and military customers. During my time as an intern at Softronics I worked in many different roles to support various business operations.'
                header='Softronics Ltd. • Marion, Iowa'
                subheader='Software and Mechanical Engineering Intern'
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
                <StyledEducationTextContainer>
                    <MasterBusinessAdministration/>
                    <BachelorCprE/>
                </StyledEducationTextContainer>
                <IsuImage/>
            </StyledEducationInfoConatiner>
        </StyledInfoPageContainer>
    </>
);

export default Experience;
