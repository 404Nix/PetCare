import Image from "next/image";
import heroImg from "@/public/LandingPage/HeroImage.png";
import CTA from "./CTA";

export default function Hero() {
    return (
        <div className="relative h-[70vh] md:h-[90vh] bg-[#eceadf] w-full flex items-center justify-start overflow-hidden">
            <Image
                src={heroImg}
                alt="Happy dog with owner"
                fill
                priority
                className="object-contain"
                sizes="100vw"
            />
            <div className="relative z-10 max-w-xl px-6 mb-6 md:px-16">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-4">
                    Your Pet&apos;s Health,{" "}
                    <span className="text-primary">Simplified</span>
                </h1>
                <p className="text-base max-w-50 md:max-w-lg md:text-lg text-muted-foreground leading-relaxed mb-8">
                    From vet visits to grooming and boarding, find caring professionals near you — all in one place.
                </p>
                <CTA />
            </div>
        </div>
    );
}