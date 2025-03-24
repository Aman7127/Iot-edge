import Head from 'next/head'; // Import Head from next/head
import log from "@/public/images/logo.svg"

export const metadata = {
  title: "Iot-Edge",
  description: "Next-Gen Iot Solutions",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Logos from "@/components/logos";
import Cta from "@/components/cta";
import Logo from "@/components/ui/logo";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="../../public/images/logo" /> {/* Link to your favicon */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <PageIllustration />
      <Hero />
      <div className="bg-black pt-20">
        <Logos />
      </div>
      <Workflows />
      <Features />
      <Testimonials />
    </>
  );
}