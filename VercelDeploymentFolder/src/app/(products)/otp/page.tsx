"use client";

import { Button } from "@/components/ui/button";
import { Card } from "../../../app/(products)/components/card";
import TitleHeading from "@/components/title-heading";
import "../style.css";
import { auth, onboarding, profile, recovery, Tverification } from "../../../../public/assets";


const otpData = [
    {
        image: auth,
        title: "User Authentication & Secure Login",
        description:
            "Ensure robust security for user accounts by sending OTPs via WhatsApp for login verifications.",
    },
    {
        image: profile,
        title: "Profile Updates.",
        description:
            "Securely authenticate changes to user profiles and sensitive information using WhatsApp OTPs.",
    },
    {
        image: Tverification,
        title: "Transaction Verification",
        description:
            "Verify financial transactions, fund transfers and online purchases through WhatsApp OTPs to prevent fraud and unauthorized access.",
    },
    {
        image: onboarding,
        title: "User Onboarding",
        description:
            "Simplify the registration process for new users by verifying their phone numbers via OTPs.",
    },
    {
        image: recovery,
        title: "Account Recovery & Password Reset",
        description:
            "Facilitate quick and secure password recovery processes through WhatsApp OTPs. Assist users in regaining access to their accounts swiftly in case of lockouts.",
    },
];


const WhatsappOtp = () => {
    return (
        <div className="lg:p-20 md:px-10 p-5 mt-24 md:mt-10">
            <TitleHeading
                title="WhatsApp OTP Services by SmarthiveSMS"
                description=""
            />
            <div className="mt-8">
                <h1 className="text-2xl font-medium">
                    Revolutionize Customers Engagement with Smarthive SMS WhatsApp
                    Messaging.
                </h1>
                <p className="text-[14px] text-gray-800 mt-2">
                    Seamlessly integrate with WhatsApp to connect directly with your
                    audience, leveraging the platform they trust. Whether you’re looing to
                    send notifications, conduct surveys, or provide customer support , our
                    service ensures reliability and ease of use. With robust features
                    tailored for businesses of all sizes. You can personalize messages,
                    track delivery and enhance customers interaction like never before.
                </p>
            </div>
            <div className="mt-12">
                <TitleHeading title="Use Cases" description="" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                    {otpData.map((item, index) => (
                        <div
                            key={index}
                        >
                            <Card
                                description={item.description}
                                image={item.image}
                                title={item.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20">
                <h1 className="font-semibold text-2xl">
                    Why Choose WhatsApp Messaging Services by Smarthive SMS ?
                </h1>
                <ul className="leading-9 list-disc mt-5 flex flex-col gap-5">
                    <li>
                        <p className="text-base">
                            <span className="font-semibold">Direct Engagement: </span>
                            <span>
                                Connect directly with customers on WhatsApp, leveraging a
                                platform they already trust and use daily. This leads to higher
                                open rate and quicker responses compared to traditional
                                communication channels.
                            </span>
                        </p>
                    </li>
                    <li>
                        <p className="text-base">
                            <span className="font-semibold">Efficiency: </span>
                            <span>
                                Streamline communication processes with automated messages for
                                notification, customers support, and surveys. Save time and
                                resources by managing interactions efficiently through a single,
                                user-friendly interface.
                            </span>
                        </p>
                    </li>
                    <li>
                        <p className="text-base">
                            <span className="font-semibold">
                                Enhanced Customer Experience:{" "}
                            </span>
                            <span>
                                Provide personalized messages and timely updates, improving
                                overall customers satisfaction. With features like delivery
                                tracking and message customization, businesses can deliver a
                                seamless and responsive customer experience, ultimately
                                fostering loyalty and retention.
                            </span>
                        </p>
                    </li>
                </ul>
                <div className="w-full justify-center flex mt-10">
                    <Button>Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default WhatsappOtp;
