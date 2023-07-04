import styled from 'styled-components';
import Image from 'next/image';

const StyledGradImage = styled.div`
  max-width: 300px;
  min-height: 200px;
  min-width: 300px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
`;

const GradImage = () => (
    <StyledGradImage>
        <Image height={1824} layout='intrinsic' src='/images/grad-photo.jpeg' width={1537} />
    </StyledGradImage>
);

export default GradImage;
