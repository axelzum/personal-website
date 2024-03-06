import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 80px;
  border-top: thin solid;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const StyledFooterInfoContainer = styled.div`
  padding-left: 10px;
  
  a {
    text-decoration-line: underline;
  }
`;

export { StyledFooter, StyledFooterInfoContainer };
