import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[45vh] w-screen">
        <Image
          layout="fill"
          src="https://www.themoviedb.org/t/p/w1280/6uod2gwSZRfxqfrKXsndHoibJkk.jpg"
          objectFit="cover"
        />
      </div>
      <div className="container mt-52">
        <div className=" flex flex-col rounded-3xl bg-blue-700/10  text-center">
          <h1 className="  text-2xl font-bold md:text-4xl lg:text-7xl">
            Hitta lekar för alla tillfällen
          </h1>
          {/* <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl"> */}
          {/* <p className=" text-shadow-md max-w-xs rounded-md text-center text-sm text-red-500 md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          Smarta illustrationer och en användarvänlig struktur gör att du enkelt
          kan sortera ut just de lekar som passar dig.
        </p> */}

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
      </div>
    </div>
  )
}

export default Banner
