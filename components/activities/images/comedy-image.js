import styled from 'styled-components';
import Image from 'next/image';

const StyledComedyImage = styled.div`
  max-width: 400px;
  display: flex;
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
`;

const ComedyImage = () => (
  <StyledComedyImage>
    <Image height={1529} layout='intrinsic' src='/images/comedy.jpg' width={1911} />
  </StyledComedyImage>
);

export default ComedyImage;
