import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";

interface PartnerCTAProps {
    image: StaticImageData;
    imageAlt: string;
    title: string;
    description: string;
    ctaText: string;
    reverse?: boolean;
    bgClassName?: string;
}

export default function PartnerCTA({
    image,
    imageAlt,
    title,
    description,
    ctaText,
    reverse = false,
    bgClassName = "bg-background",
}: PartnerCTAProps) {
    return (
        <section className={`py-16 md:py-24 px-6 ${bgClassName}`}>
            <div
                className={`max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-16 ${reverse ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
            >
                <div className="relative w-full md:flex-1 h-64 md:h-96 rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className="w-full md:flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {title}
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-md mx-auto md:mx-0">
                        {description}
                    </p>
                    <Button className="px-8 py-6 rounded-full font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                        {ctaText}
                    </Button>
                </div>
            </div>
        </section>
    );
}