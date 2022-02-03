import styled from 'styled-components';
import { EmailOutline, PhoneOutline } from 'styled-icons/evaicons-outline';
import { Github, LinkedinSquare } from 'styled-icons/boxicons-logos';

const StyledContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContactInfoCard = styled.a`
  display: flex;
  flex-direction: row;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 7px;
  min-width: 300px;
  align-items: center;
  margin: 10px;

  &:hover {
    background: lightgray;
  }

  svg {
    color: ${(props) => props.theme.colors.primary};
    padding: 5px;
    height: 40px;
  }

  p {
    padding-right: 10px;
  }
`;

const ContactInfo = () => (
  <StyledContactInfoContainer>
    <h1>{'Connect With Me'}</h1>
    <StyledContactInfoCard href='mailto: axelzum@gmail.com'>
      <EmailOutline />
      <p>{'axelzum@gmail.com'}</p>
    </StyledContactInfoCard>
    <StyledContactInfoCard href='tel: 319-389-8064'>
      <PhoneOutline />
      <p>{'319-389-8064'}</p>
    </StyledContactInfoCard>
    <StyledContactInfoCard href='https://linkedin.com/in/axel-zumwalt'>
      <LinkedinSquare />
      <p>{'linkedin.com/in/axel-zumwalt'}</p>
    </StyledContactInfoCard>
    <StyledContactInfoCard href='https://github.com/axelzum'>
      <Github />
      <p>{'github.com/axelzum'}</p>
    </StyledContactInfoCard>
  </StyledContactInfoContainer>
);

export default ContactInfo;
