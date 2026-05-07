import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const features = [
  { src: "/images/ward1.png", label: "Your Ward" },
  { src: "/images/ward2.png", label: "Track Promises" },
  { src: "/images/ward3.png", label: "Council Performance" },
];

export function YourWard() {
  return (
    <section className="px-4 pb-10 sm:px-6 sm:pb-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-[56px]">
              Your <span className="text-[#FF6B35]">Ward</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#FCFCFD]">
             Stay connected to what's happening where you live.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3" staggerDelay={0.15}>
          {features.map((feature) => (
            <StaggerItem key={feature.label} className="flex flex-col items-center">
              <Image
                src={feature.src}
                alt={feature.label}
                width={400}
                height={800}
                className="w-full"
              />
              
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
