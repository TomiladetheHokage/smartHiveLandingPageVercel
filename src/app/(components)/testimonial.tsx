"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import TitleHeading from "../../components/title-heading";
import { Button } from "../../components/ui/button";
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ecotech,
  nezux,
  skylink,
  swiftwave,
  tech,
  global,
} from "../../../public/assets";
import Image, { StaticImageData } from "next/image";

const data = [
  {
    image: nezux as StaticImageData,
    name: "Hicell Telcommunication LTD",
    location: "Indian Aggregator",
    description:
        "SmarthiveSMS bulk SMS service is reliable, fast, and has significantly improved how we connect with our clients. The delivery rate is impressive, and customer support is top-notch. ",
  },
  {
    image: swiftwave as StaticImageData,
    name: "Chonry Limited",
    location: "Indian Aggregator",
    description:
        "SmarthiveSMS provided us with high quality routes, ensuring stable transmission of our traffic. They also rectify technical issues promptly",
  },
  {
    image: tech as StaticImageData,
    name: "Hicell Telcommunication LTD",
    location: "Uganda",
    description:
        "SmarthiveSMS bulk SMS service is reliable, fast, and has significantly improved how we connect with our clients. The delivery rate is impressive, and customer support is top notch ",
  },
  // {
  //   image: ecotech as StaticImageData,
  //   name: "Ecotech Innovations",
  //   location: "Tanzania",
  //   description:
  //     "SmarthIve SMS was one of the best decision we made for our business. Their platform’s reliability, versatility, and excellence customer support have exceeded our expectation.",
  // },
  // {
  //   image: global as StaticImageData,
  //   name: "Global Retail Co",
  //   location: "Rwanda",
  //   description:
  //     "Since incorporating Smarthive SMS’s WhatsApp Messaging, our client responses have doubled, and communication feels more personal and efficient.",
  // },
  // {
  //   image: skylink as StaticImageData,
  //   name: "SkyLink Mobile Solutions",
  //   location: "Ghana",
  //   description:
  //     "Using Smarthive SMS’s USSD service has truly transformed our customer interactions. It’s intuitive, fast and has become an indispensable tool for our business operations.",
  // },
];

type testimonialType = (typeof data)[0];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const isMobile = window.innerWidth < 768; // Detect if the screen width is mobile
      const scrollAmount = isMobile
          ? scrollRef.current.offsetWidth + 40 // Scroll the full width of the container on mobile
          : 340; // Scroll 300px on desktop

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Hide left button if scrolled to the start
      setShowLeftButton(scrollLeft > 0);

      // Hide right button if scrolled to the end
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check
    }

    // Cleanup listener on unmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
      <div className="md:pt-[20px] relative bg-[#f8f8f8]">{/*bg-white*/}
        <TitleHeading
            title="What Our Clients Say"
            description="Our customers trust us to deliver seamless messaging solutions, Here’s what they have to say about their experience with SmarthiveSMS."
        />

        <div
            className="lg:px-20 md:px-10 p-5 md:py-6 mt-[-10px] flex flex-col"
        >
          <div
              ref={scrollRef}
              className="flex gap-10 py-10 justify-center flex-wrap md:space-x-20"
          >
            {data.map((item, index) => (
                <TestimonialCard key={index} data={item} />
            ))}
          </div>
          {/*<div className="md:py-14  flex w-full justify-between">*/}
          {/*  <Button*/}
          {/*    onClick={() => handleScroll("left")}*/}
          {/*    className="rounded-full w-[50px] p-0 h-[50px]"*/}
          {/*    variant={"outline"}*/}
          {/*    disabled={!showLeftButton}*/}
          {/*  >*/}
          {/*    <ArrowLeft size={20} />*/}
          {/*  </Button>*/}

          {/*  <Button*/}
          {/*    onClick={() => handleScroll("right")}*/}
          {/*    className="rounded-full w-[50px] p-0 h-[50px] justify-self-end"*/}
          {/*    variant={"outline"}*/}
          {/*    disabled={!showRightButton}*/}
          {/*  >*/}
          {/*    <ArrowRight size={20} />*/}
          {/*  </Button>*/}
          {/*</div>*/}
        </div>
      </div>
  );
};

