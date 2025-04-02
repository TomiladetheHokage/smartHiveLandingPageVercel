"use client";


import TitleHeading from "@/components/title-heading";
import Image from "next/image";
import {
  Communication,
  Mission,
  Vision,
  CoreValue,
  CTO,
  CMO,
} from "../../../public/assets";

import stat1 from "../../../public/assets/statistics (2).png"
import stat2 from "../../../public/assets/statistics (1).png"
import stat3 from "../../../public/assets/statistics (3).png"


import circle from "../../../public/assets/Union.png"
import leftCircle from "../../../public/assets/Union2.png"

import cto from "../../../public/assets/Rectangle 6667218.png"
import peace from "../../../public/assets/Poria.png"

import orangePlanet from "../../../public/assets/orange planet with ring (1).png"
import carbonImg from "../../../public/assets/carbon_ibm-cloud-pak-integration.png"
import designSecurityImg from "../../../public/assets/tdesign_secured-filled.png"
import paintBrush from "../../../public/assets/dashicons_admin-customizer.png"
import note from "../../../public/assets/vscode-icons_file-type-nsri-integrity.png"
import adobeCreativeCloud from "../../../public/assets/file-icons_adobe-creativecloud.png"
import peopleImg from "../../../public/assets/people.png"
import {useEffect, useState} from "react";

const coreValues = [
    {
        image: paintBrush,
        title: "Efficiency",
        description: "Fast, seamless, and scalable messaging solutions for instant communication.",
    },
    {
        image: designSecurityImg,
        title: "Reliability",
        description: "High delivery rates, minimal downtime and secure messaging you can trust.",
    },
    {
        image: carbonImg,
        title: "Simplicity",
        description: "User-friendly platform designed for hassle-free bulk messaging and automation.",
    },
    {
        image: note,
        title: "Integrity",
        description: "Transparent, secure, and compliant services with no hidden costs.",
    },
    {
        image: peopleImg,
        title: "Customer Centric",
        description: "Personalized support and innovative solutions tailored to your needs.",
    },
    {
        image: adobeCreativeCloud,
        title: "Innovative",
        description: "Continuously evolving messaging technology  to keep your business ahead.",
    },
];


const teamData = [
  {
    image: cto,
    name: "Ayomide Otubela",
    position: "Co-founder & CTO",
    description:
        "Ex-Interswitch engineer focused on scalable APIs.",
  },
  {
    image: peace,
    name: "Peace Irabor",
    position: "Co-founder & CMO",
    description:
        "\n" +
        "Growth strategist driving Pan-African Partnerships.",
  },
];



