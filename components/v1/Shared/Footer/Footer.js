import Image from "next/image"
import Link from "next/link"
import {ImFacebook,ImLinkedin2,ImTwitter} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  const getYear = new Date().getFullYear()
  return (
    <div className="bg-[#F5F5F7]">
      <div className="xl:container xl:mx-auto section__padding">
        {/*********************** Footer Top For Large Device  ***************/}
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {/* Left  */}
          <div className="basis-7/12 flex gap-10 ">
            <h3 className="text-3xl font-bold">Xplainerr</h3>
            <div className="flex flex-col">
              <h3>Column One</h3>
              <Link href='/'>Link One</Link>
              <Link href='/'>Link One</Link>
              <Link href='/'>Link One</Link>
              <Link href='/'>Link One</Link>
            </div>
            <div className="flex flex-col">
              <h3>Column Two</h3>
              <Link href='/'>Link One</Link>
              <Link href='/'>Link One</Link>
              <Link href='/'>Link One</Link>
              <Link href='/'>Link One</Link>
            </div>
            <div className="flex flex-col">
              <h3>Column Three</h3>
              <Link href='/'>Link One</Link>
              <Link href='/'>Link One</Link>
              <Link href='/'>Link One</Link>
              <Link href='/'>Link One</Link>
            </div>
          </div>
          {/* Right  */}
          <div className="basis-5/12 ">
            <h4>Subscribe</h4>
            <p>Join our newsletter to stay up to date on features and releases.</p>
            <div>
              <input type="email" name="email" id="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
            <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
          </div>
        </div>

        {/*************** Footer Bottom For Large Device **********************/}
        <div className="flex justify-between items-center gap-5 pt-20">
          <div className="flex">
            <p>{getYear} Xplainerr. All right reserved.</p>
            <Link href='/'>Privacy Policy</Link>
            <Link href='/'>Terms of Service</Link>
            <Link href='/'>Cookies Settings</Link>
          </div>
          {/* Social Icon  */}
          <div className="flex justify-between gap-5 items-center">
            <Link href='/'><ImFacebook size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md'/></Link>
            <Link href='/'><BsInstagram size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md'/></Link>
            <Link href='/'><ImLinkedin2 size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md'/></Link>
            <Link href='/'><ImTwitter size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md'/></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer