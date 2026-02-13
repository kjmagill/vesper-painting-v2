import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-vesper-cream rounded-lg p-8 md:p-12 relative">
          {/* House Image - Positioned to the left */}
          <div className="hidden md:block absolute -left-20 top-1/2 -translate-y-1/2 w-48 lg:w-64">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80"
              alt="Beautiful painted house"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="md:ml-32 lg:ml-48">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-0.5 bg-vesper-charcoal" />
              <h2 className="font-oswald font-bold text-2xl md:text-3xl text-vesper-charcoal uppercase text-center">
                Your Trusted Residential and Commercial Painting Company
              </h2>
              <div className="flex-1 h-0.5 bg-vesper-charcoal" />
            </div>

            <div className="text-gray-600 space-y-4 text-center">
              <p>
                We are Vesper Painting, your most trusted local painting
                company with over a decade of professional interior and exterior
                painting experience. Our mission is to create a positive impact in
                our community while providing our customers with a smooth,
                hassle-free painting experience.
              </p>
              <p>
                Feel good about choosing us as your painting contractor knowing
                that we have hundreds of 5-star reviews and perform monthly
                service projects that benefit the local communities in
                which you live. From promptly answering your phone calls and
                emails to being a resource for paint color selection to following
                up after the paint dries, we don&apos;t consider a job done until
                you&apos;re completely satisfied.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link
                href="#quote"
                className="inline-block bg-vesper-tan hover:bg-vesper-coral text-vesper-charcoal hover:text-white font-oswald font-semibold uppercase px-8 py-3 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
