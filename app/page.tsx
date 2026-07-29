import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";
import Services from "@/components/LandingPage/Services";

export default function LandingPage() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="section-hero">
                    <Hero />
                </section>
                <section className="section-services">
                    <Services />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>

        </>
    );
}
