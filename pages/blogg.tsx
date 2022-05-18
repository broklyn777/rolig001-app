import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Xbanner from '../components/Xbanner'

const blogg = () => {
  return (
    <div className={`relative h-screen bg-pink-200  lg:h-[140vh] `}>
      <Head>
        <title>Roliglek </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Xbanner />
      <div className="">
        <h1 className="border-b-4 pb-5 text-5xl font-bold">Blogg</h1>

        <div className="mt-6 rounded-lg px-10 py-6 shadow-md">
          <h3 className="mb-5 text-2xl">RoliglekBlogg</h3>

          <p className=" mb-3 text-stone-900">Roliglek MDX Blogg</p>

          <p>
            <span className="font-bold">Version 0.0.1</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default blogg
