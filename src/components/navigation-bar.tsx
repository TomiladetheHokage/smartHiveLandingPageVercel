// NEW DESIGN
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import React, {useEffect, useRef, useState} from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../public/assets/smarthivesms horizontal logo.png";

import improvisedLogo from "../../public/assets/Improvised-Logo.png";
import BigX from "../../public/assets/Bigx.png";

interface NavBarProps {
    isScrolled: boolean; // ✅ Accept isScrolled as a prop
}

const NavBar: React.FC<NavBarProps> = ({ isScrolled }) => {

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
                {/*<DropdownItem label="Products"/>*/}
                <DropdownItem
                    label="Products"
                    subItems={[
                        { label: "SMS" },
                        { label: "Voice-messaging" },
                        { label: "Email" },
                        { label: "WhatsApp-Messaging" },
                    ]}
                />

                <NavItem href="/api-docs">For Developer</NavItem>
                <NavItem href="/pricing">Pricing</NavItem>
                <DropdownItem label="Resources" subItems={[{ label: "FAQ", href: "#faq" }]} />

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
                        {/*<DropdownItem label="Products" />*/}
                        <NavItem href="/support-center">API</NavItem>
                        <NavItem href="/pricing">Pricing</NavItem>
                        <DropdownItem label="Resources" subItems={[{ label: "FAQ", href: "#faq" }]} />

                        <DropdownItem
                            label="Products"
                            subItems={[
                                { label: "SMS" },
                                { label: "Voice-messaging" },
                                { label: "Email" },
                                { label: "WhatsApp-Messaging" },
                            ]}
                        />

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
const DropdownItem = ({
                          label,
                          subItems = [],
                      }: {
    label: string;
    subItems?: { label: string; href?: string }[];
}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
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
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2 z-50">
                    {subItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href || `/${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};


export default NavBar;



