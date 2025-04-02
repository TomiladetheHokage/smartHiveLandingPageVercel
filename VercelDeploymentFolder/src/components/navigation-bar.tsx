// import Image from "next/image";
// import { logo, whiteLogo } from "../../public/assets";
// import Link from "next/link";
// import {
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Button } from "./ui/button";
// import React, { useState } from "react";
// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
//
// const NavBar = ({ isScrolled }: { isScrolled?: Boolean }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<"product" | "resources" | null>(null)
//
//   // Toggle mobile navigation
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const pathname = usePathname();
//   const isNotHome = pathname !== "/";
//   const Logo = isNotHome ? whiteLogo : isScrolled ? logo : whiteLogo;
//
//   return (
//     <div
//       className={cn(
//         "w-full lg:px-20 md:px-10 px-5 items-center py-2 flex justify-between z-10 transition-all fixed duration-300 top-0",
//         isNotHome ? "bg-primary" : "bg-transparent",
//         isScrolled ? (isNotHome ? "bg-primary" : "bg-white shadow") : ""
//       )}
//     >
//       <Link href={"/"}>
//         <Image src={Logo} alt="logo" className="max-h-[60px] min-w-[150px] w-[150px]" />
//       </Link>
//       <div>
//         <div>
//           <div
//             className={cn(
//               "md:flex flex-row lg:gap-2 hidden text-white",
//               isScrolled ? (isNotHome ? "text-white" : "text-black") : ""
//             )}
//           >
//             <div>
//               <Link href="/" legacyBehavior passHref>
//                 <div className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
//                   Home
//                 </div>
//               </Link>
//             </div>
//             <div>
//               <Link href="/about" legacyBehavior passHref>
//                 <div className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
//                   About
//                 </div>
//               </Link>
//             </div>
//             <div
//               className="relative"
//               onMouseEnter={() => {
//                 setActiveDropdown("product")
//               }}
//               onMouseLeave={() => {
//                 setActiveDropdown(null)
//               }}
//             >
//               <div
//                 className={`${navigationMenuTriggerStyle()} cursor-pointer flex items-center gap-2`}
//               >
//                 Products
//                 <div className="flex flex-col">
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       y: 10,
//                       display: "none",
//                     }}
//                     animate={{
//                       opacity: activeDropdown === "product" ? 1 : 0,
//                       y: activeDropdown === "product" ? 0 : -2,
//                       display: activeDropdown === "product" ? "block" : "none",
//                     }}
//                   >
//                     <IoIosArrowUp />
//                   </motion.div>
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       y: 10,
//                       display: "block",
//                     }}
//                     animate={{
//                       opacity: activeDropdown === "product" ? 0 : 1,
//                       y: activeDropdown === "product" ? 2 : 0,
//                       display: activeDropdown === "product" ? "none" : "block",
//                     }}
//                   >
//                     <IoIosArrowDown />
//                   </motion.div>
//                 </div>
//               </div>
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 10,
//                   display: "none",
//                 }}
//                 animate={{
//                   opacity: activeDropdown === "product" ? 1 : 0,
//                   y: activeDropdown === "product" ? 0 : 10,
//                   display: activeDropdown === "product" ? "block" : "none",
//                 }}
//                 className="absolute bg-white rounded-lg text-black">
//                 <ul className="gap-3 p-4 md:w-[200px] lg:w-[200px] grid grid-cols-1">
//                   <ListItem href="/sms" title="SMS" />
//                   <ListItem href="/voice-messaging" title="Voice" />
//                   <ListItem href="/ussd" title="USSD" />
//                   <ListItem href="/otp" title="WhatsApp OTP" />
//                 </ul>
//               </motion.div>
//             </div>
//             <div>
//               <Link href="/api-docs" legacyBehavior passHref>
//                 <div className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
//                   Api
//                 </div>
//               </Link>
//             </div>
//             <div>
//               <Link href="/pricing" legacyBehavior passHref>
//                 <div className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
//                   <h1>Pricing</h1>
//                 </div>
//               </Link>
//             </div>
//             <div className="relative"
//               onMouseEnter={() => {
//                 setActiveDropdown("resources")
//               }}
//               onMouseLeave={() => {
//                 setActiveDropdown(null)
//               }}
//             >
//               <div className={`${navigationMenuTriggerStyle()} cursor-pointer flex items-center gap-2`}>
//                 Resources
//                 <div className="flex flex-col">
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       y: 10,
//                       display: "none",
//                     }}
//                     animate={{
//                       opacity: activeDropdown === "resources" ? 1 : 0,
//                       y: activeDropdown === "resources" ? 0 : -2,
//                       display: activeDropdown === "resources" ? "block" : "none",
//                     }}
//                   >
//                     <IoIosArrowUp />
//                   </motion.div>
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       y: 10,
//                       display: "block",
//                     }}
//                     animate={{
//                       opacity: activeDropdown === "resources" ? 0 : 1,
//                       y: activeDropdown === "resources" ? 2 : 0,
//                       display: activeDropdown === "resources" ? "none" : "block",
//                     }}
//                   >
//                     <IoIosArrowDown />
//                   </motion.div>
//                 </div>
//               </div>
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 10,
//                   display: "none",
//                 }}
//                 animate={{
//                   opacity: activeDropdown === "resources" ? 1 : 0,
//                   y: activeDropdown === "resources" ? 0 : 10,
//                   display: activeDropdown === "resources" ? "block" : "none",
//                 }}
//                 className="absolute bg-white rounded-lg text-black"
//               >
//                 <ul className="gap-3 p-4 md:w-[300px] lg:w-[200px] grid grid-cols-1">
//                   <ListItem href="/blog" title="Blog" />
//                   <ListItem
//                     href="/contact-us"
//                     title="Support Center"
//                   />
//                 </ul>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="md:flex hidden lg:gap-5 md:gap-2">
//         <Link href={"https://app.smarthivesms.com"} target="_blank">
//           <Button
//             variant={isNotHome ? "outline" : "default"}
//             className={cn(
//               "lg:w-28 md:w-auto",
//             )}
//           >
//             Log in
//           </Button>
//         </Link>
//       </div>
//       <div className="md:hidden" onClick={toggleMenu}>
//         {isOpen ? <X size={26} /> : <Menu size={26} className={cn(isScrolled ? isNotHome ? "text-white" : "text-black" : "text-white")} />}
//       </div>
//       <motion.div
//         className="flex md:hidden fixed w-[80%] h-[100vh] top-0 right-0 bg-white py-20 px-5 z-20"
//         initial={{ x: "100%" }}
//         animate={{ x: isOpen ? 0 : "100%" }}
//         transition={{ type: "tween", duration: 0.3 }}
//       >
//         <X size={26} className="absolute top-5 right-5" onClick={toggleMenu} />
//         <div className="flex flex-col gap-10 w-full h-full">
//           <ul className="flex text-black flex-col">
//             <Link href={"/"} className="menu-item hover:bg-transparent h-[40px]" onClick={toggleMenu}>
//               Home
//             </Link>
//             <Link href={"/about"} className="menu-item hover:bg-transparent h-[40px]" onClick={toggleMenu}>
//               About
//             </Link>
//             <motion.div className="menu-item hover:bg-transparent overflow-hidden"
//               onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}
//               initial={{
//                 maxHeight: 40,
//               }}
//               animate={{
//                 maxHeight: activeDropdown === "product" ? 250 : 40,
//               }}
//             >
//               <div className="flex items-center justify-between">
//                 <span>Product</span>
//                 <IoIosArrowDown />
//               </div>
//               <div className="flex flex-col gap-2 px-2 pb-5 mt-3">
//                 <Link href={"/sms"} className="menu-item" onClick={toggleMenu}>
//                   SMS
//                 </Link>
//                 <Link href={"/voice-messaging"} className="menu-item" onClick={toggleMenu}>
//                   Voice
//                 </Link>
//                 <Link href={"/ussd"} className="menu-item" onClick={toggleMenu}>
//                   USSD
//                 </Link>
//                 <Link href={"/otp"} className="menu-item" onClick={toggleMenu}>
//                   WhatsApp OTP
//                 </Link>
//               </div>
//             </motion.div>
//             <Link href={"/api-docs"} className="menu-item hover:bg-transparent h-[40px]" onClick={toggleMenu}>
//               Api
//             </Link>
//             <Link href={"/pricing"} className="menu-item h-[40px]" onClick={toggleMenu}>
//               Pricing
//             </Link>
//             <motion.div className="menu-item hover:bg-transparent overflow-hidden"
//               onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
//               initial={{
//                 maxHeight: 40,
//               }}
//               animate={{
//                 maxHeight: activeDropdown === "resources" ? 150 : 40,
//               }}>
//               <div className="flex items-center justify-between">
//                 <span>Resources</span>
//                 <IoIosArrowDown />
//               </div>
//               <div className="flex flex-col px-2 gap-2 mt-3">
//                 <Link href={"/blog"} className="menu-item" onClick={toggleMenu}>
//                   Blog
//                 </Link>
//                 <Link href={"/contact-us"} className="menu-item" onClick={toggleMenu}>
//                   Support Center
//                 </Link>
//               </div>
//             </motion.div>
//           </ul>
//           <div className="flex flex-col gap-3">
//             <Link
//               href={"https://app.smarthivesms.com"}
//               className="justify-self-end"
//               onClick={toggleMenu}
//               target="_blank"
//             >
//               <Button
//                 variant={"outline"}
//                 className="font-semibold border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full"
//               >
//                 Login
//               </Button>
//             </Link>
//             <Link
//               href={"https://app.smarthivesms.com/signup"}
//               className="justify-self-end"
//               onClick={toggleMenu}
//               target="_blank"
//             >
//               <Button
//                 variant={"default"}
//                 className="font-semibold border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full"
//               >
//                 Sign Up
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };
//
// export default NavBar;
//
// const ListItem = ({ className, title, children, ...props }: {
//   className?: string;
//   title: string;
//   children?: string;
//   href: string;
// }) => {
//   return (
//     <li>
//       <div>
//         <Link
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none text-center">
//             {title}
//           </div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </Link>
//       </div>
//     </li>
//   );
// };
// ListItem.displayName = "ListItem";




