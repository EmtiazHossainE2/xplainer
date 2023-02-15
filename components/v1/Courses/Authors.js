import Image from 'next/image'

const Authors = ({ 
  name1, 
  name2 
}) => {

  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 ">
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mt-8 ">Meet the creators </h1>
          </div>
        </div>


        <div className="sm:flex">
          <figure className="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
            <Image className="grow self-start rounded" src='/images/apiForPm/deepak.jpeg' width="250" height="250" alt="About us 02" />
          </figure>
          <div className="sm:ml-8 lg:ml-16">
            <h4 className="h4 mb-2">{name1} </h4>
            <p className="text-lg text-gray-600 mb-8">
              Deepak currently works as a Software engineer 2 at Airmeet and has taught API to 100s of aspiring product managers and software engineers with API Masterclass series.
              Reach out to him on <a className="text-blue-600 underline" href="https://linkedin.com/in/dipakkr" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
            </p>
          </div>
        </div>

        <div className="sm:flex mt-4">
          <figure className="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
            <Image className="grow self-start rounded" src='/images/apiForPm/venky.jpeg' width="250" height="250" alt="About us 02" />
          </figure>
          <div className="sm:ml-8 lg:ml-16">
            <h4 className="h4 mb-2">{name2} </h4>
            <p className="text-lg text-gray-600 mb-8">
              Venkatesh currently works a Product Manager at India`&apos;`s leading fintech company. He has also co-founded Frontbench - an online marketplace for 1:1 mentorship.
              Venkatesh has worked extensively on API products and writes a blog on product management at Xplainerr.
              You can reach out to him on <a className="text-blue-600 underline" href="https://linkedin.com/in/venkateshgupta5" target="_blank" rel="noopener noreferrer"> LinkedIn </a></p>

          </div>
        </div>




      </div>
    </section>
  )
}

export default Authors