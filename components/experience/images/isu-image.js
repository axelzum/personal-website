import styled from 'styled-components';
import Image from 'next/image';

const StyledIsuImage = styled.div`
  max-width: 300px;
  max-height: 300px;
  min-width: 300px;
`;

const IsuImage = () => (
    <StyledIsuImage>
        <Image height={1200} layout='intrinsic' src='/images/logos/isu-seal.png' width={1200} />
    </StyledIsuImage>
);

export default IsuImage;
