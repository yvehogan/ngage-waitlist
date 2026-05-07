"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { FadeIn, ScaleIn } from "@/components/animations";

export function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative flex flex-col items-center justify-start overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center mt-10">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-[56px] font-bold leading-tight text-white max-w-4xl ">
            Understand Your Council. Influence Local Spending. Plan.
          </h1>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="text-white text-base max-w-4xl mt-6">
            We&apos;re building a platform that helps you understand what your
            council is doing, track promises, and share your voice on decisions
            that affect your community.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex w-full max-w-md items-center gap-0 rounded-full bg-[#0C111D66] p-1.5 ring-1 ring-gray-200 transition-all hover:ring-0 hover:shadow-[0_0_25px_rgba(255,87,34,0.5)]">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 flex-1 border-0 px-12 text-sm text-gray-900 placeholder:text-white focus:placeholder:text-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <a
              href="https://form.typeform.com/to/tZ7KAy8y"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tangerine-slide inline-flex items-center justify-center rounded-full bg-white px-4 py-4 text-sm font-semibold text-black transition-colors"
            >
              Join The Waitlist
            </a>
          </div>
        </FadeIn>

        <ScaleIn
          delay={0.5}
          duration={0.8}
          className="relative mt-12 w-full max-w-5xl sm:mt-16"
        >
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/hero-mockup.png"
              alt="nGage platform preview"
              width={1200}
              height={750}
              className="w-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <Image
              src="/images/gradient.png"
              alt=""
              width={1920}
              height={400}
              className="w-full"
            />
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
