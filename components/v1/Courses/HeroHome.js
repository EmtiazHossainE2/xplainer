import Image from "next/image"
import Link from "next/link"
import topBadge from '/public/images/apiForPm/top-post-badge.svg'

const HeroHome = () => {
  return (
    <div className="relative container mx-auto section__padding">
      <div className="flex flex-col md:flex-row justify-between gap-5 2xl:gap-0 lg:px-12">

        {/* Illustration behind hero content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        {/* Review Image  */}
        <div className="basis-1/2 lg:basis-5/12 hidden md:block">
          <Image src='/images/apiForPm/review.jpeg' width={350} height={400} alt="api for pm review jpeg" />
        </div>

        {/* Hero content */}
        <div className="basis-1/2 lg:basis-7/12">
          <div>
            <div className="flex justify-center items-center md:justify-start md:items-starts">
              <Link href='/'>
                <Image src={topBadge} width={250} height={54} alt="API for Product Managers - The A to Z of APIs for product managers | Product Hunt" />
              </Link>
            </div>
            <h1 className="text-4xl font-bold lg:font-extrabold tracking-tighter mt-3 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                #1
              </span> {' '}
              API Product Manager course
            </h1>
            <div>
              <p className="pb-4 text-lg lg:text-xl font-[500]">✔️ Trusted by 7300+ PMs. Lifelong access. 10+ chapters</p>
              <p className="pb-4 text-lg lg:text-xl font-[500]">✔️ Crack your PM interview technical rounds with ease</p>
              <p className="pb-4 text-lg lg:text-xl font-[500]">✔️ Transform your product strategy with API skills</p>
              <p className="pb-5 text-lg lg:text-xl font-[500]">✔️ Elevate your career with API knowledge</p>
            </div>
            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mb-0 cursor-pointer">Buy Now</button>
            <div>
              <p className="pt-3">Interested in a free chapter? <Link href='/' className="text-blue-500">Get it now</Link></p>
            </div>
          </div>
        </div>
        {/* Hero content end*/}

      </div>
    </div>
  )
}

export default HeroHome