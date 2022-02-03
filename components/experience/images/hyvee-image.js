import styled from 'styled-components';
import Image from 'next/image';

const StyledHyVeeImage = styled.div`
  max-width: 200px;
  max-height: 200px;
`;

const HyveeImage = () => (
  <StyledHyVeeImage>
    <Image height={5120} layout='intrinsic' src='/images/logos/hyvee.png' width={5120} />
  </StyledHyVeeImage>
);

export default HyveeImage;
