import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

import Layout from '../components/layout';
import Theme from '../public/theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: Century Gothic, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: 2vh;
  }
`;
/* eslint-disable react/jsx-sort-props */
const AppLayout = ({ Component, pageProps }) => (
  <Theme>
    <GlobalStyle />
    <Layout>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='HandheldFriendly' content='true' />

        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#223286' />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#223286' />
        <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
        <meta name='theme-color' content='#223286' />
        <meta name='title' content='Axel Zumwalt - Career Portfolio' />
        <meta name='description' content='Explore work, experience, and projects of Axel Zumwalt' />
        <meta name='author' content='Axel Zumwalt' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://axelzum.vercel.app/' />
        <meta property='og:title' content='Axel Zumwalt - Career Portfolio' />
        <meta property='og:description' content='Explore work, experience, and projects of Axel Zumwalt' />
        <meta property='og:image' content='/images/portrait.jpeg' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://axelzum.vercel.app/' />
        <meta property='twitter:title' content='Axel Zumwalt - Career Portfolio' />
        <meta property='twitter:description' content='Explore work, experience, and projects of Axel Zumwalt' />
        <meta property='twitter:image' content='/images/portrait.jpeg' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </Theme>
);
/* eslint-enable react/jsx-sort-props */

export default AppLayout;
