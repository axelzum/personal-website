import DropdownArrow from '../dropdown-arrow';

import {
  StyledDate,
  StyledDropdownArrow,
  StyledSection,
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledSectionTitle,
} from './styles';

const SoftronicsSection = () => (
  <StyledSection>
    <StyledSectionTitle>
      <StyledSectionHeader>{'Softronics Ltd. • Marion, Iowa'}</StyledSectionHeader>
      <StyledSectionSubheader>{'Intern'}</StyledSectionSubheader>
    </StyledSectionTitle>
    <StyledDate>{'May 2016–August 2018'}</StyledDate>
    <StyledDropdownArrow>
      <DropdownArrow />
    </StyledDropdownArrow>
  </StyledSection>
);

export default SoftronicsSection;
