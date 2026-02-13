import Link from "next/link";
import { FastForward, Sparkles, Heart } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-paint-green py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Reliable */}
          <div className="flex items-center gap-3 text-white">
            <div className="border-r border-white/30 pr-8 flex items-center gap-3">
              <FastForward size={28} />
              <span className="font-oswald font-semibold uppercase tracking-wide">
                Reliable
              </span>
            </div>
          </div>

          {/* Quality */}
          <div className="flex items-center gap-3 text-white">
            <div className="border-r border-white/30 pr-8 flex items-center gap-3">
              <Sparkles size={28} />
              <span className="font-oswald font-semibold uppercase tracking-wide">
                Quality
              </span>
            </div>
          </div>

          {/* Committed */}
          <div className="flex items-center gap-3 text-white">
            <div className="border-r border-white/30 pr-8 flex items-center gap-3">
              <Heart size={28} />
              <span className="font-oswald font-semibold uppercase tracking-wide">
                Committed
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="#quote"
            className="bg-white text-paint-green hover:bg-gray-100 font-oswald font-semibold uppercase px-6 py-2.5 transition-colors border-2 border-white"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
