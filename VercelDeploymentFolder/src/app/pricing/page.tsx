"use client";

import Image from "next/image";
import icons, { pricingImage } from "../../../public/assets";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

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
    return (
        <div className="lg:px-20 md:px-10 p-5 md:py-10 mt-14 md:mt-0">
            <div className="w-full flex items-center justify-center">
                <div className="md:h-[250px] h-[180px] lg:w-[50%] md:w-[65%] flex items-center justify-center relative">
                    <Image src={pricingImage} alt="" className="absolute left-0 w-[6rem] md:w-[9rem] -z-10" />
                    <h1 className="md:text-2xl text-lg w-full text-center font-semibold">
                        Streamline your subscription today, discover simplicity in pricing.{" "}
                    </h1>
                    <Image src={pricingImage} alt="" className="absolute right-0 bottom-0 w-[5rem] md:w-[8rem]" />
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-medium">Select your customers location</h1>
                    <div
                        className="border border-primary p-2 flex items-center gap-2 mt-3 w-fit cursor-pointer relative bg-white rounded-sm"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <img src={flag()} alt="" />
                        <div className="flex items-center">
                            <span className="text-sm">{selectedCurrency}</span>
                            <IoMdArrowDropdown size={20} />
                        </div>
                        {isActive && (
                            <div className="absolute w-[200px] md:w-[250px] border h-auto top-[100%] right-0 rounded border-primary bg-white">
                                <div
                                    className={
                                        cn("w-full h-[40px] rounded grid p-1", selectedCountry === "Nigeria" ? "grid-cols-3" : "grid-cols-2")
                                    }
                                >
                                    {currencies.map((currency) => {
                                        if (selectedCountry !== "Nigeria" && currency === "NGN") return null
                                        return (
                                            <div
                                                className={cn("flex items-center justify-center rounded", currency === selectedCurrency ? "bg-primary" : "")}
                                                key={currency}
                                                onClick={() => setSelectedCurrency(currency)}
                                            >
                                                <span
                                                    className={cn("text-sm font-semibold", currency === selectedCurrency ? "text-white" : "text-primary")}
                                                >
                                                    {currency}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="bg-white p-2 rounded">
                                    {countries.map((country) => (
                                        <div
                                            className={cn("flex items-center justify-between p-2 rounded", country.name === selectedCountry ? "bg-primary text-white" : "")}
                                            key={country.name}
                                            onClick={() => {
                                                setSelectedCountry(country.name)
                                                if (country.name !== "Nigeria") setSelectedCurrency("USD")
                                            }}
                                        >
                                            <span>{country.name}</span>
                                            <img src={country.flag} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="md:mt-40 mt-20 flex flex-col gap-14">
                {selectedCountry === "Nigeria" && (
                    <div className="flex justify-between w-full flex-col md:flex-row gap-12 items-center">
                        <div>
                            <h1 className="text-3xl font-semibold">SMS</h1>
                            <Image src={icons.sendMultipleSms} alt="" className="w-12 h-10" />
                            <div className="mt-5">
                                <p>Send quick and bulk SMS to your customers using our SMS services</p>
                                <div className="mt-10 flex flex-col gap-3">
                                    {data.sms.map((item, index) => (
                                        <div key={index} className="flex gap-3">
                                            <CheckCircle size={20} className="text-primary" />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-3 w-[250px] h-[150px] rounded">
                            <div className="flex items-center gap-3">
                                <h1>Start as low as: </h1>
                                <img src={flag()} alt="" />
                            </div>
                            <div className="mt-5 flex flex-col gap-3">
                                <h1 className="text-2xl text-primary font-semibold">
                                    {smsRate().toLocaleString(
                                        selectedCurrency === "EURO" ? "de-DE" : selectedCurrency === "USD" ? "en-US" : "en-NG",
                                        {
                                            style: "currency", currency: selectedCurrency === "EURO" ? "EUR" : selectedCurrency, minimumSignificantDigits: 3,
                                            maximumSignificantDigits: 3
                                        }
                                    )}
                                </h1>
                                <p>Per Message</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex justify-between w-full flex-col md:flex-row gap-12 items-center">
                    <div>
                        <h1 className="text-3xl font-semibold">Token</h1>
                        <Image src={icons.token} alt="" className="w-12 h-10" />
                        <div className="mt-5">
                            <p>Easily and seamlessly verify your customers identity via our verification tools.</p>
                            <div className="mt-10 flex flex-col gap-3">
                                {data.token.map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <CheckCircle size={20} className="text-primary" />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-3 w-[250px] h-[150px] rounded">
                        <div className="flex items-center gap-3">
                            <h1>Start as low as: </h1>
                            <img src={flag()} alt="" />
                        </div>
                        <div className="mt-5 flex flex-col gap-3">
                            <h1 className="text-2xl text-primary font-semibold">
                                {tokenRate().toLocaleString(
                                    selectedCurrency === "EURO" ? "de-DE" : selectedCurrency === "USD" ? "en-US" : "en-NG",
                                    {
                                        style: "currency", currency: selectedCurrency === "EURO" ? "EUR" : selectedCurrency, minimumSignificantDigits: 3,
                                        maximumSignificantDigits: 3
                                    }
                                )}
                            </h1>
                            <p>Per Verification</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricong;
