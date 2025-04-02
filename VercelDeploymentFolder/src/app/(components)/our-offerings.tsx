import messageBubble from "../../../public/assets/bubble with a new message.png"
import manWithSpeaker from "../../../public/assets/young man with loudspeaker.png"
import whatsapplogo from "../../../public/assets/whatsapp logo.png"

import Image from "next/image";
import gloImage from "../../../public/assets/globacom-limited-icon-1024x1024-upx9lebq 1.png";

export default function OurOfferings() {

    const offerings = [
        {
            image: messageBubble,
            title: "SMS",
            description:
                "Reach your customers instantly with our reliable bulk SMS service. Send thousands of messages at once and watch your engagement soar.",
            link: "Explore SMS API",
        },
        {
            image: manWithSpeaker,
            title: "Voice & USSD",
            description:
                "Unlock seamless communication through USSD technology, providing instant connectivity for customers with no internet needed.",
            link: "Explore Voice API",
        },
        {
            image: whatsapplogo,
            title: "WhatsApp Businesses",
            description:
                "Engage customers directly on the world’s most popular messaging platform. Personalize your communication and enhance customer relationships.",
            link: "Try WhatsApp OTP",
        },
        {
            image: messageBubble,
            title: "Email Messaging",
            description:
                "Reach your customers instantly with our reliable bulk SMS service. Send thousands of messages at once and watch your engagement soar.",
            link: "Send email as low as #0.60",
        },
    ];

    return (
        <div className="py-16 px-6 text-gray-800 bg-[#f8f8f8]"> {/*bg-white*/}
            <h2 className="md:text-5xl text-2xl font-bold text-center text-gray-900 md:mt-10 md:mb-6 font-poltawski">Our Offerings</h2>
            <p className="text-center text-gray-600 mt-2 mb-12 text-base max-w-2xl mx-auto ">
                We provide scalable, efficient solutions tailored to meet your communication needs.
                Choose the right tool to engage your audience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-52 md:mt-20 max-w-[1500px] mx-auto md:pl-6">
                {offerings.map((offering, index) => (
                    <div key={index} className="w-full md:w-[600px] min-h-[240px] md:min-h-[200px] bg-[#28656A] text-white md:p-16 rounded-xl shadow-md flex flex-col items-center">
                        <Image src={offering.image} alt={offering.title} width={50} height={48} className="w-12 md:w-[50px] md:h-[60px] h-10 mb-4 mt-4" />
                        <h3 className="md:text-xl text-lg font-semibold">{offering.title}</h3>
                        <p className="md:text-lg text-sm font-light text-center mt-2">{offering.description}</p>
                        <a href="#" className="mt-4 text-[#E2F5EE] font-semibold flex items-center gap-1">
                            {offering.link} <span>&rarr;</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
