import Image from 'next/image';
import styled from 'styled-components';

import { StyledImageContainer, StyledParagraph } from '../styles';

const StyledImage = styled(StyledImageContainer)`
  max-width: 50vh;
  min-width: 50vh;
`;

const Collins = () => (
  <StyledParagraph>
    <StyledImage>
      <Image height={88} layout='responsive' src='/images/logos/collins.png' width={512} />
    </StyledImage>
    <ul>
      <li>
        {
          'Received training in scrum master duties such as managing team activity, running story writing with a customer, and handling and presenting program metrics to program leadership.'
        }
      </li>
      <li>{'Detected, reported, and repaired product defects for quality assurance phase of project. '}</li>
      <li>
        {'As a member of a large agile team used complicated git workflows to regularly deliver test driven software.'}
      </li>
      <li>{'Developed substantial object-oriented programming experience.'}</li>
      <li>{'Designed UI for customer use and generic UI components for use in multiple applications.'}</li>
      <li>{'Explored backend message flow in an Eclipse RCP app using an OSGi framework.'}</li>
      <li>{'Performed requirements-based framework and GUI testing using Python and Squish.'}</li>
    </ul>
  </StyledParagraph>
);

export default Collins;
