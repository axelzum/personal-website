import DropdownArrow from '../dropdown-arrow';

import {
  StyledDate,
  StyledDropdownArrow,
  StyledSection,
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledSectionTitle,
} from './styles';

const CollinsSection = () => (
  <StyledSection>
    <StyledSectionTitle>
      <StyledSectionHeader>{'Collins Aerospace, Mission Systems • Cedar Rapids, Iowa'}</StyledSectionHeader>
      <StyledSectionSubheader>
        {'Software Engineering Intern, Test and Training Instrumentation'}
      </StyledSectionSubheader>
    </StyledSectionTitle>
    <StyledDate>{'May 2019–August 2020'}</StyledDate>
    <StyledDropdownArrow>
      <DropdownArrow />
    </StyledDropdownArrow>
  </StyledSection>
);

export default CollinsSection;
