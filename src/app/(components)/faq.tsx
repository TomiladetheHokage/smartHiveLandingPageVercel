import Image from "next/image";
import TitleHeading from "../../components/title-heading";
import { question } from "../../../public/assets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";

const data = [
  {
    title: "Can I personalize the messages sent through the platform?",
    content:
      "Yes, our platform allows you to personalize messages by including variables such as the recipient’s name or the other relevant information.",
  },
  {
    title: "Is it possible to schedule messages for future delivery?",
    content:
      " Absolutely! You can schedule messages to be sent at a specific date and time, making it convenient for you to plan your communication ahead of time",
  },
  {
    title: "Are there any restrictions on the the length of the messages?",
    content:
      " Our platform support both short and long messages, with character limits depending on the type of message being sent. However, we recommend keeping messages concise for better readability.",
  },
  {
    title: "Can I track the delivery status of my messages?",
    content:
      " Yes, you can track the delivery status of each message sent through our platform. You’ll receive real-time updates on whether the messages has been successfully delivered or if there were any issues encountered",
  },
  {
    title: "How secure is the platform in terms of protecting customer’s data?",
    content:
      "We take security seriously and have implemented robust measures to protect customer data. Our platform complies with industry standards and regulations to ensure the confidentiality and integrity of your information.",
  },
  {
    title:
      "Can I integrate the SMS services with my existing software or CRM system?",
    content:
      "Yes, we offer API’s and integrations that allows seamless integrations with your existing software or CRM systems. This enables you to automate processes and enhance the efficiency of your communication workflows.",
  },
  {
    title: "What kind of customer support do you offer?",
    content:
      "We provide comprehensive customer support via various channels, including email, phone and live chat. Our team is dedicated to assisting you with any questions or issues you may encounter while using our platform.",
  },
];

const FAQ = () => {
  return (
      <div className="mt-[0px] pt-20  lg:px-20 md:px-10 p-5 md:py-10 text-left flex flex-col items-start bg-[#f8f8f8] pb-24 md:pb-32">
        <h1 className="text-left text-2xl md:text-4xl font-bold font-poltawski">Frequently Asked Questions</h1>
        <div className="w-full mt-8 flex flex-col items-start gap-10">

          <div className="md:w-[90%] lg:w-[95%] w-full text-left text-semibold flex flex-col items-start space-y-8">
            <Accordion type="single" collapsible className="w-full">
              {data.map((item, index) => (
                  <AccordionItem value={index.toString()} key={index}>
                    <AccordionTrigger
                        className="w-full text-left font-bold border-b border-black [&>svg]:rotate-0 [&>svg]:text-[#28656A] [&[data-state=open]>svg]:rotate-180"
                    >
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-left text-semibold mt-2">{item.content}</AccordionContent>
                  </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
  );
};


export default FAQ;
