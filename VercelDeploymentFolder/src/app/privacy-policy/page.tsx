"use client";


import Image from "next/image";
import privacyIcon from "../../../public/assets/secure document 2.png";
import privacyIcon2 from "../../../public/assets/secure document.png";


const PrivacyPolicy = () => {
    return (
        <div className="bg-[#ffffff] w-full px-8 py-12 md:px-20 lg:px-40">
            <h1 className="md:text-[40px] text-[24px] mt-12 md:mt-20 font-bold text-center font-poltawski">Privacy Policy</h1>

            {/* Mobile-only Image */}
            <div className="block md:hidden flex justify-center mt-4 w-full">
                <Image src={privacyIcon2} alt="Privacy Policy Icon" className="mx-auto ml-8 mt-4" />
            </div>


            <p className="text-[13px] md:text-[16px] text-gray-700 mt-8 md:mt-12 text-left w-[320px] md:w-[591px]">
                At Smarthive SMS, we take your privacy seriously and are committed to protecting the
                personal information you shared with us.  <br />
                This privacy Policy outlines how we collect, use and safeguard your data when use our SMS services.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ">
                <div>
                    {/* Information We Collect */}
                    <section>
                        <h2 className="md:text-2xl text-[20px] font-semibold text-left">Information We Collect:</h2>
                        <ul className="list-disc pl-5 text-gray-700 mt-2 md:w-[591px] text-[13px]">
                            <li>When you registered for our services, we may collect personal
                                information such as your name, email address, phone number, and company details.</li>
                            <li>We also collect data usage, including but not limited to
                                message logs, delivery status and interaction with our platform.</li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mt-6">
                        <h2 className="text-[20px] md:text-2xl font-semibold text-left">How We Use Your Information:</h2>
                        <ul className=" text-[13px] list-disc pl-5 text-gray-700 mt-2 md:w-[591px]">
                            <li>We use the information collected to provide and improve our SMS services,
                                customize your experience and communicate with you about updates and promotions.</li>
                            <li>Your data may also be used for analytics purposes to understand usage trends
                                and optimize our platform.</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section className="mt-6">
                        <h2 className="text-[20px] md:text-2xl font-semibold text-left">Data Security:</h2>
                        <ul className="text-[13px] list-disc pl-5 text-gray-700 mt-2 md:w-[591px]">
                            <li>We employ industry-standard security measures to protect your
                                personal information from unauthorized access, disclosure, alteration or destruction.
                            </li>
                            <li>Your data is stored securely on servers with restricted access and encrypted communication protocols.
                            </li>
                        </ul>
                    </section>

                    {/* Sharing Info */}
                    <section className="mt-6">
                        <h2 className="text-[20px] md:text-2xl font-semibold text-left">Sharing Information:</h2>
                        <ul className="text-[13px] list-disc pl-5 text-gray-700 mt-2 md:w-[591px]">
                            <li>We do not sell, rent, or lease your personal information to third parties.
                                Your data is only shared with trusted service providers who assist us in delivering our SMS services.
                            </li>
                        </ul>
                    </section>

                    {/* Your Rights */}
                    <section className="mt-6">
                        <h2 className="text-[20px] md:text-2xl font-semibold text-left">Your Rights:</h2>
                        <ul className="text-[13px] list-disc pl-5 text-gray-700 mt-2 md:w-[591px]">
                            <li>ou have the right to access, update or delete your personal information stored on our platform.
                                You can do so by logging into your account or contacting us directly.
                            </li>
                            <li>We will retain your information as long as necessary to fulfill the purposes outlined in this Privacy Policy,
                                unless a longer retention period is required or permitted by law.
                            </li>
                        </ul>
                    </section>

                    {/* Change to privacy policy */}
                    <section className="mt-6">
                        <h2 className="text-[20px] md:text-2xl font-semibold text-left">Change to Privacy Policy:</h2>
                        <ul className="text-[13px] list-disc pl-5 text-gray-700 mt-2 md:w-[591px]">
                            <li>We may update this Privacy Policy from time to time to reflect changes
                                in our practices or legal requirements. Any revisions will be effective immediately upon posting on our website.
                            </li>
                        </ul>
                    </section>



                </div>

                <div className="hidden lg:flex justify-end">
                    <Image src={privacyIcon} alt="Privacy Policy Icon"/>
                </div>
            </div>

            {/* Contact Section */}
            <section className="mt-12">
                <h2 className="text-[20px] md:text-2xl font-semibold text-left">Contact Us:</h2>
                <p className="text-[13px] text-gray-700 mt-2">
                    If you have any questions about our Privacy Policy, please contact us at:
                </p>
                <div className="text-[13px] mt-4">
                <p className="text-gray-700"><strong>Email:</strong> support@smarthivesms.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +234 000 654 5632</p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
