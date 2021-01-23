import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App With Molasses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Molasses on Next.js!</h1>

        <div className={styles.grid}>
          <Link href="/ssrExample">
            <div className={styles.card}>
              <h3>Server Side Render Example &rarr;</h3>
              <p>
                An example of a server side rendered next js page using
                molasses.
              </p>
            </div>
          </Link>
          <Link href="/clientExample">
            <div className={styles.card}>
              <h3>Client Side Render Example &rarr;</h3>
              <p>
                An example of a client side rendered next js page using
                molasses.
              </p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-molassesapp&utm_medium=default-template&utm_campaign=create-next-molasses-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        <a
          href="https://molasses.app?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Molasses App
        </a>
      </footer>
    </div>
  );
}
