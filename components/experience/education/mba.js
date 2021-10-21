import styled from 'styled-components';

const StyledParagraph = styled.div`
  margin-bottom: 0;
  margin-top: 1vh;
`;

const MasterBusinessAdministration = () => (
  <StyledParagraph>
    <h3>{'Honors and Awards'}</h3>
    <ul>
      <li>{'GMAT Score: 690 (85th Percentile)'}</li>
      <li>{'Business Graduate Program Merit Scholarship: 2020'}</li>
      <li>{'BUSAD 594 MBA Service Learning Project Honorable Mention Award: Spring 2021'}</li>
    </ul>
  </StyledParagraph>
);

export default MasterBusinessAdministration;
