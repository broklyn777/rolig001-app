import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Roliglek </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
 <h1>HEJJA!</h1>
    </div>
  )
}

export default Home
