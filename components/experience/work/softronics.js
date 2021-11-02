import styled from 'styled-components';
import Image from 'next/image';

import { StyledImageContainer, StyledParagraph } from '../styles';

const StyledImage = styled(StyledImageContainer)`
  max-width: 50vh;
  min-width: 50vh;
`;

const Softronics = () => (
  <StyledParagraph>
    <StyledImage>
      <Image height={70} layout='responsive' src='/images/logos/softronics.jpg' width={400} />
    </StyledImage>
    <h3>{'Work Overview'}</h3>
    <p>
      {'Softronics Ltd. is a small engineering firm specializing in high frequency radio technology. ' +
        'They design and manufacture custom electrical components and products to solve commercial and military customer problems. ' +
        'During my time as an intern at Softronics I worked in many different roles to support various business operations.'}
    </p>

    <h3>{'Roles and Responsibilities'}</h3>
    <h4>{'Engineering Intern (1st work-term) • May 2016-March 2017'}</h4>
    <p>
      {'Supported the office manager and product manufacturing section of the business. ' +
        "Catalogued and sorted the company's electrical component stock in a searchable inventory to make finding parts easier. " +
        'Also supported the assembly and testing of electrical products to be sold to customers.'}
    </p>
    <h4>{'Software Engineering Intern (2nd work-term) • June 2017-August 2017'}</h4>
    <p>
      {'Worked with embedded software engineers on research and development projects while ' +
        'active contracts being worked on did not require a lot of software design.'}
    </p>
    <h4>{'Mechanical Engineering Intern (3rd work-term) • May 2018-August 2018'}</h4>
    <p>
      {'Because of a lack of need in embedded software I worked with mechanical engineers to migrate a database of ' +
        'CAD parts and assemblies to a product data management system for easier access and data loss protection.'}
    </p>

    <h3>{'Skills and Lessons Learned'}</h3>
    <ul>
      <li>{'Organizational skills and productive operations techniques for a small components inventory.'}</li>
      <li>{'Understanding and upholding business quality standards through product testing.'}</li>
      <li>{'Basic electrical assembly skills, soldering, reading wiring diagrams.'}</li>
      <li>{'Problem solving and research skills to operate an embedded development board.'}</li>
      <li>{'Data parsing and radio and GPS protocols.'}</li>
      <li>{'Web-scraping and data manipulation automation with VBA in Microsoft Excel.'}</li>
      <li>{'Following design drawings to create models in Solidworks.'}</li>
    </ul>
  </StyledParagraph>
);

export default Softronics;
