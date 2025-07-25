'use client';

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const routes = [
  { path: "/home/ideas", label: "ნახატები და წინადადებები" },
  { path: "/home/gallery", label: "გალერეა" },
  { path: "/home/guide", label: "მასწავლებლის გზამკვლევი" },
  { path: "/home/about", label: "პროექტის შესახებ" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center bg-[#BAD8FC] px-20 py-3.5">
      <Link href="/">
        <Image src='/logo.png' alt='Logo' width={100} height={53} />
      </Link>

      <nav className="hidden [@media(min-width:1068px)]:block flex-1 pl-12 max-w-[1001px]">
        <ul className="flex justify-between items-center font-[DejaVu-Sans] text-lg">
          {routes.map((route, index) => {
            const isActive = pathname === route.path;

            return (
              <li key={index}>
                <Link
                  href={route.path}
                  className={isActive ? "border-b-2 border-[#F9958F] pb-[7.5px]" : ""}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="[@media(min-width:1068px)]:hidden flex flex-col justify-between items-center h-[18px] cursor-pointer"
      >
         <motion.div
        animate={{
          rotate: menuOpen ? 45 : 0,
          y: menuOpen ? 8 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="bg-black rounded-full w-[30px] h-[2px]"
      />
      <motion.div
        animate={{
          x: menuOpen ? -20 : 0,
          opacity: menuOpen ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="bg-black rounded-full w-[30px] h-[2px]"
      />
      <motion.div
        animate={{
          rotate: menuOpen ? -45 : 0,
          y: menuOpen ? -8 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="bg-black rounded-full w-[30px] h-[2px]"
      />
      </button>
<AnimatePresence>
      {menuOpen && (
        <motion.div 
        key="burger-menu"
        className="[@media(min-width:1068px)]:hidden top-full right-[9px] left-[9px] z-10 absolute bg-white border border-[#F5B3A3] rounded-[10px] w-full"
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5 }}>
          <ul className="flex flex-col gap-4 px-4 py-6 font-[DejaVu-Sans] text-lg">
            {routes.map((route, index) => {
              const isActive = pathname === route.path;
              return (
                <li key={index}>
                  <Link
                    href={route.path}
                    onClick={() => setMenuOpen(false)}
                    className={isActive ? "border-b-2 border-[#F9958F] pb-1" : ""}
                  >
                    {route.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