// NEW DESIGN
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import React, {useEffect, useRef, useState} from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../public/assets/smarthivesms horizontal logo.png";

import improvisedLogo from "../../public/assets/Improvised-Logo.png";
import BigX from "../../public/assets/Bigx.png";



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // @ts-ignore
    return (
        <nav
            className="z-50 fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-4 md:bg-[#28656A] bg-[#F9FAFB] text-white shadow-none">

            {/* Mobile Menu Button (Now shifted to the left) */}
            <div className="md:hidden ml-auto text-black" onClick={toggleMenu}>
                {isOpen ? <X size={26}/> : <Menu size={26}/>}
            </div>

            {/* Logo (Hidden on mobile) */}
            <Link href="/" className="hidden md:block">
                <Image src={logo} alt="SmarthiveSMS Logo" width={150} height={40}/>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-x-16 text-white text-[16px] leading-[24px] font-medium">
                <NavItem href="/about">About</NavItem>
                <DropdownItem label="Products"/>
                <DropdownItem label="Features" subItems={["SMS", "Voice", "Email", "WhatsApp-Messaging"]}/>
                <NavItem href="/api-docs">For Developer</NavItem>
                <NavItem href="/pricing">Pricing</NavItem>
                <DropdownItem label="Resources"/>
            </div>

            <Link href="https://app.smarthivesms.com/SignIn">
                <Button
                    className="hidden md:flex items-center justify-center bg-white text-[#275b5d] px-8 py-4 rounded-md hover:bg-[#275b5d] hover:text-white">
                    Log in
                </Button>
            </Link>




            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-white text-black flex flex-col p-6 z-50">

                    {/* Header: Logo + Close Button */}
                    <div className="flex items-center justify-between mb-6">
                        {/* Left Logo */}
                        <Image src={improvisedLogo} alt="S Logo" className="w-auto h-auto" />

                        {/* Close Button */}
                        <Image
                            src={BigX}
                            alt="Close Menu"
                            className="cursor-pointer"
                            onClick={toggleMenu}
                        />
                    </div>

                    {/* Navigation Links Wrapper */}
                    <div className="mt-8 flex flex-col gap-4 gap-y-6 ml-6">
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/about">About</NavItem>
                        <DropdownItem label="Products" />
                        <NavItem href="/support-center">API</NavItem>
                        <NavItem href="/pricing">Pricing</NavItem>
                        <DropdownItem label="Resources" />
                        <DropdownItem label="Features" subItems={["SMS", "Voice-messaging", "Email", "WhatsApp Messaging"]}/>
                    </div>

                    {/* Buttons */}
                    <Button
                        className="mt-8 border border-[#1f4a4c] bg-[#ffffff] text-[#1f4a4c] w-[183px] py-2 rounded-md ml-6
               hover:bg-[#ffffff] hover:text-[#1f4a4c] active:bg-[#ffffff] active:text-[#1f4a4c]"
                        onClick={() => window.location.href = "https://app.smarthivesms.com/SignIn"}>
                        Log in
                    </Button>

                    <Button
                        className="mt-4 bg-[#28656A] text-white w-[183px] py-2 rounded-md ml-6
               hover:bg-[#28656A] hover:text-white active:bg-[#28656A] active:text-white"
                        onClick={() => window.location.href = "https://app.smarthivesms.com/signup"}>
                        Sign Up
                    </Button>
                </div>
            )}




        </nav>
    );
};


