import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home(data) {
   const vouchers = data.vouchers;
  return (
    <div className={styles.container}>
      <Head>
        <title>Voucher Number Generation App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Voucher Numbers Generator
        </h1>
          <Link href="/api/vouchers">
            <a className={styles.card}><h2> Click to Here to Get Vouchers</h2></a>
          </Link>
        

      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export function getStaticProps(){
  return {
    props: {
      data: {
        vouchers: [{ title: " Voucher Numbers "}],
      },
    },
  };
}