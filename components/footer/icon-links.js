import styled from 'styled-components';
import { LinkedinSquare, Github } from 'styled-icons/boxicons-logos';

const StyledSocialContainer = styled.div`
  padding-right: 30px;
  position: relative;
  right: 0;
`;

const StyledLinkedInLogo = styled(LinkedinSquare)`
  width: 40px;
  margin-left: 5px;
`;

const StyledGithubLogo = styled(Github)`
  width: 40px;
  margin-left: 5px;
`;

const IconLinks = () => (
  <StyledSocialContainer>
    <a
      href='https://www.linkedin.com/in/axel-zumwalt'
      rel='noopener noreferrer'
      target='_blank'
      title='https://www.linkedin.com/in/axel-zumwalt'
    >
      <StyledLinkedInLogo />
    </a>
    <a href='https://github.com/axelzum' rel='noopener noreferrer' target='_blank' title='https://github.com/axelzum'>
      <StyledGithubLogo />
    </a>
  </StyledSocialContainer>
);

export default IconLinks;
