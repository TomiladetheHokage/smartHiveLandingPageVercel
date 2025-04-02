// "use client";
//
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
//
// const SupportCenter = () => {
//     return (
//         <div className="lg:px-20 md:px-10 p-5 md:py-10 mt-14 mb-14">
//             <div className="mt-14">
//                 <h1 className="text-3xl text-center font-semibold">Get in Touch</h1>
//                 <div className="mt-5 flex gap-10 flex-col md:flex-row">
//                     <div className="flex-1 flex flex-col gap-5 ">
//                         <p>
//                             Ready to take the next step? We’d love to hear from you! Whether you have questions about our services, want to discuss a potential projects, or simply want to say hello, we’re here to help. Feel free to reach out to us using the contact form and we’ll get back to you as soon as possible.
//                             Than you for considering Smarthive SMS.
//                         </p>
//                         <p>
//                             Can’t wait? You can also contact us directly on +234 8123456435 or sales@smarthivetechsolution.com
//                         </p>
//                     </div>
//                     <div className="flex-1 flex justify-center">
//                         <div className="bg-primary flex h-auto p-5 rounded-lg w-[400px] gap-5 flex-col items-center">
//                             <input
//                                 type="text"
//                                 className="bg-[#F3FFFB] w-full h-[40px] outline-none p-3 rounded-lg text-sm"
//                                 placeholder="Enter name.."
//                             />
//                             <input
//                                 type="text"
//                                 className="bg-[#F3FFFB] w-full h-[40px] outline-none p-3 rounded-lg text-sm"
//                                 placeholder="Enter Address.."
//                             />
//                             <textarea
//                                 className="bg-[#F3FFFB] w-full outline-none p-3 rounded-lg text-sm resize-none min-h-[200px]"
//                                 placeholder="Enter Message.."
//                             />
//                             <button
//                                 className="bg-[#F3FFFB] text-black text-sm w-1/2 h-[40px] rounded-lg"
//                             >
//                                 Send Message
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grid md:grid-cols-3 mt-20 gap-5">
//                     <div className="w-full bg-primary p-3 text-white h-[100px] rounded-md">
//                         <div className="flex gap-2 items-center">
//                             <MdEmail size={16} />
//                             <h1 className="text-sm font-semibold">Email</h1>
//                         </div>
//                         <div className="mt-3 ps-5 text-sm">
//                             <h1>sale@smarthivetechsolution.com</h1>
//                         </div>
//                     </div>
//                     <div className="w-full bg-primary p-3 text-white h-[100px] rounded-md">
//                         <div className="flex gap-2 items-center">
//                             <FaPhoneAlt size={16} />
//                             <h1 className="text-sm font-semibold">Phone number</h1>
//                         </div>
//                         <div className="mt-3 ps-5 text-sm">
//                             <h1>+2348145322367</h1>
//                             <h1>+2348145322367</h1>
//                         </div>
//                     </div>
//                     <div className="w-full bg-primary p-3 text-white h-[100px] rounded-md">
//                         <div className="flex gap-2 items-center">
//                             <FaLocationDot size={16} />
//                             <h1 className="text-sm font-semibold">Location</h1>
//                         </div>
//                         <div className="mt-3 ps-5 text-sm">
//                             <h1>No 23, Oluwale Street, off ifako road, Idi agbon Lagos State Nigeria </h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-20 flex flex-col md:flex-row gap-10">
//                     <div className="flex-1">
//                         <h1 className="text-2xl font-semibold mb-3">Visit Our Office</h1>
//                         <p className="text-sm">
//                             We’d love to meet you in person! If you’re in the feel free to stop by offfice for a personalized consultation or to learn more about our services. Our team is here to welcome you and answer any questions you may have.
//                         </p>
//                     </div>
//                     <div className="flex-1 flex md:justify-end justify-center">
//                         <div
//                             className="relative w-[200px] h-[80px] bg-primary p-3 flex flex-col items-center justify-center text-white rounded-lg text-sm"
//                         >
//                             <h1 className="text-center">
//                                 Monday - Friday
//                             </h1>
//                             <h1 className="text-center mt-2">
//                                 8am - 5pm
//                             </h1>
//                             <div className="absolute border border-primary p-1 px-4 rounded-full -top-5 text-sm bg-white text-black">
//                                 <h1 className="text-center">Hour</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default SupportCenter;



// "use client";
//
// import Image from "next/image";
//
// import customerCare from "../../../public/assets/Customer Care.png"
//
// const SupportCenter = () => {
//     return (
//         <div className="relative lg:px-20 md:px-10 p-8 md:py-10 mt-14 mb-14 h-[300px] flex items-center justify-center">
//             {/* Background Image */}
//             <Image
//                 src={customerCare}
//                 alt="Customer Care"
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute inset-0"
//             />
//
//             {/* Dark Overlay for Readability */}
//             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//
//             {/* Content */}
//             <div className="relative text-center text-white z-10">
//                 <h1 className="text-3xl font-semibold">
//                     We are Here to Help - <span className="text-orange-500">24/7 Support</span> Across Africa
//                 </h1>
//                 <p className="mt-3 text-lg">
//                     Whether you’re troubleshooting API errors or negotiating enterprise SMS rates,
//                     our Lagos, Nairobi, and Accra-based teams are ready to assist.
//                 </p>
//             </div>
//         </div>
//     );
// }
//
// export default SupportCenter

