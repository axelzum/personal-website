import styled from 'styled-components';
import Image from 'next/image';

const StyledBassImage = styled.div`
  max-width: 600px;
`;

const BassImage = () => (
  <StyledBassImage>
    <Image height={1365} layout='intrinsic' src='/images/axelbass.jpeg' width={2048} />
  </StyledBassImage>
);

export default BassImage;
