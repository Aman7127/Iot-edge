"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-100 mt-2 mb-2 w-full ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-black px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
            <div className="pl-3 font-bold">
              IOT-EDGE
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-1 justify-end items-center pr-10">
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  href="/aboutus"
                  className="font-semibold text-gray-300 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-semibold text-gray-300 hover:text-white transition"
                >
                  Services
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}