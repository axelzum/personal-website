import Image from 'next/image';
import styled from 'styled-components';

const StyledIntro = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledIntroPhotoContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 7px;
  margin: auto 20px;
`;

const StyledIntroTextContainer = styled.div`
  display: block;
  flex: 1;
  max-width: 600px;
  margin: auto 20px;
`;

const SiteIntro = () => (
  <StyledIntro>
    <StyledIntroPhotoContainer>
      <Image height={1000} layout='intrinsic' src='/images/portrait.jpeg' width={1167} />
    </StyledIntroPhotoContainer>
    <StyledIntroTextContainer>
      <h2>
        {'I am a student at Iowa State University graduating in May of 2022 with a Bachelor of Science in Computer Engineering and a Master of Business Administration.' +
          'I am a skilled computer software developer with industry experience in ecommerce web-design and object oriented application development' +
          'My future career objective is build on my existing experiences in project planning, execution, and leadership to become a product manager and lead the design, execution, and delivery of impactful ideas.'}
      </h2>
    </StyledIntroTextContainer>
  </StyledIntro>
);

export default SiteIntro;
