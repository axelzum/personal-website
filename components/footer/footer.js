import styled from 'styled-components';

import IconLinks from './icon-links';

const StyledFooter = styled.footer`
  width: 100%;
  height: 10vh;
  border-top: 1px solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vh;
`;

const StyledContactInfo = styled.span`
  padding-left: 2vw;

  p {
    margin: 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledContactInfo>
      <p>{'axelzum@gmail.com'}</p>
      <p>{'319-389-8064'}</p>
    </StyledContactInfo>
    <p>{'Axel Zumwalt ©2022'}</p>
    <IconLinks />
  </StyledFooter>
);

export default Footer;
