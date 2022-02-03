import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 80px;
  border-top: thin solid;
  margin-top: 30px;
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

const StyledCopyright = styled.p`
  padding: 10px;
`;

export { StyledFooter, StyledFooterInfoContainer, StyledContactInfo, StyledCopyright };
