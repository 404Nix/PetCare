import FAQs from "@/components/LandingPage/FAQs";
import Hero from "@/components/LandingPage/Hero";
import PartnerCTA from "@/components/LandingPage/PartnerCTA";
import Services from "@/components/LandingPage/Services";
import TrustBar from "@/components/LandingPage/TrustBar";
import clinicImg from "@/public/LandingPage/clinicCTAImg.png"
import shopImg from "@/public/LandingPage/shopCTAImg.png"

export default function LandingPage() {
    return (
        <>
            <main>
                <section className="section-hero">
                    <Hero />
                </section>
                <section className="section-trustbar">
                    <TrustBar />
                </section>
                <section className="section-services">
                    <Services />
                </section>
                <section className="section-partners">
                    <PartnerCTA
                        image={clinicImg}
                        imageAlt="Veterinary clinic"
                        title="Are You a Veterinary Clinic?"
                        description="Join our network of verified clinics and connect with pet owners searching for trusted care near them."
                        ctaText="Grow Your Clinic"
                    />
                    <PartnerCTA
                        image={shopImg}
                        imageAlt="Pet shop"
                        title="Own a Pet Shop?"
                        description="List your store and reach thousands of pet owners looking for supplies, food, and accessories near them."
                        ctaText="List Your Shop"
                        reverse
                    />
                </section>
                <section className="section-faqs">
                    <FAQs />
                </section>
            </main>

        </>
    );
}
