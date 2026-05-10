"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
];

export function Navbar() {
  const [active, setActive] = useState("Features");

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-full bg-[#0C111D] px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="ngage"
            width={150}
            height={35}
            className="h-10 w-36"
          />
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`hidden font-semibold text-white sm:block ${
                active === link.label ? "text-sm" : "text-base"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="https://forms.cloud.microsoft/r/72efWQW2nn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#E64A19] transition-colors">
            Join The Waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}
