import IconLinks from './icon-links';
import { StyledContactInfo, StyledFooter, StyledFooterInfoContainer } from './styles';

const Footer = () => (
  <StyledFooter>
    <StyledFooterInfoContainer>
      <StyledContactInfo>
        <p>{'axelzum@gmail.com'}</p>
        <p>{'319-389-8064'}</p>
        <p>{'© Axel Zumwalt 2021-2023'}</p>
      </StyledContactInfo>
      <IconLinks />
    </StyledFooterInfoContainer>
  </StyledFooter>
);

export default Footer;
