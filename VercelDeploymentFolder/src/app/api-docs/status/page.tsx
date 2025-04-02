"use client";

import TitleHeading from "@/components/title-heading";
import { CodeContainer } from "../(component)/code-con";
import { TableComponent } from "../(component)/table";

const requestbody = [
  {
    name: "msg_id",
    type: "Array",
    description: "Array of messages ids",
    required: true,
  },
];

const StatusPage = () => {
  return (
    <div className="max-w-screen">
      <TitleHeading title="Status" description="" align="start" />
      <div className="">
        <CodeContainer
          className=""
          codeString={`
// Body sample
{
  "msg_id" : [
  "1fqwe-qwe",
  "nwepq22q"
  ]
}`}
        />
      </div>
      <div className="mt-10">
        <TitleHeading title="Status" description="" align="start" />
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
            <p>/api/sms/status</p>
          </div>
          <h1 className="mt-5 text-sm">
            This endpoint allows you to the delivery status of messages sent.
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
              data: [
                {
                  msg_id: "DXww578M0",
                  status: "DELIVERED", // Ensure correct straight double quotes here
                },
                {
                  msg_id: "RXwq37828",
                  status: "DELIVERED", // Ensure correct straight double quotes here
                },
              ],
            },
            null,
            2
          )}
        />
      </div>
    </div>
  );
};

export default StatusPage;
