import DropdownArrow from '../dropdown-arrow';

import {
  StyledDate,
  StyledDropdownArrow,
  StyledSection,
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledSectionTitle,
} from './styles';

const HyveeSection = () => (
  <StyledSection>
    <StyledSectionTitle>
      <StyledSectionHeader>{'Hy-Vee, Helpful Smiles Technology • Grimes, Iowa'}</StyledSectionHeader>
      <StyledSectionSubheader>{'Software Engineering Intern, Ecommerce Fulfillment'}</StyledSectionSubheader>
    </StyledSectionTitle>
    <StyledDate>{'May 2021–Present'}</StyledDate>
    <StyledDropdownArrow>
      <DropdownArrow />
    </StyledDropdownArrow>
  </StyledSection>
);

export default HyveeSection;
