import styled from 'styled-components';
import Image from 'next/image';

const StyledDeereImage = styled.div`
  max-width: 100px;
  max-height: 100px;
  margin: 20px;
`;

const DeereImage = () => (
  <StyledDeereImage>
    <Image height={1067} layout='intrinsic' src='/images/logos/deere.jpg' width={1067} />
  </StyledDeereImage>
);

export default DeereImage;
