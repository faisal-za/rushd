import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { WhyUs } from "@/components/WhyUs";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <CaseStudies />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
