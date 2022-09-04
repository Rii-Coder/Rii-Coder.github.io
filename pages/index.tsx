import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rii-Sama page</title>
        <meta name="description" content="Welcome to Rii-Sama page" />
        <link rel="icon" href="/cat.png" />
      </Head>
      <NavBar/>
      <div className={styles.base}>
          hola
      </div>
    </div>
  )
}

export default Home
