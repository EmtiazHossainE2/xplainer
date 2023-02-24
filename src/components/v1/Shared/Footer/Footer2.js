import Link from "next/link"

const Footer2 = () => {
  const getFullYear = new Date().getFullYear()
  return (
    <>
      <footer aria-labelledby="footer-heading" className=" border-t border-slate-200 bg-white">
        <h2 className="sr-only" id="footer-heading">Footer</h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:pt-24 lg:pb-16">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="space-y-4 xl:col-span-1">
              <div>
                <Link href='/' className=" inline-block font-bold  text-xl" >Xplainerr</Link>
              </div>
              <p className="text-sm text-slate-500">We provide niche up skilling courses to help your accelerate and succeed in tech career</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-3 xl:mt-0">
              <div className="sm:grid-cols-2 md:col-span-2 md:grid md:gap-8">
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Practice</h3>
                  {/* {footerColOne.map((item, index) => (
                    <ul key={index} className="flex flex-col gap-y-3" role="list">
                      <li>
                        <span className="font-normal text-sm">
                          <Link key={index} href={`${item.slug}`} className="transition-colors text-slate-500 hover:text-blue-600">{item.text}</Link>
                        </span>
                      </li>
                    </ul>
                  ))} */}
                  <ul className="flex flex-col gap-y-3" role="list">
                    <li>
                      <span className="font-normal text-sm">
                        <Link className="transition-colors text-slate-500 hover:text-blue-600" href="/1">Get Started</Link>
                      </span>
                    </li>
                    <li>
                      <span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/2">Coding Questions</Link>
                      </span>
                    </li>
                    <li>
                      <span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/3">System Design Questions</Link>
                      </span>
                    </li>
                    <li>
                      <span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/4">Quiz Questions</Link></span>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <div className="flex flex-col gap-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Guides</h3>
                    <ul className="flex flex-col gap-y-3" role="list">
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/5">Front End Interview Guidebook</Link></span></li>
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/6">Front End System Design Guidebook</Link></span></li>
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/7">Behavioral Interview Guidebook</Link></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sm:grid-cols-2 md:col-span-2 md:grid md:gap-8">
                <div>
                  <div className="flex flex-col gap-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Study Plans</h3>
                    <ul className="flex flex-col gap-y-3" role="list">
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/8">1 Week Plan</Link></span>
                      </li>
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/9">2 Month Plan</Link></span></li>
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/10">3 Months Plan</Link></span></li></ul>
                  </div>
                </div>
                <div className="mt-12 md:mt-0">
                  <div className="flex flex-col gap-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Company</h3>
                    <ul className="flex flex-col gap-y-3" role="list">
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/pricing">Pricing</Link></span>
                      </li>
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/about">About</Link></span>
                      </li>
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/contact">Contact Us</Link></span>
                      </li>
                      <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/affiliates">Become an Affiliate</Link></span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-8">
                    <div className="flex flex-col gap-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Legal</h3>
                      <ul className="flex flex-col gap-y-3" role="list">
                        <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/legal/privacy-policy">Privacy Policy</Link></span>
                        </li>
                        <li><span className="font-normal text-sm"><Link className="transition-colors text-slate-500 hover:text-blue-600" href="/legal/terms">Terms of Service</Link></span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8"><p className="text-base text-slate-400 xl:text-center">© {getFullYear} Xplainerr,  All rights reserved.
          </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer2