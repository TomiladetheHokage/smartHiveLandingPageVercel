"use client";

import { Button } from "@/components/ui/button";
import Sidebar from "./(component)/sidebar";
import "./style.css";
import { usePathname, useRouter } from "next/navigation";

export default function APITemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const lastPath = pathname?.split("/").pop();
  const router = useRouter();
  const routesName = [
    "introduction",
    "send-single-sms",
    "send-multiple-sms",
    "status",
    "balance",
    "send-sample-code",
    "callback",
    "sms-dlr-error-codes",
    "whatsapp-messaging",
  ];

  const handleNext = () => {
    const index = routesName.indexOf(lastPath || "");
    if (index < routesName.length - 1) {
      router.push(`/api-docs/${routesName[index + 1]}`);
    }
  };

  const handlePrevious = () => {
    const index = routesName.indexOf(lastPath || "");
    if (index > 0) {
      router.push(`/api-docs/${routesName[index - 1]}`);
    }
  };
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="mt-[7rem] md:px-10 px-5 pb-20 max-w-full flex flex-1 flex-col">
        <div className="max-w-full">{children}</div>
        {lastPath !== "api-docs" && (
          <div className="min-w-max flex items-center justify-between mt-10">
            {lastPath === "introduction" ? null : (
              <Button variant={"outline"} onClick={handlePrevious}>
                Previous
              </Button>
            )}
            {lastPath === "whatsapp-messaging" ? null : (
              <Button variant={"outline"} onClick={handleNext}>
                Next
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
