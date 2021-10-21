import styled from 'styled-components';
import Image from 'next/image';

const StyledParagraph = styled.div`
  margin-bottom: 0;
  margin-top: 1vh;

  em {
    display: block;
  }
`;

const Softronics = () => (
  <StyledParagraph>
    <Image height={70} layout='fixed' src='/images/logos/softronics.jpg' width={400} />
    <em>{'Mechanical Engineering Intern (3rd work-term) • May 2018-August 2018'}</em>
    <ul>
      <li>{'Instrumental in implementing company-wide product data management system for CAD drawings.'}</li>
      <li>{'Solved problems with VBA to increase work efficiency.'}</li>
      <li>{'Gained industry experience using CAD and workflow techniques in SolidWorks and SolidWorks PDM.'}</li>
      <li>{'Created and revised product models and drawings to specification.'}</li>
    </ul>
    <em>{'Software Engineering Intern (2nd work-term) • June 2017-August 2017'}</em>
    <ul>
      <li>{'Designed a user interface for customer use.'}</li>
      <li>{'Used problem solving and research skills to utilize secure network protocols with Git.'}</li>
      <li>
        {'Solved problems on an embedded system relating to radio and GPS communications as well as data parsing.'}
      </li>
      <li>{'Used problem solving and research skills to learn how to implement secure network protocols with Git.'}</li>
    </ul>
    <em>{'Engineering Intern (1st work-term) • May 2016-March 2017'}</em>
    <ul>
      <li>{'Optimized usability of company electrical component inventory.'}</li>
      <li>{'Developed organizational skills and learned about productive operations techniques.'}</li>
      <li>{'Performed product testing to business quality standards.'}</li>
      <li>{'Wrote software and discovered applications for SQL database management and radio communications.'}</li>
    </ul>
  </StyledParagraph>
);

export default Softronics;
