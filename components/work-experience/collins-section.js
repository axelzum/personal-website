import { useState } from 'react';

import DropdownArrow from '../dropdown-arrow';

import {
  StyledDate,
  StyledDropdownArrow,
  StyledSection,
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledSectionTitle,
} from './styles';

const CollinsSection = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <StyledSection onClick={handleToggle}>
      <StyledSectionTitle>
        <StyledSectionHeader>{'Collins Aerospace, Mission Systems • Cedar Rapids, Iowa'}</StyledSectionHeader>
        <StyledSectionSubheader>
          {'Software Engineering Intern, Test and Training Instrumentation'}
        </StyledSectionSubheader>
      </StyledSectionTitle>
      <StyledDate>{'May 2019–August 2020'}</StyledDate>
      <StyledDropdownArrow isOpen={show}>
        <DropdownArrow />
      </StyledDropdownArrow>
    </StyledSection>
  );
};

export default CollinsSection;
