"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/animations";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <FadeIn>
      <footer className="bg-[#0C111D] px-4 py-12 sm:px-6 rounded-[40px]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="ngage"
              width={150}
              height={40}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-semibold text-white">
              Home
            </Link>
            <Link href="#features" className="text-lg font-semibold text-white">
              Features
            </Link>
          </div>

          <div className="flex items-center gap-0 rounded-full border border-white/30 p-1.5 transition-all hover:border-transparent hover:shadow-[0_0_25px_rgba(255,87,34,0.5)]">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-48 border-0 bg-transparent px-4 text-sm text-white placeholder:text-gray-400 focus:placeholder:text-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <a href="https://form.typeform.com/to/tZ7KAy8y" target="_blank" rel="noopener noreferrer" className="btn-tangerine-slide inline-flex items-center justify-center rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-black transition-colors">
              Join The Waitlist
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-white">
          © 2026 Ngage. All Rights Reserved
        </p>
      </div>
    </footer>
    </FadeIn>
  );
}
