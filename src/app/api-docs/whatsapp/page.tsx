"use client";

import TitleHeading from "@/components/title-heading";
import { CodeContainer } from "../(component)/code-con";
import { TableComponent } from "../(component)/table";

const requestbody = [
  {
    name: "code",
    type: "string",
    description: "One time password",
    required: true,
  },
  {
    name: "recipent",
    type: "string",
    description: "MSISDN of recipient",
    required: true,
  },
];

const Whatsapp = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <TitleHeading description="" title="WhatsApp" align="start" />
          <h1 className="mt-5">
            Welcome to our WhatsApp OTP API service. This API enables you to
            send One-Time Password (OTPs) via WhatsApp using the API protocol.
            Our service ensures secure and reliable OTP delivery, making
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Getting Started</h1>
          <div className="mt-3 text-sm">
            <p>To start using our API, follow these steps</p>
            <ol className="list-decimal px-5">
              <li>
                <h1 className="font-semibold">
                  Sign Up:{" "}
                  <span className="font-normal">
                    Register for an account and obtain your API ey.
                  </span>
                </h1>
              </li>
              <li>
                <h1 className="font-semibold">
                  Integrate:{" "}
                  <span className="font-normal">
                    Use the provided code sample to integrate the API into the
                    application.
                  </span>
                </h1>
              </li>
              <li>
                <h1 className="font-semibold">
                  Send OTPs:{" "}
                  <span className="font-normal">
                    Start sending OTPs to your users securely and efficiently.
                  </span>
                </h1>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <TitleHeading description="" title="Sending OTP" align="start" />
          <h1 className="mt-5">
            This endpoint allows you to send a one-time-password to your users.
          </h1>
        </div>
        <div className="mt-10">
          <TitleHeading title="Send" description="" align="start" />
          <div>
            <div className="flex gap-3 items-center">
              <div className="p-1 bg-black text-green-500 rounded-md text-xs">
                <p>POST</p>
              </div>
              <a
                href="https://smsapi-sur2.onrender.com/."
                target="_blank"
                className="text-green-500 underline text-sm"
              >
                https://smsapi-sur2.onrender.com/.
              </a>
            </div>
            <div className="p-1 bg-black rounded-md text-xs w-fit text-white mt-2">
              <p>/api/whatsapp/send</p>
            </div>
            <div className="mt-8">
              <TableComponent
                heading="Headers"
                data={[
                  {
                    name: "Content-Type",
                    type: "string",
                    description: "application/json",
                  },
                  {
                    name: "X-api-key*",
                    description: "Your API key",
                    type: "string",
                  },
                ]}
              />
            </div>
            <div className="mt-8">
              <TableComponent heading="Request body" data={requestbody} />
            </div>
          </div>
        </div>
        <div
          className="mt-10 p-3 rounded flex flex-col items-center gap-3 max-w-[100%] md:w-fit"
          style={{
            backgroundColor: "rgba(55, 55, 55, 1)",
          }}
        >
          <div className="w-full flex text-white items-center text-xs gap-10">
            <p>200:OK</p>
            <div className="h-6 rounded w-[60%] bg-black"></div>
          </div>
          <CodeContainer
            codeString={JSON.stringify(
              {
                status: "ok",
                description: "The request has succeeded",
                data: {
                  msg_id: "RXwq37828",
                  recipent: "2349042839232",
                  status: "Submitted", // Ensure correct straight double quotes here
                },
              },
              null,
              2
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
