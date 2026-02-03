import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import RoiPhilosophy from "@/components/sections/RoiPhilosophy";
// import BrowserMockupSection from "@/components/sections/BrowserMockupSection";
import ShipExperiments from "@/components/sections/ShipExperiments";
import Integrations from "@/components/sections/Integrations";
import TeamTabs from "@/components/sections/TeamTabs";
import Validation from "@/components/sections/Validation";
import Security from "@/components/sections/Security";
// import Solutions from "@/components/sections/Solutions";
// import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing"; // Placeholder
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-deep-void selection:bg-neon-green/20">
            <Navigation />
            <Hero />
            <RoiPhilosophy />
            {/* <BrowserMockupSection /> */}
            <ShipExperiments />
            <Integrations />
            <TeamTabs />
            <Validation />
            <Security />
            {/* <Solutions />
            <HowItWorks /> */}
            <Pricing />
            <Footer />
        </main>
    );
}
