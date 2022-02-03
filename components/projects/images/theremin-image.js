import styled from 'styled-components';
import Image from 'next/image';

const StyledThereminImage = styled.div`
  max-width: 700px;
`;

const ThereminImage = () => (
  <StyledThereminImage>
    <Image height={926} layout='intrinsic' src='/images/theremin.gif' width={1313} />
  </StyledThereminImage>
);

export default ThereminImage;