// const TestimonialCard = ({ data }: { data: testimonialType }) => {
//   return (
//     <motion.div
//       whileHover={{ scaleY: 1.15, scaleX: 1.05 }}
//       className="px-5 border-2 border-white min-w-full md:min-w-[300px] h-[430px] bg-primary pb-24 rounded-xl cursor-pointer testimonial-card  transition-transform duration-300"
//     >
//       <motion.div className="w-full bg-white h-full rounded-br-[25%] relative">
//         <motion.div className="pt-12 px-3">
//           <div>
//             <p className="text-4xl">&#x275D;</p>
//           </div>
//           <div>
//             <p className="text-center text-sm">{data.description}</p>
//           </div>
//           <div className="flex justify-end w-full">
//             <p className="text-4xl">&#x275E;</p>
//           </div>
//         </motion.div>
//         <div className="p-3 absolute left-0 bottom-11">
//           <h1 className="font-bold">{data.name}</h1>
//           <p className="text-sm">{data.location}</p>
//         </div>
//         <motion.div
//           className="absolute left-0 w-[80px] h-[80px] border border-white bg-white rounded-full p-1"
//           style={{
//             bottom: "-30px",
//             left: "-5px",
//           }}
//         >
//           <Image
//             src={data.image}
//             alt={data.name}
//             className="w-full h-full rounded-full object-cover"
//           />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };


// const TestimonialCard = ({ data }: { data: testimonialType }) => {
//   return (
//       <motion.div
//           whileHover={{ scaleY: 1.05, scaleX: 1.02 }}
//           className="relative min-w-full md:min-w-[327.15px] h-[358px] bg-[#2A5D5D] rounded-xl overflow-hidden p-6 flex flex-col justify-between border border-gray-300"
//       >
//         {/* White Section with Curved Edge */}
//         <div className="absolute inset-0 bg-white rounded-br-[50%] p-6 shadow-lg">
//           {/* Quote Icon Top Left */}
//           <p className="text-2xl text-black font-bold">&#x275D;</p>
//
//           {/* Testimonial Text */}
//           <p className="text-center text-gray-800 italic text-sm">
//             {data.description}
//           </p>
//
//           {/* Quote Icon Bottom Right */}
//           <div className="flex justify-end">
//             <p className="text-2xl text-black font-bold">&#x275E;</p>
//           </div>
//         </div>
//
//         {/* Name & Location */}
//         <div className="absolute bottom-6 left-6 text-left">
//           <h1 className="font-bold text-black">{data.name}</h1>
//           <p className="text-sm text-gray-600">{data.location}</p>
//         </div>
//       </motion.div>
//   );
// };

const TestimonialCard = ({ data }: { data: testimonialType }) => {
  return (
      <motion.div
          whileHover={{ scaleY: 1.05, scaleX: 1.02 }}
          className="relative min-w-full md:min-w-[450px]  md:min-h-[450px] h-[358px] rounded-xl overflow-hidden border border-gray-300"
      >
        {/* Green Background */}
        <div className="absolute inset-0 bg-[#28656A] rounded-xl"></div>

        {/* White Card with Right Curve */}
        <div className="absolute inset-0 bg-white rounded-br-[170px] p-12 shadow-lg m-[10px]">
          {/* Top Quote Icon */}
          <p className="text-2xl text-black font-bold absolute top-6 left-6">&#x275D;</p>

          {/* Testimonial Text */}
          <p className="text-center text-gray-800 italic text-sm md:text-2xl leading-relaxed">
            {data.description}
          </p>

          {/* Bottom Quote Icon */}
          <p className="text-2xl text-black font-bold absolute bottom-18 right-6">&#x275E;</p>

          {/* Name & Location */}
          <div className="absolute bottom-8 left-6 text-left">
            <h1 className="font-bold text-black md:text-14px">{data.name}</h1>
            <p className="text-sm text-gray-600">{data.location}</p>
          </div>
        </div>
      </motion.div>
  );
};






export default Testimonials;
