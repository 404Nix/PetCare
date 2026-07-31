import { ShieldCheck, Store, Heart, Clock } from "lucide-react";

const stats = [
    { icon: ShieldCheck, value: "500+", label: "Verified Clinics" },
    { icon: Store, value: "1,200+", label: "Partner Pet Shops" },
    { icon: Heart, value: "10,000+", label: "Happy Pets" },
    { icon: Clock, value: "24/7", label: "Support Available" },
];

export default function TrustBar() {
    return (
        <section className="py-12 md:py-16 px-6 bg-secondary">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center border px-2 py-4 rounded-2xl border-primary-foreground">
                        <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-secondary-foreground mb-2" />
                        <p className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-1">
                            {stat.value}
                        </p>
                        <p className="text-sm md:text-base text-secondary-foreground/80">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}