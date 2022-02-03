import { useState } from 'react';
import { ChevronDown } from 'styled-icons/bootstrap';

import Collapse from '../collapse';

import {
  StyledDropdownArrow,
  StyledImageContainer,
  StyledSection,
  StyledSectionDetail,
  StyledSectionHeader,
  StyledSectionSubheader,
  StyledTextContainer,
} from './styles';

const InfoSection = ({ collapse, detail, header, image, subheader }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <StyledSection isOpen={show} onClick={handleToggle}>
        <StyledImageContainer>{image}</StyledImageContainer>
        <StyledTextContainer>
          <StyledSectionHeader>{header}</StyledSectionHeader>
          <StyledSectionSubheader>{subheader}</StyledSectionSubheader>
          <StyledSectionDetail>{detail}</StyledSectionDetail>
        </StyledTextContainer>
        <StyledDropdownArrow isOpen={show}>
          <ChevronDown />
        </StyledDropdownArrow>
      </StyledSection>
      <Collapse isOpen={show}>{collapse}</Collapse>
    </>
  );
};

export default InfoSection;
