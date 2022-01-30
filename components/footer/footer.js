import styled from 'styled-components';

import IconLinks from './icon-links';

const StyledFooter = styled.footer`
  width: 100%;
  height: 80px;
  border-top: thin solid;
  margin-top: 30px;
  //display: flex;
  //flex-wrap: wrap;
  //justify-content: space-between;
  //align-items: center;
`;

const StyledFooterInfoContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledContactInfo = styled.div`
  padding-left: 30px;
  position: relative;
  left: 0;

  p {
    margin: 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterInfoContainer>
      <StyledContactInfo>
        <p>{'axelzum@gmail.com'}</p>
        <p>{'319-389-8064'}</p>
      </StyledContactInfo>
      <p>{'Axel Zumwalt ©2022'}</p>
      <IconLinks/>
    </StyledFooterInfoContainer>
  </StyledFooter>
);

export default Footer;