// @ts-ignore
const NavItem = ({href, children}) => (
    <Link
        href={href}
        className="transition-transform duration-300 ease-in-out hover:scale-105"
    >
        {children}
    </Link>
);

// // @ts-ignore
// const DropdownItem = ({ label }) => (
//     <div className="flex items-center cursor-pointer space-x-1 transform transition-transform duration-300 ease-in-out hover:scale-110">
//         <span>{label}</span>
//         <ChevronDown size={16} />
//     </div>
// );
// ✅ Dropdown Item Component (With Submenu)
// const DropdownItem = ({ label, subItems }) => {
//     const [open, setOpen] = useState(false);
//
//     return (
//         <div className="relative">
//             <div className="flex items-center cursor-pointer space-x-1 transform transition-transform duration-300 ease-in-out hover:scale-110"
//                  onClick={() => setOpen(!open)}>
//                 <span>{label}</span>
//                 <ChevronDown size={16}/>
//             </div>
//             {open && subItems && (
//                 <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2">
//                     {subItems.map((item, index) => (
//                         <Link key={index} href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-2 hover:bg-gray-100">
//                             {item}
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// @ts-ignore
const DropdownItem = ({ label, subItems }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        // @ts-ignore
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                className="flex items-center cursor-pointer space-x-1 transform transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => setOpen(!open)}
            >
                <span>{label}</span>
                <ChevronDown size={16} />
            </div>

            {open && subItems && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2">
                    {subItems.map((item, index) => (
                        <Link
                            key={index}
                            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setOpen(false)} // Close dropdown on selection
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavBar;



