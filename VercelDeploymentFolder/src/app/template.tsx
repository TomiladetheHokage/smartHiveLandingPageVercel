// "use client";
//
// import Footer from "@/components/footer";
// import NavBar from "@/components/navigation-bar";
// import { useEffect, useState } from "react";
//
// export default function RootTemplate({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [isScrolled, setIsScrolled] = useState(false);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//
//     window.addEventListener("scroll", handleScroll);
//
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <html>
//       <body className="overflow-x-hidden">
//         <NavBar isScrolled={isScrolled} />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navigation-bar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RootTemplate({
                                       children,
                                     }: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Define pages where the footer should be hidden
  const hideFooterPages = ["/sms", "/voice-messaging", "/whatsapp-messaging", "/email"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <html>
      <body className="overflow-x-hidden">
      <NavBar isScrolled={isScrolled} />
      {children}
      {!hideFooterPages.includes(pathname) && <Footer />} {/* Hide footer conditionally */}
      </body>
      </html>
  );
}

