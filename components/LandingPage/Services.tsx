import { Stethoscope, MapPin, Store, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
    { icon: Stethoscope, title: "Vet Appointments", description: "Book trusted veterinarians online, no waiting rooms required." },
    { icon: MapPin, title: "Vet Clinics Near You", description: "Find highly-rated clinics in your area, ready when you need them." },
    { icon: Store, title: "Pet Shops", description: "Discover nearby stores for food, toys, and everyday essentials." },
    { icon: FileText, title: "Vaccination Records", description: "Keep every shot and checkup organized, all in one place." },
];

export default function Services() {
    return (
        <div className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Everything Your Pet Needs
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-xs md:max-w-md mx-auto">
                        Care, supplies, and records — all in one simple place.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <Card
                            key={service.title}
                            className="bg-primary-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <CardHeader>
                                <div className="bg-primary/10 text-primary rounded-full p-3 w-fit mb-2">
                                    <service.icon size={24} />
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground leading-relaxed">
                                {service.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}