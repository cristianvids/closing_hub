import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ProofOfSkill } from "@/components/sections/ProofOfSkill";
import { SocialProof } from "@/components/sections/SocialProof";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <StatsBar />
        <ProofOfSkill />
        <SocialProof />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
