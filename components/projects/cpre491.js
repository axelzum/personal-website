import styled from 'styled-components';
import Image from 'next/image';

const StyledParagraph = styled.div`
  margin-top: 1vh;

  p {
    margin-bottom: 0;
    margin-top: 1vh;
  }
`;

const CprE491 = () => (
  <StyledParagraph>
    <Image height={100} layout='fixed' src='/images/logos/buildertrend.png' width={500} />
    <p>
      {'I am currently working on my senior capstone design project with six other students in the Computer Engineering ' +
        'and Software Engineering programs at Iowa State University.'}
    </p>
    <p>
      {'For the project we are working with the company Buildertrend as our client. ' +
        'Buildertrend develops construction management software and are looking to add the functionality for ' +
        'builders and construction managers using their platform to schedule and hold virtual meetings through Zoom ' +
        'directly on the Buildertrend App. Our team will be making a proof of concept for the technology which ' +
        'involves designing a webapp that users can log into to schedule, hold, and record Zoom meetings using the Zoom API. ' +
        'Our webapp will have a backend that will be capable to storing recorded meetings for later playback as well.'}
    </p>
    <p>
      {'This senior design project will be worked on for two semesters so the project is still in early planning phases. ' +
        'Due to this my role of the team will change. Right now I am acting in a project manager role as we plan the ' +
        'development of this project in the Spring semester but later I will be a developer for this team.'}
    </p>
    <p>
      {'Over the course of this project I hope to build on my existing front-end react experience, ' +
        'learn new skills in creating a .NET backend and SQL database for holding meeting recordings, ' +
        'and I hope to build on my team communication and leadership skills by working with a larger team on a class project.'}
    </p>
  </StyledParagraph>
);

export default CprE491;
