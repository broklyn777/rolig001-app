import Image from 'next/image'
import { Movie } from '../typings'

interface Props {
  netflixOriginals: Movie[]
}

function Xbanner() {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[195vh] w-screen">
        <Image
          layout="fill"
          //   src="/images/front-balplonger.web"
          src="https://www.themoviedb.org/t/p/w1280/6uod2gwSZRfxqfrKXsndHoibJkk.jpg"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {' '}
        questions or comments{' '}
      </h1>
      <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        offers a powerful API service that is free to use as long as you
        properly attribute us as the source of the data and/or images you use.
        You can find the logos for attribu
      </p>

      <div className="flex space-x-3">
        {/* <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Spela upp
        </button> */}
      </div>
    </div>
  )
}

export default Xbanner
