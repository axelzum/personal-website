import Image from 'next/image';
import styled from 'styled-components';

const StyledResume = styled.a`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    align-content: center;
  }
`;

const StyledResumePhotoContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  border: 3px solid white;
  border-radius: 7px;
  margin: 30px 20px;
`;

const StyledResumeTextContainer = styled.div`
  display: block;
  flex: 1;
  max-width: 400px;
  margin: auto 20px;
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
      <h3>{'Last Updated 1/18/2022'}</h3>
    </StyledResumeTextContainer>
    <StyledResumePhotoContainer>
      <Image height={3500} layout='intrinsic' src='/images/resume-photo.png' width={2650} />
    </StyledResumePhotoContainer>
  </StyledResume>
);

export default Resume;
