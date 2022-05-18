import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[#a63961]'}`}>
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link href="/">
          <a className="title-font mb-4 flex items-center font-medium md:mb-0 md:w-1/5 md:justify-start">
            <img
              src="https://roliglek.se/wp-content/uploads/Logoroliglek-orange.png"
              width={140}
              height={140}
              alt="logo"
            />
            {/* <span className="ml-3 text-xl">RoligLek</span> */}
          </a>
        </Link>
        <nav className="hidden flex-wrap items-center justify-end text-base md:ml-auto md:flex md:w-4/5">
          <Link href="/blogg">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              Blogg
            </a>
          </Link>
          <Link href="/om-oss">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              Om Oss
            </a>
          </Link>
          <Link href="/kontakt">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              Kontakt
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
