import styled from 'styled-components';
import Image from 'next/image';

const StyledBassImage = styled.div`
  max-width: 400px;
  display: flex;
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
`;

const BassImage = () => (
  <StyledBassImage>
    <Image height={1364} layout='intrinsic' src='/images/axelbass.jpg' width={1705} />
  </StyledBassImage>
);

export default BassImage;
