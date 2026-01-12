import React from "react";
import { MapPinCheck } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { MailCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F2E6D8] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-[#3B3B3B]">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-8 after:h-0.5 after:bg-[#D32F2F]">
            Quick Links
          </h2>
          <ul className="space-y-2">
            {["Services", "Products", "Catalogues", "Work Gallery"].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all duration-300 hover:text-[#D32F2F] hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h2 className="text-lg font-semibold mb-4 relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-8 after:h-0.5 after:bg-[#2E7D32]">
            Collections
          </h2>
          <ul className="space-y-2">
            {["Wall Panels", "Ceilings", "Custom Designs"].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all duration-300 hover:text-[#2E7D32] hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4 relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-8 after:h-0.5 after:bg-[#1B5E20]">
            Contact
          </h2>
          <ul className="space-y-2">
            <li className="flex gap-2 opacity-80 hover:opacity-100 transition">
              <MapPinCheck />
              Green Field ,Faridabad, Haryana-121010, India
            </li>
            <li className="flex gap-2 hover:text-[#1B5E20] transition">
              <PhoneCall /> +91 97111 19771
            </li>
            <li className="flex gap-2 hover:text-[#1B5E20] transition">
              <MailCheck /> ah99decor@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10 text-center py-4 text-sm text-[#3B3B3B]">
        © {new Date().getFullYear()} AH Decor — Handcrafted with care
      </div>
    </footer>
  );
};

export default Footer;