// "use client";
//
// import Image from "next/image";
// import customerCare from "../../../public/assets/Customer Care.png"
//
// const SupportCenter = () => {
//     return (
//         <div
//             className="relative lg:px-20 md:px-10 p-5 md:py-10 md:pb-14 min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center flex-grow">
//             {/* Background Image */}
//             <div className="absolute inset-0 w-full h-full">
//                 <Image
//                     src={customerCare}
//                     alt="Customer Care"
//                     layout="fill"
//                     objectFit="cover" // Ensures full image visibility
//                     priority
//                 />
//             </div>
//
//             {/* Dark Overlay for Readability */}
//             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//
//             {/* Content */}
//             <div className="relative text-center text-white z-10 px-5">
//                 <h1 className="text-[22px] md:text-4xl font-semibold font-poltawski">
//                     We are Here to Help - <span className="text-orange-500">24/7 Support</span> Across Africa
//                 </h1>
//                 <p className="mt-3 text-[14px] md:text-[22px] md:max-w-[900px] mx-auto">
//                     Whether you’re troubleshooting API errors or negotiating enterprise SMS rates,
//                     our Lagos, Nairobi, and Accra-based teams are ready to assist.
//                 </p>
//             </div>
//         </div>
//
//
//     );
// }
//
// export default SupportCenter;


"use client";

import Image from "next/image";
import customerCare from "../../../public/assets/Customer Care.png";
import leftCircle from "../../../public/assets/left2.png";
import right from "../../../public/assets/Right2 (1).png";
import circle from "../../../public/assets/Union.png";

import email from "../../../public/assets/emailIcon.png";
import phone from "../../../public/assets/ion_call.png";
import location from "../../../public/assets/locationVector.png";


const SupportCenter = () => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-gray-100">
            {/* Hero Section */}
            <div className="relative lg:px-20 md:px-10 p-5 md:py-10 md:pb-14 min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center w-full">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={customerCare}
                        alt="Customer Care"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Text Content */}
                <div className="relative text-center text-white z-10 px-5">
                    <h1 className="text-[22px] md:text-4xl font-semibold font-poltawski">
                        We are Here to Help - <span className="text-orange-500">24/7 Support</span> Across Africa
                    </h1>
                    <p className="mt-3 text-[14px] md:text-[22px] md:max-w-[900px] mx-auto">
                        Whether you’re troubleshooting API errors or negotiating enterprise SMS rates,
                        our Lagos, Nairobi, and Accra-based teams are ready to assist.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="mt-20 relative flex flex-col items-center justify-center py-10 w-full px-5">
                {/* Background Circles */}

                <div className="absolute top-[25%] md:top-[20%] left-0 w-[60px] h-[50px] md:w-[350px] md:h-[377px]">
                    <Image src={leftCircle} alt="Circle Left"/>
                </div>
                <div className="absolute top-[90%] md:top-[70%] mb-40 right-0 w-[64px] h-[58px] md:w-auto md:h-[128px]">
                    <Image src={right} alt="Circle Right"/>
                </div>

                {/* Title */}
                <h2 className="text-center text-[22px] md:text-4xl font-semibold mb-4 text-black font-poltawski max-w-[741px]">
                    Get a <span className="text-[#F2994A]">call</span> back within 30 minutes
                </h2>

                {/* Form Container */}
                <div className="bg-[#28656A] p-6 md:p-10 rounded-lg shadow-lg w-full max-w-[650px] relative z-10 md:h-[672px] flex items-center">
                    <form className="flex flex-col w-full space-y-8">
                        <input type="text" placeholder="Name" className="mt-8 text-[13px] py-[14.5px] px-3 rounded-md bg-[#F3FFFB] w-full"/>
                        <input type="email" placeholder="Email Address" className="text-[13px] py-[14.5px] px-3 rounded-md bg-[#F3FFFB] w-full"/>
                        <input type="text" placeholder="Business Type" className="text-[13px] py-[14.5px] px-3 rounded-md bg-[#F3FFFB] w-full"/>
                        <textarea placeholder="Message" className="text-[13px] py-[14.5px] px-3 rounded-md bg-[#F3FFFB] w-full min-h-[210px]"></textarea>

                        {/* Centered Button with Margin for Spacing */}
                        <button type="submit" className="bg-[#F3FFFB] text-black p-3 text-[13px] mt-12 md:mt-24 rounded-md w-[150px] mx-auto">
                            Send Message
                        </button>
                    </form>
                </div>



            </div>



            {/* Contact Section */}
            <div className="mt-20 mb-20 max-w-[931px] mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-black font-poltawski">
                    Contact Options
                </h2>

                {/* Contact Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-12 justify-center">
                    {/* Email Card */}
                    <div className="bg-[#28656A] text-white p-6 rounded-lg shadow-lg flex items-center space-x-2 w-[273px] h-[205px]">
                        <Image src={email} alt="Email Icon" />
                        <div className="text-left space-y-8">
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-sm">sale@smarthivesms.com</p>
                            <p className="text-sm">support@smarthivesms.com</p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-[#28656A] text-white p-6 rounded-lg shadow-lg flex items-center space-x-2 w-[273px] h-[205px]">
                        <Image src={phone} alt="Phone Icon" />
                        <div className="text-left space-y-8">
                            <h3 className="text-lg font-semibold">Phone Number</h3>
                            <p className="text-sm">+234 000 654 5632</p>
                            <p className="text-sm">8AM - 6PM</p>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="bg-[#28656A] text-white p-6 rounded-lg shadow-lg flex items-center space-x-2 w-[273px] h-[205px]">
                        <Image src={location} alt="Location Icon" />
                        <div className="text-left space-y-8">
                            <h3 className="text-lg font-semibold">Address</h3>
                            <p className="text-sm">12A Opebi Road, Ikeja, Lagos, Nigeria.</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
}

export default SupportCenter;
