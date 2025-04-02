"use client";

import TitleHeading from "@/components/title-heading";
import { Button } from "@/components/ui/button";
import { Card } from "../components/card";
import { account, payment, purchase, transaction } from "../../../../public/assets";

const data = [
  {
    Image: transaction,
    title: "Transaction",
    description:
      "Allow customers to perform transactions, such as fund transfers, airtime top-ups, and bill payments conveniently through USSD Menus, eliminating the need for physical bank visits or online banking.",
  },
  {
    Image: account,
    title: "Account Balance",
    description:
      "Enable customers to check their account balances instantly via USSD, providing them with real-time access to their financial information wherever they are.",
  },
  {
    Image: payment,
    title: "Payment",
    description:
      "Facilitate secure and hassle-free payment for goods and services through USSD, empowering customers to make purchases with ease and convenience.",
  },
  {
    Image: purchase,
    title: "Purchase",
    description:
      "Offer customers the ability to purchase products or services directly through USSD menus, simplifying the purchasing process and enhancing the customers experience.",
  },
];

const USSDPage = () => {
  return (
    <div className="lg:p-20 md:px-10 p-5 mt-24 md:mt-10">
      <TitleHeading title="USSD Service by SmarthiveSMS" description="" />
      <div className="mt-8">
        <h1 className="text-2xl font-medium">
          Empower Your Customers with Seamless Transactional Services Via USSD
        </h1>
        <p className="text-[14px] text-gray-800 mt-2">
          Unlock the power of USSD technology with Smarthive SMS! Our USSD
          services provides a convenient and accessible way for your customers
          to perform transactions, chec account balances, make payments, and
          complete purchases - all through their mobile phones, without the need
          for internet connectivity.
        </p>
      </div>
      <div className="mt-12">
        <TitleHeading title="Use Cases" description="" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.map((item, index) => (
            <Card
              key={index}
              description={item.description}
              image={item.Image}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h1 className="font-semibold text-2xl">
          Why Choose USSD Services by Smarthive SMS ?
        </h1>
        <ul className="leading-9 list-disc mt-5 flex flex-col gap-5">
          <li>
            <p className="text-base">
              <span className="font-semibold">Accessibility: </span>
              <span>
                Reach customers across all mobile devices, including feature
                phones, with USSD technology. No smartphone or internet
                connection required, making it accessible to all.
              </span>
            </p>
          </li>
          <li>
            <p className="text-base">
              <span className="font-semibold">Convenience: </span>
              <span>
                Provide a seamless and user-friendly experience for your
                customers, allowing them to perform transaction and access
                services quickly and easily through USSD menus.
              </span>
            </p>
          </li>
          <li>
            <p className="text-base">
              <span className="font-semibold">Security: </span>
              <span>
                Ensure the security of transactions and sensitive information
                with built-in encryption and authentication protocols, keeping
                your customer’s data safe and secure.
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

export default USSDPage;
