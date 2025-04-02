"use client";

import Image from "next/image";
import Link from "next/link";
import icons from "../../../../public/assets";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Home",
    icon: icons.Home,
    link: "/api-docs",
  },
  {
    title: "Introduction",
    icon: icons.introduction,
    link: "/api-docs/introduction",
  },
  {
    title: "Send Single SMS",
    icon: icons.sendSingleSms,
    link: "/api-docs/send-single-sms",
  },
  {
    title: "Send Multiple SMS",
    icon: icons.sendMultipleSms,
    link: "/api-docs/send-multiple-sms",
  },
  {
    title: "Status",
    icon: icons.status,
    link: "/api-docs/status",
  },
  {
    title: "Balance",
    icon: icons.balance,
    link: "/api-docs/balance",
  },
  {
    title: "Send Sample Code",
    icon: icons.sendSampleCode,
    link: "/api-docs/send-sample-code",
  },
  {
    title: "Callback",
    icon: icons.callback,
    link: "/api-docs/callback",
  },
  {
    title: "SMS DLR Error Codes",
    icon: icons.smsDlrErrorCodes,
    link: "/api-docs/sms-dlr-error-codes",
  },
  {
    title: "WhatsApp",
    icon: icons.whatsappIcon,
    link: "/api-docs/whatsapp-messaging",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="min-h-full border-e w-64 shadow-sm hidden md:block">
      <div className="pt-[100px]">
        <ul className="p-5 flex flex-col">
          {sidebarItems.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <li className={cn("menu-item", isActive && "bg-primary/50")} key={index}>
                <Link href={item.link} className="text-black">
                  <div className="flex gap-5 items-center">
                    <Image src={item.icon} alt="logo" className="w-6 h-6" />
                    <span>{item.title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
