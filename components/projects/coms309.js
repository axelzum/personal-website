import styled from 'styled-components';
import Image from 'next/image';

const StyledParagraph = styled.div`
  margin-top: 1vh;

  p {
    margin-bottom: 0;
    margin-top: 1vh;
  }

  a {
    text-decoration: underline;
  }
`;

const ComS309 = () => (
  <StyledParagraph>
    <Image height={300} layout='fixed' src='/images/309.png' width={500} />
    <p>
      {
        'For this project I worked with three other classmates to ideate, design, and develop a mobile phone application to learn about the software development process.'
      }
    </p>
    <p>
      {
        'Our team designed an app called open campus which was pitched as a map of college campuses that included in-depth features like water fountains, bathrooms, and bike racks. The app was meant to improve on our existing campus map to include community features like commenting and rating locations and navigation'
      }
    </p>
    <p>
      {
        'My role on the team was "Repository Lead" where my job was to make sure our git repository was maintained properly proper git procedue was being followed by the team. Since I had more experience in a shared code environment than my teammates I had to set standards for code commits and teach others best practices.'
      }
    </p>
    <hr />
    <p>
      {
        'During my time as a developer on this project I focused on front-end development and gained a lot of experience doing android UI design. I also got some exposure to using the Spring Java backend framework to send queries to a database, using the Google maps API, and creating a secure user authentication service with encryption.'
      }
    </p>
    <a
      href='https://github.com/axelzum/ComS309-SS_4'
      rel='noopener noreferrer'
      target='_blank'
      title='CprE 309 Project'
    >
      {'Click here for more project info and source code on Github.'}
    </a>
  </StyledParagraph>
);

export default ComS309;
