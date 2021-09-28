import Head from 'next/head';
import styled from 'styled-components';

import HyveeSection from '../components/work-experience/hyvee-section';
import CollinsSection from '../components/work-experience/collins-section';
import SoftronicsSection from '../components/work-experience/softronics-section';

import StyledH1 from './styles';

const StyledWorkExperiences = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const WorkExperience = () => (
  <>
    <Head>
      <title>{'Work Experience'}</title>
      <meta content='Detailed work experience history' name='description' />
    </Head>

    <StyledH1>{'Work Experience'}</StyledH1>
    <StyledWorkExperiences>
      <HyveeSection />
      <CollinsSection />
      <SoftronicsSection />
    </StyledWorkExperiences>

    {/*

    StyledCaretContainer = styled.div<{isOpen}
      ${(props) =>
        props.isOpen
          ? css`
            svg {
              transform: rotate(270deg);
              transition: transform 0.2s ease;

    <StyledOrderItemContainer>
      <StyledHeaderRow>
       {headers.map(header) => (//headers is an array of strings
        <StyledStrong key={header}>{header}</StyledStrong>
        ))}
      </StyledHeaderRow>

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

    */}
  </>
);

export default WorkExperience;
