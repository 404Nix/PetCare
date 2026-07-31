const sections = [
    {
        title: "Information We Collect",
        content: (
            <>
                <p className="font-medium text-foreground mt-4 mb-1">Account Information</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Authentication information (via Clerk)</li>
                </ul>
                <p className="font-medium text-foreground mt-4 mb-1">Profile Information</p>
                <p className="mb-1">Pet owners: Pet details, appointment history</p>
                <p>Businesses: Business information, operating hours, contact details</p>
                <p className="font-medium text-foreground mt-4 mb-1">Usage Information</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Device information</li>
                    <li>Browser type</li>
                    <li>IP address</li>
                    <li>Usage analytics</li>
                    <li>Error logs</li>
                </ul>
            </>
        ),
    },
    {
        title: "How We Use Your Information",
        content: (
            <ul className="list-disc pl-5 space-y-1">
                <li>Create your account</li>
                <li>Manage appointments</li>
                <li>Provide platform features</li>
                <li>Improve user experience</li>
                <li>Respond to support requests</li>
                <li>Maintain platform security</li>
            </ul>
        ),
    },
    {
        title: "Data Storage",
        content: (
            <p>
                Your information is securely stored using trusted cloud infrastructure. We implement appropriate technical and organizational measures to protect your personal data.
            </p>
        ),
    },
    {
        title: "Third-Party Services",
        content: (
            <>
                <p className="mb-2">PetCare uses trusted third-party services including:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Clerk (Authentication)</li>
                    <li>Supabase (Database & Storage)</li>
                    <li>Google Maps Platform</li>
                    <li>Vercel (Hosting)</li>
                </ul>
                <p className="mt-2">Each service has its own privacy practices.</p>
            </>
        ),
    },
    {
        title: "Cookies",
        content: (
            <>
                <p className="mb-2">We may use cookies and similar technologies to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Keep you signed in</li>
                    <li>Improve performance</li>
                    <li>Analyze usage</li>
                    <li>Enhance security</li>
                </ul>
            </>
        ),
    },
    {
        title: "Your Rights",
        content: (
            <>
                <p className="mb-2">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Access your data</li>
                    <li>Update your information</li>
                    <li>Delete your account</li>
                    <li>Request data correction</li>
                </ul>
            </>
        ),
    },
];

export default function PrivacyPolicyPage() {
    return (
        <>
            <main>
                <section className="py-16 md:py-20 px-6 bg-secondary text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-secondary-foreground/80 max-w-xl mx-auto">
                        Your privacy is important to us. This Privacy Policy explains how PetCare collects, uses, stores, and protects your information when you use our platform.
                    </p>
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
                                For privacy-related concerns: <span className="text-primary">privacy@petcare.com</span>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}