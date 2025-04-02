import Image from "next/image";
import { sms, voice, whatsapp } from "../../../public/assets";
import TitleHeading from "../../components/title-heading";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const data = [
  {
    title: "SMS",
    description:
      "Send swift message to your customers on all network provider using our API.",
    icon: sms,
    link: "/sms",
  },
  {
    title: "Voice",
    description:
      "Deliver Voice OTPs or pre-recorded automated messages to your customers using our voice-messaging API.",
    icon: voice,
    link: "/voice-messaging",
  },
  {
    title: "WhatsApp OTP",
    description:
      "Delivers secure, instant one-time passwords directly to your customers via WhatsApp for seamless Authentication.",
    icon: whatsapp,
    link: "/otp",
  },
];

const ProductSection = () => {
  return (
    <div className="lg:p-20 md:px-10 p-5">
      <TitleHeading
        title="Products"
        description="At Smarthive SMS, we provide a comprehensive suites of communication services tailored to the various needs of our customers."
      />
      <div className="flex w-full justify-center items-center flex-col gap-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 w-full">
          {data.map((item, index) => (
            <div
              className="p-5 bg-primary w-auto h-[270px] rounded flex items-center flex-col justify-center"
              key={index}
            >
              <Image src={item.icon} alt={item.title} width={50} />
              <h1 className="text-xl font-bold text-white mt-5">
                {item.title}
              </h1>
              <p className="text-white mt-5 text-center">{item.description}</p>
              <Button variant={"link"} className="text-white">
                <Link href={item.link} className="text-sm">
                  Read More
                </Link>
                <ArrowRight className="ml-1" size={16} />
              </Button>
            </div>
          ))}
        </div>
        <Button className="w-28">
          <Link href={"https://smarthivesms.com/SignUp"}>Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductSection;
