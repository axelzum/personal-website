import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>{'Create Next App'}</title>
      <meta content='Generated by create next app' name='description' />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        {'Read'}{' '}
        <Link href='/posts/first-post'>
          <a>{'this page!'}</a>
        </Link>
      </h1>

      <p className={styles.description}>
        {'Get started by editing'} <code className={styles.code}>{'pages/index.js'}</code>
      </p>

      <div className={styles.grid}>
        <a className={styles.card} href='https://nextjs.org/docs'>
          <h2>{'Documentation &rarr'}</h2>
          <p>{'Find in-depth information about Next.js features and API.'}</p>
        </a>

        <a className={styles.card} href='https://nextjs.org/learn'>
          <h2>{'Learn &rarr;'}</h2>
          <p>{'Learn about Next.js in an interactive course with quizzes!'}</p>
        </a>

        <a className={styles.card} href='https://github.com/vercel/next.js/tree/master/examples'>
          <h2>{'Examples &rarr;'}</h2>
          <p>{'Discover and deploy boilerplate example Next.js projects.'}</p>
        </a>

        <a
          className={styles.card}
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        >
          <h2>{'Deploy &rarr;'}</h2>
          <p>{'Instantly deploy your Next.js site to a public URL with Vercel.\r'}</p>
        </a>
      </div>
    </main>
  </div>
);

export default Home;
