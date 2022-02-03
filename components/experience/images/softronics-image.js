import styled from 'styled-components';
import Image from 'next/image';

const StyledHyVeeImage = styled.div`
  max-width: 700px;
  max-height: 300px;
`;

const SoftronicsImage = () => (
  <StyledHyVeeImage>
    <Image height={700} layout='intrinsic' src='/images/logos/softronics.jpg' width={4000} />
  </StyledHyVeeImage>
);

export default SoftronicsImage;
