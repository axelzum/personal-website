import Image from 'next/image';
import styled from 'styled-components';

const StyledResume = styled.a`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledResumePhotoContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  overflow: hidden;
  border-radius: 10px;
  margin: 30px 20px;
`;

const StyledResumeTextContainer = styled.div`
  max-width: 400px;
  color: white;
  text-align: center;
`;

const Resume = () => (
  <StyledResume
    href='/files/Zumwalt_Axel Resume.pdf'
    rel='noopener noreferrer'
    target='_blank'
    title="Axel Zumwalt's Resume"
  >
    <StyledResumeTextContainer>
      <h1>{'Click to View or Download My Resume'}</h1>
      <h3>{'Last Updated 6/28/2023'}</h3>
    </StyledResumeTextContainer>
    <StyledResumePhotoContainer>
      <Image height={2200} layout='intrinsic' src='/images/resume-photo.png' width={1700} />
    </StyledResumePhotoContainer>
  </StyledResume>
);

export default Resume;
