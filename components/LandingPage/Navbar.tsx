"use client"

import { Menu, X } from "lucide-react";
import Image from "next/image";
import petCareIcon from "@/public/LandingPage/petCareIcon.png";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isSignedIn = false;
    return (
        <nav className="h-16 px-6 py-4 bg-[#eceadf] flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 mr-2 md:w-12 md:h-12 bg-black rounded-full overflow-hidden">
                    <Link href="/">
                        <Image
                            src={petCareIcon}
                            alt="Pet avatar"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </Link>
                </div>
                <div className="hidden md:flex md:gap-4 text-foreground">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                            <h4 className="font-bold tracking-tight cursor-pointer hover:text-primary transition-colors">Services</h4>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="bg-primary-foreground">
                            <DropdownMenuItem>Vet Appointments</DropdownMenuItem>
                            <DropdownMenuItem>Vet Clinics</DropdownMenuItem>
                            <DropdownMenuItem>Pet Shops</DropdownMenuItem>
                            <DropdownMenuItem>Vaccination</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/about" className="font-bold tracking-tight hover:text-primary transition-colors">About</Link>
                    <Link href="/contact" className="font-bold tracking-tight hover:text-primary transition-colors">Contact</Link>
                </div>
            </div>

            {isSignedIn ? (
                <Button variant="secondary">Book Appointment</Button>
            ) : (

                <div className="hidden md:flex md:gap-3 items-center">
                    <SignInButton>
                        <Button variant="secondary">Sign In</Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button className="bg-primary text-primary-foreground">Sign Up</Button>
                    </SignUpButton>
                </div>
            )}


            <div className="md:hidden" onClick={() => setIsMenuOpen(prev => !prev)}>
                {isMenuOpen ? <X /> : <Menu />}
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 top-16 bg-background z-50 p-6 md:hidden">
                    <div className="flex flex-col gap-4">
                        <Collapsible>
                            <CollapsibleTrigger className="flex items-center justify-between w-full">
                                <h4 className="text-foreground">Services</h4>
                                <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="flex flex-col gap-3 mt-3 pl-3">
                                <p className="text-sm text-muted-foreground">Vet Appointments</p>
                                <p className="text-sm text-muted-foreground">Vet Clinics Near You</p>
                                <p className="text-sm text-muted-foreground">Pet Shops</p>
                                <p className="text-sm text-muted-foreground">Vaccination Records</p>
                            </CollapsibleContent>
                        </Collapsible>

                        <Link href="/about" className="text-foreground">About</Link>
                        <Link href="/contact" className="text-foreground">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
                        <SignInButton>
                            <Button variant="secondary">Sign In</Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button className="bg-primary text-primary-foreground">Sign Up</Button>
                        </SignUpButton>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
