"use client";

import TitleHeading from "@/components/title-heading";
import { CodeContainer } from "../(component)/code-con";
import { TableComponent } from "../(component)/table";

const BalancePage = () => {
  return (
    <div>
      <div>
        <TitleHeading description="" title="Balance" align="start" />
        <h1 className="mt-5">
          The ‘’Balance’’ endpoint provides functionality for retrieving the
          current balance associated with your account. To utilize this
          endpoint, you’ll nee to mae an HTTP request to the appropriate URL
          with
        </h1>
      </div>
      <div className="mt-10">
        <TitleHeading title="Credit" description="" align="start" />
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
            <p>/api/sms/credit</p>
          </div>
          <h1 className="mt-5 text-sm">
            This endpoint allows you to check how much credit you have.
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
              balance: 100.5,
            },
            null,
            2
          )}
        />
      </div>
    </div>
  );
};

export default BalancePage;
