import styled from 'styled-components';

import IconLinks from './icon-links';

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

const Footer = () => (
  <StyledFooter>
    <StyledCopyright>
      {'Axel Zumwalt ©2021'}
    </StyledCopyright>
    <IconLinks/>
  </StyledFooter>
);

export default Footer;
