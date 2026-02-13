import Link from "next/link";

export default function CompanyOverview() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-0.5 bg-paint-green" />
            <h2 className="font-oswald font-bold text-2xl md:text-3xl text-paint-green uppercase">
              Paint Denver: The Denver Painting Company You Can Trust
            </h2>
            <div className="flex-1 h-0.5 bg-paint-green" />
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Paint Denver is more than just another painting contractor. We are
            the Denver painting company homeowners and businesses rely on for
            consistent quality, hassle-free service, and long-lasting results.
            With more than a decade of experience in residential painting,
            interior painting, exterior painting, and commercial painting,
            we&apos;ve built our reputation on doing things differently.
          </p>

          <Link
            href="#"
            className="inline-block bg-paint-orange hover:bg-paint-orange-dark text-white font-oswald font-semibold uppercase px-8 py-3 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
