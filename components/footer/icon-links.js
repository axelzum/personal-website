import styled from 'styled-components';
import { LinkedinSquare, Github } from 'styled-icons/boxicons-logos';

const StyledLinkedInLogo = styled(LinkedinSquare)`
  width: 40px;
`;

const StyledGithubLogo = styled(Github)`
  width: 40px;
`;

const IconLinks = () => (
  <div>
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
  </div>
);

export default IconLinks;
