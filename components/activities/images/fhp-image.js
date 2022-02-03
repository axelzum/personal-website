import styled from 'styled-components';
import Image from 'next/image';

const StyledFHPImage = styled.div`
  max-width: 600px;
`;

const FHPImage = () => (
  <StyledFHPImage>
    <Image height={3281} layout='intrinsic' src='/images/FHP2018.jpg' width={4921} />
  </StyledFHPImage>
);

export default FHPImage;
