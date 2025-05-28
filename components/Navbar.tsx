"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="Travado logo"
          width={200}
          height={80}
          draggable={false}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Link href="/">
          <Button type="button" title="Login" variant="btn_blue" />
        </Link>
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleSidebar}
        draggable={false}
      />

      {isSidebarOpen && (
        <div className="absolute top-14 right-2 w-52 bg-gray-10 border-2 border-black shadow-lg rounded-xl p-5 z-40 flex flex-col items-center gap-4 lg:hidden transition duration-300">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-black text-base"
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/">
            <Button type="button" title="Login" variant="btn_blue" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
