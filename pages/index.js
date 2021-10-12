import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const StyledPageContainer = styled.div`
  width: 90vw;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledSection = styled.div`
  p {
    width: 265px;
    margin: auto;
    flex-shrink: 0;
    text-align: center;
    padding-bottom: 5vh;
  }
`;

const StyledImageContainer = styled.div`
  width: 265px;
  height: 350px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  margin: 0 auto;
  flex-shrink: 0;
`;

const StyledTextContainer = styled.div`
  text-align: center;
  padding: 0 2vw 0;
`;

const StyledTitle = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

const Home = () => (
  <>
    <Head>
      <title>{'Axel Zumwalt'}</title>
      <meta content='Personal resume website' name='description' />
    </Head>

    <StyledTitle>
      <h1>{"Axel Zumwalt's Portolio Website"}</h1>
    </StyledTitle>
    <StyledPageContainer>
      <StyledSection>
        <StyledImageContainer>
          <Image height={350} layout='fixed' src='/images/portrait.jpeg' width={265} />
        </StyledImageContainer>
      </StyledSection>
      <StyledTextContainer>
        <h3>
          {
            'I am a student at Iowa State University graduating in May of 2022 with a Bachelor of Science in Computer Engineering and a Master of Business Administration.'
          }
        </h3>
        <h3>
          {
            'I am a skilled computer software developer with industry experience in ecommerce web-design and object oriented application development'
          }
        </h3>
        <h3>
          {
            'My future career objective is build on my existing experiences in project planning, execution, and leadership to become a product manager and lead the design, execution, and delivery of impactful ideas.'
          }
        </h3>
      </StyledTextContainer>
      <StyledSection>
        <StyledImageContainer>
          <a
            href='/files/Zumwalt_Axel Resume.pdf'
            rel='noopener noreferrer'
            target='_blank'
            title="Axel Zumwalt's Resume"
          >
            <Image height={350} layout='fixed' src='/images/resume-photo.png' width={265} />
          </a>
        </StyledImageContainer>
        <p>{"Click to View Axel's Resume"}</p>
      </StyledSection>
    </StyledPageContainer>
  </>
);

export default Home;
