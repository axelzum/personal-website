import {useState} from 'react';

import Collapse from '../collapse';

import {
    StyledReadMoreButton,
    StyledSection,
    StyledSectionCard,
    StyledSectionDate,
    StyledSectionDetail,
    StyledSectionHeader,
    StyledSectionSubheader,
    StyledTextContainer,
} from './new-styles';

const NewInfoSection = ({collapse, detail, header, image, subheader, date}) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <StyledSection>
            <StyledSectionCard>
                {image}
                <StyledTextContainer>
                    <StyledSectionHeader>{header}</StyledSectionHeader>
                    <StyledSectionSubheader>{subheader}</StyledSectionSubheader>
                    <StyledSectionDate>{date}</StyledSectionDate>
                    <StyledSectionDetail>{detail}</StyledSectionDetail>
                </StyledTextContainer>
            </StyledSectionCard>
            <Collapse isOpen={show}>{collapse}</Collapse>
            <StyledReadMoreButton onClick={handleToggle}>
                {!show && <div>{'Read More'}</div>}
                {show && <div>{'Read Less'}</div>}
            </StyledReadMoreButton>
        </StyledSection>
    );
};

export default NewInfoSection;
