// import Image from "next/image";
// import { Separator } from "./ui/separator";
// import { whiteLogo } from "../../public/assets";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import Link from "next/link";
// import { LocateIcon, MessageSquareText, Phone } from "lucide-react";
// import {
//   FaFacebook,
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaLinkedin,
// } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { AiFillTikTok } from "react-icons/ai";
//
// const Footer = () => {
//   return (
//     <div className="bg-primary lg:px-20 md:px-10 p-5 md:py-10 z-20">
//       <div>
//         <Image src={whiteLogo} alt="logo" className="max-h-[60px] min-w-[150px] w-[150px]" />
//         <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2">
//           <div className="w-full flex flex-col gap-5 text-white">
//             <h1 className="font-semibold text-xl">Be Future-Ready</h1>
//             <p className="text-sm text-gray-100/70">
//               Get exclusive <span className="text-white">SMS</span> updates
//               straight to your inbox
//             </p>
//             <div className="flex w-full max-w-sm items-center space-x-2">
//               <Input type="email" placeholder="Email" />
//               <Button type="submit" variant={"secondary"}>
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//           <div className="w-full flex flex-col md:items-center">
//             <div>
//               <h1 className="font-semibold text-xl text-white">Quick links</h1>
//               <ul className="flex flex-col gap-1 text-sm md:mt-2">
//                 <Link href={"/about"}>
//                   <li className="text-white hover:underline transition-all ease-in-out duration-300">
//                     About
//                   </li>
//                 </Link>
//                 <Link href={"/sms"}>
//                   <li className="text-white hover:underline transition-all ease-in-out duration-300">
//                     Products
//                   </li>
//                 </Link>
//                 <Link href={"/pricing"}>
//                   <li className="text-white hover:underline transition-all ease-in-out duration-300">
//                     Pricing
//                   </li>
//                 </Link>
//                 <Link href={"/api-docs"}>
//                   <li className="text-white hover:underline transition-all ease-in-out duration-300">
//                     API
//                   </li>
//                 </Link>
//                 <Link href={"/blog"}>
//                   <li className="text-white hover:underline transition-all ease-in-out duration-300">
//                     Resources
//                   </li>
//                 </Link>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full text-white flex flex-col gap-5">
//             <p className="text-xl">Support Centre</p>
//             <div className="flex gap-2 items-center text-sm">
//               <Phone size={16} />
//               <span className="text-gray-100/70">+234 902 423 2473</span>
//             </div>
//             <div className="flex gap-2 items-center text-sm">
//               <MessageSquareText size={16} />
//               <span className="text-gray-100/70">
//                 support@smarthivetechsolution.com
//               </span>
//             </div>
//             <div className="flex gap-2 items-center text-sm">
//               <LocateIcon size={16} />
//               <span className="text-gray-100/70">Lagos, Nigeria.</span>
//             </div>
//           </div>
//         </div>
//         <Separator />
//         <div className="flex justify-between flex-col md:flex-row gap-5 md:px-5 py-5 text-white">
//           <p>&copy; 2024 Smarthive SMS All right reserved</p>
//           <div className="flex gap-3 ">
//             <Link href={""}>
//               <FaFacebookSquare size={30} />
//             </Link>
//             <Link href={""}>
//               <FaSquareXTwitter size={30} />
//             </Link>
//             <Link href={""}>
//               <FaLinkedin size={30} />
//             </Link>
//             <Link href={""}>
//               <AiFillTikTok size={30} />
//             </Link>
//             <Link href={""}>
//               <FaInstagramSquare size={30} />
//             </Link>
//           </div>
//           <div className="flex flex-col gap-5 md:flex-row">
//             <Link href={""}>Privacy Policy</Link>
//             <Link href={""}>Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Footer;


