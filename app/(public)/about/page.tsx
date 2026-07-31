import { PawPrint, Users, Store } from "lucide-react";

const whatWeDo = [
    "Manage multiple pet profiles",
    "Discover nearby veterinary clinics",
    "Find trusted pet shops",
    "Book appointments online",
    "Keep pet information organized",
    "Connect with local pet businesses",
];

const ownerFeatures = ["Pet profiles", "Appointment booking", "Nearby clinic discovery", "Favorite businesses", "Appointment history"];
const businessFeatures = ["Create a professional profile", "Manage appointments", "Update business information", "Reach more local pet owners"];

export default function AboutPage() {
    return (
        <>
            <main>
                <section className="py-16 md:py-24 px-6 bg-secondary text-center">
                    <PawPrint className="mx-auto text-primary mb-4" size={40} />
                    <h1 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
                        About PetCare
                    </h1>
                    <p className="text-secondary-foreground/80 text-base md:text-lg max-w-xl mx-auto">
                        Connecting pet owners with trusted veterinary clinics and pet businesses through one simple platform.
                    </p>
                </section>

                <section className="py-16 md:py-24 px-6 bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            At PetCare, our mission is to make pet healthcare and pet services more accessible, organized, and convenient for everyone.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We believe finding the right veterinary clinic or trusted pet shop should be simple. Pet owners deserve a platform where they can manage their pets, schedule appointments, and discover nearby businesses without unnecessary hassle.
                        </p>
                    </div>
                </section>

                <section className="py-16 md:py-24 px-6 bg-background">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">What We Do</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {whatWeDo.map((item) => (
                                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                                    <div className="bg-primary/10 text-primary rounded-full p-2 shrink-0">
                                        <PawPrint size={18} />
                                    </div>
                                    <p className="text-card-foreground text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 px-6 bg-white">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <div className="bg-primary/10 text-primary rounded-full p-3 w-fit mb-4">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">For Pet Owners</h3>
                            <p className="text-muted-foreground mb-4">
                                Whether you own one pet or many, PetCare provides a central place to manage their care.
                            </p>
                            <ul className="space-y-2">
                                {ownerFeatures.map((f) => (
                                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="bg-secondary/30 text-secondary-foreground rounded-full p-3 w-fit mb-4">
                                <Store size={24} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">For Businesses</h3>
                            <p className="text-muted-foreground mb-4">
                                Veterinary clinics and pet shops can use PetCare to increase their online presence and better manage customer interactions.
                            </p>
                            <ul className="space-y-2">
                                {businessFeatures.map((f) => (
                                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 px-6 bg-secondary text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">Our Vision</h2>
                    <p className="text-secondary-foreground/80 max-w-xl mx-auto leading-relaxed">
                        We&apos;re building a platform where every pet owner can quickly find trusted care, and every pet business can easily connect with the community.
                    </p>
                </section>
            </main>
        </>
    );
}