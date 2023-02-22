import Image from "next/image"
import Link from "next/link"
import { ImFacebook, ImLinkedin2, ImTwitter } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import MobileFooter from "./MobileFooter"
import { footerColOne, footerColThree, footerColTwo } from "@/src/config/constants"

const Footer = () => {
  const getYear = new Date().getFullYear()
  return (
    <div className="bg-[#F5F5F7]">
      <div className="hidden lg:block xl:container xl:mx-auto section__padding">
        {/*********************** Footer Top For Large Device  ***************/}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          {/* Left  */}
          <div className="basis-7/12 flex gap-10 ">
            <h3 className="text-3xl font-bold">Xplainerr</h3>
            <div className="flex flex-col footer gap-y-1">
              <h3 className="text-lg font-semibold mt-1">Column One</h3>
              {footerColOne.map((item, index) => (
                <Link key={index} href={`/${item.slug}`}>{item.text}</Link>
              ))}
            </div>
            <div className="flex flex-col footer gap-y-1">
              <h3 className="text-lg font-semibold mt-1">Column Two</h3>
              {footerColTwo.map((item, index) => (
                <Link key={index} href={`/${item.slug}`}>{item.text}</Link>
              ))}
            </div>
            <div className="flex flex-col footer gap-y-1">
              <h3 className="text-lg font-semibold mt-1">Column Three</h3>
              {footerColThree.map((item, index) => (
                <Link key={index} href={`/${item.slug}`}>{item.text}</Link>
              ))}
            </div>
          </div>
          {/* Right  */}
          <div className="basis-5/12 flex flex-col justify-center">
            <h4 className="text-lg font-semibold pt-10 2xl:pt-1">Subscribe</h4>
            <p className="py-2 text-black">Join our newsletter to stay up to date on features and releases.</p>
            <div className="py-2 flex gap-x-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="basis-9/12 py-3 pl-4 pr-8 rounded-[45px] bg-[#FFFFFF] placeholder:[#505050] "

              />
              <button className="basis-3/12 bg-[#0070F4] text-white py-3 px-6 rounded-[54px]">Subscribe</button>
            </div>
            <p className="text-sm">By subscribing you agree to with our <Link href='/'>Privacy Policy</Link> and provide consent to receive updates from our company.</p>
          </div>
        </div>

        {/*************** Footer Bottom For Large Device **********************/}
        <div className="flex justify-between items-center gap-5 pt-20">
          <div className="flex gap-5 ">
            <p className="border-black border-b ">{getYear} Xplainerr. All right reserved.</p>
            <Link href='/' className="border-black border-b">Privacy Policy</Link>
            <Link href='/' className="border-black border-b">Terms of Service</Link>
            <Link href='/' className="border-black border-b">Cookies Settings</Link>
          </div>
          {/* Social Icon  */}
          <div className="flex justify-between gap-5 items-center">
            <Link href='/'><ImFacebook size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md' /></Link>
            <Link href='/'><BsInstagram size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md' /></Link>
            <Link href='/'><ImLinkedin2 size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md' /></Link>
            <Link href='/'><ImTwitter size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md' /></Link>
          </div>
        </div>

      </div>

      {/* Mobile Footer  */}
      <div className="block lg:hidden py-10 container mx-auto section__padding">
        <MobileFooter />
      </div>
    </div>
  )
}

export default Footer