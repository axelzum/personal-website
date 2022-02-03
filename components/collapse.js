import { forwardRef } from 'react';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';

const StyledAnimateHeight = styled(AnimateHeight)`
  transition: height 0.2s ease, opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => (props.isOpen ? '0' : '7px')} ${(props) => (props.isOpen ? '0' : '7px')} 7px 7px;
  border: ${(props) => (props.isOpen ? '' : '0')};
  border-top: ${(props) => (props.isOpen ? '0' : '')};

  min-width: 300px;
  margin: 0 30px;

  h3 {
    margin: 0;
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
      isOpen={isOpen}
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
