import Image from "next/image";
import { cost, flex, simple } from "../../../public/assets";
import TitleHeading from "../../components/title-heading";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const data = [
    {
        title: "Cost Effectiveness",
        description:
            "Choose plans that are tailored to your needs & adapt effortlessly as your requirements evolve.",
        image: cost,
    },
    {
        title: "Flexibility",
        description:
            "Competitive pricing which ensures affordability without compromising service quality.",
        image: flex,
    },
    {
        title: "Simplicity",
        description:
            "Transparent pricing with no hidden fees, which ensures clarity and ease budgeting.",
        image: simple,
    },
];

const Pricing = () => {
    return (
        <div className="mt-0 md:mt-[0] lg:px-20 md:px-10 p-5 md:py-32 text-center bg-[#f8f8f8] mb:0 ">
            {/* Title Section */}
            <TitleHeading
                title="Pricing"
                description="Pay only for what you use with straightforward billing.
                Our pricing model is straightforward and transparent. Credit card is not required also there is no hidden fees or complicated packages."
            />

            {/* Pricing Cards */}
            <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl border-l-4 p-6 flex flex-col items-center text-center
            md:w-[350px] w-full mx-auto" // Sets a fixed max width for mobile and centers it
                        style={{ borderColor: "rgba(242, 153, 74, 1)" }} // Orange left border
                    >
                        {/* Icon & Title */}
                        <div className="flex items-center gap-3 w-full">
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="w-[40px] h-[40px]"
                            />
                            <h1 className="text-lg font-semibold">{item.title}</h1>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Button Section */}
            <div className="mt-10 flex justify-center">
                <Link href="https://app.smarthivesms.com/signup">
                    <Button className="bg-[#28656A] hover:bg-[#28656A] px-6 py-3 text-white rounded-full text-sm
                    transition-transform duration-300 ease-in-out hover:scale-105">
                        Learn More
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Pricing;
