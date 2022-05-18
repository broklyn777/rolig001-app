import Head from 'next/head'
import Header from '../components/Header'
import Xbanner from '../components/Xbanner'

const Home = () => {
  return (
    <div className={`relative  lg:h-[140vh] `}>
      <Head>
        <title>Roliglek </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pr-4 pb-24 lg:space-y-24 lg:pl-16 ">
        <Xbanner />

        <section className="md:space-y-24"></section>
        {/* {showModal && <Modal />} */}
      </main>
    </div>
  )
}

export default Home
