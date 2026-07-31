"use client";

import { useState } from "react";
import { Mail, Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    { q: "How do I register my clinic?", a: "Head to the clinic registration page and fill out your business details — our team reviews and verifies submissions within 48 hours." },
    { q: "How can I book an appointment?", a: "Search for a clinic near you, pick a service, choose an available time slot, and confirm your booking." },
    { q: "How do I update my profile?", a: "Go to your account settings after signing in to update your personal or business information anytime." },
    { q: "How do I report incorrect business information?", a: "Use the contact form below or email business@petcare.com with details, and we'll investigate promptly." },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // wire up actual submission logic later
        console.log(form);
    };

    return (
        <>
            <main>
                <section className="py-16 md:py-24 px-6 bg-secondary text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
                        Contact Us
                    </h1>
                    <p className="text-secondary-foreground/80 max-w-xl mx-auto">
                        Have questions, suggestions, or need assistance? We&apos;d love to hear from you.
                    </p>
                </section>

                <section className="py-16 md:py-24 px-6 bg-white">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-xl font-bold text-foreground mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <Mail className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Email</p>
                                        <p className="text-sm text-muted-foreground">support@petcare.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Briefcase className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Business Inquiries</p>
                                        <p className="text-sm text-muted-foreground">business@petcare.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Location</p>
                                        <p className="text-sm text-muted-foreground">Delhi, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Response Time</p>
                                        <p className="text-sm text-muted-foreground">We typically respond within 24–48 business hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground mb-1 block">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                                <input
                                    type="text"
                                    required
                                    value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground"
                                />
                            </div>
                            <Button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-3">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </section>

                <section className="py-16 md:py-24 px-6 bg-background">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                            Frequently Asked Questions
                        </h2>
                        <Accordion className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger className="text-left text-foreground font-medium">{faq.q}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </main>
        </>
    );
}