"use client";

import TitleHeading from "@/components/title-heading";
import { TableComponent } from "../(component)/table";

const requestbody = [
  {
    name: "UNDELIV err:0dc",
    description: "Absent Subscriber",
  },
  {
    name: "EXPIRED err:206",
    description: "Absent Subscriber",
  },
  {
    name: "EXPIRED err:21b",
    description: "Absent Subscriber",
  },
  {
    name: "UNDELIV err:21b",
    description: "Absent Subscriber",
  },
  {
    name: "EXPIRED err:023",
    description: "Absent Subscriber",
  },
  {
    name: "EXPIRED err:027",
    description: "Absent Subscriber",
  },
  {
    name: "EXPIRED err:053",
    description: "Absent Subscriber",
  },
  {
    name: "EXPIRED err:054",
    description: "Absent Subscriber",
  },
  {
    name: "UNDELIV err:058",
    description: "Absent Subscriber",
  },
  {
    name: "UNDELIV err:439",
    description:
      "Absent Subscriber or ported subscriber or subscriber is barred",
  },
  {
    name: "UNDELIV err:254",
    description: "Subscriber’s phone inbox is full",
  },
  {
    name: "EXPIRED err:254",
    description: "Subscriber’s phone inbox is full",
  },
  {
    name: "EXPIRED err:220",
    description: "Subscriber’s phone inbox is full",
  },
  {
    name: "EXPIRED err:120",
    description: "Subscriber’s phone inbox is full",
  },
  {
    name: "EXPIRED err:120",
    description: "Subscriber’s phone inbox is full",
  },
  {
    name: "REJECTD err:008",
    description: "Subscriber’s phone inbox is full",
  },
  {
    name: "UNDELIV err:255",
    description: "Invalid or inactive phone number",
  },
  {
    name: "UNDELIV err:20b",
    description: "Invalid or inactive phone number",
  },
  {
    name: "UNDELIV err:004",
    description: "Invalid or inactive phone number",
  },
  {
    name: "UNDELIV err:510",
    description: "Invalid or inactive phone number",
  },
  {
    name: "EXPIRED err:215",
    description: "Invalid or inactive phone number",
  },
  {
    name: "EXPIRED err:20d",
    description: "Subscriber is barred on the network",
  },
  {
    name: "UNDELIV err:130",
    description: "Subscriber is barred on the network",
  },
  {
    name: "UNDELIV err:131",
    description: "Subscriber is barred on the network",
  },
  {
    name: "EXPIRED err:222",
    description: "Network operator system failure",
  },
  {
    name: "EXPIRED err:602",
    description: "Network operator system failure",
  },
  {
    name: "EXPIRED err:306",
    description: "Network operator system failure",
  },
  {
    name: "UNDELIV err:032",
    description: "Network operator system failure or operator not supported",
  },
  {
    name: "UNDELIV err:008",
    description: "Subscriber is on DND",
  },
  {
    name: "UNDELIV err:085",
    description: "Subscriber is on DND",
  },
  {
    name: "UNDELIV err:065",
    description:
      "Message content or sender ID id blocked on the promotional route",
  },
  {
    name: "UNDELIV err:600",
    description:
      "Message content or sender ID id blocked on the promotional route",
  },
  {
    name: "EXPIRED err:40a",
    description: "Sender ID not whitelisted on the account",
  },
  {
    name: "UNDELIV err:082",
    description: "Network operator not supported",
  },
  {
    name: "UNDELIV err:00a",
    description: "Sender ID is restricted by the operator",
  },
  {
    name: "EXPIRED err:078",
    description: "Restricted message content or sender ID is blocked",
  },
  {
    name: "UNDELIV err:432",
    description: "Restricted message content or sender ID is blocked",
  },
];

const ErrorCode = () => {
  return (
    <div>
      <div>
        <TitleHeading
          description=""
          title="SMS DLR Error Codes"
          align="start"
        />
        <h1 className="mt-5">Common SMS DLR Codes and Descriptions</h1>
      </div>
      <div className="mt-8">
        <TableComponent
          heading="Request body"
          data={requestbody}
          headers={["SMS DLR Code", "Status Description"]}
        />
      </div>
    </div>
  );
};

export default ErrorCode;