import Image from "next/image";
import { Separator } from "./ui/separator";
import { whiteLogo } from "../../public/assets";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { LocateIcon, MessageSquareText, Phone } from "lucide-react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
      <div className="flex flex-col">
        {/* Top Section */}
        <div className="bg-[#E2F5EE] text-center md:py-24 md:px-5 py-24 px-0 w-full overflow-hidden">
          <h2 className="md:text-5xl text-[22px] font-semibold text-[#0F2D22]  font-poltawski">
            Ready to Transform Your Customer Communication?
          </h2>
          <p className="text-[#0F2D22] mt-2  pb-8 md:text-[20px] text-[16px] md:mb-16 w-[362px] md:w-full mx-auto">
            Join 5,000+ businesses using SmarthiveSMS for reliable, affordable messaging solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 md:pb-0">
            <Button className="bg-[#28656A] text-white md:px-8 px-6 py-2 rounded-lg font-bold transition-transform duration-300 ease-in-out hover:scale-105
hover:bg-[#28656A] hover:text-white active:bg-[#28656A] active:text-white">
              Start Free Trial
            </Button>

            <Button variant="outline" className="border-2 border-[#28656A] bg-[#E2F5EE] text-black font-bold px-6 py-2
    rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
              Request a Demo
            </Button>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="bg-[#28656A] text-white px-8 md:px-20 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Newsletter Subscription */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-xl">Be Future-Ready</h3>
              <p className="text-gray-300 text-sm w-[204px]">
                Get exclusive <span className="text-white">SMS</span> updates
                straight to your inbox
              </p>
              <div className="flex w-full max-w-sm border border-white rounded-md overflow-hidden">
                <Input
                    type="email"
                    placeholder="Enter your Email"
                    className="bg-[#28656A] text-white placeholder:text-white px-4 py-2 w-full rounded-l-md rounded-r-none"
                />
                <Button className="bg-[#BEF8E4] text-[#043f36] px-4 py-2 rounded-r-md rounded-l-none font-bold
                  hover:bg-[#BEF8E4] hover:text-[#043f36] active:bg-[#BEF8E4] active:text-[#043f36]">
                  Subscribe
                </Button>

              </div>


            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-start text-left">
              <ul className="space-y-2 mt-2">
                {["ABOUT", "FEATURES", "API-DOCS", "PRICING", "CONTACT-US"].map((link) => (
                    <li key={link}>
                      <Link href={`/${link.toLowerCase()}`} className="hover:underline text-white font-bold">
                      {link}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>


            {/* Support Center */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl">Support Centre</h3>
              <div className="flex gap-2 items-center text-sm">
                <Phone size={16}/>
                <span className="text-gray-300">+234 902 423 2473</span>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <MessageSquareText size={16}/>
                <span className="text-gray-300">
                support@smarthivetechsolution.com
              </span>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <LocateIcon size={16}/>
                <span className="text-gray-300">Lagos, Nigeria.</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <Separator className="mt-28 mb-6 border-gray-500"/>


          {/* Bottom Section: Copyright & Socials */}
          <div className="flex flex-col text-sm md:flex-row md:justify-between md:items-center">

            {/* Privacy Policy & Terms (Left-Aligned) */}
            <div className="flex flex-col items-start gap-1">
              <Link href={"/privacy-policy"} className="hover:underline mb-4">Privacy Policy</Link>
              <Link href={""} className="hover:underline mb-8">Terms of Service</Link>
            </div>

            {/* Social Media Icons (Left-Aligned & Below Terms) */}
            <div className="flex gap-4 text-xl pb-8">
              <Link href={""}>
                <FaFacebookSquare />
              </Link>
              <Link href={""}>
                <FaSquareXTwitter />
              </Link>
              <Link href={""}>
                <FaLinkedin />
              </Link>
              <Link href={""}>
                <AiFillTikTok />
              </Link>
              <Link href={""}>
                <FaInstagramSquare />
              </Link>
            </div>

            {/* Copyright Text (Centered in Mobile, Right in Desktop) */}
            <p className="mt-8 text-center w-full md:w-auto md:text-right">
              &copy; 2024 Smarthive SMS. All rights reserved
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
