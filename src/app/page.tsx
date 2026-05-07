import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { KnowYourCouncil } from "@/components/know-your-council";
import { YourWard } from "@/components/your-ward";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-black p-0 md:p-4">
      <Navbar />
      <Hero />
      <KnowYourCouncil />
      <YourWard />
      <FAQ />
      <Footer />
    </div>
  );
}
