"use client";


import Image from "next/image";
import icons, { pricingImage } from "../../../public/assets";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { cn } from "@/lib/utils";
import {ArrowLeft, CheckCircle, LocateIcon, MessageSquareText, Phone, X} from "lucide-react";
import {Button} from "@/components/ui/button";

import email from "../../../public/assets/mdi_email (1).png"
import whatsapp from "../../../public/assets/akar-icons_whatsapp-fill.png"
import doubleEmail from "../../../public/assets/mdi_email-multiple-outline.png"
import voice from "../../../public/assets/voiceP.png"
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {AiFillTikTok} from "react-icons/ai";

const data = {
    sms: [
        "Reliable, timely message delivery assured.",
        "Flexible pricing plans to suite you.",
        "Seamless integration with your systems.",
        "Dedicated support whenever you need."
    ],
    token: [
        "Secure, encrypted authentication for peace of mind.",
        "Seamless integration with your systems.",
        "Flexible configuration to fit your needs. ",
        "Dedicated support for any assistance."
    ]
}

const Pricong = () => {
    const [selectedCountry, setSelectedCountry] = useState("Nigeria");
    const [selectedCurrency, setSelectedCurrency] = useState(selectedCountry === "Nigeria" ? "NGN" : "USD");
    const [isActive, setIsActive] = useState(false);
    const countries = [
        {
            name: "Nigeria",
            flag: "https://flagcdn.com/24x18/ng.png",
        }, {
            name: "Kenya",
            flag: "https://flagcdn.com/24x18/ke.png",
        }, {
            name: "Rwanda",
            flag: "https://flagcdn.com/24x18/rw.png",
        }, {
            name: "Tanzania",
            flag: "https://flagcdn.com/24x18/tz.png",
        }, {
            name: "Uganda",
            flag: "https://flagcdn.com/24x18/ug.png",
        }
    ];
    const currencies = ["USD", "EURO", "NGN"];
    const flag = () => {
        switch (selectedCountry) {
            case "Nigeria":
                return "https://flagcdn.com/24x18/ng.png";
            case "Kenya":
                return "https://flagcdn.com/24x18/ke.png";
            case "Rwanda":
                return "https://flagcdn.com/24x18/rw.png";
            case "Tanzania":
                return "https://flagcdn.com/24x18/tz.png";
            case "Uganda":
                return "https://flagcdn.com/24x18/ug.png";
            default:
                return "https://flagcdn.com/24x18/ng.png";
        };
    }
    const smsRateNGN = 2.6;
    const smsRateUSD = 0.00524;
    const smsRateEURO = 0.0022;
    const smsRate = () => {
        switch (selectedCurrency) {
            case "USD":
                return smsRateUSD;
            case "EURO":
                return smsRateEURO;
            case "NGN":
                return smsRateNGN;
            default:
                return smsRateNGN;
        }
    }
    const tokenRateUSD = () => {
        switch (selectedCountry) {
            case "Nigeria":
                return 0.0029;
            case "Kenya":
                return 0.012;
            case "Rwanda":
                return 0.022;
            case "Tanzania":
                return 0.012;
            case "Uganda":
                return 0.022;
            default:
                return 0.0029;
        }
    }

    const tokenRateEURO = () => {
        switch (selectedCountry) {
            case "Nigeria":
                return 0.0022;
            case "Kenya":
                return 0.010;
            case "Rwanda":
                return 0.020;
            case "Tanzania":
                return 0.010;
            case "Uganda":
                return 0.020;
            default:
                return 0.0029;
        }
    }

    const tokenRate = () => {
        switch (selectedCurrency) {
            case "USD":
                return tokenRateUSD();
            case "EURO":
                return tokenRateEURO();
            case "NGN":
                return 3.2;
            default:
                return 3.2;
        }
    }
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);
    const [isMessageClicked, setIsMessageClicked] = useState(false);

    const [isNewScheduleOpen, setIsNewScheduleOpen] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState("30 mins");
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    return (
        // <div className="lg:px-20 md:px-10 p-5 md:py-10 mt-14 md:mt-0">
        //     <div className="w-full flex items-center justify-center">
        //         <div className="md:h-[250px] h-[180px] lg:w-[50%] md:w-[65%] flex items-center justify-center relative">
        //             <Image src={pricingImage} alt="" className="absolute left-0 w-[6rem] md:w-[9rem] -z-10" />
        //             <h1 className="md:text-2xl text-lg w-full text-center font-semibold">
        //                 Streamline your subscription today, discover simplicity in pricing.{" "}
        //             </h1>
        //             <Image src={pricingImage} alt="" className="absolute right-0 bottom-0 w-[5rem] md:w-[8rem]" />
        //         </div>
        //     </div>
        //     <div className="w-full flex justify-center">
        //         <div className="flex flex-col justify-center items-center">
        //             <h1 className="font-medium">Select your customers location</h1>
        //             <div
        //                 className="border border-primary p-2 flex items-center gap-2 mt-3 w-fit cursor-pointer relative bg-white rounded-sm"
        //                 onClick={() => setIsActive(!isActive)}
        //             >
        //                 <img src={flag()} alt="" />
        //                 <div className="flex items-center">
        //                     <span className="text-sm">{selectedCurrency}</span>
        //                     <IoMdArrowDropdown size={20} />
        //                 </div>
        //                 {isActive && (
        //                     <div className="absolute w-[200px] md:w-[250px] border h-auto top-[100%] right-0 rounded border-primary bg-white">
        //                         <div
        //                             className={
        //                                 cn("w-full h-[40px] rounded grid p-1", selectedCountry === "Nigeria" ? "grid-cols-3" : "grid-cols-2")
        //                             }
        //                         >
        //                             {currencies.map((currency) => {
        //                                 if (selectedCountry !== "Nigeria" && currency === "NGN") return null
        //                                 return (
        //                                     <div
        //                                         className={cn("flex items-center justify-center rounded", currency === selectedCurrency ? "bg-primary" : "")}
        //                                         key={currency}
        //                                         onClick={() => setSelectedCurrency(currency)}
        //                                     >
        //                                         <span
        //                                             className={cn("text-sm font-semibold", currency === selectedCurrency ? "text-white" : "text-primary")}
        //                                         >
        //                                             {currency}
        //                                         </span>
        //                                     </div>
        //                                 )
        //                             })}
        //                         </div>
        //                         <div className="bg-white p-2 rounded">
        //                             {countries.map((country) => (
        //                                 <div
        //                                     className={cn("flex items-center justify-between p-2 rounded", country.name === selectedCountry ? "bg-primary text-white" : "")}
        //                                     key={country.name}
        //                                     onClick={() => {
        //                                         setSelectedCountry(country.name)
        //                                         if (country.name !== "Nigeria") setSelectedCurrency("USD")
        //                                     }}
        //                                 >
        //                                     <span>{country.name}</span>
        //                                     <img src={country.flag} alt="" />
        //                                 </div>
        //                             ))}
        //                         </div>
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        //     <div className="md:mt-40 mt-20 flex flex-col gap-14">
        //         {selectedCountry === "Nigeria" && (
        //             <div className="flex justify-between w-full flex-col md:flex-row gap-12 items-center">
        //                 <div>
        //                     <h1 className="text-3xl font-semibold">SMS</h1>
        //                     <Image src={icons.sendMultipleSms} alt="" className="w-12 h-10" />
        //                     <div className="mt-5">
        //                         <p>Send quick and bulk SMS to your customers using our SMS services</p>
        //                         <div className="mt-10 flex flex-col gap-3">
        //                             {data.sms.map((item, index) => (
        //                                 <div key={index} className="flex gap-3">
        //                                     <CheckCircle size={20} className="text-primary" />
        //                                     <p>{item}</p>
        //                                 </div>
        //                             ))}
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="bg-white p-3 w-[250px] h-[150px] rounded">
        //                     <div className="flex items-center gap-3">
        //                         <h1>Start as low as: </h1>
        //                         <img src={flag()} alt="" />
        //                     </div>
        //                     <div className="mt-5 flex flex-col gap-3">
        //                         <h1 className="text-2xl text-primary font-semibold">
        //                             {smsRate().toLocaleString(
        //                                 selectedCurrency === "EURO" ? "de-DE" : selectedCurrency === "USD" ? "en-US" : "en-NG",
        //                                 {
        //                                     style: "currency", currency: selectedCurrency === "EURO" ? "EUR" : selectedCurrency, minimumSignificantDigits: 3,
        //                                     maximumSignificantDigits: 3
        //                                 }
        //                             )}
        //                         </h1>
        //                         <p>Per Message</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         )}
        //         <div className="flex justify-between w-full flex-col md:flex-row gap-12 items-center">
        //             <div>
        //                 <h1 className="text-3xl font-semibold">Token</h1>
        //                 <Image src={icons.token} alt="" className="w-12 h-10" />
        //                 <div className="mt-5">
        //                     <p>Easily and seamlessly verify your customers identity via our verification tools.</p>
        //                     <div className="mt-10 flex flex-col gap-3">
        //                         {data.token.map((item, index) => (
        //                             <div key={index} className="flex gap-3">
        //                                 <CheckCircle size={20} className="text-primary" />
        //                                 <p>{item}</p>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="bg-white p-3 w-[250px] h-[150px] rounded">
        //                 <div className="flex items-center gap-3">
        //                     <h1>Start as low as: </h1>
        //                     <img src={flag()} alt="" />
        //                 </div>
        //                 <div className="mt-5 flex flex-col gap-3">
        //                     <h1 className="text-2xl text-primary font-semibold">
        //                         {tokenRate().toLocaleString(
        //                             selectedCurrency === "EURO" ? "de-DE" : selectedCurrency === "USD" ? "en-US" : "en-NG",
        //                             {
        //                                 style: "currency", currency: selectedCurrency === "EURO" ? "EUR" : selectedCurrency, minimumSignificantDigits: 3,
        //                                 maximumSignificantDigits: 3
        //                             }
        //                         )}
        //                     </h1>
        //                     <p>Per Verification</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <>
            <div className="md:pb-64 bg-white">
                <div className="bg-[#ffffff] text-center py-8 px-6 md:pt-52 pt-8">
                    <h2 className="text-[22px] md:text-5xl font-bold font-poltawski md:mt-42 mt-20">
                        Transparent <span className="text-[#F2994A]">Pricing</span> for
                        every business size
                    </h2>
                    <p className="text-[12px] md:text-[22px] md:mt-12 mt-8 text-center mx-auto">
                        No hidden Fee. Scale from 100 to 100M+ Messages.
                    </p>

                    <div className="flex justify-center gap-3 mt-6 md:pb-0 md:mt-32 flex-wrap sm:flex-nowrap">
                        <Button
                            className="bg-[#28656A] text-white px-5 md:px-8 py-2 rounded-lg font-bold transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#28656A] hover:text-white active:bg-[#28656A] active:text-white w-[160px] sm:w-auto">
                            Get started for free
                        </Button>

                        <Button variant="outline"  onClick={() => setIsDemoOpen(true)}
                                className="border-2 border-[#28656A] bg-white text-black font-bold px-5 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 w-[160px] sm:w-auto">
                            Request a Demo
                        </Button>
                    </div>

                </div>

                <div className="md:mt-20 bg-[#E2F5EE] min-h-screen py-16 px-4 flex flex-col items-center">
                    <div className="flex justify-center gap-3 mb-12">
                        {/* Country Dropdown */}
                        <div className="relative w-[140px] sm:w-40">
                            <select
                                className="appearance-none w-full border border-[#28656A] font-bold px-4 py-2 pr-8 rounded-md text-black bg-[#E2F5EE]">
                                <option>Nigeria</option>
                                <option>Ghana</option>
                                <option>Kenya</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-black">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3"/>
                                </svg>
                            </div>
                        </div>

                        {/* Currency Dropdown */}
                        <div className="relative w-[180px] sm:w-52">
                            <select
                                className="appearance-none w-full border border-[#28656A] font-bold px-4 py-2 pr-8 rounded-md text-black bg-[#E2F5EE]">
                                <option>Nigeria - (NGN)</option>
                                <option>Ghana - (GHS)</option>
                                <option>Kenya - (KES)</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-black">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3"/>
                                </svg>
                            </div>
                        </div>
                    </div>


                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl w-full ">
                        {/* SMS Card */}
                        <div className="border border-[#13695E] rounded-lg p-6">
                            <Image src={email} alt="SMS Icon" className="w-12 h-12 mb-4"/>
                            <h3 className="text-xl font-semibold text-[#0F2E2C]">SMS</h3>
                            <p className="text-gray-600 text-sm mt-2">Price as low as:</p>
                            <p className="text-gray-600 text-sm mt-2">Transactional Route</p>
                            <p className="font-bold text-[#0F2E2C] text-lg mt-2">₦2.5334</p>
                            <p className="text-gray-600 text-sm mt-2">Marketing Route</p>
                            <p className="font-bold text-[#0F2E2C] text-lg mt-2">₦2.95</p>
                        </div>

                        {/* Voice Card */}
                        <div className="border border-[#13695E] rounded-lg p-6">
                            <Image src={voice} alt="SMS Icon" className="w-12 h-12 mb-4"/>
                            <h3 className="text-xl font-semibold text-[#0F2E2C]">Voice</h3>
                            <p className="text-gray-600 text-sm mt-2">Price as low as:</p>
                            <p className="font-bold text-[#0F2E2C] text-lg mt-2">₦2.5334</p>
                        </div>

                        {/* Email Card */}
                        <div className="border border-[#13695E] rounded-lg p-6">
                            <Image src={doubleEmail} alt="SMS Icon" className="w-12 h-12 mb-4"/>
                            <h3 className="text-xl font-semibold text-[#0F2E2C]">Email</h3>
                            <p className="text-gray-600 text-sm mt-2">Price as low as:</p>
                            <p className="font-bold text-[#0F2E2C] text-lg mt-2">₦2.5334</p>
                        </div>

                        {/* WhatsApp Card */}
                        <div className="border border-[#13695E] rounded-lg p-6">
                            <Image src={whatsapp} alt="SMS Icon" className="w-12 h-12 mb-4"/>
                            <h3 className="text-xl font-semibold text-[#0F2E2C]">WhatsApp</h3>
                            <p className="text-gray-600 text-sm mt-2">Price as low as:</p>
                            <p className="font-bold text-[#0F2E2C] text-lg mt-2">₦2.5334</p>
                        </div>
                    </div>
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


        </>
    );
};

export default Pricong;
