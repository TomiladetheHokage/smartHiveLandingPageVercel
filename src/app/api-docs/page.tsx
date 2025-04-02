"use client"

import TitleHeading from "@/components/title-heading";
import icons from "../../../public/assets";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const data = [
  {
    image: icons.bulksms,
    title: "Bulk SMS",
    description:
      "Send mass text messages effortlessly to multiple recipients in convenient batches.",
  },
  {
    image: icons.voiceSms,
    title: "Voice SMS",
    description:
      "Deliver personalized voice-messaging messages to engage your audience effectively and seamlessly.",
  },
  {
    image: icons.apiOtp,
    title: "OTP",
    description:
      "Enhance security with one-time passwords for user authentication and transaction verification.",
  },
  {
    image: icons.apisms,
    title: "SMS",
    description:
      "Send text messages programmatically for efficient communication.",
  },
  {
    image: icons.apiUssd,
    title: "USSD",
    description:
      "Create interactive mobile applications for real-time user engagement.",
  },
];

const ApiHome = () => {
  const router = useRouter();
  return (
    <div>
      <TitleHeading title="Developers Portal" description="" />
      <div className="mt-5 flex flex-col gap-5">
        <p>
          Welcome to <span className="font-semibold">SmarhiveSMS</span>, your
          go-to destination for all you communication needs. Whether you are
          looking to send text messages, voice SMS, initiate USSD sessions, or
          implement secure OTP authentication, we’ve got you covered with our
          powerful API services.
        </p>
        <p>
          Our platform offers seamless integration, robust security features,
          and reliable delivery to ensure that communication efforts are always
          effective and efficient. With our easy-to-use API documentation and
          dedicated support team, getting started has never been easier.
        </p>
        <p>
          This documentation provides details on how to integrate SMS, Voice
          SMS, USSD, and OTP services into your website using our API. These
          services allow you to send text messages, voice messages, initiate
          USSD sessions and generate OTPs (One-Time Passwords) for user
          authentication and communication purposes.
        </p>
        <p>
          Explore our services, integrate with ease, and unlock the full
          potential of communication with{" "}
          <span className="font-semibold">SmarthiveSMS.</span>
        </p>
      </div>
      <div className="mt-16 flex flex-wrap w-full justify-center gap-5 p-10">
        {data.map((item, index) => (
          <div
            className="w-[300px] flex flex-col gap-5 justify-center items-center"
            key={index}
          >
            <Image src={item.image} alt={item.title} />
            <div className="text-center">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mb-10">
        <Button
          onClick={() => {
            router.push("/api-docs/introduction");
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default ApiHome;
