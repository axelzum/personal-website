import styled from 'styled-components';

const StyledParagraph = styled.div`
  margin-bottom: 0;
  margin-top: 1vh;
`;

const HighSchool = () => (
  <StyledParagraph>
    <h3>{'Honors and Awards'}</h3>
    <ul>
      <li>{'Class Rank: 1 of 145'}</li>
      <li>{'Top 10 Iowa Assessments: 2014–2017'}</li>
      <li>{'Honor Roll: 2014–2017'}</li>
      <li>{'Merveaux Academic Excellence Scholarship'}</li>
      <li>{'Greater Cedar Rapids Community Foundation Scholarship'}</li>
      <li>{'Linn County 4-H Youth Council Scholarship'}</li>
    </ul>
  </StyledParagraph>
);

export default HighSchool;
