// import Image from "next/image";
// import { whoweare } from "../../../public/assets";
// import { Button } from "../../components/ui/button";
//
// const WhoWeAre = () => {
//   return (
//     <div className="p-5 md:p-10 lg:p-20 flex flex-col md:flex-row gap-5 md:gap-0 mt-16 md:mt-5">
//       <div className="md:max-w-[50%] w-full flex flex-col justify-center gap-5">
//         <h1 className="text-3xl md:text-6xl font-bold">Discover Our Story</h1>
//
//         <p className="text-base lg:text-lg">
//           SmarthiveSMS is your trusted partner in business communication, providing secure, cost-effective SMS solutions that deliver results. We help businesses connect instantly with their customers, driving engagement and loyalty.
//         </p>
//
//         <Button className="w-28">
//           Learn More
//         </Button>
//       </div>
//       <div className="flex items-center justify-center md:w-[50%] w-full">
//         <Image src={whoweare} alt="who we are" className="lg:w-[400px] md:w-[350px]" />
//       </div>
//     </div>
//   );
// };
//
// export default WhoWeAre;


import image from "../../../public/assets/Frame1000005254.png"
import statsImage from "../../../public/assets/Frame1000005341.png"
import statsImage2 from "../../../public/assets/stats.png"
import image2 from "../../../public/assets/image2.png"
import Image from "next/image";
export default function DiscoverSmarthiveSMS() {
    return (
        <div className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
            {/* Header Section */}
            <h2 className=" font-poltawski text-center text-[22px] md:text-[50px] font-semibold text-gray-900 mb-8 h-[62px] leading-[28px] md:leading-[62px]">
                Discover SmarthiveSMS
            </h2>


            <div className="-mt-8 md:mt-28 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/* Left Side - Text */}
                <div className="md:w-1/2 max-w-[600px] h-[317px] self-start">
                    <h3 className="text-[16px] md:text-[22px] leading-[24px] md:leading-[28px] font-semibold text-gray-800 mb-8">
                        Why SmarthiveSMS Powers Africa’s Fastest-Growing Businesses
                    </h3>
                    <p className="text-[16px] md:text-[16px] leading-[20px] md:leading-[22px] text-gray-700 mb-8">
                        We are a leading provider of innovative communication solutions, empowering businesses to
                        connect with their customers seamlessly and effectively.
                    </p>
                    <p className="text-[16px] md:text-[16px] leading-[20px] md:leading-[22px] text-gray-700 mb-8">
                        Born in Lagos to solve Africa’s unique communication challenges, SmarthiveSMS provides an
                        extensive, omnichannel messaging experience across SMS, WhatsApp, USSD, and Email.
                    </p>
                    <p className="text-[16px] md:text-[16px] leading-[20px] md:leading-[22px] text-gray-700">
                        We partner directly with leading telcos like MTN, Airtel, and Glo to ensure 99% message
                        deliverability, even in low-network areas; helping businesses stay connected with their
                        customers instantly and reliably.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-1/2 flex justify-center md:self-start">
                    <Image
                        src={image}
                        alt="SmarthiveSMS Features"
                        width={519}
                        height={488}
                        className="w-[347px] h-[339px] md:w-[519px] md:h-[488px] object-cover mt-28 md:mt-0"
                    />
                </div>

            </div>


            {/* Mobile View Image */}
            <div className="block md:hidden">
                <Image
                    src={statsImage2}
                    alt={"Statistics"}
                    className="mx-auto mt-12 w-full max-w-lg h-auto mt:-0"
                />
            </div>

            {/* Desktop View Image */}
            <div className="hidden md:block">
                <Image
                    src={statsImage}
                    alt={"Statistics"}
                    className="mx-auto mt-24  "
                />
            </div>
        </div>
        //
        // <div className="w-full bg-white py-12 px-6 md:px-16 lg:px-24 overflow-x-hidden">
        //     {/* Header Section */}
        //     <h2 className="text-center max-w-[356px] font-semibold text-gray-900 mb-8 text-[22px] md:text-[50px] leading-[30px] md:leading-[62px]">
        //         Discover SmarthiveSMS
        //     </h2>
        //
        //     <div className="mt-8 md:mt-28 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        //         {/* Left Side - Text */}
        //         <div className="md:w-1/2 max-w-xl h-auto self-start">
        //             <h3 className="text-left text-lg md:text-xl font-semibold text-gray-800 mb-4">
        //                 Why SmarthiveSMS Powers Africa’s Fastest-Growing Businesses
        //             </h3>
        //             <p className="text-left text-base leading-6 text-gray-700 mb-4">
        //                 We are a leading provider of innovative communication solutions, empowering businesses to
        //                 connect with their customers seamlessly and effectively.
        //             </p>
        //             <p className="text-left text-base leading-6 text-gray-700 mb-4">
        //                 Born in Lagos to solve Africa’s unique communication challenges, SmarthiveSMS provides an
        //                 extensive, omnichannel messaging experience across SMS, WhatsApp, USSD, and Email.
        //             </p>
        //             <p className="text-left text-base leading-6 text-gray-700">
        //                 We partner directly with leading telcos like MTN, Airtel, and Glo to ensure 99% message
        //                 deliverability, even in low-network areas; helping businesses stay connected with their
        //                 customers instantly and reliably.
        //             </p>
        //         </div>
        //
        //         {/* Right Side - Image */}
        //         <div className="md:w-1/2 flex justify-center md:self-start">
        //             <Image
        //                 src={image}
        //                 alt="SmarthiveSMS Features"
        //                 width={519}
        //                 height={488}
        //                 className="w-[519px] h-[488px] object-cover"
        //             />
        //         </div>
        //     </div>
        //

        // </div>


    );
}
