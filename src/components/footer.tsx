"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations";

export function Footer() {
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

          <a href="https://forms.cloud.microsoft/r/72efWQW2nn" target="_blank" rel="noopener noreferrer" className="btn-tangerine-slide inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors">
            Join The Waitlist
          </a>
        </div>

        <p className="mt-10 text-center text-sm text-white">
          © 2026 Ngage. All Rights Reserved
        </p>
      </div>
    </footer>
    </FadeIn>
  );
}
