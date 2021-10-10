import {useState} from 'react';

import DropdownArrow from '../dropdown-arrow';
import Collapse from '../collapse';

import {
  StyledDate,
  StyledDropdownArrow,
  StyledSection,
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledSectionTitle,
} from './styles';

const HyveeSection = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <StyledSection onClick={handleToggle}>
        <StyledSectionTitle>
          <StyledSectionHeader>{'Hy-Vee, Helpful Smiles Technology • Grimes, Iowa'}</StyledSectionHeader>
          <StyledSectionSubheader>{'Software Engineering Intern, Ecommerce Fulfillment'}</StyledSectionSubheader>
        </StyledSectionTitle>
        <StyledDate>{'May 2021–Present'}</StyledDate>
        <StyledDropdownArrow isOpen={show}>
          <DropdownArrow/>
        </StyledDropdownArrow>
      </StyledSection>
      <Collapse isOpen={show}>
        {'test'}
      </Collapse>
    </>
  );
};

export default HyveeSection;

/*






<StyledCollapse
  border: 0.5px solid
  border-top:none
  padding: 0.5rem 1rem 0rem 7rem
  transform: translateY(0.625rem)
    */
