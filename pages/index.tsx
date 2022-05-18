import Head from 'next/head'
import Header from '../components/Header'
import Xbanner from '../components/Xbanner'

const Home = () => {
  return (
    <div className={`relative h-screen bg-gradient-to-b  lg:h-[140vh] `}>
      <Head>
        <title>Roliglek </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Xbanner />
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
    </div>
  )
}

export default Home
