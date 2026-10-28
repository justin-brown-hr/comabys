import { AboutApproach } from "@/components/AboutApproach";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutApproach />
      <CtaBand />
    </>
  );
}
