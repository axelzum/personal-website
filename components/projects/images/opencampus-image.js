import styled from 'styled-components';
import Image from 'next/image';

const StyledOpenCampusImage = styled.div`
  max-width: 800px;
`;

const OpenCampusImage = () => (
  <StyledOpenCampusImage>
    <Image height={1408} layout='intrinsic' src='/images/309.png' width={2212} />
  </StyledOpenCampusImage>
);

export default OpenCampusImage;
