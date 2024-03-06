import IconLinks from './icon-links';
import {StyledFooter, StyledFooterInfoContainer} from './styles';

const Footer = () => (
  <StyledFooter>
    <StyledFooterInfoContainer>
      <IconLinks/>
      <a href='mailto: axelzum@gmail.com' rel='noopener noreferrer' target='_blank'>{'axelzum@gmail.com'}</a>
    </StyledFooterInfoContainer>
  </StyledFooter>
);

export default Footer;
