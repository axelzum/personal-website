import styled from 'styled-components';
import Image from 'next/image';

const StyledCollinsImage = styled.div`
  max-width: 100px;
  max-height: 100px;
  margin: 20px;
`;

const CollinsImage = () => (
  <StyledCollinsImage>
    <Image height={200} layout='intrinsic' src='/images/logos/collins.png' width={200} />
  </StyledCollinsImage>
);

export default CollinsImage;
