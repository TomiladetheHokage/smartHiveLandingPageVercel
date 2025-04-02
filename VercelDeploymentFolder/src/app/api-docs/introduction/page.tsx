"use client";

import TitleHeading from "@/components/title-heading";
import { CodeContainer } from "../(component)/code-con";
import { BiCheckCircle } from "react-icons/bi";

const IntroductionPage = () => {
  return (
    <div>
      <TitleHeading title="Introduction" description="" align="start" />
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Overview</h1>
          <p className="text-sm">
            The Smarthive SMS API provides a robust platform for seamlessly
            integrating SMS functionality into websites and applications.
            Utilizing HTTP requests with GET or POST methods, the API offers a
            versatile solutions for developers seeking to incorporate SMS
            capabilities into their projects. Additionally, the API support
            simple JSON request bodies in certain cases, facilitating smooth
            integration and streamlined communication processes.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">API Endpoint</h1>
          <p className="text-sm">
            To leverage the capabilities of SmarthiveSMS APIs, it is imperative
            to begin by creating a complimentary account on our platform. This
            can be easily accomplished by visiting our website at
            https://smarthivesms.com and completing the registration process.
          </p>
          <p className="text-sm">
            Once your account is created, you gain access to our comprehensive
            suites of APIs designed to enhance communication within your
            application or website. The API Endpoint, where you’ll interact with
            our services is located at https://smsapi-sur2.onrender.com/
          </p>
          <p className="text-sm">
            By integrating APIs into your projects, you unlock powerful
            communication functionalities empowering you to engage with your
            audience effectively and efficiently. We ook forward to supporting
            your endeavors in utilizing our services to their fullest potential.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">API Response</h1>
          <p className="text-sm">
            The SmarthiveSMS API follows a consistent response format, providing
            JSON responses with a status code of 200 OK for successful requests
            and 500 for errors. You can refer to the API Response page for a
            comprehensive list of all possible responses for both success and
            error scenario.
          </p>
          <p className="text-sm">
            This standardized approach ensures clarity and ease of integration,
            allowing developers to anticipate and handle various outcomes
            effectively. By consulting the API Response page, you can gain
            insight into the expected responses and effectively handle any
            errors encountered during API interactions.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Send SMS</h1>
          <p className="text-sm">
            To utilize our API for sending SMS messages, you’ll first need to
            register for an account on our website at
            https://smsapi-sur2.onrender.com/. Once registered, navigate to your
            account settings to generate an API key specially for your
            integration needs.
          </p>
          <p className="text-sm">
            This API key serves as the authentication mechanism for accessing
            our SMS sending capabilities. With this key, you’ll have the
            necessary authorization to send SMS message through our platform.
          </p>
          <p className="text-sm">
            By following these steps, you can seamlessly integrate SMS
            functionality into your applications or services, enhancing
            communication and engagement with your users.
          </p>
        </div>
      </div>
      <div className="max-w-full md:w-[350px] mt-10">
        <CodeContainer>
          <div className="flex gap-2 flex-row p-2">
            <BiCheckCircle size={20} />
            <p className="text-sm flex-1">
              When you’re creating your API Key, you have to select hat type of
              api key it is. For sending Promotional SMS, you should create a
              MKT API key and for sending Transactional SMS, you need to create
              a TRX API key.
            </p>
          </div>
        </CodeContainer>
      </div>
    </div>
  );
};

export default IntroductionPage;
