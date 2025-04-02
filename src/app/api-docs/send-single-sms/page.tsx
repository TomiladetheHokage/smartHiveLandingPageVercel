"use client";

import { InfoIcon } from "lucide-react";
import { CodeContainer } from "../(component)/code-con";
import TitleHeading from "@/components/title-heading";
import { TableComponent } from "../(component)/table";

const requestbody = [
  {
    name: "sender",
    type: "string",
    description: "Sender ID",
    required: true,
  },
  {
    name: "sender",
    type: "string",
    description: "MSISDN of recipient in international format",
    required: true,
  },
  {
    name: "msg",
    type: "string",
    description: "SMS body (<905 characters)",
    required: true,
  },
  {
    name: "type",
    type: "string",
    description: "0: Flash SMS,1: SMS delivers to inbox(default)",
    required: true,
  },
  {
    name: "route",
    type: "string",
    description:
      "MKT for Promotional SMS, TRX for Transactional SMS, INTL for international SMS",
    required: true,
  },
  {
    name: "ext_ref",
    type: "string",
    description: "Unique Message reference",
    required: true,
  },
];

const SingleSms = () => {
  return (
    <div className="max-w-screen">
      <TitleHeading title="Send Single SMS" description="" align="start" />
      <div className="">
        <CodeContainer
          className=""
          codeString={`
// Body sample
{
  "Sender": "Smarthive",
  "recipients": "23490#########",
  "msg": "Hello World",
  "type": 1,
  "route": "MKT",
  "ext_ref": "67uf_cu68"
}`}
        />
        <div
          className="mt-10 p-3 rounded flex items-center gap-3 max-w-full md:w-fit"
          style={{
            backgroundColor: "rgba(55, 55, 55, 1)",
          }}
        >
          <InfoIcon size={20} />
          <CodeContainer>
            <p>ext_ref is an optional field. The Value must be unique.</p>
          </CodeContainer>
        </div>
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
          <div className="p-1 bg-black rounded-md text-xs w-[5.5rem] text-white mt-2">
            <p>/api/sms/send/</p>
          </div>
          <h1 className="mt-5 text-sm">
            This endpoint allows you to send SMS Messages
          </h1>
          <div className="mt-8">
            <TableComponent
              heading="Headers"
              data={[
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
                msg_id: "DXww578M0",
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
  );
};

export default SingleSms;
