import Image from 'next/image';
import styled from 'styled-components';

const StyledSocialContainer = styled.div`
  position: absolute;
  right: 100px;
`;

const StyledLogo = styled.span`
  margin-left: 0.5rem;
`;

const IconLinks = () => (
  <StyledSocialContainer>
    <a
      href="https://www.linkedin.com/in/axel-zumwalt"
      rel="noopener noreferrer"
      target="_blank"
      title="https://www.linkedin.com/in/axel-zumwalt">
      <StyledLogo>
        <Image alt="LinkedIn Logo" height={30} src="/images/logos/linkedin.png" width={30}/>
      </StyledLogo>
    </a>
    <a
      href="https://github.com/axelzum"
      rel="noopener noreferrer"
      target="_blank"
      title="https://github.com/axelzum">
      <StyledLogo>
        <Image alt="GitHub Logo" height={30} src="/images/logos/github.png" width={30}/>
      </StyledLogo>
    </a>
  </StyledSocialContainer>
);

export default IconLinks;