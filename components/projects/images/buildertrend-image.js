import styled from 'styled-components';
import Image from 'next/image';

const StyledBuildertrendImage = styled.div`
  max-width: 500px;
`;

const BuildertrendImage = () => (
  <StyledBuildertrendImage>
    <Image height={960} layout='intrinsic' src='/images/logos/buildertrend.png' width={5240} />
  </StyledBuildertrendImage>
);

export default BuildertrendImage;
