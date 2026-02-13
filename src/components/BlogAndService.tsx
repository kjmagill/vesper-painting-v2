import Link from "next/link";

export default function BlogAndService() {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Recent Service Project */}
          <div>
            <h3 className="font-oswald font-bold text-xl text-paint-green uppercase mb-6">
              Recent Service Project
            </h3>
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Service Project - Community Volunteering"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-gray-700 mb-4">
              We partnered with The Lion Project on a mission to collect 600
              pairs of shoes
            </p>
            <Link
              href="#"
              className="inline-block bg-paint-orange hover:bg-paint-orange-dark text-white font-oswald font-semibold uppercase px-6 py-2 text-sm transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* On The Blog */}
          <div>
            <h3 className="font-oswald font-bold text-xl text-paint-green uppercase mb-6">
              On The Blog
            </h3>
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
                alt="Paint Color Selection"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Highlands Ranch Painters Weigh in on Commonly Asked Residential
              Painter Queries
            </p>
            <Link
              href="#"
              className="inline-block bg-paint-orange hover:bg-paint-orange-dark text-white font-oswald font-semibold uppercase px-6 py-2 text-sm transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
