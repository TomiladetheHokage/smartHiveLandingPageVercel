"use client";

import TitleHeading from "@/components/title-heading";
import { CodeContainer } from "../(component)/code-con";
import { TableComponent } from "../(component)/table";

const requestbody = [
  {
    name: "status",
    type: "string",
    description:
      "The final status of the message, in all-cap, ie. DELIVRD, UNERLIV, EXPIRED etc",
  },
  {
    name: "msg_id",
    type: "string",
    description:
      "The unique messages ID allocated to the message when originally submitted.",
  },
  {
    name: "cost",
    type: "string",
    description: "The cost of sending the message.",
  },
  {
    name: "pg_length",
    type: "string",
    description:
      "Number of pages for the messages. The character limit for a single SMS message is 160 characters",
  },
  {
    name: "str_length",
    type: "int",
    description: "Total number of characters for the SMS.",
  },
  {
    name: "desc",
    type: "string",
    description: "The description of the delivery status",
  },
  {
    name: "route",
    type: "string",
    description:
      "The DLR status success or error code associated with the delivery status",
    required: true,
  },
];

const CallbackPage = () => {
  return (
    <div>
      <div className="mt-10">
        <TitleHeading title="Callback" description="" align="start" />
        <div>
          <div className="flex gap-2 items-center">
            <div className="p-1 bg-black text-green-500 rounded-md text-xs">
              <p>POST</p>
            </div>
            <div className="p-1 bg-black rounded-md text-xs w-fit text-white">
              <p>https://your-callback-url.com/</p>
            </div>
          </div>

          <h1 className="mt-5 text-sm">
            If you specify a callback_url when sending your message, we will
            perform a http request to the provider url with the following
            message status data.
          </h1>
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
              msg_id: "RXwq37828",
              status: "DELIVRD",
              dir_code: "err : 000",
              timestamp: "202311042057",
              str_lenght: "157",
              pg_lenght: "3.00",
              desc: "DELIVERED",
            },
            null,
            2
          )}
        />
      </div>
    </div>
  );
};

export default CallbackPage;
