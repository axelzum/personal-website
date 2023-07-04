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
            <Image height={4069} layout='intrinsic' priority src='/images/portrait.jpeg' width={4747}/>
        </StyledIntroPhotoContainer>
        <StyledIntroTextContainer>
            <h2>
                {'I am an accomplished Software Engineer with over 5 years of industry experience creating successful solutions. '}
            </h2>
            <h2>
                {'My diverse portfolio of expertise across multiple industries includes an advanced understanding of the ReactJS Framework and corresponding testing patterns. ' +
                    'I am also passionate about identifying opportunities for improvement and creating and executing plans with others to see that improvement.'}
            </h2>
            <h2>
                {
                    'I hope to support your creative endeavor as an organized problem-solver proficient in communication, leadership, and execution.'
                }
            </h2>
        </StyledIntroTextContainer>
    </StyledIntro>
);

export default SiteIntro;
