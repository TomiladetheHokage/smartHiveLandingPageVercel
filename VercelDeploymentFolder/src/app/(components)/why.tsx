// import Image from "next/image";
// import { Image1, Image2, Image3, Image4 } from "../../../public/assets";
// import TitleHeading from "../../components/title-heading";
//
// const data = [
//   {
//     image: Image1,
//     title: "Cost-Effectiveness",
//     description:
//       "Reduce communication cost while maximizing reach.",
//   },
//   {
//     image: Image2,
//     title: "Scalability",
//     description:
//       "Effortlessly scale your messaging  as your business grows.",
//   },
//   {
//     image: Image3,
//     title: "Fast Delivery",
//     description:
//       "Ensure your messages are delivered instantly.",
//   },
//   {
//     image: Image4,
//     title: "Wide Coverage",
//     description:
//       "Reach customers nationwide with high deliverable rates.",
//   },
// ];
//
// const Why = () => {
//   return (
//     <div className="lg:px-20 md:px-10 px-5 my-5">
//       <TitleHeading
//         title="Why Smarthive SMS?"
//         description="We deliver the ultimate communication solution, combining fast delivery, scalability, and cost-effectiveness to boost customers’ engagement."
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
//         {data.map((item, index) => (
//           <div className="w-full" key={index}>
//             <div className="flex flex-col md:flex-col gap-5 justify-center items-center">
//               <div className="md:w-[60%] w-full flex flex-col items-center justify-center text-center">
//                 <h1 className="text-2xl font-bold">{item.title}</h1>
//                 <p className="md:text-sm text-base mt-5">{item.description}</p>
//               </div>
//               <div className="h-[200px] md:w-[60%] w-full rounded">
//                 <Image src={item.image} alt={item.title} className="w-full h-full rounded" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default Why;


// NEW DESIGN
import worldImage from "../../../public/assets/world.png"
import moneyBag from "../../../public/assets/moneyBag.png"
import envelope from  "../../../public/assets/Vector (1).png"
import headphones from  "../../../public/assets/heasdphones.png"
import target from  "../../../public/assets/tabler_brand-flightradar24.png"
import settings from  "../../../public/assets/si_settings-duotone.png"
import Image from "next/image";

export default function SmarthiveSMS() {
  const features = [
    {
      image: worldImage,
      title: "Pan-African Reach",
      description: "Send SMS, WhatsApp, and emails across selected African countries with direct integrations to major telcos like MTN, Airtel, and Glo. No third-party delays. Ensuring fast, reliable communication even in low-network areas."
    },
    {
      image: target,
      title: "99% Deliverability",
      description: "Enjoy guaranteed message delivery with our reliable infrastructure. Track performance, while automatic retries ensure messages always reach your customers, even if there’s a disruption."
    },
    {
      image: moneyBag,
      title: "Cost-Effective Pricing",
      description: "Save up to 40% compared to competitors with transparent, pay-as-you-go pricing."
    },
    {
      image: settings,
      title: "Developer-First Infrastructure: APIs & SMPP Built for Scale",
      description: "Our APIs & SMPP gateways are designed to scale with your needs. Easily integrates SMS, WhatsApp, and Email into your system in just hours with Python, PHP, and Node.js SDKs. We also provide a sandbox environment for easy testing before you go live."
    },
    {
      image: envelope,
      title: "Multi-Channel Messaging",
      description: "Manage all your communication channels: SMS, WhatsApp, Email, and Voice from one centralized dashboard. No need to juggle multiple tools or systems. Streamlined messaging that saves you time and effort."
    },
    {
      image: headphones,
      title: "24/7 Local Support",
      description: "Access support in English, Pidgin, and Swahili, with our dedicated teams located in Lagos, Nairobi, and Accra. We respond to your queries in under 15 minutes, ensuring your business runs smoothly, no matter the hour."
    }
  ];

  return (
      //     <div className="bg-[#E2F5EE4D]  min-w-screen mx-auto px-6 py-16 text-gray-800">
      //       <h2 className="w-[897px] h-[62px] text-4xl font-bold text-center mx-auto text-gray-900">Why Businesses Trust SmarthiveSMS?</h2>
      //       <p className="text-center text-gray-600 mt-2 w-[500px] text-[16px] h-[42px] leading-[22px] mx-auto my-auto">Seamless messaging across SMS, WhatsApp, Email, and Voice. Built
      //         for Africa and designed for scale.</p>
      //
      //       <div className="grid md:grid-cols-2 gap-10 mt-12">
      //         {features.map((feature, index) => (
      //             <div key={index} className="flex space-x-4 justify-center items-center">
      //               {/* Image instead of icon */}
      //               <Image src={feature.image} alt={feature.title} className="w-10 h-10 object-contain"/>
      //
      //               <div className="w-[600px] text-left ">
      //                 <h3 className="text-lg font-semibold text-[28px]">{feature.title}</h3>
      //                 <p className="text-gray-600 mt-2 w-[488px]">{feature.description}</p>
      //               </div>
      //             </div>
      //         ))}
      //       </div>
      //     </div>
      // );
      <div
          className="bg-[#E2F5EE4D] w-full mx-auto px-6 py-16 text-gray-800 flex flex-col items-center overflow-x-hidden">
        {/* Heading */}
        <h2 className="font-poltawski w-[346px] h-[56px] text-[22px] mb-6 md:mb-0 font-bold text-center text-gray-900 md:w-[897px] md:h-[62px] md:text-[49px]">
          Why Businesses Trust SmarthiveSMS?
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-600 mt-2 w-[346px] text-[14px] leading-[24px] mx-auto md:w-[500px] md:text-[16px] md:h-[42px] md:leading-[22px]">
          Seamless messaging across SMS, WhatsApp, Email, and Voice. Built for Africa and designed for scale.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 w-full max-w-[900px] md:max-w-none">
          {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center text-left space-x-2 md:space-x-4f mx-auto">
                {/* Feature Image (Left-Aligned for Mobile & Desktop) */}
                <Image src={feature.image} alt={feature.title} className="w-6 h-6 md:w-10 md:h-10 object-contain"/>

                {/* Feature Text */}
                <div className="w-[346px] md:w-[600px]">
                  <h3 className="text-[16px] font-semibold md:text-[24px]">{feature.title}</h3>
                  <p className="text-gray-600 mt-2 text-[12px] leading-[24px] md:text-[16px] md:w-[488px]">
                    {feature.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>


  )
}
