import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ImpactResults } from "@/components/sections/ImpactResults";
import { JobBoards } from "@/components/sections/JobBoards";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <HowItWorks />
            <ImpactResults />
            <JobBoards />
            <Testimonials />
            <FAQ />
            <FinalCTA />
            <Footer />
        </>
    );
}
