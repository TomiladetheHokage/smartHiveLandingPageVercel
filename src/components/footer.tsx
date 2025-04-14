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
import {ArrowLeft, LocateIcon, MessageSquareText, Phone, X} from "lucide-react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import {useState} from "react";


const Footer = () => {

  const [isDemoOpen, setIsDemoOpen] = useState(false);const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isMessageClicked, setIsMessageClicked] = useState(false);

  const [isNewScheduleOpen, setIsNewScheduleOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("30 mins");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

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

            <Button variant="outline" onClick={() => setIsDemoOpen(true)} className="border-2 border-[#28656A] bg-[#E2F5EE] text-black font-bold px-6 py-2
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

        {isDemoOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setIsDemoOpen(false)}>
              {/*<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"> */}
              {/* Container with responsive width */}
              <div className="relative w-full max-w-[400px]  md:max-w-[500px] bg-white overflow-hidden rounded-xl">
                {/*<div className="relative w-full max-w-[400px] bg-white p-6 rounded-xl shadow-lg border border-gray-300 mx-auto">*/}

                {/* Diagonal Green Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#28656A]" style={{clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)"}}></div>

                {/* White Modal Card on Top */}
                <div className="relative z-10 w-full h-full bg-white p-6 rounded-xl shadow-lg border border-gray-300 mx-auto mt-[50px]">

                  {/* Header with Close & Back Buttons */}
                  <div className="flex justify-between items-center">
                    <button className="text-gray-600 hover:text-black" onClick={() => setIsDemoOpen(false)}>
                      <ArrowLeft size={24}/>
                    </button>
                    <button className="text-[#28656A] hover:text-[#28656A]" onClick={() => setIsDemoOpen(false)}>
                      <X size={24}/>
                    </button>
                  </div>

                  {/* Content */}
                  <h2 className="text-lg font-semibold mb-4 mt-4">Run Live Demo</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Interested to see how your customers will experience delivery? Send a live message with
                    SmarthiveSMS.
                  </p>
                  <button
                      className="text-black font-semibold hover:text-black hover:scale-105 transition-all duration-300"
                      onClick={() => {
                        setIsMessageClicked(true); // Show content for "Send message" click
                        setIsScheduleOpen(true); // Open schedule modal
                      }}
                  >
                    Send message with SmarthiveSMS →
                  </button>

                  {/* Push "Schedule Demo" Lower */}
                  <h2 className="text-lg font-semibold mb-4 mt-12">Schedule Demo with an Expert</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Book a virtual tour on how to use SmarthiveSMS dashboard for sending your message.
                  </p>
                  <button
                      className="text-black font-semibold hover:text-black hover:scale-105 transition-all duration-300"
                      onClick={() => setIsNewScheduleOpen(true)}
                  >
                    Book a Schedule →
                  </button>
                </div>
              </div>
            </div>
        )}

        {/* Schedule Demo Modal */}
        {isScheduleOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setIsScheduleOpen(false)} // Close modal when clicking outside
            >
              {/* Container with responsive size */}
              <div
                  className="relative w-full max-w-[400px] sm:max-w-[600px] md:max-w-[500px] lg:max-w-[475px] h-[523px] bg-white overflow-hidden rounded-xl"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              >
                {/* Diagonal Green Background */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[#28656A]"
                    style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                ></div>

                {/* White Modal Card on Top */}
                <div
                    className="relative z-10 w-full h-full bg-white p-6 rounded-xl shadow-lg border border-gray-300 mx-auto mt-[50px]"
                >
                  {/* Header with Close & Back Buttons */}
                  <div className="flex justify-between items-center pb-8 md:pb-0">
                    <button
                        className="text-gray-600 hover:text-black"
                        onClick={() => {
                          setIsScheduleOpen(false);
                          setIsDemoOpen(true);
                        }}
                    >
                      <ArrowLeft size={24} />
                    </button>

                    <button
                        className="text-[#28656A] hover:text-[#28656A]"
                        onClick={() => setIsScheduleOpen(false)}
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Form */}
                  <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:mt-20">
                      {/* Name Field */}
                      <div>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="w-full p-2 border border-gray-300 rounded-md text-[12px]"
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Phone number"
                            className="w-full p-2 border border-gray-300 rounded-md text-[12px]"
                        />
                      </div>
                    </div>

                    {/* Company Name Field */}
                    <div className="mt-4">
                      <input
                          type="text"
                          id="company"
                          placeholder="Company name"
                          className="w-full p-2 border border-gray-300 rounded-md text-[12px]"
                      />
                    </div>

                    {/* Proceed Button */}
                    <div className="mt-6 text-left">
                      <button
                          type="submit"
                          className="px-6 py-2 bg-[#28656A] text-white text-[13px] rounded-md hover:bg-[#28656A] transition-all duration-300 w-full"
                      >
                        Proceed
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        )}

        {/* New Schedule Modal */}
        {isNewScheduleOpen && (
            <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                onClick={() => setIsNewScheduleOpen(false)}
            >
              {/* Container with responsive size */}
              <div
                  className="relative w-full max-w-[400px] sm:max-w-[700px] md:max-w-[600px] lg:max-w-[500px] h-[632px] bg-white overflow-hidden rounded-xl"
                  onClick={(e) => e.stopPropagation()}
              >
                {/* Left Section with Background */}
                <div
                    className="absolute top-0 left-0 w-1/2 h-full bg-[#28656A] flex items-center justify-center text-white font-semibold text-[16px] md:text-lg"
                >
                  SmarthiveSMS Demo <br/> Session
                </div>

                {/* Right Section (White Card) */}
                <div className="absolute right-0 w-1/2 h-full bg-white p-6">
                  {/* Close Button */}
                  <div className="flex justify-end">
                    <button
                        className="text-[#28656A] hover:text-black"
                        onClick={() => setIsNewScheduleOpen(false)}
                    >
                      <X size={24}/>
                    </button>
                  </div>

                  {/* Duration Selection */}
                  <h2 className="text-lg font-semibold mt-4">How long do you need?</h2>
                  <div className="flex gap-2 mt-2">
                    <button
                        className={`w-[200px] px-4 py-2 border rounded-md ${selectedDuration === "30 mins" ? "bg-gray-300" : "bg-white"}`}
                        onClick={() => setSelectedDuration("30 mins")}
                    >
                      30 mins
                    </button>
                    <button
                        className={`w-[200px] px-4 py-2 border rounded-md ${selectedDuration === "15 mins" ? "bg-gray-300" : "bg-white"}`}
                        onClick={() => setSelectedDuration("15 mins")}
                    >
                      15 mins
                    </button>
                  </div>

                  {/* Time Selection */}
                  <h2 className="text-lg font-semibold mt-6">What time works best?</h2>
                  <p className="text-sm text-gray-500 mt-4">Showing time for January 2025</p>
                  <p className="text-sm text-gray-500 mt-4">UTC +01:00 (African) Central European Time</p>

                  <div className="grid grid-cols-1 gap-2 mt-4">
                    {["14:00", "13:45", "13:30", "13:15", "13:00", "12:45"].map((time) => (
                        <button
                            key={time}
                            className={`p-2 border rounded-md ${selectedTime === time ? "bg-gray-300" : "bg-white"}`}
                            onClick={() => setSelectedTime(String(time))}
                        >
                          {time}
                        </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default Footer;
