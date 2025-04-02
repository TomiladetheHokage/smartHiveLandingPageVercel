"use client"

import { useState } from "react";
import { Button } from "../../components/ui/button";
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import { PanInfo } from "framer-motion";


const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import("framer-motion").then(mod => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import("framer-motion").then(mod => mod.motion.p), { ssr: false });

const Resourses = () => {
  const [active, setActive] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });
  const isLaptop = useMediaQuery({ query: '(max-width: 1440px)' });
  const [heading, setHeading] = useState("Resources for Success");
  const [paraGraphs, setParaGraphs] = useState({
    first: "Explore our resources to maximize the impact of your messaging campaigns with SmarthiveSMS.",
    second: ""
  })

  const handleSwipe = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100; // Minimum swipe distance to trigger a change
    if (info.offset.x < -swipeThreshold) {
      // Swipe left
      setHeading("Resources")
      setParaGraphs({
        first: "Access our resources hub for guides, tutorials and best practices to make the most of Smarthive SMS.",
        second: "Our resources are designed to provide you with the knowledge and tool you need. Stay informed with our latest updates and industry insights."
      }) // Add your paragraphs here
    } else if (info.offset.x > swipeThreshold) {
      // Swipe right
      setHeading("Resources for Success")
      setParaGraphs({
        first: "Explore our resources to maximize the impact of your messaging campaigns with SmarthiveSMS.",
        second: ""
      })
    }
  };
  // console.log(isMobile, isTablet, isLaptop);

  return (
    <div className="mt-[20px] lg:px-20 md:px-10 p-5 md:py-10 cursor-pointer">
      <MotionDiv
        className="bg-primary md:h-[300px] lg:h-[400px] h-auto py-5 flex flex-col gap-5 md:flex-row justify-between lg:px-[80px] md:px-[50px] overflow-hidden px-[20px] items-center"
        onMouseOver={() => {
          setActive(true)
          setHeading("Resources")
          setParaGraphs({
            first: "Access our resources hub for guides, tutorials and best practices to make the most of Smarthive SMS.",
            second: "Our resources are designed to provide you with the knowledge and tool you need. Stay informed with our latest updates and industry insights."
          }) // Add your paragraphs here
        }}
        onMouseLeave={() => {
          setActive(false)
          setHeading("Resources for Success")
          setParaGraphs({
            first: "Explore our resources to maximize the impact of your messaging campaigns with SmarthiveSMS.",
            second: ""
          })
        }}
      >
        <MotionDiv
          initial={{
            x: 0,
          }}
          animate={{
            x: active ? isMobile ? 0 : isTablet ? 0 : isLaptop ? 600 : 0 : 0,
          }}
          className="lg:w-[450px] lg:h-[350px] md:w-[400px] md:h-[350px] w-full h-[250px] flex items-center">
          <div className="resourses-image  w-full lg:h-[450px] h-full rounded-md md:rounded-full">
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{
            x: 0,
          }}
          animate={{
            x: active ? isMobile ? 0 : isTablet ? 0 : isLaptop ? -600 : 0 : 0,
          }}
          className="md:w-[50%] lg:w-[35%]"
          drag="x"
          onDragEnd={handleSwipe}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2} // Adds a little bounce effect
        >
          <MotionH1
            key={heading}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl font-bold"
          >
            {heading}
          </MotionH1>
          <MotionP
            key={paraGraphs.first}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-white lg:mt-5 md:mt-2 mt-5 md:text-xs lg:text-base"
          >
            {paraGraphs.first}
          </MotionP>
          <MotionP
            key={paraGraphs.second}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-white lg:mt-5 md:mt-2 mt-5 md:text-xs lg:text-base"
          >
            {paraGraphs.second}
          </MotionP>
          <div className="flex justify-between">
            <Button className="lg:mt-5 md:mt-2 mt-5 bg-primary border-white text-white" variant={"outline"}>
              {paraGraphs.second === "" ? "Browse Resources" : "Learn More"}
            </Button>
            <Button className="lg:mt-5 md:mt-2 mt-5 bg-primary border-white text-white md:hidden text-xs underline" variant={"ghost"}>
              {paraGraphs.second === "" ? "Swipe Left" : "Swipe Right"}
            </Button>
          </div>
        </MotionDiv>

      </MotionDiv>
    </div >
  );
};

export default Resourses;
