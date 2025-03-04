export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import  Logos  from "@/components/logos";
import Cta from "@/components/cta";
import Logo from "@/components/ui/logo";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Logos />
      <Workflows />
      <Features />
      <Testimonials />
      
    </>
  );
}
