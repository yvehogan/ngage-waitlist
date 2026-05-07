import Image from "next/image";
import { FadeIn } from "@/components/animations";

export function KnowYourCouncil() {
  return (
    <section id="features" className=" px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-[56px]">
              Know Your <span className="text-[#FF6B35]">Council</span>
            </h2>
            <p className="mx-auto mt-4 max-w-6xl text-lg text-[#FCFCFD] sm:text-lg">
              Ngage is a mobile-first application that provides hyperlocal
              council information, participation tools (FOI wizard, issue
              reporting, consultation feeds, feedback tracking) and
              youth-friendly dashboards for councils, enabling always-on
              engagement beyond the programme cohort.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 flex flex-col items-stretch gap-2 sm:mt-20 sm:h-150 sm:flex-row sm:gap-0">
          <FadeIn
            direction="left"
            delay={0.2}
            className="relative h-80 w-full sm:h-auto sm:w-2/3"
          >
            <Image
              src="/images/councillor1.png"
              alt="Know Your Council - Desktop view"
              fill
              className="object-contain object-"
            />
          </FadeIn>
          <FadeIn
            direction="right"
            delay={0.4}
            className="relative hidden sm:block sm:h-auto sm:w-1/3"
          >
            <Image
              src="/images/councillor2.png"
              alt="Know Your Council - Mobile view"
              fill
              className="object-contain object-left"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
