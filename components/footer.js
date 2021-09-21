import styled from 'styled-components';
import Image from 'next/image';

const StyledLogo = styled.span`
  margin-left: 0.5rem;
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCopyright = styled.div`
  align-items: center;
`;

const StyledSocialContainer = styled.div`
  position: absolute;
  right: 100px;
`;

const Footer = () => (
  <StyledFooter>
    <StyledCopyright>
      {'Axel Zumwalt ©2021'}
    </StyledCopyright>
    <StyledSocialContainer>
      <a
        href="https://www.linkedin.com/in/axel-zumwalt"
        rel="noopener noreferrer"
        target="_blank">
        <StyledLogo>
          <Image alt="LinkedIn Logo" height={30} src="/logos/linkedin.png" width={30}/>
        </StyledLogo>
      </a>
      <a
        href="https://github.com/axelzum"
        rel="noopener noreferrer"
        target="_blank">
        <StyledLogo>
          <Image alt="GitHub Logo" height={30} src="/logos/github.png" width={30}/>
        </StyledLogo>
      </a>
    </StyledSocialContainer>
  </StyledFooter>
);

export default Footer;
