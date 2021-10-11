import { forwardRef } from 'react';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';

const StyledAnimateHeight = styled(AnimateHeight)`
  transition: height 0.2s ease, opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  div {
    font-size: 2vh;
  }
`;

// eslint-disable-next-line react/display-name
const Collapse = forwardRef(
  (
    {
      isOpen,
      animateOpacity = true,
      onAnimationStart,
      onAnimationEnd,
      duration,
      easing = 'ease',
      startingHeight = 0,
      endingHeight = 'auto',
      ...rest
    },
    ref,
  ) => (
    <StyledAnimateHeight
      animateOpacity={animateOpacity}
      applyInlineTransitions={false}
      duration={duration}
      easing={easing}
      height={isOpen ? endingHeight : startingHeight}
      {...{
        onAnimationEnd,
        onAnimationStart,
      }}
    >
      <div ref={ref} {...rest} />
    </StyledAnimateHeight>
  ),
);

export default Collapse;
