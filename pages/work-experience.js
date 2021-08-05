import Head from 'next/head';
import styled from "styled-components";
import Link from "next/link";

const StyledH2 = styled.h2`
  color: #0070f3;
`;

const WorkExperience = () => (
    <>
        <Head>
            <title>{'Work Experience'}</title>
            <meta content='Detailed work experience history' name='description'/>
        </Head>
        <h1>{'Work Experience'}</h1>
        <StyledH2>
            <Link href='/'>
                <a>{'Back to home'}</a>
            </Link>
        </StyledH2>
    </>
);

export default WorkExperience;
