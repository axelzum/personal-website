import styled from 'styled-components';
import Image from 'next/image';

const StyledGerdinImage = styled.div`
  max-width: 300px;
  max-height: 300px;
`;

const GerdinImage = () => (
  <StyledGerdinImage>
    <Image height={4800} layout='intrinsic' src='/images/gerdin.jpg' width={6400} />
  </StyledGerdinImage>
);

export default GerdinImage;
