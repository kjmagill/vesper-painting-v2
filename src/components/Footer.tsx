import Link from "next/link";
import { Facebook, Instagram, Paintbrush } from "lucide-react";

const footerLinks = [
  { label: "Careers", href: "#" },
  { label: "Warranty", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Service Areas", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "XML Sitemap", href: "#" },
  { label: "HTML Sitemap", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-paint-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Contact */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-paint-green p-2 rounded">
                <Paintbrush size={24} className="text-white" />
              </div>
              <div>
                <span className="font-oswald font-bold text-xl text-white uppercase">Paint</span>
                <span className="font-oswald font-bold text-xl text-paint-orange uppercase"> Denver</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-paint-orange">
                1616 FEDERAL BLVD, DENVER, COLORADO
              </p>
              <p>
                <a
                  href="mailto:SERVICE@PAINTDENVER.COM"
                  className="text-paint-orange hover:underline"
                >
                  SERVICE@PAINTDENVER.COM
                </a>
              </p>
              <p className="text-paint-orange">303.800.7575</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                aria-label="Yelp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12.001 2C6.478 2 2 6.477 2 12s4.478 10 10.001 10C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm4.386 14.734l-2.262-1.26c-.188-.104-.393-.16-.601-.16-.518 0-.976.36-1.082.875l-.515 2.51c-.114.56-.532.963-1.053.963-.103 0-.207-.016-.308-.05l-.002-.001c-.63-.215-.836-.868-.683-1.466l.516-2.004c.13-.502-.096-1.02-.547-1.278l-2.188-1.254c-.462-.265-.666-.824-.484-1.332.193-.53.747-.815 1.282-.66l2.24.644c.482.138.99-.088 1.207-.54l1.038-2.156c.214-.445.656-.732 1.131-.732.153 0 .305.028.449.085.63.25.876.95.645 1.547l-.878 2.271c-.19.489-.028 1.044.388 1.338l2.068 1.448c.438.307.607.887.393 1.369-.224.504-.793.758-1.308.543z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm uppercase tracking-wide hover:text-paint-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Brand Promise */}
          <div>
            <h4 className="font-oswald font-semibold uppercase mb-4">
              Brand Promise
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              We are committed to professionalism, integrity, and sustainability
              in the painting industry. Living up to this commitment means that
              we follow through on our promises and treat every customer like
              they are our only customer, minimize waste where possible, and
              contribute to our community through volunteer projects and
              donations.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Paint Denver. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
