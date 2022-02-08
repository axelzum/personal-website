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
        {'I am a student at Iowa State University graduating in May of 2022 with a Bachelor of Science in Computer Engineering and a Master of Business Administration. ' +
          'As a skilled computer software developer, I have industry experience in e-commerce web design with React and object-oriented application development in Java. ' +
          'In my free time, I like to play percussion and piano, discover new recipes, and enjoy board games.'}
      </h2>
      <h2>
        {
          'I hope to support your digital endeavor as an organized problem solver proficient in communication, leadership, and execution.'
        }
      </h2>
    </StyledIntroTextContainer>
  </StyledIntro>
);

export default SiteIntro;
