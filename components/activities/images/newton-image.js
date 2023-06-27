import styled from 'styled-components';
import Image from 'next/image';

const StyledNewtonImage = styled.div`
  max-width: 400px;
  display: flex;
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
`;

const NewtonImage = () => (
  <StyledNewtonImage>
    <Image height={1719} layout='intrinsic' src='/images/newton.jpg' width={2149} />
  </StyledNewtonImage>
);

export default NewtonImage;
