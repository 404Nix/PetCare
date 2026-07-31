import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
    {
        value: "item-1",
        trigger: "What is PetCare?",
        content:
            "PetCare is a platform that helps pet owners discover nearby veterinary clinics and pet shops, manage their pets, and book appointments online—all from one place.",
    },
    {
        value: "item-2",
        trigger: "Is PetCare free for pet owners?",
        content:
            "Yes. Creating an account, managing your pets, and searching for nearby clinics and pet shops is completely free.",
    },
    {
        value: "item-3",
        trigger: "How do I book a veterinary appointment?",
        content:
            "Simply create an account, add your pet, browse nearby veterinary clinics, choose an available time slot, and confirm your appointment.",
    },
    {
        value: "item-4",
        trigger: "Can I manage multiple pets?",
        content:
            "Yes. You can add and manage multiple pets under a single account, each with its own profile and information.",
    },
    {
        value: "item-5",
        trigger: "I'm a veterinary clinic. How can I join?",
        content:
            "Register your clinic through our business onboarding process, complete your clinic profile, and start managing appointments from your dashboard.",
    },
    {
        value: "item-6",
        trigger: "I own a pet shop. Can I list my business?",
        content:
            "Yes. Pet shops can create a business profile, add their information, and make it easier for local pet owners to discover their services.",
    },
    {
        value: "item-7",
        trigger: "Do I need to download an app?",
        content:
            "No. PetCare works directly in your web browser on desktop, tablet, and mobile devices.",
    },
    {
        value: "item-8",
        trigger: "Can I edit my profile later?",
        content:
            "Yes. You can update your personal information, pet details, and business profile at any time from your dashboard.",
    },
    {
        value: "item-9",
        trigger: "Are my personal details secure?",
        content:
            "Yes. We take security seriously. Your account is protected using modern authentication, and your data is handled securely.",
    },
    {
        value: "item-10",
        trigger: "Which areas does PetCare support?",
        content:
            "PetCare is designed to help users discover local veterinary clinics and pet shops. Available businesses depend on your location and the businesses registered on the platform.",
    },
]



export default function FAQs() {
    return (
        <section className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto"> {/* control width here */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <Accordion defaultValue={["item-1"]} className="w-full">
                    {items.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionTrigger className="text-left text-foreground font-medium">
                                {item.trigger}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}