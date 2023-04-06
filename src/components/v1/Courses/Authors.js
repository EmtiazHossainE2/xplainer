import Image from "next/image";

const Authors = ({ name1, name2 }) => {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center ">
            <h2 className="customTitle">Meet the creators </h2>
          </div>
        </div>

        <div className="sm:flex">
          <figure className="mb-8 flex max-w-none shrink-0 sm:mb-0 sm:max-w-xs lg:max-w-none">
            <Image
              className="grow self-start rounded"
              src="/images/courses/deepak.jpeg"
              width="250"
              height="250"
              alt="About us 02"
            />
          </figure>
          <div className="sm:ml-8 lg:ml-16">
            <h4 className="mb-2 text-base font-medium lg:text-lg lg:font-semibold">
              {name1}{" "}
            </h4>
            <p className="mb-8 text-sm text-gray-600 lg:text-lg">
              Deepak currently works as a Software engineer 2 at Airmeet and has
              taught API to 100s of aspiring product managers and software
              engineers with API Masterclass series. Reach out to him on{" "}
              <a
                className="text-blue-600 underline"
                href="https://linkedin.com/in/dipakkr"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                LinkedIn{" "}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-4 sm:flex">
          <figure className="mb-8 flex max-w-none shrink-0 sm:mb-0 sm:max-w-xs lg:max-w-none">
            <Image
              className="grow self-start rounded"
              src="/images/courses/venky.jpeg"
              width="250"
              height="250"
              alt="About us 02"
            />
          </figure>
          <div className="sm:ml-8 lg:ml-16">
            <h4 className="mb-2 text-base font-medium lg:text-lg lg:font-semibold">
              {name2}{" "}
            </h4>
            <p className="mb-8 text-sm text-gray-600 lg:text-lg">
              Venkatesh currently works a Product Manager at India`&apos;`s
              leading fintech company. He has also co-founded Frontbench - an
              online marketplace for 1:1 mentorship. Venkatesh has worked
              extensively on API products and writes a blog on product
              management at Xplainerr. You can reach out to him on{" "}
              <a
                className="text-blue-600 underline"
                href="https://linkedin.com/in/venkateshgupta5"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                LinkedIn{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
