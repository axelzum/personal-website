import styled from 'styled-components';
import Image from 'next/image';

const StyledMarstonImage = styled.div`
  max-width: 300px;
  max-height: 300px;
`;

const MarstonImage = () => (
  <StyledMarstonImage>
    <Image height={4800} layout='intrinsic' src='/images/marston.jpeg' width={6400} />
  </StyledMarstonImage>
);

export default MarstonImage;
