import Navbar from "@/components/LandingPage/Navbar";
import Footer from "@/components/LandingPage/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header><Navbar /></header>
            <main>{children}</main>
            <footer><Footer /></footer>
        </>
    );
}