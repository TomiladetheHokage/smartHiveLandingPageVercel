// "use client"
//
// import Image from "next/image";
// import { Button } from "../../components/ui/button";
// import { hero2, hero3, hero4, heroImage1 } from "../../../public/assets";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
//
// const slideShowdata = [
//   {
//     title: "Instant, Reliable Communication for Your Business.",
//     description:
//       "Engage customers effectively with SmarthiveSMS-your for seamless, cost effective messaging solution.",
//     image: heroImage1
//   },
//   {
//     title: "Voice SMS",
//     description:
//       "Deliver your message with a personal touch through automated SMS solutions to enhance customer engagement.",
//     image: hero2
//   },
//   {
//     title: "OTP",
//     description:
//       "Ensure secure, real-time transactions with fast, reliable One-Time Password (OTP) delivery every time.",
//     image: hero3
//   },
//   {
//     title: "USSD",
//     description:
//       "Enable easy, internet-free interactions with customers through intuitive USSD service Options.",
//     image: hero4
//   },
// ]
//
// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//
//   // Automatically switch slides every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slideShowdata.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);
//
//   const { title, description, image } = slideShowdata[currentSlide];
//
//   // Animation variants for text and image
//   const textVariants = {
//     enter: { x: "100%", opacity: 0 },
//     center: { x: 0, opacity: 1 },
//     exit: { x: "-100%", opacity: 0 }
//   };
//
//   const imageVariants = {
//     fadeIn: { opacity: 0 },
//     visible: { opacity: 1 },
//     fadeOut: { opacity: 0 }
//   };
//
//
//   return (
//     <div className="w-full h-[450px] md:h-screen relative overflow-hidden">
//       <div className="bg-black absolute h-full w-full top-0 bg-opacity-50 flex justify-center md:p-20 p-5 flex-col text-white z-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             className="lg:max-w-[50%] md:max-w-[60%] flex gap-4 flex-col"
//             initial="enter"
//             animate="center"
//             exit="exit"
//             variants={textVariants}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="md:text-5xl text-3xl font-semibold">{title}</h1>
//             <p className="md:text-base text-sm">{description}</p>
//             <Link href={"https://app.smarthivesms.com/signup"}>
//               <Button className="w-32">Get Started</Button>
//             </Link>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={image.src}
//           initial="fadeIn"
//           animate="visible"
//           exit="fadeOut"
//           variants={imageVariants}
//           transition={{ duration: 1 }}
//           className="absolute top-0 h-[450px] md:h-screen w-full -z-10"
//         >
//           <Image
//             src={image}
//             alt={title}
//             quality={100}
//             priority={true}
//             className="h-full w-full object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>
//
//       {/* Navigation Dots */}
//       <div className="absolute bottom-4 flex justify-center items-center gap-2 w-full">
//         {slideShowdata.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white w-6" : "bg-gray-400"
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default HeroSection;


//NEW DESIGN

"use client";

import Image from "next/image";
import {Button} from "../../components/ui/button";
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link";
import img1 from "../../../public/assets/Dashboard Overview (1) 1.png";
import img2 from "../../../public/assets/looking at phone.png";
import img3 from "../../../public/assets/Dashboard Overview (3) 1.png";
import { X, ArrowLeft  } from "lucide-react";

