import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-8 md:mt-16">
      <div className="pt-8 md:pt-12">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-2 space-y-4 md:col-span-1">
            <div className="flex items-center gap-1">
              <Image
                src="/assets/company-logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain size-6 md:size-10"
              />
              <div className="flex flex-col">
                <span className="font-bold text-base md:text-xl truncate">
                  Company
                </span>
                <span className="text-[6px] md:text-[8px] truncate">
                  Your Trusted Partner
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-background/80 mb-4">
              BAZAR brings everything you need in one place. Now stay connected
              to luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Deals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
              Customer Service
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
              Follow Us
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black border-t border-background/20 mt-6 md:mt-8 py-3 md:py-4 text-center text-xs md:text-sm text-background/60">
          <p>© 2025 BAZAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
