"use client";

import Image from "next/image";
import { FadeIn, ScaleIn } from "@/components/animations";

export function Hero() {
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
            Understand Your Council, Engage your Councillors, Influence Policies.
          </h1>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="text-white text-base max-w-4xl mt-6">
            We&apos;re building a platform that helps you understand what your
            council is doing, track promises, and contribute to decisions
            that affect your community.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <a
            href="https://forms.cloud.microsoft/r/72efWQW2nn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tangerine-slide mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-colors"
          >
            Join The Waitlist
          </a>
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
