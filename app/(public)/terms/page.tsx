const sections = [
    { title: "Acceptance", content: <p>By accessing or using PetCare, you agree to these Terms of Service. If you do not agree, please discontinue use of the platform.</p> },
    { title: "Eligibility", content: <p>You must be legally capable of entering into agreements in your jurisdiction.</p> },
    {
        title: "User Accounts",
        content: (
            <>
                <p className="mb-2">You are responsible for:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Maintaining account security</li>
                    <li>Keeping information accurate</li>
                    <li>Protecting your login credentials</li>
                </ul>
            </>
        ),
    },
    {
        title: "Platform Usage",
        content: (
            <>
                <p className="mb-2">You agree not to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Violate any laws</li>
                    <li>Upload malicious software</li>
                    <li>Misrepresent yourself</li>
                    <li>Abuse or harass other users</li>
                    <li>Attempt unauthorized access</li>
                </ul>
            </>
        ),
    },
    {
        title: "Business Listings",
        content: (
            <>
                <p className="mb-2">Businesses are responsible for:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Maintaining accurate information</li>
                    <li>Updating operating hours</li>
                    <li>Managing appointments responsibly</li>
                    <li>Providing truthful descriptions</li>
                </ul>
                <p className="mt-2">PetCare reserves the right to remove inaccurate or misleading listings.</p>
            </>
        ),
    },
    {
        title: "Appointments",
        content: (
            <>
                <p className="mb-2">PetCare provides appointment booking functionality. We are not responsible for:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Missed appointments</li>
                    <li>Medical advice</li>
                    <li>Treatment outcomes</li>
                    <li>Pricing disputes</li>
                </ul>
                <p className="mt-2">Appointment availability is managed by individual businesses.</p>
            </>
        ),
    },
    { title: "Intellectual Property", content: <p>All platform content, branding, logos, and software belong to PetCare unless otherwise stated.</p> },
    { title: "Limitation of Liability", content: <p>PetCare is provided &quot;as is.&quot; While we strive to provide reliable services, we cannot guarantee uninterrupted availability or be held liable for indirect damages arising from the use of the platform.</p> },
    { title: "Changes", content: <p>We may update these Terms from time to time. Continued use of the platform indicates acceptance of any updated terms.</p> },
];

export default function TermsPage() {
    return (
        <>
            <main>
                <section className="py-16 md:py-20 px-6 bg-secondary text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
                        Terms of Service
                    </h1>
                </section>

                <section className="py-16 md:py-20 px-6 bg-white">
                    <div className="max-w-3xl mx-auto space-y-12">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                                    {section.title}
                                </h2>
                                <div className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                    {section.content}
                                </div>
                            </div>
                        ))}

                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Contact</h2>
                            <p className="text-muted-foreground text-sm md:text-base">
                                For legal inquiries: <span className="text-primary">xxxx@petcare.com</span>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}