const AboutPage = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Treat screens < 768px as mobile
        };

        handleResize(); // Run once to set initial value
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div>
            {/* Header Section */}
            <div className="relative bg-[#E2F5EE] text-center w-screen  py-10">
                {/* Heading Section */}
                <h2 className="text-[22px] md:text-3xl font-bold text-primary font-poltawski mt-20 md:mt-40 md:mb-10">
                    OUR <span className="text-[#F4A261]">REASON</span> FOR EXISTENCE
                </h2>
                <p className="text-[14px] md:text-[17px] text-gray-600 mt-2 max-w-[1065px] mx-auto mb-20">
                    At SmarthiveSMS, we exist to break down communication barriers. We were born in Lagos, Nigeria, and
                    built
                    for Africa. We empower businesses to connect with customers through reliable, affordable SMS,
                    WhatsApp,
                    and Email solutions.
                </p>
            </div>

            {/*Background Images*/}
            <div className="absolute top-[15%] md:top-[20%] left-0 w-[30px] h-[20px] md:w-[113px] md:h-[98px]">
                <Image src={leftCircle} alt="Circle Left"/>
            </div>
            <div className="absolute top-[30%] md:top-[40%] mb-40 right-0 w-[44px] h-[38px] md:w-auto md:h-[98px]">
                <Image src={circle} alt="Circle Right"/>
            </div>

            {/* STATISTICS */}
            <div className="bg-[#28656A] w-screen">
                <div className="grid grid-cols-1 md:grid-cols-3 text-center w-full max-w-screen-xl mx-auto py-10">
                    <div className="flex justify-center items-center">
                        <Image src={stat2} alt="Years in Business" width={320} height={150}
                               className="w-[200px] md:w-[320px]" // Ensures proper centering
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={stat3} alt="African Countries Served" width={320} height={150}
                               className="w-[200px] md:w-[320px]"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={stat1} alt="Platform Uptime" width={320} height={150}
                               className="w-[200px] md:w-[320px]"
                        />
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-white w-screen py-12">
                {/* Centered Title */}
                <h2 className="text-2xl md:text-4xl font-bold text-center font-poltawski">
                    Powering Africa’s Digital Conversation
                </h2>

                <div className="max-w-7xl w-full px-6 md:mt-20 mt-10 md:ml-20 md:pl-16 lg:pl-52">
                    <h3 className="text-lg md:text-2xl font-bold">About Us</h3>
                    <p className="text-[15px] text-gray-600 leading-7 mt-2 ">
                        <span className="font-bold">SmarthiveSMS</span> is a leading provider of Bulk SMS and WhatsApp
                        marketing solutions, enabling
                        marketing agencies
                        to execute high-impact communication campaigns for their clients.
                    </p>
                    <p className="text-[15px] text-gray-600 leading-7 mt-3 ">
                        We understand the challenges marketing agencies face, juggling multiple campaigns, managing
                        diverse
                        communication channels, and creating personalized messaging that drives engagement.
                    </p>
                    <p className="text-[15px] text-gray-600 leading-7 mt-3">
                        Our platform simplifies the process, offering a cost-effective, time-saving, and secure solution
                        for mass
                        communication that ensures high delivery rates and maximized audience engagement for your
                        clients.
                    </p>
                </div>

            </div>


            {/* Mission & Vision Section */}
            <div className="flex flex-col items-center mt-0 w-full px-6 md:px-24 bg-white md:pt-20 pb-12">
                {/* Mission Section */}
                <div
                    className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-7xl gap-x-32 md:gap-x-96 -pt-20 md:-mt-0">
                    {/* Text */}
                    <div className="md:w-1/2 text-left sm:text-center">
                        <h3 className="text-2xl font-semibold sm:text-left">Our Mission</h3>
                        <p className="text-[15px] mt-2 sm:text-left pb-12">
                            To empower marketing agencies with the tools they need to connect their
                            clients with their customers seamlessly through reliable, efficient, and secure SMS and WhatsApp messaging.
                        </p>
                    </div>

                    {/* Image (Centered in Mobile) */}
                    <div className="relative -top-12 flex justify-center w-full md:w-auto">
                        <Image src={Mission} alt="Mission" className="w-[300px] md:w-[400px] mx-auto"/>
                    </div>
                </div>

                {/* Vision Section */}
                <div
                    className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between w-full max-w-7xl mt-8 gap-x-32 md:gap-x-72">
                    {/* Text */}
                    <div className="md:w-1/2 text-left sm:text-center">
                        <h3 className="text-2xl font-semibold sm:text-left">Our Vision</h3>
                        <p className="text-[15px] mt-2 sm:text-left pb-12">
                            To become the go-to global communicating platform for marketing agencies,
                            revolutionizing client campaign success and enhancing customer engagement through
                            innovative messaging solutions.
                        </p>
                    </div>

                    {/* Image (Centered in Mobile) */}
                    <div className="flex justify-center w-full md:w-auto">
                        <Image src={Vision} alt="Vision" className="w-[300px] md:w-[400px] mx-auto"/>
                    </div>
                </div>
            </div>

            {/*/!* Mission & Vision Section *!/*/}
            {/*<div className="flex flex-col items-center mt-0 w-full px-6 bg-white md:pt-20 pb-12">*/}
            {/*    /!* Mission Section *!/*/}
            {/*    <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-7xl gap-x-32 md:gap-x-72 gap-y-6">*/}
            {/*        /!* Image (Appears First on Mobile) *!/*/}
            {/*        <div className="flex justify-center w-full md:w-auto order-first md:order-none">*/}
            {/*            <Image src={Mission} alt="Mission" className="w-[300px] md:w-[400px] mx-auto" />*/}
            {/*        </div>*/}

            {/*        /!* Text *!/*/}
            {/*        <div className="md:w-1/2 text-left sm:text-center">*/}
            {/*            <h3 className="text-2xl font-semibold sm:text-left">Our Mission</h3>*/}
            {/*            <p className="text-[15px] mt-2 sm:text-left">*/}
            {/*                To empower businesses with seamless and efficient communication solutions, ensuring reliable messaging*/}
            {/*                services across Africa.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Vision Section *!/*/}
            {/*    <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between w-full max-w-7xl mt-8 gap-x-32 md:gap-x-72 gap-y-6">*/}
            {/*        /!* Image (Appears First on Mobile) *!/*/}
            {/*        <div className="flex justify-center w-full md:w-auto order-first md:order-none">*/}
            {/*            <Image src={Vision} alt="Vision" className="w-[300px] md:w-[400px] mx-auto" />*/}
            {/*        </div>*/}

            {/*        /!* Text *!/*/}
            {/*        <div className="md:w-1/2 text-left sm:text-center">*/}
            {/*            <h3 className="text-2xl font-semibold sm:text-left">Our Vision</h3>*/}
            {/*            <p className="text-[15px] mt-2 sm:text-left">*/}
            {/*                To revolutionize messaging solutions, making communication faster, more efficient, and accessible to all businesses.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/* Core Values Section */}
            <div className="py-16 bg-white">
                <div className="flex items-center justify-center gap-2">
                    <h2 className="text-2xl md:text-4xl font-bold font-poltawski">
                        Our <span className="text-[#F4A261]">Core Values</span>
                    </h2>
                    <Image src={orangePlanet} alt="Decorative" className="md:mb-4"/>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 mt-10 max-w-[1400px] mx-auto px-6">
                    {coreValues
                        .slice(0, isMobile ? 3 : coreValues.length) // ✅ Show all values on desktop, 3 on mobile
                        .map((value, index) => (
                            <div
                                key={index}
                                className="flex items-center text-left bg-white p-6 w-full max-w-[320px] md:max-w-none md:w-auto"
                            >
                                {/* Left Side: Image */}
                                <div className="flex-shrink-0">
                                    <Image
                                        src={value.image}
                                        alt={value.title}
                                        width={30}
                                        height={34}
                                        className="object-contain w-[30px] h-[34px]"
                                    />
                                </div>

                                {/* Right Side: Text Content */}
                                <div className="ml-4 flex-1">
                                    <h3 className="text-xl font-semibold flex items-center">
                                        {value.title}
                                    </h3>
                                    <p className="text-[14px] md:text-[20px] font-light mt-2 break-words">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>

            </div>


            {/* Meet the Team Section */}
            <section className="mx-auto px-6 py-10 bg-white">
                <h2 className="text-3xl md:text-4xl font-semibold text-center">Meet the Team</h2>
                <p className="text-center text-gray-600 mt-2">Meet the Visionaries Behind SmarthiveSMS</p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
                    {teamData.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-full max-w-[350px]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={350}
                                    height={400}
                                    className="rounded-lg object-cover w-full h-auto"
                                />
                            </div>

                            <div
                                className="bg-[#28656A] text-white p-4 rounded-lg w-full max-w-[350px] -mt-6 relative z-10 shadow-lg">
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-sm">{member.position}</p>
                                <p className="text-sm mt-8">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default AboutPage;
