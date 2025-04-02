// import Image from "next/image";
// import {
//   apiimage1,
//   apiimage2,
//   apiimage3,
//   apiimage4,
//   apiimage5,
// } from "../../../public/assets";
// import TitleHeading from "../../components/title-heading";
// import { Button } from "../../components/ui/button";
// import { cn } from "@/lib/utils";
//
// const data = [
//   {
//     image: apiimage1,
//   },
//   {
//     image: apiimage2,
//   },
//   {
//     image: apiimage3,
//   },
//   {
//     image: apiimage4,
//   },
//   {
//     image: apiimage5,
//   },
// ];
//
// const APISection = () => {
//   return (
//     <div className="mt-[20px]">
//       <TitleHeading
//         title="API"
//         description="Enable seamless integration, automate your messaging processes for efficient, scalable business communication with our API."
//       />
//       <div
//         style={{
//           backgroundColor: "rgba(225, 229, 235, 0.4)",
//         }}
//         className="lg:px-20 md:px-10 p-5 md:py-10 mt-5 flex flex-col"
//       >
//         <div className="grid grid-cols-5 w-full gap-2 md:gap-10">
//           {data.map((item, index) => {
//             const isOdd = index % 2 === 0;
//             return (
//               <Image
//                 key={index}
//                 src={item.image}
//                 alt="api"
//                 className={cn("w-full h-full rounded-full", isOdd ? "md:-mt-4 -mt-2" : "md:mt-4 mt-2")}
//               />
//             )
//           })}
//         </div>
//         <div className="api-image h-[500px] md:h-[70vh] rounded">
//           <div className="w-full h-full"
//             style={{
//               backgroundColor: "rgba(0, 0, 0, 0.5)"
//             }}>
//             <div className="lg:w-[50%] md:w-[65%] w-full text-white h-full flex justify-center flex-col p-5 gap-5">
//               <h1 className="text-4xl font-bold">API</h1>
//               <p className="text-sm md:text-base">
//                 Our API is a gateway to seamless, automated communication. It
//                 allows you to easily integrate SMS, voice-messaging messaging, and USSD
//                 services into your existing applications or systems. Whether you
//                 need to send OTPs, manage marketing campaigns, or automate
//                 customer notification, our API provides the flexibility and power
//                 you need.
//               </p>
//               <p className="text-sm md:text-base">
//                 With detailed documentation, quick setup, reliable performance,
//                 Smarthive SMS ensures your communication processes are smooth,
//                 efficient and scalable. It is designed to adapt to your needs,
//                 making it easy to customize and optimize your messaging
//                 strategies.
//               </p>
//               <Button variant={"secondary"} className="w-[150px]">Explore</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default APISection;


// import Image from "next/image";
// import { Button } from "../../components/ui/button";
// import apiImage from "../../../public/assets/code.png"; // Replace with actual path
//
// const APISection = () => {
//   return (
//       <div className="flex justify-center items-center w-full px-5 lg:px-20 py-10 md:pt-32"> {/*bg-white*/}
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-[1200px] w-full">
//           {/* Image Section */}
//           <div className="w-full md:w-[50%] flex justify-center md:justify-start">
//             <Image
//                 src={apiImage}
//                 alt="API Code Sample"
//                 width={500} // Adjust this for better scaling
//                 height={300}
//                 className="max-w-full h-auto"
//             />
//           </div>
//
//           {/* Text Section */}
//           <div className="w-full md:w-[50%] flex flex-col justify-center md:justify-start text-center md:text-left">
//             <h2 className="md:text-3xl text-xl font-light md:max-w-[582px]">
//               For Developers
//             </h2>
//             <h1 className="text-2xl md:text-3xl font-bold leading-tight md:max-w-[582px] md:mt-8">
//               Integrate SMS, WhatsApp, and Email into your Apps with Our Battle-Tested APIs
//             </h1>
//             <p className="text-gray-600 md:max-w-[582px] mt-2 md:mt-8">
//               Our developer-friendly APIs allow you to add powerful messaging capabilities to your apps, easily and securely.
//             </p>
//             <Button className="mt-4 w-[200px] md:mt-8 bg-[#28656A] text-white rounded-full">View Documentation</Button>
//           </div>
//         </div>
//       </div>
//   );
// };
//
// export default APISection;


import Image from "next/image";
import { Button } from "../../components/ui/button";
import apiImage from "../../../public/assets/code.png";
import Link from "next/link"; // Replace with actual path

const APISection = () => {
  return (
      <div className="flex justify-center items-center w-full px-5 lg:px-20 py-10 md:pt-32 bg-[#f8f8f8] -mt-12"> {/* bg-white */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-[1200px] w-full">

          {/* Image Section (Desktop) */}
          <div className="w-full md:w-[50%] flex justify-center md:justify-start md:flex">
            <Image
                src={apiImage}
                alt="API Code Sample"
                width={500}
                height={300}
                className="max-w-full h-auto hidden md:block" // Visible only on desktop
            />
          </div>

          {/* Text & Button Section */}
          <div className="w-full md:w-[50%] flex flex-col justify-center md:justify-start text-left md:text-left">
            <h2 className="md:text-3xl text-2xl font-light mt-8 md:max-w-[582px]">
              For Developers
            </h2>
            <h1 className="text-2xl md:text-3xl font-semibold leading-tight md:max-w-[582px] mt-8 md:mt-8">
              Integrate SMS, WhatsApp, and Email into your Apps with Our Battle-Tested APIs
            </h1>
            <p className="text-gray-600 md:max-w-[582px] mt-8 md:mt-8">
              Our developer-friendly APIs allow you to add powerful messaging capabilities to your apps, easily and
              securely.
            </p>

            {/* Image Section (Mobile Only) */}
            <div className="w-full flex justify-center md:hidden mt-12">
              <Image
                  src={apiImage}
                  alt="API Code Sample"
                  width={500}
                  height={300}
                  className="max-w-full h-auto"
              />
            </div>

            {/* Button */}
            <div className="w-full flex justify-center md:justify-start">
              <Link href="https://smarthive-tech-solution.gitbook.io/smarthive-tech-solution-api" target="_blank">
                <Button className="mt-8 w-[200px] bg-[#28656A] text-white rounded-full
      transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#28656A] hover:text-white active:scale-100">
                  View Documentation
                </Button>
              </Link>
            </div>


          </div>

        </div>
      </div>
  );
};

export default APISection;

