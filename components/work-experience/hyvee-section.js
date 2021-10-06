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

const HyveeSection = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <StyledSection onClick={handleToggle}>
      <StyledSectionTitle>
        <StyledSectionHeader>{'Hy-Vee, Helpful Smiles Technology • Grimes, Iowa'}</StyledSectionHeader>
        <StyledSectionSubheader>{'Software Engineering Intern, Ecommerce Fulfillment'}</StyledSectionSubheader>
      </StyledSectionTitle>
      <StyledDate>{'May 2021–Present'}</StyledDate>
      <StyledDropdownArrow isOpen={show}>
        <DropdownArrow />
      </StyledDropdownArrow>
    </StyledSection>
  );
};

export default HyveeSection;

/*

      StyledAnimateHeight = styled(AnimateHeight)` //import AnimateHeight from 'react-animate-height'
        transition: height 0.2s ease, opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
        transform: translateY(-0.625rem);

      const Collapse = forwradRef(
        (
          {
            isOpen,
            animateOpacity = true
            onAnimationStart,
            onAnimationEnd,
            duration,
            easing = 'ease'
            startingHeight = 0,
            endingHeight = 'auto',
            ..rest
          },
          ref
        ) => {
          return(
            <StyledAnimateHeight
              animateOpacity=animateOpacity}
              applyInlineTransitions={false}
              data-testid="collapse-container"
              duration={duration}
              easing={easing}
              height={isOpen ? endingHeight : startingHeight}
              {...{
                onAnimationEnd,
                onAnimationStart
              }}
            >
              <div ref={ref} {...rest} />
            </StyledAnimateHeight




<StyledCollapse
  border: 0.5px solid
  border-top:none
  padding: 0.5rem 1rem 0rem 7rem
  transform: translateY(0.625rem)
    */
