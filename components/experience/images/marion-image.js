import styled from 'styled-components';
import Image from 'next/image';

const StyledMarionImage = styled.div`
  max-width: 300px;
  max-height: 300px;
`;

const MarionImage = () => (
  <StyledMarionImage>
    <Image height={3500} layout='intrinsic' src='/images/marion.jpg' width={3500} />
  </StyledMarionImage>
);

export default MarionImage;
