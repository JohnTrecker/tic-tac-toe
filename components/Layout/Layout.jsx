import Head from 'next/head'
import styles from './Layout.module.scss'
import NavBar from 'components/NavBar'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic-Tac-Toe Toy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
