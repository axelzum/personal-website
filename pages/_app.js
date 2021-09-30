import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

import Layout from '../components/layout';
import Theme from '../public/theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: century-gothic, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  h1 {
    font-size: 3.7vh;
  }
  
`;

const AppLayout = ({ Component, pageProps }) => (
  <Theme>
    <GlobalStyle />
    <Layout>
      <Head>
        <title>{'Axel Zumwalt Personal Website'}</title>
        <link href='/favicons/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
        <link href='/favicons/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
        <link href='/favicons/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
        <link href='/favicons/site.webmanifest' rel='manifest' />
        <link color='#223286' href='/favicons/safari-pinned-tab.svg' rel='mask-icon' />
        <link href='/favicons/favicon.ico' rel='shortcut icon' />
        <meta content='#223286' name='msapplication-TileColor' />
        <meta content='/favicons/browserconfig.xml' name='msapplication-config' />
        <meta content='#ffffff' name='theme-color' />
        <link href='https://use.typekit.net/oov2wcw.css' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </Theme>
);

export default AppLayout;
