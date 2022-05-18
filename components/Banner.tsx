import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src="/images/front-ballonger.webp"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">Banner</h1>
      <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        På Roliglek.se ska du alltid kunna hitta lekar för alla tillfällen.
        Smarta filter och en användarvänlig struktur gör att du enkelt kan
        sortera ut just de lekar som passar dig. Vi uppdaterar sidan regelbundet
        för att du alltid ska kunna hitta både nya och traditionella lekar, på
        ett och samma ställe!
      </p>

      <div className="flex space-x-3">
        {/* <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Spela upp
        </button> */}

        {/* <button
          className="bannerButton bg-[gray]/70"
       
        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> Mer info
        </button> */}
      </div>
    </div>
  )
}

export default Banner
