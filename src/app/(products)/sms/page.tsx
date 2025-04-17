//
// "use client";
//
// import Image from "next/image";
// import Link from "next/link";
// import greenCircle from "../../../../public/assets/fatCircle.png";
// import { Button } from "@/components/ui/button";
//
// const SMSPage = () => {
//     return (
//         <div className="bg-[#E2F5EE] max-w-full w-full grid md:grid-cols-[1fr_3fr] gap-x-10 md:gap-x-20 items-center">
//             {/* Text Content */}
//             <div className="space-y-4 text-left mt-8 md:mt-20 flex flex-col items-start md:ml-10 lg:ml-20">
//                 {/* Added md:ml-10 lg:ml-20 to shift text right */}
//                 <div>
//                     <h1 className="md:w-[850px] text-4xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-6 mt-10 !mt-20 font-poltawski">
//                         Bulk <span className="text-[#F2994A]">SMS</span> API for
//                         <span className="text-[#F2994A]"> Marketing & Transactional</span>Messaging in Africa
//                     </h1>
//
//                     <p className="text-gray-600 text-base md:text-lg md:pt-4">
//                         Guaranteed 99% deliverability with up-to-date
//                         analytics
//                     </p>
//                 </div>
//
//                 {/* Desktop Buttons */}
//                 <div className="hidden md:flex flex-wrap gap-4 mt-6 md:pb-20 md:pt-6">
//                     <Link href="https://app.smarthivesms.com/signup">
//                         <Button
//                             className="bg-[#28656A] text-white px-6 py-5 active:bg-[#28656A] active:text-white hover:bg-[#28656A] hover:text-white rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
//                             Learn More
//                         </Button>
//                     </Link>
//                     <Button variant="outline"
//                             className="border-2 border-[#28656A] text-black font-bold px-6 py-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
//                         Request a Demo
//                     </Button>
//                 </div>
//             </div>
//
//             {/* Image Content */}
//             <div className="relative w-full flex flex-col justify-center items-center pb-8 mt-10 md:mb-12">
//                 {/* Added mt-10 to move image down */}
//                 <Image
//                     src={greenCircle}
//                     alt="Hero image"
//                     width={302}
//                     height={285}
//                     className="md:pt-24 max-w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[650px] object-contain"
//                 />
//             </div>
//         </div>
//
//     );
// };
//
// export default SMSPage;

"use client";
import {useEffect, useState} from "react";
import Image from "next/image";
import greenCircle from "../../../../public/assets/fatCircle.png";
import developerIcon from "../../../../public/assets/developerIcon.png";
import ecommerceIcon from "../../../../public/assets/ecommerceIcon.png";
import bankingIcon from "../../../../public/assets/bankingIcon.png";
import healthcareIcon from "../../../../public/assets/healthcareIcon.png";

import circle from "../../../../public/assets/Circle 3.png";

import devIcon from "../../../../public/assets/devIcon.png";
import retail from "../../../../public/assets/retail.png";
import agric from "../../../../public/assets/Agric.png";
import education from "../../../../public/assets/education.png";

import wifiTelco from "../../../../public/assets/direct telco  routes.png";
import fraudDetection from "../../../../public/assets/fraud detection.png";
import smpp from "../../../../public/assets/smpp & rest api.png";
import person from "../../../../public/assets/dynamic sender ids.png";

import codeSnippet from "../../../../public/assets/codeSnippet.png";




import bannerImage from "@/public/bannerImage.png"; // The new section image
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {AiFillTikTok} from "react-icons/ai";
import {ArrowLeft, LocateIcon, MessageSquareText, Phone, X} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input"; // Adjust path if needed

const SmsPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);
    const [isMessageClicked, setIsMessageClicked] = useState(false);

    const [isNewScheduleOpen, setIsNewScheduleOpen] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState("30 mins");
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    return (
        <div className="bg-[#ffffff]">
            {/* Existing Section */}
            <div className=" bg-[#E2F5EE] grid md:grid-cols-[1fr_3fr] gap-x-10 md:gap-x-20 items-center px-6">
                {/* Text Content */}
                <div
                    className="bg-[#E2F5EE] space-y-4 md:text-left mt-8 md:mt-20 flex flex-col items-start md:ml-10 lg:ml-20 text-center">
                    <h1 className="md:w-[850px] w-[350px] text-[22px] md:text-6xl font-bold text-gray-800 mb-4 md:mb-6 mt-10 !mt-20 font-poltawski">
                        Bulk <span className="text-[#F2994A]">SMS</span> API for
                        <span className="text-[#F2994A]"> Marketing & Transactional</span> Messaging in Africa
                    </h1>
                    <p className="text-gray-600 text-[12px] text-center md:text-lg md:pt-4">
                        Guaranteed 99% deliverability with up-to-date analytics
                    </p>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex flex-wrap gap-4 mt-6 md:pb-20 md:pt-6">
                        <Link href="/about">
                            <Button className="bg-[#28656A] text-white px-6 py-5 active:bg-[#28656A] active:text-white
            hover:bg-[#28656A] hover:text-white rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
                                Learn More
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="border-2 border-[#28656A] bg-[#E2F5EE] text-black font-bold px-6 py-2
  rounded-xl transition-transform duration-300 ease-in-out
  hover:scale-105 hover:bg-[#E2F5EE] hover:text-black hover:border-[#28656A]"
                            onClick={() => setIsOpen(true)}
                        >
                            Request a Demo
                        </Button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative w-full flex flex-col justify-center items-center pb-8 mt-10 md:mb-12">
                    <Image
                        src={circle}
                        alt="Hero image"
                        className="md:pt-24 max-w-full object-contain w-[233px] h-[244px] md:w-[400px] md:h-[385px]"
                    />
                </div>

                {/* Mobile Buttons (Now below the image) */}
                <div className="flex flex-wrap gap-4 justify-center mt-6 md:hidden w-full pb-12">
                    <Link href="/about">
                        <Button className="bg-[#28656A] text-white px-6 py-5 active:bg-[#28656A] active:text-white
            hover:bg-[#28656A] hover:text-white rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
                            Learn More
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        className="border-2 border-[#28656A] bg-[#E2F5EE] text-black font-bold px-6 py-2
  rounded-xl transition-transform duration-300 ease-in-out
  hover:scale-105 hover:bg-[#E2F5EE] hover:text-black hover:border-[#28656A]"
                        onClick={() => setIsOpen(true)}
                    >
                        Request a Demo
                    </Button>
                </div>
            </div>


            {/* New Section Below */}
            <div className="bg-[#ffffff] text-center py-8 px-6 mt-10">
                <h2 className="text-[22px] md:text-4xl font-bold font-poltawski">
                    Unlock the Power of <span className="text-[#F2994A]">SMS</span> Communication <br/>
                    with SmarthiveSMS
                </h2>
                <p className="md:text-[22px] mt-12 text-[12px] text-left md:text-center">
                    Reach customers instantly with guaranteed 99% deliverability. Stay ahead of your competitors with
                    reliable, cost-effective SMS solutions.
                </p>
            </div>

            {/* 🔽 "Routes & Use Cases" Section Below 🔽 */}
            <div className="bg-white text-gray-800 py-8 px-6">
                <h2 className="text-[22px] md:text-[40px] font-bold text-center mb-8 font-poltawski">
                    Routes & Use Cases
                </h2>

                {/* Transactional SMS */}
                <div className="mb-8 md:ml-56">
                    <h3 className="text-[22px] md:text-3xl font-semibold text-left">Transactional SMS</h3>
                    <p className="font-semibold md:text-[24px] mt-4 text-[14px] text-left mb-12">
                        <span className="text-[#F2994A]">• USP</span>: High Priority routes for time-sensitive alerts.
                    </p>

                    <h3 className="text-xl md:text-3xl font-semibold text-left">USE CASES</h3>
                </div>

                <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto gap-x-56">
                    {/* Banking (Text Left, Image Right) */}
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-left">
                            <h3 className="font-bold text-lg">Banking</h3>
                            <p className="text-gray-600 md:w-[215px] text-[12px] md:text-[16px]">
                                OTPs, debit alerts, loan repayment reminders.
                            </p>
                        </div>
                        <Image src={bankingIcon} alt="Banking" width={256} height={188}
                               className="w-[151px] h-[100px] md:w-[256px] md:h-[188px]"/>
                    </div>

                    {/* E-Commerce (Image Left, Text Right) */}
                    <div className="flex flex-row-reverse items-center justify-between">
                        <div className="text-left">
                            <h3 className="font-bold text-lg">E-commerce</h3>
                            <p className="text-gray-600 md:w-[215px] text-[12px] md:text-[16px]">
                                Order confirmation, delivery updates.
                            </p>
                        </div>
                        <Image src={ecommerceIcon} alt="E-commerce" width={256} height={188}
                               className="w-[151px] h-[100px] md:w-[256px] md:h-[188px]"/>
                    </div>

                    {/* Healthcare (Text Left, Image Right) */}
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-left">
                            <h3 className="font-bold text-lg">Healthcare</h3>
                            <p className="text-gray-600 md:w-[215px] text-[12px] md:text-[16px]">
                                Appointment reminders, lab results.
                            </p>
                        </div>
                        <Image src={healthcareIcon} alt="Healthcare" width={256} height={188}
                               className="w-[151px] h-[100px] md:w-[256px] md:h-[188px]"/>
                    </div>

                    {/* Developer Use Case (Image Left, Text Right) */}
                    <div className="flex flex-row-reverse items-center justify-between">
                        <div className="text-left">
                            <h3 className="font-bold text-lg">Developer Use Case</h3>
                            <p className="text-gray-600 md:w-[215px] text-[12px] md:text-[16px]">
                                Trigger SMS via API when a user logs in or completes a transaction.
                            </p>
                        </div>
                        <Image src={developerIcon} alt="Developer Use Case" width={256} height={188}
                               className="w-[151px] h-[100px] md:w-[256px] md:h-[188px]"/>
                    </div>
                </div>


                {/* Marketing SMS */}
                <div className="mb-8 md:ml-56 md:mt-48 mt-32">
                    <h3 className="text-[22px] md:text-3xl font-semibold text-left">Marketing SMS</h3>
                    <p className="font-semibold md:text-[24px] mt-4 text-[14px] text-left mb-12">
                        <span className="text-[#F2994A]">• USP</span>: Cost-effective bulk campaigns with DND bypass.
                    </p>

                    <h3 className="text-xl md:text-3xl font-semibold text-left">USE CASES</h3>
                </div>

                <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto gap-x-56">
                    {/* Retail (Text Left, Image Right) */}
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-left">
                            <h3 className="font-bold text-lg">Retail</h3>
                            <p className="text-gray-600 md:w-[215px] text-[12px] md:text-[16px]">
                                Flash sales, loyalty program updates.
                            </p>
                        </div>
                        <Image src={retail} alt="Banking" width={256} height={188}
                               className="w-[151px] h-[100px] md:w-[256px] md:h-[188px]"/>
                    </div>

                    {/* Agric (Image Left, Text Right) */}
                    <div className="flex flex-row-reverse items-center justify-between">
                        <div className="text-left">
                            <h3 className="font-bold text-lg">Agriculture</h3>
                            <p className="text-gray-600 md:w-[215px] text-[12px] md:text-[16px]">
                                Weather alerts, crop price updates.
                            </p>
                        </div>
                        <Image src={agric} alt="E-commerce" width={256} height={188}
                               className="w-[151px] h-[100px] md:w-[256px] md:h-[188px]"/>
                    </div>

                    {/* Education (Text Left, Image Right) */}
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-left">
                            <h3 className="font-bold text-lg">Education</h3>
                            <p className="text-gray-600 md:w-[215px] text-[12px] md:text-[16px]">
                                Admission alerts, fee payments deadlines.
                            </p>
                        </div>
                        <Image src={education} alt="Healthcare" width={256} height={188}
                               className="w-[151px] h-[100px] md:w-[256px] md:h-[188px]"/>
                    </div>

                    {/* Developer Use Case (Image Left, Text Right) */}
                    <div className="flex flex-row-reverse items-center justify-between">
                        <div className="text-left">
                            <h3 className="font-bold text-lg">Developer Use Case</h3>
                            <p className="text-gray-600 md:w-[215px] text-[12px] md:text-[16px]">
                                Schedule bulk campaigns Via SMPP gateway with custom tagging for A/B testing.
                            </p>
                        </div>
                        <Image src={devIcon} alt="Developer Use Case" width={256} height={188}
                               className="w-[151px] h-[100px] md:w-[256px] md:h-[188px]"/>
                    </div>
                </div>
            </div>

            <div className="pb-20">
                <h2 className="text-center text-[22px] md:text-[41px] font-semibold text-gray-900 font-poltawski mt-20 md:mt-36">
                    What <span className="text-[#F2994A]">Sets</span> Us Apart
                </h2>
                <div className="bg-[#E6FAF4] p-10 rounded-lg max-w-7xl mx-auto mt-10">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20 sm:space-y-6 mt-6 text-gray-800 ">
                        {/* Direct Telco Routes */}
                        <div className="flex items-center space-x-4">
                            <Image src={wifiTelco} alt="Direct Telco Routes" width={35} height={35}
                                   className="object-contain"/>
                            <div className="space-y-4">
                                <h3 className="font-bold md:text-[20px]">Direct Telco Routes</h3>
                                <p className="text-sm text-gray-600 md:text-[18px]">
                                    No third-party aggregator; lower latency, high delivery.
                                </p>
                            </div>
                        </div>

                        {/* SMPP & REST API */}
                        <div className="flex items-center space-x-4">
                            <Image src={smpp} alt="SMPP & REST API" width={35} height={35} className="object-contain"/>
                            <div className="space-y-4">
                                <h3 className="font-bold md:text-[20px]">SMPP & REST API</h3>
                                <p className="text-sm text-gray-600 md:text-[18px]">
                                    Choose high-throughput SMPP (for enterprise) or REST API (for startups).
                                </p>
                            </div>
                        </div>

                        {/* Dynamic Sender IDs */}
                        <div className="flex items-center space-x-4">
                            <Image src={person} alt="Dynamic Sender IDs" width={35} height={35}
                                   className="object-contain"/>
                            <div className="space-y-4">
                                <h3 className="font-bold md:text-[20px]">Dynamic Sender IDs</h3>
                                <p className="text-sm text-gray-600 md:text-[18px]">
                                    Use branded names (e.g., "GTBank") or shortcodes.
                                </p>
                            </div>
                        </div>

                        {/* Fraud Detection */}
                        <div className="flex items-center space-x-4">
                            <Image src={fraudDetection} alt="Fraud Detection" width={35} height={35}
                                   className="object-contain"/>
                            <div className="space-y-4">
                                <h3 className="font-bold md:text-[20px]">Fraud Detection</h3>
                                <p className="text-sm text-gray-600 md:text-[18px]">
                                    Block suspicious OTP requests with AI-driven thresholds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8 md:mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">For Developers</h2>

                {/* Featured Code Snippet */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-700 mt-4 mb-3">Featured Code Snippet</h3>
                <p className="text-sm md:text-base font-medium text-gray-600 pb-4">Python</p>

                {/* Code Snippet Image */}
                <div>
                    <Image
                        src={codeSnippet}
                        alt="Code Snippet"
                        width={600}
                        height={300}
                        className="rounded-lg object-cover w-full max-w-[404px] md:max-w-[500px] lg:max-w-[600px]"
                    />
                </div>

                {/* Documentation Links */}
                <p className="text-gray-800 font-medium text-sm mt-6">
                    Docs links:
                    <a href="#" className="text-black text-base md:text-lg hover:underline ml-1">SMPP Setup Guide</a> |
                    <a href="#" className="text-black text-base md:text-lg hover:underline ml-1">API Reference</a> |
                    <a href="#" className="text-black text-base md:text-lg hover:underline ml-1">Webhooks for DLRs</a>
                </p>
            </div>


            <div className="bg-[#E2F5EE] w-full py-12 px-6 text-center md:mt-36 mt-20">
                {/* Heading */}
                <h2 className="text-2xl md:text-[45px] font-semibold text-gray-900 font-poltawski">
                    Start Sending <span className="text-[#F2994A] font-bold">SMS</span> in 15 minutes.
                </h2>

                {/* Subtext */}
                <p className="text-gray-700 mt-8 mb-20">Free trial includes 100 SMS credits.</p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <Link href="https://app.smarthivesms.com/signup">
                        <Button className="bg-[#28656A] text-white px-10 py-5 w-full md:w-auto active:bg-[#28656A] active:text-white
        hover:bg-[#28656A] hover:text-white rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
                            Get API Keys
                        </Button>
                    </Link>

                    <Link href="contact-us">
                        <Button
                            variant="outline"
                            className="border-2 border-[#28656A] bg-[#ffffff] text-black font-bold px-6 py-2
  rounded-xl transition-transform duration-300 ease-in-out
  hover:scale-105 hover:bg-[#ffffff] hover:text-black hover:border-[#28656A]"
                        >
                            Talk to Expert
                        </Button>
                    </Link>


                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#28656A] text-white px-8 md:px-20 py-10 w-full overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
                    {/* Newsletter Subscription */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-xl">Be Future-Ready</h3>
                        <p className="text-gray-300 text-sm w-full max-w-[204px]">
                            Get exclusive <span className="text-white">SMS</span> updates straight to your inbox
                        </p>
                        <div className="flex w-full max-w-xs border border-white rounded-md overflow-hidden">
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
                            {["About", "Features", "API-DOCS", "PRICING", "CONTACT-US"].map((link) => (
                                <li key={link}>
                                    <Link href={`/${link.toLowerCase()}`}
                                          className="hover:underline text-white font-bold">
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
                            <span className="text-gray-300">support@smarthivetechsolution.com</span>
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

                    {/* Social Media Icons (Wrapped) */}
                    <div className="flex flex-wrap gap-4 text-xl pb-8">
                        <Link href={""}>
                            <FaFacebookSquare/>
                        </Link>
                        <Link href={""}>
                            <FaSquareXTwitter/>
                        </Link>
                        <Link href={""}>
                            <FaLinkedin/>
                        </Link>
                        <Link href={""}>
                            <AiFillTikTok/>
                        </Link>
                        <Link href={""}>
                            <FaInstagramSquare/>
                        </Link>
                    </div>

                    {/* Copyright Text */}
                    <p className="mt-8 text-center w-full md:w-auto md:text-right">
                        &copy; 2024 Smarthive SMS. All rights reserved
                    </p>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)}>
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

export default SmsPage;
