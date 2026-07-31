import Link from "next/link";
import { PawPrint } from "lucide-react";
import petCareIcon from "@/public/LandingPage/petCareIcon.png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src={petCareIcon}
                  alt="Pet avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">PetCare</h3>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Trusted care for your furry family, all in one place.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/about" className="hover:text-background transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-background transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Partners</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/register-clinic" className="hover:text-background transition-colors">Register Clinic</Link></li>
              <li><Link href="/register-shop" className="hover:text-background transition-colors">Register Shop</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-background/20">
          <p className="text-sm text-background/60 text-center md:text-left">
            © {new Date().getFullYear()} PetCare. All rights reserved.
          </p>

          <p className="text-sm text-background/60 text-center md:text-right">
            Made in India 🇮🇳 by{" "}
            <span className="font-semibold text-background">Nix</span>
          </p>
        </div>
      </div>
    </footer>
  );
}