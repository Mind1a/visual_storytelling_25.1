"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const routes = [
  { path: "/home/ideas", label: "ნახატები და წინადადებები" },
  { path: "/home/gallery", label: "გალერეა" },
  { path: "/home/guide", label: "მასწავლებლის გზამკვლევი" },
  { path: "/home/about", label: "პროექტის შესახებ" },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative flex items-center justify-between bg-[#BAD8FC] px-20 py-3.5">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={100} height={53} />
      </Link>

      <nav className="hidden max-w-[1001px] flex-1 pl-12 [@media(min-width:1068px)]:block">
        <ul className="flex items-center justify-between font-[DejaVu-Sans] text-lg">
          {routes.map((route, index) => {
            const isActive = pathname === route.path

            return (
              <li key={index}>
                <Link
                  href={route.path}
                  className={
                    isActive ? "border-b-2 border-[#F9958F] pb-[7.5px]" : ""
                  }
                >
                  {route.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex h-[18px] cursor-pointer flex-col items-center justify-between [@media(min-width:1068px)]:hidden"
      >
        <motion.div
          animate={{
            rotate: menuOpen ? 45 : 0,
            y: menuOpen ? 8 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="h-[2px] w-[30px] rounded-full bg-black"
        />
        <motion.div
          animate={{
            x: menuOpen ? -20 : 0,
            opacity: menuOpen ? 0 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="h-[2px] w-[30px] rounded-full bg-black"
        />
        <motion.div
          animate={{
            rotate: menuOpen ? -45 : 0,
            y: menuOpen ? -8 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="h-[2px] w-[30px] rounded-full bg-black"
        />
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="burger-menu"
            className="absolute top-full right-[9px] left-[9px] z-10 w-full rounded-[10px] border border-[#F5B3A3] bg-white [@media(min-width:1068px)]:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col gap-4 px-4 py-6 font-[DejaVu-Sans] text-lg">
              {routes.map((route, index) => {
                const isActive = pathname === route.path
                return (
                  <li key={index}>
                    <Link
                      href={route.path}
                      onClick={() => setMenuOpen(false)}
                      className={
                        isActive ? "border-b-2 border-[#F9958F] pb-1" : ""
                      }
                    >
                      {route.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
