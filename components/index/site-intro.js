import Image from 'next/image';
import styled from 'styled-components';

const StyledIntro = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledIntroPhotoContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  border-radius: 10px;
  overflow: hidden;
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
            <Image height={2918} layout='intrinsic' priority src='/images/portrait3.jpeg' width={2918}/>
        </StyledIntroPhotoContainer>
        <StyledIntroTextContainer>
            <h2>
                {'I am an expert Fullstack Software Engineer and MBA with over 5 years of diverse industry experiences.'}
            </h2>
            <h2>
                {'From building complex user interfaces in React and Java to designing robust API solutions with Spring and Node.js, '+
                'my depth of technical experience allows me to work effectivly in any domain.'}
            </h2>
            <h2>
                {'I hope to support your creative endeavor as a problem-solver proficient in communication, leadership, and execution.'}
            </h2>
        </StyledIntroTextContainer>
    </StyledIntro>
);

export default SiteIntro;
