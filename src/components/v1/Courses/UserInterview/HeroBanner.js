import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="container mx-auto px-5 pt-12 pb-20 lg:px-40 big:px-60 large:px-80">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        {/* Left Side  */}
        <div className="">
          <h1 className="text-5xl lg:text-6xl font-bold leading-[60px]">Ace user </h1>
          <h1 className="bg-gradient-to-r from-[#C7D2FE] to-[#22D3EE] bg-clip-text text-5xl lg:text-6xl font-bold text-transparent">
            Interview
          </h1>
          <p className="pt-7 pb-5 text-xl leading-7 text-[#454545]">
            Build projects, practice and learn to code{" "}
            <br className="hidden lg:block " /> from scratch - without leaving
            your <br className="hidden lg:block" /> browser.
          </p>
          <h4 className="text-xl font-bold leading-7 text-[#4f4f4f]">
            Launching on 30th April, 2023
          </h4>
          <div className="mt-8 mb-12 lg:mb-0">
            <Link href="/">
              <button className="rounded-md bg-gradient-to-r from-[#6366F1] to-[#0891B2] py-3 px-28  lg:text-xl font-medium text-white">
                Notify Me
              </button>
            </Link>
          </div>
        </div>
        {/* Right Side  */}
        <div className="basis-1/2">
          <form>
            <div className="flex flex-col space-y-3">
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm "
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your Email"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm "
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="number"
                  name="number"
                  required
                  placeholder="Enter phone number"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm "
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="mt-2 flex h-[40px] w-full justify-center rounded-md border border-transparent bg-[#0070F4] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                >
                  Register Now
                </button>
              </div>

              <div>
                <p className="text-xs text-[#71717A] ">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy <br className="hidden lg:block" /> and Terms of Service
                  apply.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
