import Head from 'next/head'
import Designer from '../components/home/Designer'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Inicio - Conteitu Air</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Designer />
    </main>
  )
}

