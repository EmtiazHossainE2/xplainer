import Image from "next/image"
import Link from "next/link"
import topBadge from '/public/images/courses/top-post-badge.svg'
import topPricingBadge from '/public/images/courses/featured.svg'

const HeroHome = ({
  heading,
  headingColorText,
  ctaText,
  apiForPm,
  pricing,
  handleCTAClick,
  coursePreviewSlug
}) => {
  return (
    <div>
      <div className="relative container mx-auto section__padding">
        <div className="flex flex-col md:flex-row justify-between 2xl:items-center gap-5 2xl:gap-0 lg:px-12">

          {/* Illustration behind hero content */}
          {apiForPm &&
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
          }


          {/* Review Image  */}
          <div className="basis-1/2 lg:basis-5/12 hidden md:block">
            {apiForPm && <Image src='/images/courses/review.webp' width={350} height={400} alt="api for pm review jpeg" />}
            {pricing && <Image src='/images/courses/hero-case.webp' width={700} height={400} alt="pm pricing webp" />}
          </div>

          {/* Hero content */}
          <div className="basis-1/2 lg:basis-7/12">
            <div>
              <div className="flex justify-center items-center md:justify-start md:items-starts">
                {apiForPm &&
                  <Link href='/'>
                    <Image src={topBadge} width={250} height={54} alt="API for Product Managers - The A to Z of APIs for product managers | Product Hunt" />
                  </Link>
                }
                {pricing &&
                  <Link href='/'>
                    <Image src={topPricingBadge} width={250} height={54} alt="Featured | Product Hunt" />
                  </Link>
                }
              </div>
              <h1 className="text-4xl font-bold lg:font-extrabold  mt-3 mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  {headingColorText}
                </span> {' '}
                {heading}
              </h1>
              {pricing && <p className="text-blue-600 text-lg pb-3 font-semibold">1 stop destination for product, growth & marketing folks</p>}

              {apiForPm &&
                <div>
                  <p className="pb-4 text-lg lg:text-xl ">✔️ Trusted by 7300+ PMs. Lifelong access. 10+ chapters</p>
                  <p className="pb-4 text-lg lg:text-xl ">✔️ Crack your PM interview technical rounds with ease</p>
                  <p className="pb-4 text-lg lg:text-xl ">✔️ Transform your product strategy with API skills</p>
                  <p className="pb-5 text-lg lg:text-xl ">✔️ Elevate your career with API knowledge</p>
                </div>
              }
              {pricing &&
                <div>
                  <p className="pb-4 text-lg lg:text-xl font-[500]">✔️ 13 chapters covering pricing strategies, pricing models and pricing pyschology</p>
                  <p className="pb-4 text-lg lg:text-xl font-[500]">✔️ Case studies from Unacademy, Bumble, LinkedIn, Mailchimp, Swiggy etc.</p>
                </div>
              }

              <button onClick={handleCTAClick} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mb-0 cursor-pointer">{ctaText}</button>
              <div>
                <p className="pt-3">Interested in a free chapter? <Link href={`${coursePreviewSlug}`} className="text-blue-500">Get it now</Link></p>
              </div>
            </div>
          </div>
          {/* Hero content end*/}

        </div>
      </div>
    </div>
  )
}

export default HeroHome