const slideShowdata = [
  {
    title: "Africa’s Leading Omnichannel Messaging Platform",
    description:
        "Reach your customers with 99% deliverability across SMS, WhatsApp, Email, and Voice. Start for free—no credit card required.",
    image: img1
  },
  {
    title: "Verify Users Fast with WhatsApp and  SMS OTPs",
    description:
        "Secure, Instant , and cost-effective two-factor authentication (2FA) to protect your platform and reduce fraud.",
    image: img2
  },
  {
    title: "Built for Developers: SMPP & Rest API Messaging",
    description:
        "Integrate SMS, Email, and WhatsApp in hours with \n" +
        "easy-to-use APIs. Full documentation for Python, PHP, \n" +
        "and Node.js.",
    image: img3
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Dynamically detect screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-rotate slides only on larger screens
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideShowdata.length);
      }, 5000);
      return () => clearInterval(interval);
    } else {
      setCurrentSlide(0); // Always show first image on mobile
    }
  }, [isMobile]);

  const { title, description, image } = slideShowdata[isMobile ? 0 : currentSlide];

  const [isOpen, setIsOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isMessageClicked, setIsMessageClicked] = useState(false);

  const [isNewScheduleOpen, setIsNewScheduleOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("30 mins");
  // const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTime, setSelectedTime] = useState<null | string>(null);






  // @ts-ignore
  // @ts-ignore
  return (
      <div className="w-full min-h-[500px] lg:min-h-[800px] flex items-center justify-center px-6 md:px-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-full w-full grid md:grid-cols-[1fr_3fr] gap-x-10 md:gap-x-20 items-center">
          {/* Text Content */}
          <div className="space-y-4 text-left mt-8 md:mt-20 flex flex-col items-start">
            <AnimatePresence mode="wait">
              <motion.div
                  key={currentSlide}
                  initial={{opacity: 0, x: -50}}
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0, x: 50}}
                  transition={{duration: 0.5}}
              >
                <h1 className="md:w-[600px] lg:w-[700px] text-4xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-6 mt-10 !mt-20 font-poltawski">
                  {title}
                </h1>
                <p className="text-gray-600 text-base md:text-lg">{description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Desktop Buttons */}
            <div className="hidden md:flex flex-wrap gap-4 mt-6">
              <Link href="https://app.smarthivesms.com/signup">
                <Button className="bg-[#28656A] text-white px-6 py-5 active:bg-[#28656A] active:text-white
      hover:bg-[#28656A] hover:text-white rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
                  Learn More
                </Button>
              </Link>
              <div>
                {/* Request a Demo Button */}
        {/*        <Button*/}
        {/*            variant="outline"*/}
        {/*            className="border-2 border-[#28656A] text-black font-bold px-6 py-2*/}
        {/*rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"*/}
        {/*            onClick={() => setIsOpen(true)}*/}
        {/*        >*/}
        {/*          Request a Demo*/}
        {/*        </Button>*/}



                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)}>
                      {/* Container with fixed size */}
                      <div className="relative w-[722px] h-[523px] bg-white overflow-hidden rounded-xl">

                        {/* Diagonal Green Background */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[#28656A]" style={{clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)"}}></div>

                        {/* White Modal Card on Top */}
                        <div
                            className="relative z-10 w-[475px] h-[421px] bg-white p-6 rounded-xl shadow-lg border border-gray-300 mx-auto mt-[50px]">

                          {/* Header with Close & Back Buttons */}
                          <div className="flex justify-between items-center">
                            <button className="text-gray-600 hover:text-black" onClick={() => setIsOpen(false)}>
                              <ArrowLeft size={24}/>
                            </button>
                            <button className="text-[#28656A] hover:text-[#28656A]" onClick={() => setIsOpen(false)}>
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
                      {/* Container with fixed size */}
                      <div
                          className="relative w-[722px] h-[523px] bg-white overflow-hidden rounded-xl"
                          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                      >
                        {/* Diagonal Green Background */}
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-[#28656A]"
                            style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                        ></div>

                        {/* White Modal Card on Top */}
                        <div
                            className="relative z-10 w-[475px] h-[421px] bg-white p-6 rounded-xl shadow-lg border border-gray-300 mx-auto mt-[50px]"
                        >
                          {/* Header with Close & Back Buttons */}
                          <div className="flex justify-between items-center">
                            <button
                                className="text-gray-600 hover:text-black"
                                onClick={() => {
                                  setIsScheduleOpen(false);
                                  setIsOpen(true);
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

                {isNewScheduleOpen && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        onClick={() => setIsNewScheduleOpen(false)}
                    >
                      {/* Container with updated size */}
                      <div
                          className="relative w-[860px] h-[632px] bg-white overflow-hidden rounded-xl"
                          onClick={(e) => e.stopPropagation()}
                      >
                        {/* Left Section with Background */}
                        <div
                            className="absolute top-0 left-0 w-1/2 h-full bg-[#28656A] flex items-center justify-center text-white font-semibold text-lg"
                        >
                          SmarthiveSMS Demo Session
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
                                className={`w-[200px] px-4 py-2 border rounded-md ${
                                    selectedDuration === "30 mins" ? "bg-gray-300" : "bg-white"
                                }`}
                                onClick={() => setSelectedDuration("30 mins")}
                            >
                              30 mins
                            </button>
                            <button
                                className={`w-[200px] px-4 py-2 border rounded-md ${
                                    selectedDuration === "15 mins" ? "bg-gray-300" : "bg-white"
                                }`}
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
                                    className={`p-2 border rounded-md ${
                                        selectedTime === time ? "bg-gray-300" : "bg-black"
                                    }`}
                                    // onClick={() => setSelectedTime(time as string)}
                                    // onClick={() => setSelectedTime(time)}
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
            </div>

          </div>

          {/* Image Content */}
          <div className="relative w-full flex flex-col justify-center items-center pb-8">
            <AnimatePresence mode="wait">
              <motion.div
                  // key={image}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 1}}
              >
                <Image
                    src={image}
                    alt="Hero image"
                    width={1000}
                    height={1000}
                    className="max-w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[650px] object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Mobile Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-4 md:hidden">
              <Link href="https://app.smarthivesms.com/signup">
                <Button className="bg-[#28656A] text-white px-6 py-5 active:bg-[#28656A] active:text-white
      hover:bg-[#28656A] hover:text-white rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
                  Learn More
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-[#28656A] text-black font-bold px-6 py-2
    rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Dots - Only on larger screens */}
        {!isMobile && (
            <div
                className="hidden md:flex absolute bottom-2 sm:bottom-4 md:bottom-8 lg:bottom-12 left-1/2 lg:left-[70%] transform -translate-x-1/2 gap-2">
              {slideShowdata.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "bg-green-700 w-6" : "bg-gray-400"
                      }`}
                  />
              ))}
            </div>
        )}
      </div>
  );
};

export default HeroSection;






