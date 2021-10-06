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

const SoftronicsSection = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <StyledSection onClick={handleToggle}>
      <StyledSectionTitle>
        <StyledSectionHeader>{'Softronics Ltd. • Marion, Iowa'}</StyledSectionHeader>
        <StyledSectionSubheader>{'Intern'}</StyledSectionSubheader>
      </StyledSectionTitle>
      <StyledDate>{'May 2016–August 2018'}</StyledDate>
      <StyledDropdownArrow isOpen={show}>
        <DropdownArrow />
      </StyledDropdownArrow>
    </StyledSection>
  );
};

export default SoftronicsSection;
