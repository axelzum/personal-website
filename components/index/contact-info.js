import styled from 'styled-components';
import { EmailOutline, PhoneOutline } from 'styled-icons/evaicons-outline';
import { Github, LinkedinSquare } from 'styled-icons/boxicons-logos';

const StyledContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContactInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 7px;
  min-width: 300px;
  align-items: center;
  margin: 10px;

  svg {
    color: ${(props) => props.theme.colors.primary};
    padding-right: 10px;
    height: 40px;
  }

  p {
    padding-right: 10px;
  }
`;

const ContactInfo = () => (
  <StyledContactInfoContainer>
    <h1>{'Connect With Me'}</h1>
    <StyledContactInfoCard>
      <EmailOutline />
      <p>{'axelzum@gmail.com'}</p>
    </StyledContactInfoCard>
    <StyledContactInfoCard>
      <PhoneOutline />
      <p>{'319-389-8064'}</p>
    </StyledContactInfoCard>
    <StyledContactInfoCard>
      <LinkedinSquare />
      <p>{'linkedin.com/in/axel-zumwalt'}</p>
    </StyledContactInfoCard>
    <StyledContactInfoCard>
      <Github />
      <p>{'github.com/axelzum'}</p>
    </StyledContactInfoCard>
  </StyledContactInfoContainer>
);

export default ContactInfo;
