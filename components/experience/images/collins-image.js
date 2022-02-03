import styled from 'styled-components';
import Image from 'next/image';

const StyledHyVeeImage = styled.div`
  max-width: 500px;
  max-height: 300px;
`;

const CollinsImage = () => (
  <StyledHyVeeImage>
    <Image height={880} layout='intrinsic' src='/images/logos/collins.png' width={5120} />
  </StyledHyVeeImage>
);

export default CollinsImage;
