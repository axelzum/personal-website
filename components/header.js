import styled from 'styled-components';
import Image from "next/image";

const StyledLogo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeaderAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Header = () => (
    <StyledHeader>
        <StyledHeaderAnchor
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            rel='noopener noreferrer'
            target='_blank'
        >
            {'Powered by'}{' '}
            <StyledLogo>
                <Image alt='Vercel Logo' height={16} src='/vercel.svg' width={72} />
            </StyledLogo>
        </StyledHeaderAnchor>
    </StyledHeader>
);

export default Header;
