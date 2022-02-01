
import IconLinks from './icon-links';
import {StyledContactInfo, StyledCopyright, StyledFooter, StyledFooterInfoContainer} from './styles';

const Footer = () => (
  <StyledFooter>
    <StyledFooterInfoContainer>
      <StyledContactInfo>
        <p>{'axelzum@gmail.com'}</p>
        <p>{'319-389-8064'}</p>
      </StyledContactInfo>
      <StyledCopyright>{'Copyright © Axel Zumwalt 2021-2022'}</StyledCopyright>
      <IconLinks/>
    </StyledFooterInfoContainer>
  </StyledFooter>
);

export default Footer;
