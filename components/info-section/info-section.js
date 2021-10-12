import { useState } from 'react';

import DropdownArrow from '../dropdown-arrow';
import Collapse from '../collapse';

import {
  StyledDate,
  StyledDropdownArrow,
  StyledSection,
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledTextGrid,
} from './styles';

const InfoSection = ({ header, subheader, info, collapse }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <StyledSection onClick={handleToggle}>
        <StyledTextGrid>
          <div>
            <StyledSectionHeader>{header}</StyledSectionHeader>
            <StyledSectionSubheader>{subheader}</StyledSectionSubheader>
          </div>
          <StyledDate>{info}</StyledDate>
        </StyledTextGrid>
        <StyledDropdownArrow isOpen={show}>
          <DropdownArrow />
        </StyledDropdownArrow>
      </StyledSection>
      <Collapse isOpen={show}>{collapse}</Collapse>
    </>
  );
};

export default InfoSection;